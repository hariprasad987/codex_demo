"use client";
import { useState, useEffect } from "react";

interface Props {
  cuisines: string[];
  onChange: (filters: {
    cuisine: string;
    difficulty: string;
    maxCookTime: number | null;
  }) => void;
}

export default function FilterPanel({ cuisines, onChange }: Props) {
  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    onChange({
      cuisine,
      difficulty,
      maxCookTime: time ? Number(time) : null,
    });
  }, [cuisine, difficulty, time, onChange]);

  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        className="rounded border px-2 py-1"
      >
        <option value="">All Cuisines</option>
        {cuisines.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
        className="rounded border px-2 py-1"
      >
        <option value="">All Difficulties</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Max mins"
        className="w-24 rounded border px-2 py-1"
      />
    </div>
  );
}
