const BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/search`;

export async function searchCars(params: {
  query?: string;
  brand?: string;
  fuel?: string;
  transmission?: string;
  location?: string;
  city?: string;
  isNew?: boolean;
  year?: number;
  minKm?: number;
  maxKm?: number;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
  page?: number;
}) {
  const searchParams = new URLSearchParams();

  if (params.query)
    searchParams.append("query", params.query);

  if (params.brand)
    searchParams.append("brand", params.brand);

  if (params.fuel)
    searchParams.append("fuel", params.fuel);

  if (params.transmission)
    searchParams.append("transmission", params.transmission);

  if (params.location)
    searchParams.append("location", params.location);

  if (params.city && params.city !== "India")
  searchParams.append("city", params.city);

  if (params.isNew !== undefined)
  searchParams.append("isNew", params.isNew.toString());

  if (params.year)
    searchParams.append("year", params.year.toString());

  if (params.minKm !== undefined)
    searchParams.append("minKm", params.minKm.toString());

  if (params.maxKm !== undefined)
    searchParams.append("maxKm", params.maxKm.toString());

  if (params.minPrice !== undefined)
    searchParams.append("minPrice", params.minPrice.toString());

  if (params.maxPrice !== undefined)
    searchParams.append("maxPrice", params.maxPrice.toString());

  if (params.sort)
    searchParams.append("sort", params.sort);

  if (params.page)
    searchParams.append("page", params.page.toString());

  const response = await fetch(
    `${BASE_URL}?${searchParams.toString()}`
  );

  if (!response.ok)
    throw new Error("Search failed");

  return response.json();
}

export async function getSuggestions(query: string) {
  if (!query.trim()) return [];

  const response = await fetch(
    `${BASE_URL}/suggestions?query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    return [];
  }

  return await response.json();
}