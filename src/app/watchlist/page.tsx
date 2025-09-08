'use client';
import Card from '@/components/Card';
import { useWatchlist } from '@/hooks/useWatchlist';
import { getAllMovies, getAllSeries } from '@/lib/data';

const movies = getAllMovies();
const series = getAllSeries();

export default function WatchlistPage() {
  const { items } = useWatchlist();
  const content = items
    .map((i) =>
      i.type === 'movie'
        ? { item: movies.find((m) => m.id === i.id), type: 'movie' as const }
        : { item: series.find((s) => s.id === i.id), type: 'series' as const }
    )
    .filter((c) => c.item) as { item: any; type: 'movie' | 'series' }[];

  if (!content.length) return <p>Your watchlist is empty.</p>;

  return (
    <div className='flex flex-wrap gap-4'>
      {content.map(({ item, type }) => (
        <Card key={item.id} item={item} type={type} />
      ))}
    </div>
  );
}
