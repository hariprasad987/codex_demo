import RecipeCard from '@/components/RecipeCard';
import recipes from '@/data/recipes.json';

export default function HomePage() {
  const featured = recipes.slice(0, 5);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Featured Recipes</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {featured.map((r) => (
          <RecipeCard key={r.id} recipe={r} />
        ))}
      </div>
    </div>
  );
}
