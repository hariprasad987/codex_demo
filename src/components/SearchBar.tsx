"use client";
import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";

interface Props {
  onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState("");
  const debounced = useDebounce(value, 300);

  useEffect(() => {
    onSearch(debounced);
  }, [debounced, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="w-full rounded border px-3 py-2"
    />
  );
}
