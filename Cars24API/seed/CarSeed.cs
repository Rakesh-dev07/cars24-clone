using Cars24API.Models;

namespace Cars24API.Seed;

public static class CarSeed
{
    public static List<Car> GetCars()
    {
        return new List<Car>
        {
            new Car
            {
                Title = "2023 Maruti Suzuki FRONX Delta Plus AGS",
                Price = "₹7.80 Lakh",
                Emi = "₹15,245/month",
                Location = "Rohini, Delhi",
                Images = new List<string>
                {
                    "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                },
                Specs = new Specs
                {
                    Year = 2023,
                    Km = "10,048 km",
                    Fuel = "Petrol",
                    Transmission = "Automatic",
                    Owner = "1st Owner",
                    Insurance = "Comprehensive"
                },
                Features = new()
                {
                    "Android Auto",
                    "Apple CarPlay",
                    "Rear Camera",
                    "Push Button Start",
                    "Touchscreen"
                },
                Highlights = new()
                {
                    "Single Owner",
                    "Service History Available",
                    "No Accidental Record"
                }
            },

            new Car
            {
                Title = "2022 Hyundai Creta SX IVT",
                Price = "₹11.20 Lakh",
                Emi = "₹18,999/month",
                Location = "Gurugram",
                Images = new List<string>
                {
                    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
                },
                Specs = new Specs
                {
                    Year = 2022,
                    Km = "20,500 km",
                    Fuel = "Petrol",
                    Transmission = "Automatic",
                    Owner = "1st Owner",
                    Insurance = "Comprehensive"
                },
                Features = new()
                {
                    "Sunroof",
                    "Cruise Control",
                    "Wireless Charger",
                    "Ventilated Seats"
                },
                Highlights = new()
                {
                    "Top Variant",
                    "Company Maintained"
                }
            },

            new Car
            {
                Title = "2021 Tata Nexon XZ+",
                Price = "₹8.40 Lakh",
                Emi = "₹14,200/month",
                Location = "Noida",
                Images = new List<string>
                {
                    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d"
                },
                Specs = new Specs
                {
                    Year = 2021,
                    Km = "18,300 km",
                    Fuel = "Petrol",
                    Transmission = "Manual",
                    Owner = "1st Owner",
                    Insurance = "Comprehensive"
                },
                Features = new()
                {
                    "ABS",
                    "Rear Camera",
                    "Touchscreen",
                    "Dual Airbags"
                },
                Highlights = new()
                {
                    "Low KM Driven",
                    "Excellent Condition"
                }
            }
        };
    }
}