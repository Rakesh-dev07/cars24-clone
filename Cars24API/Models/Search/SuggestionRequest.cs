namespace Cars24API.Models.Search
{
    public class SuggestionRequest
    {
        public string Query { get; set; } = string.Empty;

        public int Limit { get; set; } = 8;
    }
}