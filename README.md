# NextFlix Demo

Simple Next.js (App Router) demo that lists movies and series using local JSON data only. Includes search, filtering, watchlist, and a basic video player.

## Development

```bash
pnpm install
pnpm dev
```

## Data

All data lives under `src/data/` and is loaded statically.
- `genres.json` – `{ id, name }[]`
- `people.json` – `{ id, name, role? }[]`
- `movies.json`
- `series.json`

Movies and series use the following shape:

```ts
interface Movie {
  id: string;
  title: string;
  year: number;
  runtimeMins: number;
  genres: string[];
  posterUrl: string;
  backdropUrl: string;
  rating: number;
  description: string;
  cast: string[];
  trailerUrl?: string;
  videoUrl?: string;
  featured?: boolean;
  trendingScore?: number;
}
```

Series contain seasons and episodes with optional `videoUrl`/`trailerUrl` per episode.

To add new content, edit the JSON files and place any referenced media under `public/images` or `public/videos`.

## Watchlist & Playback

Watchlist items are stored in `localStorage` using the key `nb_watchlist_v1` and persist across sessions. Video playback remembers the last position per item using `localStorage` as well.

## Testing

```bash
pnpm test
```
