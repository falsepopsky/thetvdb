import type { FetchResult } from './fetcher.js';
import { fetcher } from './fetcher.js';

interface Countries {
  data: Array<{ id: string; name: string; shortCode: string }>;
}

export const countries = async (token: string): Promise<FetchResult<Countries>> => {
  const data = await fetcher<Countries>(token, '/countries');
  return data;
};
