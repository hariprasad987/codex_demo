import { getAllMovies, getGenres } from '@/lib/data';
import MoviesClient from './MoviesClient';

export default function MoviesPage() {
  const movies = getAllMovies();
  const genres = getGenres();
  return <MoviesClient movies={movies} genres={genres} />;
}
