'use client';
import { WatchlistItem, useWatchlist } from '@/hooks/useWatchlist';
import { useEffect, useState } from 'react';

export function WatchlistButton({ item }: { item: WatchlistItem }) {
  const { has, toggle } = useWatchlist();
  const [active, setActive] = useState(false);
  useEffect(() => setActive(has(item)), [has, item]);
  return (
    <button
      onClick={() => toggle(item)}
      aria-label={active ? 'Remove from watchlist' : 'Add to watchlist'}
      className='rounded bg-gray-900/70 p-1 text-sm hover:bg-gray-700'
    >
      {active ? '✓' : '+'}
    </button>
  );
}
