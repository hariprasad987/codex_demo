'use client';

import { useMemo } from 'react';
import RecipeCard from '@/components/RecipeCard';
import useFavorites from '@/hooks/useFavorites';
import recipes from '@/data/recipes.json';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favRecipes = useMemo(
    () => recipes.filter((r) => favorites.includes(r.id)),
    [favorites]
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      {favRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favRecipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}
