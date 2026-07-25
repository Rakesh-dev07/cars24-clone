"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { cities } from "@/data/cities";
import { useCity } from "@/context/CityContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

const CityModal = ({ open, onClose }: Props) => {
  const { selectedCity, setSelectedCity } = useCity();

  const [search, setSearch] = useState("");

  const filteredCities = useMemo(() => {
    return cities.filter((city) =>
      city.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-4xl rounded-3xl bg-white shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b px-8 py-6">

           <h2 className="text-3xl font-bold text-gray-900">
        Select your city
    </h2>

    <p className="mt-2 text-gray-500">
        Choose your preferred city to see nearby cars.
    </p>

          <button
            onClick={onClose}
            className="rounded-full p-2 transition hover:bg-gray-100"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>

        </div>

        {/* Search */}

        <div className="px-8 py-6">

          <div className="flex items-center rounded-xl border border-gray-300 bg-white px-4 shadow-sm">
    <Search className="w-5 h-5 text-gray-400" />

    <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search city..."
        className="w-full bg-transparent p-4 text-gray-900 placeholder:text-gray-400 outline-none"
    />
</div>

        </div>

        {/* Cities */}

        <div className="grid grid-cols-2 gap-5 px-8 pb-8">

          {filteredCities.map((city) => {

            const active = city.name === selectedCity;

            return (
              <button
    key={city.id}
    onClick={() => {
        setSelectedCity(city.name);
        onClose();
    }}
    className={`rounded-xl border p-5 text-left transition-all duration-200 ${
        selectedCity === city.name
            ? "border-blue-600 bg-blue-50 shadow-sm"
            : "border-gray-200 bg-white hover:border-blue-500 hover:shadow-md"
    }`}
>
    <h3 className="text-lg font-semibold text-gray-800">
        {city.name}
    </h3>
</button>
            );
          })}

        </div>

      </div>

    </div>
  );
};

export default CityModal;