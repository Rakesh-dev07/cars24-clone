using System.Globalization;

namespace Cars24API.Services;

public class DynamicPricingService
{
    public string CalculateRecommendedPrice(
        string originalPrice,
        string city,
        string title)
    {
        // Convert "₹7.80 Lakh" -> 780000
        double basePrice = ParsePrice(originalPrice);

        double multiplier = 1.0;

        // ----------------------------
        // City Demand
        // ----------------------------

        switch (city.ToLower())
        {
            case "mumbai":
                multiplier += 0.05;
                break;

            case "delhi":
                multiplier += 0.03;
                break;

            case "hyderabad":
                multiplier += 0.04;
                break;

            case "pune":
                multiplier += 0.02;
                break;
        }

        // ----------------------------
        // Seasonal Demand
        // June - September
        // ----------------------------

        int month = DateTime.Now.Month;

        bool monsoon =
            month >= 6 &&
            month <= 9;

        if (monsoon)
        {
            if (title.Contains("SUV",
                StringComparison.OrdinalIgnoreCase))
            {
                multiplier += 0.05;
            }
        }

        // ----------------------------
        // Vehicle Type
        // ----------------------------

        if (title.Contains("SUV",
            StringComparison.OrdinalIgnoreCase))
        {
            multiplier += 0.03;
        }
        else if (title.Contains("Sedan",
            StringComparison.OrdinalIgnoreCase))
        {
            multiplier += 0.02;
        }
        else if (title.Contains("Hatchback",
            StringComparison.OrdinalIgnoreCase))
        {
            multiplier -= 0.02;
        }

        double finalPrice = basePrice * multiplier;

        return FormatPrice(finalPrice);
    }

    // ----------------------------

    private double ParsePrice(string price)
    {
        string value = price
            .Replace("₹", "")
            .Replace(",", "")
            .Replace("Lakh", "")
            .Trim();

        if (double.TryParse(
            value,
            NumberStyles.Any,
            CultureInfo.InvariantCulture,
            out double lakh))
        {
            return lakh * 100000;
        }

        return 0;
    }

    // ----------------------------

    private string FormatPrice(double price)
    {
        double lakh = price / 100000;

        return $"₹{lakh:F2} Lakh";
    }
}