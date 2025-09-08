import Image from 'next/image';
import recipes from '@/data/recipes.json';

interface Props {
  params: { id: string };
}

export default function RecipeDetail({ params }: Props) {
  const recipe = recipes.find((r) => r.id === params.id);
  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
      <Image
        src={recipe.imageUrl}
        alt={recipe.title}
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <p className="mb-4">{recipe.description}</p>
      <p className="mb-2">Cuisine: {recipe.cuisine}</p>
      <p className="mb-2">Cook Time: {recipe.cookTimeMins} mins</p>
      <p className="mb-4">Difficulty: {recipe.difficulty}</p>
      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <ol className="list-decimal list-inside space-y-2">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

export async function generateStaticParams() {
  return recipes.map((r) => ({ id: r.id }));
}
