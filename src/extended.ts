import { Base, type FetchResult } from './core.js';
import type { BaseResult } from './types.js';

interface ContentRating extends BaseResult {
  data: Array<{
    id: number;
    name: string;
    country: string;
    description: string;
    contentType: string;
    order: number;
    fullName: string;
  }>;
}

interface Country extends BaseResult {
  data: Array<{ id: string; name: string; shortCode: string }>;
}

interface Genre extends BaseResult {
  data: Array<{ id: number; name: string; slug: string }>;
}

interface Update extends BaseResult {
  data: Array<{
    recordType: string;
    recordId: number;
    methodInt: number;
    method: string;
    extraInfo: string;
    userId: number;
    timeStamp: number;
    entityType: string;
  } | null>;
  links: {
    prev: string | null;
    self: string;
    next: string;
    total_items: number;
    page_size: number;
  };
}

interface Language extends BaseResult {
  data: Array<{ id: string; name: string; nativeName: string; shortCode: string | null }>;
}

type Entities =
  | 'artwork'
  | 'award_nominees'
  | 'companies'
  | 'episodes'
  | 'lists'
  | 'people'
  | 'seasons'
  | 'series'
  | 'seriespeople'
  | 'artworktypes'
  | 'award_categories'
  | 'awards'
  | 'company_types'
  | 'content_ratings'
  | 'countries'
  | 'entity_types'
  | 'genres'
  | 'languages'
  | 'movies'
  | 'movie_genres'
  | 'movie_status'
  | 'peopletypes'
  | 'seasontypes'
  | 'sourcetypes'
  | 'tag_options'
  | 'tags'
  | 'translatedcharacters'
  | 'translatedcompanies'
  | 'translatedepisodes'
  | 'translatedlists'
  | 'translatedmovies'
  | 'translatedpeople'
  | 'translatedseasons'
  | 'translatedserierk';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type optionsUpdate = {
  since: string;
  type?: Entities;
  action?: 'create' | 'delete' | 'update';
  page?: string;
};

/**
 * TheTVDBExtended class for making API requests to TheTVDB.
 * @extends Base
 */
export class TheTVDBExtended extends Base {
  /**
   * Returns a list of content ratings records.
   * @async
   * @returns {Promise<FetchResult<ContentRating>>} - A Promise that resolves with the response object.
   */
  public async getContentRatings(): Promise<FetchResult<ContentRating>> {
    const endpoint = this.api + '/v4/content/ratings';
    const data = await this.fetcher<ContentRating>(endpoint);

    return data;
  }

  /**
   * Returns a list of countries records.
   * @async
   * @returns {Promise<FetchResult<Country>>} - A Promise that resolves with the response object.
   */
  public async getCountries(): Promise<FetchResult<Country>> {
    const endpoint = this.api + '/v4/countries';
    const data = await this.fetcher<Country>(endpoint);

    return data;
  }

  /**
   * Returns a list of genres records.
   * @async
   * @returns {Promise<FetchResult<Genre>>} - A Promise that resolves with the response object.
   */
  public async getGenres(): Promise<FetchResult<Genre>> {
    const endpoint = this.api + '/v4/genres';
    const data = await this.fetcher<Genre>(endpoint);

    return data;
  }

  /**
   * Returns a list of languages records.
   * @async
   * @returns {Promise<FetchResult<Language>>} - A Promise that resolves with the response object.
   */
  public async getLanguages(): Promise<FetchResult<Language>> {
    const endpoint = this.api + '/v4/languages';
    const data = await this.fetcher<Language>(endpoint);

    return data;
  }

  /**
   * Returns a list of updates since the specified timestamp.
   * @async
   * @param {optionsUpdate} options - The options for the request.
   * @param {string} options.since - The timestamp to get updates in epoch Unix format in seconds.
   * @returns {Promise<FetchResult<Update>>} - A Promise that resolves with the response object.
   * @throws {Error} - Throws an error if the `since` option is not provided or is invalid.
   */
  public async getUpdates(options: optionsUpdate): Promise<FetchResult<Update>> {
    this.validateInput(options.since, 'Required since option');

    const endpoint = this.createQuery('/v4/updates', options);
    const data = await this.fetcher<Update>(endpoint);

    return data;
  }
}
