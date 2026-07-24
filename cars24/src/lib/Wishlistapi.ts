const BASE_URL = "http://localhost:5203/api/Wishlist";

export const getWishlist = async (userId: string) => {
  const response = await fetch(`${BASE_URL}/${userId}`);

  if (!response.ok) {
    throw new Error("Failed to fetch wishlist");
  }

  return response.json();
};

export const addToWishlist = async (
  userId: string,
  carId: string
) => {
  const response = await fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      carId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to add wishlist");
  }

  return response.json();
};

export const removeFromWishlist = async (
  userId: string,
  carId: string
) => {
  const response = await fetch(`${BASE_URL}/remove`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      carId,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to remove wishlist");
  }

  return response.json();
};