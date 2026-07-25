namespace Cars24API.Models.Search
{
    public class SearchRequest
    {
        public string? Query { get; set; }

        public string? Brand { get; set; }

        public string? Fuel { get; set; }

        public string? Transmission { get; set; }

        public string? Location { get; set; }
        
        public string? City { get; set; }

        public bool? IsNew { get; set; }

        public int? Year { get; set; }

        public int? MinKm { get; set; }

        public int? MaxKm { get; set; }

        public decimal? MinPrice { get; set; }

        public decimal? MaxPrice { get; set; }

        public string? Sort { get; set; }

        public int Page { get; set; } = 1;

        public int PageSize { get; set; } = 12;
    }
}