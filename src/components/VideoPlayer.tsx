'use client';
import { useEffect, useRef } from 'react';

export default function VideoPlayer({ src, id }: { src: string; id: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const KEY = `nb_play_${id}`;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const stored = localStorage.getItem(KEY);
    if (stored) {
      el.currentTime = parseFloat(stored);
    }
    const handler = () => {
      localStorage.setItem(KEY, el.currentTime.toString());
    };
    el.addEventListener('timeupdate', handler);
    return () => {
      el.removeEventListener('timeupdate', handler);
      localStorage.setItem(KEY, el.currentTime.toString());
    };
  }, [KEY]);

  return <video ref={ref} src={src} controls className='w-full' />;
}
