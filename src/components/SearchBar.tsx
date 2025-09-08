'use client';
import { useDebounce } from '@/hooks/useDebounce';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBar() {
  const params = useSearchParams();
  const router = useRouter();
  const [term, setTerm] = useState(params.get('q') || '');
  const debounced = useDebounce(term, 300);

  useEffect(() => {
    const q = debounced ? `?q=${encodeURIComponent(debounced)}` : '';
    router.replace(`/search${q}`);
  }, [debounced, router]);

  return (
    <input
      value={term}
      onChange={(e) => setTerm(e.target.value)}
      placeholder='Search movies & series'
      className='w-full rounded bg-gray-800 p-2'
    />
  );
}
