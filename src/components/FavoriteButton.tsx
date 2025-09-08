'use client';

import useFavorites from '@/hooks/useFavorites';

export default function FavoriteButton({ id }: { id: string }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(id);

  return (
    <button
      onClick={() => toggleFavorite(id)}
      className={`px-3 py-1 rounded text-sm font-medium text-white ${
        favorite ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      {favorite ? 'Remove Favorite' : 'Add to Favorites'}
    </button>
  );
}
