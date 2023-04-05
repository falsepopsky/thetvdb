import { Base, type FetchResult } from './core.js';

interface BaseResponse<T> {
  status: string;
  data: T;
}

interface ResponseWithLinks<T> extends BaseResponse<T> {
  links: {
    prev: string | null;
    self: string;
    next: string;
    total_items: number;
    page_size: number;
  };
}

interface Update {
  recordType: string;
  recordId: number;
  methodInt: number;
  method: string;
  extraInfo: string;
  userId: number;
  timeStamp: number;
  entityType: string;
}

interface ContentRating {
  id: number;
  name: string;
  country: string;
  description: string;
  contentType: string;
  order: number;
  fullName: string;
}

interface Genre {
  id: number;
  name: string;
  slug: string;
}

interface Language {
  id: string;
  name: string;
  nativeName: string;
  shortCode: string | null;
}

interface Country {
  id: string;
  name: string;
  shortCode: string;
}

type ContentRatings = BaseResponse<ContentRating[]>;
type Countries = BaseResponse<Country[]>;
type Genres = BaseResponse<Genre[]>;
type Languages = BaseResponse<Language[]>;
type UpdateWithLinks = ResponseWithLinks<Update[] | null[]>;

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

export class TheTVDBExtended extends Base {
  public async getContentRatings(): Promise<FetchResult<ContentRatings>> {
    const endpoint = this.api + '/v4/content/ratings';
    const data = await this.fetcher<ContentRatings>(endpoint);

    return data;
  }

  public async getCountries(): Promise<FetchResult<Countries>> {
    const endpoint = this.api + '/v4/countries';
    const data = await this.fetcher<Countries>(endpoint);

    return data;
  }

  public async getGenres(): Promise<FetchResult<Genres>> {
    const endpoint = this.api + '/v4/genres';
    const data = await this.fetcher<Genres>(endpoint);

    return data;
  }

  public async getLanguages(): Promise<FetchResult<Languages>> {
    const endpoint = this.api + '/v4/languages';
    const data = await this.fetcher<Languages>(endpoint);

    return data;
  }

  public async getUpdates(options: {
    since: string;
    type?: Entities;
    action?: 'create' | 'delete' | 'update';
    page?: string;
  }): Promise<FetchResult<UpdateWithLinks>> {
    this.validateInput(options.since, 'Required since option');

    const endpoint = this.createQuery('/v4/updates', options);
    const data = await this.fetcher<UpdateWithLinks>(endpoint);

    return data;
  }
}
