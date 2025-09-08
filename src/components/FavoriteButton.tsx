"use client";
import { useFavorites } from "@/hooks/useFavorites";

interface Props {
  id: string;
}

export default function FavoriteButton({ id }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(id);

  return (
    <button
      onClick={() => toggleFavorite(id)}
      className={`mt-2 rounded px-3 py-1 text-sm font-medium transition-colors hover:opacity-80 ${
        favorite ? "bg-red-500 text-white" : "bg-gray-200 text-gray-900"
      }`}
    >
      {favorite ? "Remove Favorite" : "Add to Favorites"}
    </button>
  );
}
