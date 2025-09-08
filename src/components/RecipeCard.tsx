"use client";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import { Recipe } from "@/types/recipe";

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  return (
    <div className="flex flex-col rounded border p-4 shadow-sm">
      <Link href={`/recipes/${recipe.id}`} className="group">
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="h-40 w-full rounded object-cover transition-transform group-hover:scale-105"
        />
        <h3 className="mt-2 text-lg font-semibold">{recipe.title}</h3>
        <p className="text-sm text-gray-500">{recipe.cuisine}</p>
      </Link>
      <FavoriteButton id={recipe.id} />
    </div>
  );
}
