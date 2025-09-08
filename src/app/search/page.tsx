'use client';

import { useMemo, useState } from 'react';
import RecipeCard from '@/components/RecipeCard';
import SearchBar from '@/components/SearchBar';
import recipes from '@/data/recipes.json';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const results = useMemo(() => {
    const q = query.toLowerCase();
    return recipes.filter(
      (r) =>
        r.title.toLowerCase().includes(q) ||
        r.ingredients.some((i) => i.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Recipes</h1>
      <SearchBar onSearch={setQuery} />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4">
        {results.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
