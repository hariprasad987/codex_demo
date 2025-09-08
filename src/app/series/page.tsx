import { getAllSeries, getGenres } from '@/lib/data';
import SeriesClient from './SeriesClient';

export default function SeriesPage() {
  const series = getAllSeries();
  const genres = getGenres();
  return <SeriesClient series={series} genres={genres} />;
}
