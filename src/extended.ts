import { Base } from './core.js';
import type { BaseResult, FetchResult } from './types.js';

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

export class TheTVDBExtended extends Base {
  public async getContentRatings(): Promise<FetchResult<ContentRating>> {
    const endpoint = this.api + '/v4/content/ratings';
    const data = await this.fetcher<ContentRating>(endpoint);

    return data;
  }

  public async getCountries(): Promise<FetchResult<Country>> {
    const endpoint = this.api + '/v4/countries';
    const data = await this.fetcher<Country>(endpoint);

    return data;
  }

  public async getGenres(): Promise<FetchResult<Genre>> {
    const endpoint = this.api + '/v4/genres';
    const data = await this.fetcher<Genre>(endpoint);

    return data;
  }

  public async getUpdates(options: optionsUpdate): Promise<FetchResult<Update>> {
    const endpoint = this.createQuery('/v4/updates', options);
    const data = await this.fetcher<Update>(endpoint);

    return data;
  }
}
