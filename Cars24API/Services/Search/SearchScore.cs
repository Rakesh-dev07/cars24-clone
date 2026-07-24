using Cars24API.Models;
using Cars24API.Models.Search;
using System.Text.RegularExpressions;

namespace Cars24API.Services.Search;

public static class SearchScore
{
    public static int Calculate(Car car, SearchRequest request)
    {
        int score = 0;

        // --------------------
        // Keyword Matching
        // --------------------

        if (!string.IsNullOrWhiteSpace(request.Query))
        {
            string query = request.Query.ToLower();
            string title = car.Title.ToLower();

            if (title == query)
                score += 100;

            else if (title.StartsWith(query))
                score += 80;

            else if (title.Contains(query))
                score += 60;
        }

        // --------------------
        // Brand
        // --------------------

        if (!string.IsNullOrWhiteSpace(request.Brand))
        {
            if (car.Title.Contains(request.Brand,
                StringComparison.OrdinalIgnoreCase))
            {
                score += 20;
            }
        }

        // --------------------
        // Fuel
        // --------------------

        if (!string.IsNullOrWhiteSpace(request.Fuel))
        {
            if (car.Specs.Fuel.Equals(
                request.Fuel,
                StringComparison.OrdinalIgnoreCase))
            {
                score += 15;
            }
        }

        // --------------------
        // Transmission
        // --------------------

        if (!string.IsNullOrWhiteSpace(request.Transmission))
        {
            if (car.Specs.Transmission.Equals(
                request.Transmission,
                StringComparison.OrdinalIgnoreCase))
            {
                score += 15;
            }
        }

        // --------------------
        // Newer Cars
        // --------------------

        score += Math.Max(0, car.Specs.Year - 2018);

        // --------------------
        // Mileage
        // --------------------

        string km =
            Regex.Replace(car.Specs.Km, "[^0-9]", "");

        if (int.TryParse(km, out int mileage))
        {
            if (mileage < 10000)
                score += 15;

            else if (mileage < 30000)
                score += 10;

            else if (mileage < 60000)
                score += 5;
        }

        return score;
    }
}