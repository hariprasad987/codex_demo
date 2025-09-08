import Card from '@/components/Card';
import BackdropHero from '@/components/BackdropHero';
import { getAllMovies, getMovieById } from '@/lib/data';
import { recommendSimilar } from '@/lib/recommend';
import { notFound } from 'next/navigation';

export default function MoviePage({ params }: { params: { id: string } }) {
  const movie = getMovieById(params.id);
  if (!movie) return notFound();
  const recs = recommendSimilar(movie, getAllMovies());
  return (
    <div className='space-y-4'>
      <BackdropHero item={movie} type='movie' href={`/play/movie/${movie.id}`} />
      <p>{movie.description}</p>
      <p>
        {movie.year} • {movie.runtimeMins} mins
      </p>
      <div className='flex flex-wrap gap-2'>
        {movie.genres.map((g) => (
          <span key={g} className='rounded bg-gray-800 px-2 py-1 text-xs'>
            {g}
          </span>
        ))}
      </div>
      <h3 className='mt-4 text-lg font-semibold'>Recommended</h3>
      <div className='flex gap-4 overflow-x-auto'>
        {recs.map((item) => (
          <Card key={item.id} item={item} type='movie' />
        ))}
      </div>
    </div>
  );
}
