using Cars24API.Models;
using Cars24API.Models.Search;
using MongoDB.Driver;
using System.Globalization;
using System.Text.RegularExpressions;
using Cars24API.Services.Search;

namespace Cars24API.Services
{
    public class SearchService
    {
        private readonly IMongoCollection<Car> _cars;
        private readonly PopularityScore _popularityScore;

        public SearchService(IConfiguration config, PopularityScore popularityScore)
        {
            var client = new MongoClient(config.GetConnectionString("Cars24DB"));

            var database = client.GetDatabase(config["MongoDB:DatabaseName"]);

            _cars = database.GetCollection<Car>("Cars");

            _popularityScore = popularityScore;
        }

        public async Task<List<string>> GetSuggestionsAsync(string query, int limit = 8)
        {
            var cars = await _cars.Find(_ => true).ToListAsync();

            if (string.IsNullOrWhiteSpace(query))
                return new List<string>();

            query = query.Trim();

            var suggestions = cars
                .Where(c =>
                    c.Title.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                    c.Specs.Fuel.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                    c.Location.Contains(query, StringComparison.OrdinalIgnoreCase))
                .Select(c => c.Title)
                .Distinct()
                .Take(Math.Clamp(limit, 1, 50))
                .ToList();

            return suggestions;
        }

        public async Task<SearchResult> SearchAsync(SearchRequest request)
        {
            var cars = await _cars.Find(_ => true).ToListAsync();

            // Keyword Search
            if (!string.IsNullOrWhiteSpace(request.Query))
            {
                string query = request.Query.Trim();

                cars = cars.Where(car =>
                    car.Title.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                    car.Location.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                    car.Specs.Fuel.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                    car.Specs.Transmission.Contains(query, StringComparison.OrdinalIgnoreCase) ||
                    car.Features.Any(f => f.Contains(query, StringComparison.OrdinalIgnoreCase)) ||
                    car.Highlights.Any(h => h.Contains(query, StringComparison.OrdinalIgnoreCase))
                ).ToList();
            }

            // Car has no separate brand field, so match the brand against its title.
            if (!string.IsNullOrWhiteSpace(request.Brand))
            {
                var brands = request.Brand
    .Split(',', StringSplitOptions.RemoveEmptyEntries)
    .Select(x => x.Trim());

                cars = cars.Where(car =>
                    brands.Any(b =>
                        car.Title.Contains(
                            b,
                            StringComparison.OrdinalIgnoreCase
                        )
                    )).ToList();
            }

            // Filter by Fuel
            if (!string.IsNullOrWhiteSpace(request.Fuel))
            {
                cars = cars.Where(c =>
                    c.Specs.Fuel.Equals(request.Fuel,
                    StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }

            // Filter by Transmission
            if (!string.IsNullOrWhiteSpace(request.Transmission))
            {
                cars = cars.Where(c =>
                    c.Specs.Transmission.Equals(request.Transmission,
                    StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }

            // Filter by Year
            if (request.Year.HasValue)
            {
                cars = cars.Where(c =>
                    c.Specs.Year == request.Year.Value)
                    .ToList();
            }

            // Filter by Location
            if (!string.IsNullOrWhiteSpace(request.Location))
            {
                cars = cars.Where(c =>
                    c.Location.Contains(request.Location,
                    StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }

            // Filter by City
            if (!string.IsNullOrWhiteSpace(request.City) &&
                !request.City.Equals("India", StringComparison.OrdinalIgnoreCase))
            {
                cars = cars.Where(c =>
                    c.City.Equals(
                        request.City,
                        StringComparison.OrdinalIgnoreCase
                    )
                ).ToList();
            }

            // Filter by MinKm
            if (request.MinKm.HasValue)
            {
                cars = cars.Where(c =>
                    ParseKm(c.Specs.Km) >= request.MinKm.Value)
                    .ToList();
            }

            // Filter by MaxKm
            if (request.MaxKm.HasValue)
            {
                cars = cars.Where(c =>
                    ParseKm(c.Specs.Km) <= request.MaxKm.Value)
                    .ToList();
            }

            // Filter by MinPrice
            if (request.MinPrice.HasValue)
            {
                cars = cars.Where(c =>
                    ParsePrice(c.Price) >= request.MinPrice.Value)
                    .ToList();
            }

            // Filter by MaxPrice
            if (request.MaxPrice.HasValue)
            {
                cars = cars.Where(c =>
                    ParsePrice(c.Price) <= request.MaxPrice.Value)
                    .ToList();
            }

            cars = request.Sort?.ToLowerInvariant() switch
            {
                "price_asc" or "priceasc" =>
                    cars.OrderBy(c => ParsePrice(c.Price)).ToList(),

                "price_desc" or "pricedesc" =>
                    cars.OrderByDescending(c => ParsePrice(c.Price)).ToList(),

                "year_asc" or "yearasc" =>
                    cars.OrderBy(c => c.Specs.Year).ToList(),

                "year_desc" or "yeardesc" =>
                    cars.OrderByDescending(c => c.Specs.Year).ToList(),

                "mileage_asc" =>
                    cars.OrderBy(c => ParseKm(c.Specs.Km)).ToList(),

                "mileage_desc" =>
                    cars.OrderByDescending(c => ParseKm(c.Specs.Km)).ToList(),

                "relevance" or null or "" =>
                    (await Task.WhenAll(
                        cars.Select(async car => new
                        {
                            Car = car,
                            Score =
                                SearchScore.Calculate(car, request)
                                + await _popularityScore.CalculateAsync(car.Id!)
                        })

                    ))
                    .OrderByDescending(x => x.Score)
                    .Select(x => x.Car)
                    .ToList(),

                _ =>
                    cars
                        .OrderByDescending(c => SearchScore.Calculate(c, request))
                        .ToList()
            };

            var totalCount = cars.Count;
            var page = Math.Max(request.Page, 1);
            var pageSize = Math.Clamp(request.PageSize, 1, 100);

            return new SearchResult
            {
                Cars = cars.Skip((page - 1) * pageSize).Take(pageSize).ToList(),
                TotalCount = totalCount,
                Page = page,
                PageSize = pageSize
            };
        }

        private static int ParseKm(string? value)
        {
            var match = Regex.Match(value ?? string.Empty, @"[\d,]+(?:\.\d+)?");
            return match.Success && int.TryParse(
                match.Value.Replace(",", string.Empty),
                NumberStyles.Integer,
                CultureInfo.InvariantCulture,
                out var kilometers)
                ? kilometers
                : 0;
        }

        private static decimal ParsePrice(string? value)
        {
            var match = Regex.Match(value ?? string.Empty, @"[\d,]+(?:\.\d+)?");
            return match.Success && decimal.TryParse(
                match.Value.Replace(",", string.Empty),
                NumberStyles.Number,
                CultureInfo.InvariantCulture,
                out var price)
                ? price * (value?.Contains("lakh", StringComparison.OrdinalIgnoreCase) == true ? 100000 : 1)
                : 0m;
        }
    }

}