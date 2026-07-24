import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import {
  getWishlist,
  removeFromWishlist,
} from "@/lib/Wishlistapi";

type Car = {
  id: string;
  title: string;
  images: string[];
  price: string;
  emi: string;
  location: string;

  specs: {
    year: number;
    km: string;
    fuel: string;
    transmission: string;
    owner: string;
    insurance: string;
  };

  features: string[];
  highlights: string[];
};

export default function WishlistPage() {
  const { user } = useAuth();

  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const loadWishlist = async () => {
    if (!user) return;

    try {
      const data = await getWishlist(user.id);
      setCars(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadWishlist();
  }, [user]);

  const handleRemove = async (carId: string) => {
    if (!user) return;

    try {
      await removeFromWishlist(user.id, carId);

      setCars((prev) => prev.filter((c) => c.id !== carId));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4">

          <h1 className="text-black text-4xl font-bold mb-8">
            My Wishlist
          </h1>

          {loading && (
            <div className="text-center py-20">
              Loading wishlist...
            </div>
          )}

          {!loading && cars.length === 0 && (
            <div className="text-center py-20">

              <h2 className="text-2xl font-semibold mb-4">
                Your wishlist is empty ❤️
              </h2>

              <p className="text-gray-500 mb-8">
                Save your favourite cars here.
              </p>

              <Link
                href="/buy-car"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Browse Cars
              </Link>
            </div>
          )}

          {!loading && cars.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {cars.map((car) => (

                <div
                  key={car.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
                >

                  <img
                    src={car.images?.[0]}
                    alt={car.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">

                    <h2 className="text-black text-xl font-bold mb-2">
                      {car.title}
                    </h2>

                    <p className="text-blue-600 text-2xl font-bold">
                      {car.price}
                    </p>

                    <p className="text-gray-500 mb-4">
                      EMI {car.emi}
                    </p>

                    <div className="text-sm text-gray-600 space-y-1">

                      <p>{car.specs.km}</p>

                      <p>{car.specs.fuel}</p>

                      <p>{car.specs.transmission}</p>

                      <p>{car.specs.owner}</p>

                      <p>{car.location}</p>

                    </div>

                    <div className="flex gap-3 mt-6">

                      <Link
                        href={`/buy-car/${car.id}`}
                        className="flex-1 bg-blue-600 text-white text-center py-2 rounded-lg"
                      >
                        View
                      </Link>

                      <button
                        onClick={() => handleRemove(car.id)}
                        className="flex-1 bg-red-500 text-white py-2 rounded-lg"
                      >
                        Remove
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>
          )}

        </div>
      </main>

    </>
  );
}