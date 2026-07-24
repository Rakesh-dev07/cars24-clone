import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "@/lib/Wishlistapi";
import { toast } from "sonner";

interface Props {
  carId: string;
}

export default function WishlistButton({ carId }: Props) {
  const { user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!user) return;

    async function loadWishlist() {
      try {
        const wishlist = await getWishlist(user!.id);

        const exists = wishlist.some((car: any) => car.id === carId);

        setSaved(exists);
      } catch (err) {
        console.error(err);
      }
    }

    loadWishlist();
  }, [user, carId]);

  const handleClick = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      setLoading(true);

      if (saved) {
        await removeFromWishlist(user.id, carId);
        setSaved(false);
        toast.success("Removed from wishlist");
      } else {
        await addToWishlist(user.id, carId);
        setSaved(true);
        toast.success("Added to wishlist");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="absolute top-2 right-2 z-20 bg-white rounded-full p-2 shadow hover:scale-105 transition"
    >
      <Heart
        className={`h-5 w-5 transition ${
          saved
            ? "fill-red-500 text-red-500"
            : "text-gray-500 hover:text-red-500"
        }`}
      />
    </button>
  );
}