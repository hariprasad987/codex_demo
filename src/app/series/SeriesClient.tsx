'use client';
import Card from '@/components/Card';
import GenreFilter from '@/components/GenreFilter';
import type { Genre, Series } from '@/lib/data';
import { useMemo, useState } from 'react';

export default function SeriesClient({ series, genres }: { series: Series[]; genres: Genre[] }) {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [sort, setSort] = useState('rating');
  const [page, setPage] = useState(1);
  const [minYear, setMinYear] = useState<number | undefined>();
  const [maxYear, setMaxYear] = useState<number | undefined>();
  const pageSize = 12;

  const filtered = useMemo(() => {
    let res = [...series];
    if (selectedGenres.length) {
      res = res.filter((m) => selectedGenres.every((g) => m.genres.includes(g)));
    }
    if (minYear) res = res.filter((m) => m.yearStart >= minYear);
    if (maxYear) res = res.filter((m) => m.yearStart <= maxYear);
    res.sort((a, b) => {
      if (sort === 'rating') return b.rating - a.rating;
      if (sort === 'year') return (b.yearStart ?? 0) - (a.yearStart ?? 0);
      return a.title.localeCompare(b.title);
    });
    return res;
  }, [series, selectedGenres, sort, minYear, maxYear]);

  const pageCount = Math.ceil(filtered.length / pageSize);
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap items-center justify-between gap-4'>
        <GenreFilter genres={genres} selected={selectedGenres} onChange={setSelectedGenres} />
        <div className='flex items-center gap-2'>
          <input
            type='number'
            placeholder='Min year'
            value={minYear ?? ''}
            onChange={(e) => setMinYear(e.target.value ? Number(e.target.value) : undefined)}
            className='w-24 rounded bg-gray-800 p-1 text-sm'
          />
          <input
            type='number'
            placeholder='Max year'
            value={maxYear ?? ''}
            onChange={(e) => setMaxYear(e.target.value ? Number(e.target.value) : undefined)}
            className='w-24 rounded bg-gray-800 p-1 text-sm'
          />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className='rounded bg-gray-800 p-2 text-sm'
          >
            <option value='rating'>Rating</option>
            <option value='year'>Year</option>
            <option value='title'>A–Z</option>
          </select>
        </div>
      </div>
      <div className='flex flex-wrap gap-4'>
        {paged.map((m) => (
          <Card key={m.id} item={m} type='series' />
        ))}
      </div>
      <div className='flex items-center justify-center gap-2'>
        <button disabled={page === 1} onClick={() => setPage((p) => p - 1)} className='rounded border px-2 py-1 disabled:opacity-50'>
          Prev
        </button>
        <span>
          {page} / {pageCount}
        </span>
        <button
          disabled={page === pageCount}
          onClick={() => setPage((p) => p + 1)}
          className='rounded border px-2 py-1 disabled:opacity-50'
        >
          Next
        </button>
      </div>
    </div>
  );
}
