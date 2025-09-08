import Image from 'next/image';
import Link from 'next/link';
import type { Movie, Series } from '@/lib/data';
import { WatchlistButton } from './WatchlistButton';

export default function BackdropHero({
  item,
  type,
  href,
}: {
  item: Movie | Series;
  type: 'movie' | 'series';
  href?: string;
}) {
  const playHref = href ?? `/${type}/${item.id}`;
  return (
    <div className='relative h-64 w-full md:h-96'>
      <Image src={item.backdropUrl} alt={`${item.title} backdrop`} fill className='object-cover' />
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent'></div>
      <div className='absolute bottom-4 left-4 space-y-2'>
        <h2 className='text-2xl font-bold'>{item.title}</h2>
        <div className='flex items-center space-x-2'>
          <Link href={playHref} className='rounded bg-red-600 px-4 py-2 text-white'>
            Play
          </Link>
          <WatchlistButton item={{ type, id: item.id }} />
        </div>
      </div>
    </div>
  );
}
