import Link from "next/link";
import { Car } from "lucide-react";

const brands = [
  {
    name: "Maruti",
    logo: "https://crystalpng.com/wp-content/uploads/2025/08/Maruti-Suzuki-Logo-png-1024x1024.png",
    cars: "120+ Cars",
  },
  {
    name: "Hyundai",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Hyundai_Motor_Company_logo.svg",
    cars: "95+ Cars",
  },
  {
    name: "Honda",
    logo: "https://www.honda.com/-/media/Honda-Homepage/Images/Logos/svg/Honda_Power_Of_Dreams_22.svg",
    cars: "60+ Cars",
  },
  {
    name: "Tata",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
    cars: "82+ Cars",
  },
  {
    name: "Mahindra",
    logo: "https://images.seeklogo.com/logo-png/61/1/mahindra-auto-logo-png_seeklogo-613492.png",
    cars: "75+ Cars",
  },
  {
    name: "BMW",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    cars: "32+ Cars",
  },
  {
    name: "Mercedes",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    cars: "28+ Cars",
  },
  {
    name: "Toyota",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg",
    cars: "65+ Cars",
  },
];

export default function CarBrands() {
  return (
    <section className="py-16">

      {/* Heading */}

      <div className="text-center mb-12">

        <div className="inline-flex items-center gap-3 rounded-full bg-orange-50 px-5 py-2 border border-orange-100">

          <Car className="w-5 h-5 text-orange-500" />

          <span className="text-orange-600 font-medium">
            Popular Brands
          </span>

        </div>

        <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
          Browse Cars by Brand
        </h2>

        <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
          Discover certified used cars from India's most trusted automobile
          brands.
        </p>

      </div>

      {/* Brand Grid */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-5">

        {brands.map((brand) => (

          <Link
            key={brand.name}
            href={`/buy-car?brand=${brand.name}`}
            className="group"
          >

            <div className="rounded-2xl border border-gray-200 bg-white p-6 flex flex-col items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-500">

              <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center">

                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                />

              </div>

              <h3 className="mt-5 font-semibold text-gray-900">
                {brand.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {brand.cars}
              </p>

            </div>

          </Link>

        ))}

      </div>

      {/* CTA */}

      <div className="mt-12 text-center">

        <Link
          href="/buy-car"
          className="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 text-white font-semibold transition hover:bg-blue-700"
        >
          View All Brands
        </Link>

      </div>

    </section>
  );
}