"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { getSuggestions } from "@/lib/Searchapi";

interface Props {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Search cars...",
  onSearch,
}: Props) {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (!query.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        setLoading(true);

        const result = await getSuggestions(query);

        setSuggestions(result);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [query]);

  const performSearch = (value: string) => {
    if (!value.trim()) return;

    setSuggestions([]);

    onSearch?.(value);

    router.push(`/buy-car?query=${encodeURIComponent(value)}`);
  };

  return (
    <div className="relative w-full">

      <Search
        className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500 cursor-pointer"
        onClick={() => performSearch(query)}
      />

      <Input
        className="pl-10 bg-white text-black placeholder:text-gray-400"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            performSearch(query);
          }
        }}
      />

      {loading && (
        <div className="absolute right-3 top-3 text-xs text-gray-400">
          Searching...
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="absolute mt-2 w-full bg-white border rounded-xl shadow-xl z-50">

          {suggestions.map((item) => (
            <div
              key={item}
              onClick={() => performSearch(item)}
              className="px-4 py-3 text-black hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}

        </div>
      )}

    </div>
  );
}