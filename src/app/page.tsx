import BackdropHero from '@/components/BackdropHero';
import Card from '@/components/Card';
import Carousel from '@/components/Carousel';
import RecommendedRow from '@/components/RecommendedRow';
import { getAllMovies, getAllSeries, getTrending } from '@/lib/data';

export default function Home() {
  const movies = getAllMovies();
  const series = getAllSeries();
  const featured = movies.find((m) => m.featured) ?? movies[0];
  const trending = getTrending();
  const topRated = [...movies, ...series].sort((a, b) => b.rating - a.rating).slice(0, 10);

  return (
    <div className='space-y-8'>
      <BackdropHero item={featured} type='movie' />
      <section>
        <h3 className='mb-2 text-xl font-semibold'>Trending</h3>
        <Carousel>
          {trending.map((item) => (
            <Card
              key={item.id}
              item={item}
              type={'yearStart' in item ? 'series' : 'movie'}
            />
          ))}
        </Carousel>
      </section>
      <section>
        <h3 className='mb-2 text-xl font-semibold'>Top Rated</h3>
        <Carousel>
          {topRated.map((item) => (
            <Card
              key={item.id}
              item={item}
              type={'yearStart' in item ? 'series' : 'movie'}
            />
          ))}
        </Carousel>
      </section>
      <RecommendedRow all={[...movies, ...series]} />
    </div>
  );
}
