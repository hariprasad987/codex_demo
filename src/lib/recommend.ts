import type { Movie, Series } from './data';

type Content = Movie | Series;

export function recommendSimilar(target: Content, contents: Content[]): Content[] {
  return contents
    .filter((c) => c.id !== target.id)
    .map((c) => {
      const shared = c.genres.filter((g) => target.genres.includes(g)).length;
      const score = shared * 2 + c.rating;
      return { item: c, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
    .map((i) => i.item);
}
