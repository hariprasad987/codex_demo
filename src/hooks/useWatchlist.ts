'use client';
import { useCallback, useEffect, useState } from 'react';

export interface WatchlistItem {
  type: 'movie' | 'series' | 'episode';
  id: string;
}

const KEY = 'nb_watchlist_v1';

export function useWatchlist() {
  const [items, setItems] = useState<WatchlistItem[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const raw = localStorage.getItem(KEY);
    if (raw) {
      try {
        setItems(JSON.parse(raw));
      } catch {
        /* ignore */
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(KEY, JSON.stringify(items));
  }, [items]);

  const add = useCallback((item: WatchlistItem) => {
    setItems((prev) =>
      prev.find((i) => i.type === item.type && i.id === item.id) ? prev : [...prev, item]
    );
  }, []);

  const remove = useCallback((item: WatchlistItem) => {
    setItems((prev) => prev.filter((i) => !(i.type === item.type && i.id === item.id)));
  }, []);

  const toggle = useCallback((item: WatchlistItem) => {
    setItems((prev) =>
      prev.find((i) => i.type === item.type && i.id === item.id)
        ? prev.filter((i) => !(i.type === item.type && i.id === item.id))
        : [...prev, item]
    );
  }, []);

  const has = useCallback(
    (item: WatchlistItem) => items.some((i) => i.type === item.type && i.id === item.id),
    [items]
  );

  return { items, add, remove, toggle, has };
}
