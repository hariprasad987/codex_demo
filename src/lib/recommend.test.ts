import { describe, expect, it } from 'vitest';
import { getAllMovies } from './data';
import { recommendSimilar } from './recommend';

describe('recommendSimilar', () => {
  const movies = getAllMovies();
  it('returns similar items without including target', () => {
    const target = movies[0];
    const recs = recommendSimilar(target, movies);
    expect(recs.length).toBeGreaterThan(0);
    expect(recs.find((m) => m.id === target.id)).toBeUndefined();
  });
});
