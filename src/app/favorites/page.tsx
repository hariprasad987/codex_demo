"use client";
import RecipeCard from "@/components/RecipeCard";
import recipes from "@/data/recipes.json";
import { useFavorites } from "@/hooks/useFavorites";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteRecipes = recipes.filter((r) => favorites.includes(r.id));

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Your Favorites</h1>
      {favoriteRecipes.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favoriteRecipes.map((r) => (
            <RecipeCard key={r.id} recipe={r} />
          ))}
        </div>
      )}
    </div>
  );
}
