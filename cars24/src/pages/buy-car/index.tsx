"use client";

import { Slider } from "@/components/ui/slider";
import WishlistButton from "@/components/WishlistButton";
import SearchBar from "@/components/Search/SearchBar";
import { searchCars } from "@/lib/Searchapi";
import { useCity } from "@/context/CityContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Car {
  id: string;
  title: string;
  images: string[];
  price: string;
  emi: string;
  location: string;
  specs: {
    km: string;
    fuel: string;
    transmission: string;
    owner: string;
    year: number;
  };
}

const MAX_PRICE = 2_000_000;

const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

function LoaderCard() {
  return (
    <div className="bg-white rounded-lg shadow-md animate-pulse overflow-hidden">
      <div className="h-48 bg-gray-200"></div>

      <div className="p-4 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
}

export default function BuyCarsPage() {
  const router = useRouter();

  const { selectedCity } = useCity();

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [sortBy, setSortBy] = useState("");

  const query =
    typeof router.query.query === "string" ? router.query.query : "";

  const loadCars = async (search = "") => {
    try {
      setLoading(true);

      const result = await searchCars({
        query: search,

        brand: selectedBrands.length > 0 ? selectedBrands.join(",") : undefined,

        fuel: selectedFuel || undefined,

        transmission: selectedTransmission || undefined,

        city: selectedCity,

        year: selectedYear ? Number(selectedYear) : undefined,

        minPrice: priceRange[0],

        maxPrice: priceRange[1],

        sort: sortBy || undefined,
      });
      setCars(Array.isArray(result?.cars) ? result.cars : []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!router.isReady) return;

    loadCars(query);
  }, [
    router.isReady,
    query,
    
    selectedCity,

    priceRange,

    selectedBrands,

    selectedFuel,

    selectedTransmission,

    selectedYear,

    sortBy,
  ]);

  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Filters */}

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="font-semibold mb-4">Filters</h3>

              <label className="text-sm font-medium">Price Range</label>

              <Slider
                value={priceRange}
                max={MAX_PRICE}
                step={10000}
                onValueChange={setPriceRange}
                className="mt-4"
              />

              <div className="flex justify-between text-sm mt-3">
                <span>{formatPrice(priceRange[0])}</span>

                <span>{formatPrice(priceRange[1])}</span>
              </div>

              <div className="mt-6">
                <label className="font-medium text-sm">Brand</label>

                <div className="space-y-2 mt-2">
                  {["Maruti", "Hyundai", "Honda", "Tata"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setSelectedBrands([...selectedBrands, brand]);
                          else
                            setSelectedBrands(
                              selectedBrands.filter((b) => b !== brand),
                            );
                        }}
                      />

                      {brand}
                    </label>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <label className="font-medium text-sm">Fuel</label>

                <select
                  value={selectedFuel}
                  onChange={(e) => setSelectedFuel(e.target.value)}
                  className="w-full border rounded mt-2 p-2"
                >
                  <option value="">All</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>CNG</option>
                  <option>Electric</option>
                </select>
              </div>
              <div className="mt-6">
                <label className="font-medium text-sm">Transmission</label>

                <select
                  value={selectedTransmission}
                  onChange={(e) => setSelectedTransmission(e.target.value)}
                  className="w-full border rounded mt-2 p-2"
                >
                  <option value="">All</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>
              <div className="mt-6">
                <label className="font-medium text-sm">Year</label>

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full border rounded mt-2 p-2"
                >
                  <option value="">All</option>

                  {[2025, 2024, 2023, 2022, 2021].map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Cars */}

          <div className="md:col-span-3">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold">Used Cars</h1>

              <div className="flex gap-4">
                <SearchBar
                  placeholder="Search cars..."
                  onSearch={(value) => loadCars(value)}
                />

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-4 py-2"
                >
                  <option value="">Relevance</option>
                  <option value="price_asc">Price: Low to High</option>
                  <option value="price_desc">Price: High to Low</option>
                  <option value="year_desc">Newest First</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loading
                ? Array.from({ length: 6 }).map((_, i) => (
                    <LoaderCard key={i} />
                  ))
                : cars.map((car) => (
                    <Link
                      key={car.id}
                      href={`/buy-car/${car.id}`}
                      className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
                    >
                      <div className="relative h-56">
                        <img
                          src={car.images?.[0] || "/file.svg"}
                          alt={car.title}
                          className="w-full h-full object-cover"
                        />

                        <WishlistButton carId={car.id} />
                      </div>

                      <div className="p-4">
                        <h2 className="font-semibold text-xl">{car.title}</h2>

                        <div className="text-gray-600 mt-3">
                          {car.specs.km} km
                          {" • "}
                          {car.specs.transmission}
                          {" • "}
                          {car.specs.fuel}
                          {" • "}
                          {car.specs.owner}
                        </div>

                        <div className="flex justify-between mt-4">
                          <div>
                            <div className="text-sm text-gray-500">EMI</div>

                            <div className="font-semibold">{car.emi}</div>
                          </div>

                          <div className="text-right">
                            <div className="text-sm text-gray-500">Price</div>

                            <div className="font-semibold">{car.price}</div>
                          </div>
                        </div>

                        <div className="mt-3 text-gray-500">{car.location}</div>
                      </div>
                    </Link>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
