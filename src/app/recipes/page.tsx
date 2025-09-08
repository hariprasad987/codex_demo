'use client';

import { useMemo, useState } from 'react';
import RecipeCard from '@/components/RecipeCard';
import FilterPanel from '@/components/FilterPanel';
import recipes from '@/data/recipes.json';

export default function RecipesPage() {
  const [filters, setFilters] = useState({ cuisine: '', difficulty: '', cookTime: 0 });
  const cuisines = Array.from(new Set(recipes.map((r) => r.cuisine)));

  const filtered = useMemo(() => {
    return recipes.filter((r) => {
      if (filters.cuisine && r.cuisine !== filters.cuisine) return false;
      if (filters.difficulty && r.difficulty !== filters.difficulty) return false;
      if (filters.cookTime && r.cookTimeMins > filters.cookTime) return false;
      return true;
    });
  }, [filters]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Recipes</h1>
      <FilterPanel cuisines={cuisines} onChange={setFilters} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
