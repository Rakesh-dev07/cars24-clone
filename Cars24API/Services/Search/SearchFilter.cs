using Cars24API.Models;

namespace Cars24API.Services.Search
{
    public static class SearchFilter
    {
        public static int ParseKm(string km)
        {
            if (string.IsNullOrWhiteSpace(km))
                return 0;

            km = km.Replace(",", "")
                   .Replace("km", "")
                   .Replace("KM", "")
                   .Trim();

            int.TryParse(km, out int result);

            return result;
        }

        public static decimal ParsePrice(string price)
        {
            if (string.IsNullOrWhiteSpace(price))
                return 0;

            price = price.Replace("₹", "")
                         .Replace(",", "")
                         .Replace("Lakh", "")
                         .Replace("Lakhs", "")
                         .Trim();

            decimal.TryParse(price, out decimal value);

            return value;
        }
    }
}