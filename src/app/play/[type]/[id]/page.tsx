import VideoPlayer from '@/components/VideoPlayer';
import { getAllSeries, getMovieById, getSeriesById } from '@/lib/data';
import { notFound } from 'next/navigation';

export default function PlayPage({ params }: { params: { type: string; id: string } }) {
  const { type, id } = params;
  let title = '';
  let src = '';

  if (type === 'movie') {
    const movie = getMovieById(id);
    if (!movie) return notFound();
    title = movie.title;
    src = movie.videoUrl || movie.trailerUrl || '';
  } else if (type === 'series') {
    const series = getSeriesById(id);
    const ep = series?.seasons[0]?.episodes[0];
    if (!series || !ep) return notFound();
    title = `${series.title} - ${ep.title}`;
    src = ep.videoUrl || ep.trailerUrl || '';
  } else if (type === 'episode') {
    const all = getAllSeries();
    for (const s of all) {
      for (const season of s.seasons) {
        const ep = season.episodes.find((e) => e.id === id);
        if (ep) {
          title = `${s.title} - ${ep.title}`;
          src = ep.videoUrl || ep.trailerUrl || '';
        }
      }
    }
  }

  if (!src) return notFound();

  return (
    <div className='space-y-4'>
      <h1 className='text-xl font-semibold'>{title}</h1>
      <VideoPlayer src={src} id={id} />
    </div>
  );
}
