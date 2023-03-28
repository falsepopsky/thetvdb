import type { Artwork, Character, ContentRating, Country, FetchResult } from './types.js';

export class TheTVDB {
  private readonly token;
  private readonly API = 'https://api4.thetvdb.com/v4';

  constructor(token: string) {
    if (typeof token !== 'string' || token.length === 0) {
      throw new Error('Token is required');
    }
    this.token = token;
  }

  private async fetcher<T>(url: string | URL): Promise<FetchResult<T>> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.token}` },
    });

    const resStatus = response.status;
    const result = (await response.json()) as T;

    return { resStatus, result };
  }

  public async getArtwork<T extends boolean = false>(
    id: string,
    extended: T = false as T
  ): Promise<FetchResult<Artwork<T>>> {
    if (typeof id !== 'string' || id.length === 0) {
      throw new Error('Required artwork id');
    }

    let endpoint = this.API + '/artwork/' + id;

    if (extended) endpoint += '/extended';

    const data = await this.fetcher<Artwork<T>>(endpoint);

    return data;
  }

  public async getCharacter(id: string): Promise<FetchResult<Character>> {
    if (typeof id !== 'string' || id.length === 0) {
      throw new Error('Required character id');
    }

    const endpoint = this.API + '/characters/' + id;
    const data = await this.fetcher<Character>(endpoint);

    return data;
  }

  public async getContentRatings(): Promise<FetchResult<ContentRating>> {
    const endpoint = this.API + '/content/ratings';
    const data = await this.fetcher<ContentRating>(endpoint);

    return data;
  }

  public async getCountries(): Promise<FetchResult<Country>> {
    const endpoint = this.API + '/countries';
    const data = await this.fetcher<Country>(endpoint);

    return data;
  }
}
