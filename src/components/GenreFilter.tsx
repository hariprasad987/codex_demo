'use client';
import type { Genre } from '@/lib/data';

export default function GenreFilter({
  genres,
  selected,
  onChange,
}: {
  genres: Genre[];
  selected: string[];
  onChange: (next: string[]) => void;
}) {
  const toggle = (id: string) => {
    if (selected.includes(id)) {
      onChange(selected.filter((g) => g !== id));
    } else {
      onChange([...selected, id]);
    }
  };

  return (
    <div className='flex flex-wrap gap-2'>
      {genres.map((g) => (
            <button
              key={g.id}
              onClick={() => toggle(g.id)}
              className={`rounded border px-2 py-1 text-sm ${
                selected.includes(g.id) ? 'bg-red-600 text-white' : 'border-gray-600'
              }`}
            >
              {g.name}
            </button>
          ))}
    </div>
  );
}
