'use client';

import { useState } from 'react';

interface Filters {
  cuisine: string;
  difficulty: string;
  cookTime: number;
}

interface Props {
  cuisines: string[];
  onChange: (filters: Filters) => void;
}

export default function FilterPanel({ cuisines, onChange }: Props) {
  const [cuisine, setCuisine] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [cookTime, setCookTime] = useState(0);

  const update = (c: string, d: string, t: number) => {
    onChange({ cuisine: c, difficulty: d, cookTime: t });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <select
        className="border px-2 py-1"
        value={cuisine}
        onChange={(e) => {
          setCuisine(e.target.value);
          update(e.target.value, difficulty, cookTime);
        }}
      >
        <option value="">All Cuisines</option>
        {cuisines.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <select
        className="border px-2 py-1"
        value={difficulty}
        onChange={(e) => {
          setDifficulty(e.target.value);
          update(cuisine, e.target.value, cookTime);
        }}
      >
        <option value="">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <input
        type="number"
        className="border px-2 py-1 w-32"
        placeholder="Max mins"
        value={cookTime ? cookTime : ''}
        onChange={(e) => {
          const v = Number(e.target.value);
          setCookTime(v);
          update(cuisine, difficulty, v);
        }}
      />
    </div>
  );
}
