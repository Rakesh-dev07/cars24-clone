using Cars24API.Models.Search;
using Cars24API.Services;
using Microsoft.AspNetCore.Mvc;

namespace Cars24API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SearchController : ControllerBase
    {
        private readonly SearchService _searchService;

        public SearchController(SearchService searchService)
        {
            _searchService = searchService;
        }

        [HttpGet]
        public async Task<IActionResult> Search(
    [FromQuery] string? query,
    [FromQuery] string? brand,
    [FromQuery] string? fuel,
    [FromQuery] string? transmission,
    [FromQuery] string? location,
    [FromQuery] int? year,
    [FromQuery] int? minKm,
    [FromQuery] int? maxKm,
    [FromQuery] decimal? minPrice,
    [FromQuery] decimal? maxPrice,
    [FromQuery] string? sort,
    [FromQuery] int page = 1,
    [FromQuery] int pageSize = 12)
        {
            var request = new SearchRequest
            {
                Query = query,
                Brand = brand,
                Fuel = fuel,
                Transmission = transmission,
                Location = location,
                Year = year,
                MinKm = minKm,
                MaxKm = maxKm,
                MinPrice = minPrice,
                MaxPrice = maxPrice,
                Sort = sort,
                Page = page,
                PageSize = pageSize
            };

            var result = await _searchService.SearchAsync(request);

            return Ok(result);
        }

        [HttpGet("suggestions")]
        public async Task<IActionResult> Suggestions(
             [FromQuery] string query,
             [FromQuery] int limit = 8)
        {
            var suggestions =
                await _searchService.GetSuggestionsAsync(query, limit);

            return Ok(suggestions);
        }
    }
}