"use client";

import { useState } from "react";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Quote,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Shreya",
    message:
      "Car was well serviced by Cars24. The finance and support teams were extremely helpful throughout the entire buying process.",
    rating: 5,
    date: "15 Mar 2025",
    avatar: "https://i.pravatar.cc/80?img=26",
  },
  {
    id: 2,
    name: "Sushant Kumar",
    message:
      "Great place to buy used cars. Huge inventory, transparent pricing and a smooth documentation process.",
    rating: 4,
    date: "10 Mar 2025",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: 3,
    name: "Victoria",
    message:
      "Excellent delivery experience. Inspection report matched the vehicle perfectly and the payment process was seamless.",
    rating: 5,
    date: "5 Mar 2025",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
];

export default function CustomerReviews() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current + 1) % reviews.length);
  };

  const prev = () => {
    setCurrent((current - 1 + reviews.length) % reviews.length);
  };

  const review = reviews[current];

  return (
    <section className="py-16">
      <div className="bg-gray-50 rounded-3xl p-6 md:p-10">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            What motivates us
          </h2>

          <div className="mt-4 flex items-center justify-center gap-4">

            <div className="text-5xl font-bold text-blue-600">
              4.5+
            </div>

            <div className="text-left">

              <p className="font-semibold">
                Average
              </p>

              <p className="text-gray-500">
                Customer Rating
              </p>

            </div>

          </div>

          <div className="flex justify-center gap-1 mt-3">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-5 w-5 ${
                  star <= 4
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-yellow-400"
                }`}
              />
            ))}

          </div>

        </div>

        {/* Card */}

        <div className="max-w-3xl mx-auto mt-10">

          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 transition-all duration-300">

            <Quote className="text-blue-600 h-10 w-10 mb-6" />

            <p className="text-gray-700 text-lg leading-8">
              "{review.message}"
            </p>

            <div className="flex items-center mt-8">

              <img
                src={review.avatar}
                alt={review.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div className="ml-4">

                <h3 className="font-semibold text-lg">
                  {review.name}
                </h3>

                <div className="flex mt-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}

                </div>

              </div>

              <span className="ml-auto text-sm text-gray-500">
                {review.date}
              </span>

            </div>

          </div>

        </div>

        {/* Controls */}

        <div className="flex justify-center items-center gap-4 mt-8">

          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border hover:bg-gray-100 transition"
          >
            <ChevronLeft className="mx-auto h-5 w-5" />
          </button>

          <div className="flex gap-2">

            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all ${
                  current === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 w-2"
                }`}
              />
            ))}

          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border hover:bg-gray-100 transition"
          >
            <ChevronRight className="mx-auto h-5 w-5" />
          </button>

        </div>

      </div>
    </section>
  );
}