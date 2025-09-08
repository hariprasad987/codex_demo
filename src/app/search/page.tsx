import Card from '@/components/Card';
import SearchBar from '@/components/SearchBar';
import { searchAll } from '@/lib/data';

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const q = searchParams.q || '';
  const results = q ? searchAll(q) : [];
  return (
    <div className='space-y-4'>
      <SearchBar />
      {q && <p>Results for "{q}"</p>}
      <div className='flex flex-wrap gap-4'>
        {results.map((item) => (
          <Card key={item.id} item={item} type={'yearStart' in item ? 'series' : 'movie'} />
        ))}
      </div>
    </div>
  );
}
