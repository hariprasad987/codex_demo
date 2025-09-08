"use client";
import { useState } from "react";
import recipes from "@/data/recipes.json";
import RecipeCard from "@/components/RecipeCard";
import FilterPanel from "@/components/FilterPanel";

export default function RecipesPage() {
  const [filters, setFilters] = useState({
    cuisine: "",
    difficulty: "",
    maxCookTime: null as number | null,
  });

  const cuisines = Array.from(new Set(recipes.map((r) => r.cuisine)));

  const filtered = recipes.filter((r) => {
    return (
      (!filters.cuisine || r.cuisine === filters.cuisine) &&
      (!filters.difficulty || r.difficulty === filters.difficulty) &&
      (!filters.maxCookTime || r.cookTimeMins <= filters.maxCookTime)
    );
  });

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">All Recipes</h1>
      <FilterPanel cuisines={cuisines} onChange={setFilters} />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
