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
    Title = "2022 Honda City ZX CVT",
    Price = "₹10.45 Lakh",
    Emi = "₹18,100/month",
    City = "Mumbai",
    Location = "Andheri, Mumbai",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    },
    Specs = new Specs
    {
        Year = 2022,
        Km = "18,500 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "1st Owner",
        Insurance = "Comprehensive"
    },
    Features = new()
    {
        "Sunroof",
        "Android Auto",
        "Apple CarPlay",
        "Rear Camera"
    },
    Highlights = new()
    {
        "Single Owner",
        "Service History Available",
        "Excellent Condition"
    }
},

new Car
{
    Title = "2021 Kia Sonet HTX Diesel",
    Price = "₹9.90 Lakh",
    Emi = "₹16,950/month",
    City = "Bangalore",
    Location = "Whitefield, Bangalore",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
    },
    Specs = new Specs
    {
        Year = 2021,
        Km = "25,800 km",
        Fuel = "Diesel",
        Transmission = "Manual",
        Owner = "1st Owner",
        Insurance = "Comprehensive"
    },
    Features = new()
    {
        "Cruise Control",
        "Touchscreen",
        "Rear Camera",
        "Push Button Start"
    },
    Highlights = new()
    {
        "Low Maintenance",
        "Company Serviced"
    }
},

new Car
{
    Title = "2023 Toyota Glanza G AMT",
    Price = "₹8.95 Lakh",
    Emi = "₹15,500/month",
    City = "Hyderabad",
    Location = "Madhapur, Hyderabad",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
    },
    Specs = new Specs
    {
        Year = 2023,
        Km = "9,700 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "1st Owner",
        Insurance = "Comprehensive"
    },
    Features = new()
    {
        "LED Headlamps",
        "Android Auto",
        "Apple CarPlay",
        "Automatic Climate Control"
    },
    Highlights = new()
    {
        "Like New",
        "Low KM Driven"
    }
},

new Car
{
    Title = "2022 Mahindra XUV300 W8",
    Price = "₹10.80 Lakh",
    Emi = "₹18,750/month",
    City = "Pune",
    Location = "Hinjewadi, Pune",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
    },
    Specs = new Specs
    {
        Year = 2022,
        Km = "14,900 km",
        Fuel = "Diesel",
        Transmission = "Manual",
        Owner = "1st Owner",
        Insurance = "Comprehensive"
    },
    Features = new()
    {
        "Cruise Control",
        "Touchscreen",
        "Rear Parking Camera",
        "Push Button Start"
    },
    Highlights = new()
    {
        "Single Owner",
        "Excellent Condition"
    }
},

new Car
{
    Title = "2021 MG Hector Sharp CVT",
    Price = "₹14.60 Lakh",
    Emi = "₹24,250/month",
    City = "Chennai",
    Location = "Velachery, Chennai",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg"
    },
    Specs = new Specs
    {
        Year = 2021,
        Km = "28,000 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "1st Owner",
        Insurance = "Comprehensive"
    },
    Features = new()
    {
        "Panoramic Sunroof",
        "360 Camera",
        "Android Auto",
        "Connected Car Tech"
    },
    Highlights = new()
    {
        "Top Variant",
        "Well Maintained"
    }
},
new Car
{
    Title = "2021 Skoda Slavia Style 1.5 TSI DSG",
    Price = "₹13.80 Lakh",
    Emi = "₹23,400/month",
    City = "Ahmedabad",
    Location = "Satellite, Ahmedabad",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
    },
    Specs = new Specs
    {
        Year = 2021,
        Km = "22,300 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "2nd Owner",
        Insurance = "Comprehensive"
    },
    Features = new()
    {
        "Ventilated Seats",
        "Cruise Control",
        "Digital Cluster",
        "Wireless Android Auto"
    },
    Highlights = new()
    {
        "Luxury Sedan",
        "Highway Driven",
        "Service Records Available"
    }
},

new Car
{
    Title = "2022 Tata Punch Creative AMT",
    Price = "₹7.95 Lakh",
    Emi = "₹13,700/month",
    City = "Kolkata",
    Location = "Salt Lake, Kolkata",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/193991/pexels-photo-193991.jpeg"
    },
    Specs = new Specs
    {
        Year = 2022,
        Km = "13,900 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "1st Owner",
        Insurance = "Zero Dep"
    },
    Features = new()
    {
        "Rear Camera",
        "Auto Climate Control",
        "Push Button Start",
        "Cruise Control"
    },
    Highlights = new()
    {
        "Compact SUV",
        "Excellent Mileage"
    }
},

new Car
{
    Title = "2023 Mahindra Thar LX Hard Top AT",
    Price = "₹16.90 Lakh",
    Emi = "₹28,900/month",
    City = "Goa",
    Location = "Panaji, Goa",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg"
    },
    Specs = new Specs
    {
        Year = 2023,
        Km = "8,600 km",
        Fuel = "Diesel",
        Transmission = "Automatic",
        Owner = "1st Owner",
        Insurance = "Comprehensive"
    },
    Features = new()
    {
        "4x4",
        "Touchscreen",
        "Cruise Control",
        "LED DRLs"
    },
    Highlights = new()
    {
        "Off-road Ready",
        "Top Variant"
    }
},

new Car
{
    Title = "2022 BYD Atto 3 Electric",
    Price = "₹24.50 Lakh",
    Emi = "₹40,800/month",
    City = "Bangalore",
    Location = "Electronic City, Bangalore",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg"
    },
    Specs = new Specs
    {
        Year = 2022,
        Km = "15,100 km",
        Fuel = "Electric",
        Transmission = "Automatic",
        Owner = "1st Owner",
        Insurance = "Battery Warranty"
    },
    Features = new()
    {
        "ADAS",
        "360 Camera",
        "Wireless Charger",
        "Panoramic Sunroof"
    },
    Highlights = new()
    {
        "Premium EV",
        "Battery Health 98%"
    }
},

new Car
{
    Title = "2020 Maruti Suzuki Ignis Alpha",
    Price = "₹5.90 Lakh",
    Emi = "₹10,200/month",
    City = "Jaipur",
    Location = "Vaishali Nagar, Jaipur",
    IsNew = false,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    },
    Specs = new Specs
    {
        Year = 2020,
        Km = "34,200 km",
        Fuel = "Petrol",
        Transmission = "Manual",
        Owner = "2nd Owner",
        Insurance = "Third Party"
    },
    Features = new()
    {
        "Touchscreen",
        "Apple CarPlay",
        "Rear Parking Sensors",
        "Steering Controls"
    },
    Highlights = new()
    {
        "City Friendly",
        "Affordable Maintenance"
    }
},
new Car
{
    Title = "2026 Hyundai Creta SX(O) Turbo",
    Price = "₹19.90 Lakh",
    Emi = "₹33,850/month",
    City = "Mumbai",
    Location = "Andheri, Mumbai",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "ADAS Level 2",
        "360 Camera",
        "Panoramic Sunroof",
        "Wireless Android Auto"
    },
    Highlights = new()
    {
        "Brand New",
        "5 Year Warranty"
    }
},
new Car
{
    Title = "2026 Tata Curvv EV Empower+",
    Price = "₹22.40 Lakh",
    Emi = "₹38,100/month",
    City = "Delhi",
    Location = "Dwarka, Delhi",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Electric",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "Fast Charging",
        "ADAS",
        "360 Camera",
        "Wireless Charger"
    },
    Highlights = new()
    {
        "550 km Range",
        "8 Year Battery Warranty"
    }
},
new Car
{
    Title = "2026 Mahindra XUV700 AX7 Luxury",
    Price = "₹27.80 Lakh",
    Emi = "₹46,500/month",
    City = "Bangalore",
    Location = "Whitefield, Bangalore",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Diesel",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "ADAS",
        "Sony 3D Audio",
        "Panoramic Sunroof",
        "Ventilated Seats"
    },
    Highlights = new()
    {
        "Luxury SUV",
        "Top Variant"
    }
},
new Car
{
    Title = "2026 Honda Elevate ZX CVT",
    Price = "₹17.20 Lakh",
    Emi = "₹29,800/month",
    City = "Hyderabad",
    Location = "Gachibowli, Hyderabad",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "Lane Keep Assist",
        "Adaptive Cruise Control",
        "Wireless Charging",
        "LED Headlamps"
    },
    Highlights = new()
    {
        "Honda Sensing",
        "5 Year Warranty"
    }
},
new Car
{
    Title = "2026 Kia Seltos GTX+",
    Price = "₹21.90 Lakh",
    Emi = "₹37,200/month",
    City = "Pune",
    Location = "Baner, Pune",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "Dual Screen Display",
        "360 Camera",
        "BOSE Sound System",
        "Ventilated Seats"
    },
    Highlights = new()
    {
        "Latest Model",
        "Premium Features"
    }
},
new Car
{
    Title = "2026 Toyota Urban Cruiser Hyryder V Hybrid",
    Price = "₹20.40 Lakh",
    Emi = "₹34,700/month",
    City = "Chennai",
    Location = "Anna Nagar, Chennai",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Hybrid",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "Hybrid Engine",
        "360 Camera",
        "Ventilated Seats",
        "Wireless Charging"
    },
    Highlights = new()
    {
        "27+ km/l Mileage",
        "5 Year Warranty"
    }
},

new Car
{
    Title = "2026 Maruti Suzuki Grand Vitara Alpha AT",
    Price = "₹18.75 Lakh",
    Emi = "₹31,600/month",
    City = "Ahmedabad",
    Location = "Navrangpura, Ahmedabad",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "Heads-Up Display",
        "360 Camera",
        "Wireless Android Auto",
        "Panoramic Sunroof"
    },
    Highlights = new()
    {
        "Latest Model",
        "Premium SUV"
    }
},

new Car
{
    Title = "2026 Volkswagen Virtus GT DSG",
    Price = "₹19.30 Lakh",
    Emi = "₹32,950/month",
    City = "Kolkata",
    Location = "New Town, Kolkata",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "Digital Cockpit",
        "Ventilated Seats",
        "Wireless Charger",
        "Cruise Control"
    },
    Highlights = new()
    {
        "Performance Sedan",
        "Turbo Petrol"
    }
},

new Car
{
    Title = "2026 MG Windsor EV Essence",
    Price = "₹24.60 Lakh",
    Emi = "₹41,900/month",
    City = "Goa",
    Location = "Panaji, Goa",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Electric",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "Fast Charging",
        "ADAS",
        "360 Camera",
        "Panoramic Glass Roof"
    },
    Highlights = new()
    {
        "600 km Range",
        "8 Year Battery Warranty"
    }
},

new Car
{
    Title = "2026 Skoda Kylaq Prestige AT",
    Price = "₹16.95 Lakh",
    Emi = "₹28,850/month",
    City = "Jaipur",
    Location = "Malviya Nagar, Jaipur",
    IsNew = true,
    Images = new List<string>
    {
        "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg"
    },
    Specs = new Specs
    {
        Year = 2026,
        Km = "0 km",
        Fuel = "Petrol",
        Transmission = "Automatic",
        Owner = "Brand New",
        Insurance = "Manufacturer Warranty"
    },
    Features = new()
    {
        "LED Matrix Headlamps",
        "Wireless Apple CarPlay",
        "360 Camera",
        "Digital Instrument Cluster"
    },
    Highlights = new()
    {
        "New Launch",
        "Premium Compact SUV"
    }
},
        };
    }
}