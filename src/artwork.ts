import type { FetchResult } from './fetcher.js';
import { fetcher } from './fetcher.js';

interface Artwork {
  data: Array<{ id: number; name: string }>;
}

export const ArtworkStatuses = async (token: string): Promise<FetchResult<Artwork>> => {
  const BASEURL = '/artwork/statuses';

  const data = await fetcher<Artwork>(token, BASEURL);

  return data;
};
