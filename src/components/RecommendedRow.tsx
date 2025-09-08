'use client';
import Card from './Card';
import Carousel from './Carousel';
import { useWatchlist } from '@/hooks/useWatchlist';
import { recommendSimilar } from '@/lib/recommend';
import type { Movie, Series } from '@/lib/data';

export default function RecommendedRow({ all }: { all: (Movie | Series)[] }) {
  const { items } = useWatchlist();

  if (!items.length) {
    const newest = all.slice(0, 10);
    return (
      <section>
        <h3 className='mb-2 text-xl font-semibold'>New &amp; Noteworthy</h3>
        <Carousel>
          {newest.map((item) => (
            <Card
              key={item.id}
              item={item}
              type={'yearStart' in item ? 'series' : 'movie'}
            />
          ))}
        </Carousel>
      </section>
    );
  }

  const target = all.find((c) => c.id === items[0].id);
  const recs = target ? recommendSimilar(target, all) : [];

  return (
    <section>
      <h3 className='mb-2 text-xl font-semibold'>Because you watched…</h3>
      <Carousel>
        {recs.map((item) => (
          <Card
            key={item.id}
            item={item}
            type={'yearStart' in item ? 'series' : 'movie'}
          />
        ))}
      </Carousel>
    </section>
  );
}
