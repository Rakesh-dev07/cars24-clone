"use client";

import React from "react";
import SearchBar from "@/components/Search/SearchBar";

const popularSearches = [
  "Maruti",
  "Hyundai",
  "Tata",
  "SUV",
  "Sedan",
  "Automatic",
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg"
          alt="Cars24 Hero"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[480px] sm:min-h-[560px] lg:min-h-[650px] flex flex-col justify-center px-5 sm:px-8 lg:px-10 py-12">

        {/* Heading */}

        <div className="max-w-3xl">

          <h1 className="text-white font-bold leading-tight text-3xl sm:text-5xl lg:text-6xl">

            Welcome to{" "}

            <span className="inline-flex items-center">

              <span className="bg-blue-600 text-white rounded-lg px-3 py-1 text-xl sm:text-2xl lg:text-3xl">

                CARS

              </span>

              <span className="text-orange-500 ml-1 text-xl sm:text-2xl lg:text-3xl">

                24

              </span>

            </span>

          </h1>

          <h2 className="mt-4 text-white font-bold leading-tight text-4xl sm:text-6xl lg:text-7xl">

            Better drives,

          </h2>

          <h2 className="text-white font-bold leading-tight text-4xl sm:text-6xl lg:text-7xl">

            Better lives.

          </h2>

          <p className="mt-5 max-w-2xl text-gray-200 text-sm sm:text-lg leading-relaxed">

            Buy certified used cars with smart search, instant finance,
            transparent pricing, home delivery and hassle-free ownership.

          </p>

        </div>

        {/* Search */}

        <div className="mt-10 w-full max-w-5xl">

          <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-2xl p-4 sm:p-6">

            <SearchBar placeholder="Search by brand, model, fuel type or city..." />

            {/* Popular Searches */}

            <div className="mt-5">

              <p className="text-sm text-gray-500 mb-3">

                Popular Searches

              </p>

              <div className="flex flex-wrap gap-3">

                {popularSearches.map((item) => (

                  <button
                    key={item}
                    className="rounded-full border border-gray-300 px-4 py-2 text-gray-600 text-sm font-medium hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* Trust Badges */}

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl">

          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">

            <h3 className="text-2xl font-bold text-white">

              10K+

            </h3>

            <p className="text-gray-200 text-sm">

              Certified Cars

            </p>

          </div>

          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">

            <h3 className="text-2xl font-bold text-white">

              150+

            </h3>

            <p className="text-gray-200 text-sm">

              Cities Covered

            </p>

          </div>

          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">

            <h3 className="text-2xl font-bold text-white">

              4.8★

            </h3>

            <p className="text-gray-200 text-sm">

              Customer Rating

            </p>

          </div>

          <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">

            <h3 className="text-2xl font-bold text-white">

              100%

            </h3>

            <p className="text-gray-200 text-sm">

              Transparent Pricing

            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;