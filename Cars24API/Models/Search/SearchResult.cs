using Cars24API.Models;

namespace Cars24API.Models.Search
{
    public class SearchResult
    {
        public IEnumerable<Car> Cars { get; set; } = new List<Car>();

        public int TotalCount { get; set; }

        public int Page { get; set; }

        public int PageSize { get; set; }
    }
}