import type { Artwork, Character, ContentRating, Country, FetchResult } from './types.js';

export class TheTVDB {
  private readonly _TOKEN;
  private readonly API = 'https://api4.thetvdb.com/v4';

  constructor(token: string) {
    this.validateInput(token, 'Token is required');
    this._TOKEN = token;
  }

  private async fetcher<T>(url: string | URL): Promise<FetchResult<T>> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this._TOKEN}` },
    });

    const resStatus = response.status;
    const result = (await response.json()) as T;

    return { resStatus, result };
  }

  private validateInput<T>(input: T, errorMessage: string): void {
    if (typeof input !== 'string' || input.length === 0) {
      throw new Error(errorMessage);
    }
  }

  public async getArtwork<T extends boolean = false>(
    id: string,
    extended: T = false as T
  ): Promise<FetchResult<Artwork<T>>> {
    this.validateInput(id, 'Required artwork id');

    let endpoint = this.API + '/artwork/' + id;

    if (extended) endpoint += '/extended';

    const data = await this.fetcher<Artwork<T>>(endpoint);

    return data;
  }

  public async getCharacter(id: string): Promise<FetchResult<Character>> {
    this.validateInput(id, 'Required character id');

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

  // 127396
  public async getEpisodes(id: string): Promise<FetchResult<Country>> {
    this.validateInput(id, 'Required episode id');

    const endpoint = this.API + '/episodes/' + id;
    const data = await this.fetcher<Country>(endpoint);

    return data;
  }
}
