import type { Response } from 'undici';

export interface FetchResult<T> {
  status: number;
  data: T;
}

export const fetcher = async <T>(token: string, prefixRoute: string): Promise<FetchResult<T>> => {
  const baseURL = 'https://api4.thetvdb.com/v4';
  const prefix = baseURL + prefixRoute;

  const response: Response = await fetch(prefix, {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
  });

  const status = response.status;
  const data = (await response.json()) as T;

  return { status, data };
};
