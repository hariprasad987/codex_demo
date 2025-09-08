import './globals.css';
import type { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'NextFlix',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className='bg-black text-white'>
        <a href='#content' className='sr-only focus:not-sr-only'>
          Skip to content
        </a>
        <header className='flex gap-4 bg-gray-900 p-4'>
          <Link href='/'>Home</Link>
          <Link href='/movies'>Movies</Link>
          <Link href='/series'>Series</Link>
          <Link href='/watchlist'>Watchlist</Link>
          <Link href='/search' className='ml-auto'>
            Search
          </Link>
        </header>
        <main id='content' className='p-4'>
          {children}
        </main>
      </body>
    </html>
  );
}
