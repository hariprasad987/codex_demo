import Card from '@/components/Card';
import BackdropHero from '@/components/BackdropHero';
import { getAllSeries, getSeriesById } from '@/lib/data';
import { recommendSimilar } from '@/lib/recommend';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function SeriesPage({ params }: { params: { id: string } }) {
  const series = getSeriesById(params.id);
  if (!series) return notFound();
  const recs = recommendSimilar(series, getAllSeries());
  const firstEp = series.seasons[0]?.episodes[0];
  return (
    <div className='space-y-4'>
      {firstEp && (
        <BackdropHero item={series} type='series' href={`/play/episode/${firstEp.id}`} />
      )}
      <p>{series.description}</p>
      <div className='space-y-4'>
        {series.seasons.map((season) => (
          <div key={season.seasonNumber} className='space-y-2'>
            <h4 className='font-semibold'>Season {season.seasonNumber}</h4>
            {season.episodes.map((ep) => (
              <div
                key={ep.id}
                className='flex items-center justify-between rounded bg-gray-800 p-2'
              >
                <div>
                  <div className='font-medium'>
                    {ep.episodeNumber}. {ep.title}
                  </div>
                  <div className='text-xs text-gray-400'>{ep.runtimeMins} mins</div>
                </div>
                <Link
                  href={`/play/episode/${ep.id}`}
                  className='rounded bg-red-600 px-2 py-1 text-sm'
                >
                  Play
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
      <h3 className='mt-4 text-lg font-semibold'>Recommended</h3>
      <div className='flex gap-4 overflow-x-auto'>
        {recs.map((item) => (
          <Card key={item.id} item={item} type='series' />
        ))}
      </div>
    </div>
  );
}
