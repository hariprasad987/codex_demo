import Image from 'next/image';
import Link from 'next/link';
import FavoriteButton from './FavoriteButton';
import { Recipe } from '@/types/recipe';

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="border rounded shadow hover:shadow-lg flex flex-col bg-white dark:bg-gray-800">
      <Link href={`/recipes/${recipe.id}`}>
        <Image
          src={recipe.imageUrl}
          alt={recipe.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-t"
        />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link
          href={`/recipes/${recipe.id}`}
          className="text-lg font-semibold mb-2 hover:underline"
        >
          {recipe.title}
        </Link>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          {recipe.cuisine}
        </p>
        <div className="mt-auto">
          <FavoriteButton id={recipe.id} />
        </div>
      </div>
    </div>
  );
}
