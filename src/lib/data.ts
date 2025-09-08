import movies from '@/data/movies.json';
import series from '@/data/series.json';
import genres from '@/data/genres.json';
import people from '@/data/people.json';

export type Movie = (typeof movies)[number];
export type Series = (typeof series)[number];
export type Genre = (typeof genres)[number];
export type Person = (typeof people)[number];

type Content = Movie | Series;

export function getAllMovies(): Movie[] {
  return movies;
}

export function getAllSeries(): Series[] {
  return series;
}

export function getGenres(): Genre[] {
  return genres;
}

export function getPeople(): Person[] {
  return people;
}

export function getMovieById(id: string): Movie | undefined {
  return movies.find((m) => m.id === id);
}

export function getSeriesById(id: string): Series | undefined {
  return series.find((s) => s.id === id);
}

export function searchAll(query: string): Content[] {
  const q = query.toLowerCase();
  return [...movies, ...series].filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      ('description' in item && item.description.toLowerCase().includes(q))
  );
}

export function filterByGenre<T extends Content>(items: T[], genreId: string): T[] {
  return items.filter((item) => item.genres.includes(genreId));
}

export function getTrending(): Content[] {
  return [...movies, ...series]
    .filter((i) => typeof i.trendingScore === 'number')
    .sort((a, b) => (b.trendingScore ?? 0) - (a.trendingScore ?? 0) || b.rating - a.rating)
    .slice(0, 20);
}
