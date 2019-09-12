import search, { YouTubeSearchOptions } from 'youtube-search';
import { API_KEY } from './API-KEY';

interface SearchAPI {
  term: string;
  maxResults?: number;
}

export async function searchYT({ term, maxResults }: SearchAPI) {
  const opts: YouTubeSearchOptions = {
    maxResults,
    key: API_KEY
  };
  const res = await search(term, opts);
  return res.results;
}
