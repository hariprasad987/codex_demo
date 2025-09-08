"use client";
import { useState } from "react";
import recipes from "@/data/recipes.json";
import RecipeCard from "@/components/RecipeCard";
import SearchBar from "@/components/SearchBar";

export default function SearchPage() {
  const [term, setTerm] = useState("");
  const filtered = recipes.filter((r) => {
    const t = term.toLowerCase();
    return (
      r.title.toLowerCase().includes(t) ||
      r.ingredients.some((i) => i.toLowerCase().includes(t))
    );
  });

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Search Recipes</h1>
      <SearchBar onSearch={setTerm} />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
