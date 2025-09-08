'use client';
import { ReactNode, useRef } from 'react';

export default function Carousel({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => {
    if (ref.current) ref.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };
  return (
    <div className='relative'>
      <button
        aria-label='Scroll left'
        className='absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/40 p-2'
        onClick={() => scroll(-1)}
      >
        {'<'}
      </button>
      <div ref={ref} className='flex overflow-x-auto space-x-4 py-2 px-6 scroll-smooth'>
        {children}
      </div>
      <button
        aria-label='Scroll right'
        className='absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/40 p-2'
        onClick={() => scroll(1)}
      >
        {'>'}
      </button>
    </div>
  );
}
