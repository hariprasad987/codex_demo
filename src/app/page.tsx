import RecipeCard from "@/components/RecipeCard";
import recipes from "@/data/recipes.json";

export default function Home() {
  const featured = recipes.slice(0, 5);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">Featured Recipes</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featured.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
