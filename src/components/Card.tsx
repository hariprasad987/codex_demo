'use client';
import Image from 'next/image';
import Link from 'next/link';
import type { Movie, Series } from '@/lib/data';
import { WatchlistButton } from './WatchlistButton';

export default function Card({ item, type }: { item: Movie | Series; type: 'movie' | 'series' }) {
  return (
    <div className='w-40 flex-shrink-0'>
      <div className='relative'>
        <Link href={`/${type}/${item.id}`}>
          <Image
            src={item.posterUrl}
            alt={item.title}
            width={160}
            height={240}
            className='rounded object-cover'
          />
        </Link>
        <div className='absolute right-1 top-1'>
          <WatchlistButton item={{ type, id: item.id }} />
        </div>
      </div>
      <div className='mt-2 text-sm'>{item.title}</div>
      <div className='text-xs text-gray-400'>{item.rating.toFixed(1)}</div>
    </div>
  );
}
