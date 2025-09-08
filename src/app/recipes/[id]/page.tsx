import { notFound } from "next/navigation";
import recipes from "@/data/recipes.json";
import FavoriteButton from "@/components/FavoriteButton";

interface Props {
  params: { id: string };
}

export default function RecipeDetail({ params }: Props) {
  const recipe = recipes.find((r) => r.id === params.id);
  if (!recipe) return notFound();

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">{recipe.title}</h1>
      <img
        src={recipe.imageUrl}
        alt={recipe.title}
        className="mb-4 h-60 w-full rounded object-cover"
      />
      <FavoriteButton id={recipe.id} />
      <p className="mt-4">{recipe.description}</p>
      <h2 className="mt-6 text-xl font-semibold">Ingredients</h2>
      <ul className="list-disc pl-6">
        {recipe.ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>
      <h2 className="mt-6 text-xl font-semibold">Instructions</h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions.map((ins, idx) => (
          <li key={idx}>{ins}</li>
        ))}
      </ol>
    </div>
  );
}
