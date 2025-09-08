'use client';

import { useEffect, useState } from 'react';
import useDebounce from '@/hooks/useDebounce';

export default function SearchBar({ onSearch }: { onSearch: (q: string) => void }) {
  const [value, setValue] = useState('');
  const debounced = useDebounce(value, 300);

  useEffect(() => {
    onSearch(debounced);
  }, [debounced, onSearch]);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="border rounded px-4 py-2 w-full"
      placeholder="Search recipes..."
    />
  );
}
