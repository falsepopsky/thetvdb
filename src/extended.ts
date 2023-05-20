import { Base } from './core.js';

export interface DataLink<T> {
  status: string;
  data: T;
  links: {
    prev: string | null;
    self: string;
    next: string;
    total_items: number;
    page_size: number;
  };
}

export type Data<T> = Omit<DataLink<T>, 'links'>;

export type ContentRating = Record<'name' | 'country' | 'description' | 'contentType' | 'fullName', string> &
  Record<'id' | 'order', number>;

type Country = Omit<Language, 'nativeName'>;

export interface Genre {
  id: number;
  name: string;
  slug: string;
}

type Language = Record<'id' | 'name' | 'nativeName' | 'shortCode', string>;

type Update = Record<'recordType' | 'method' | 'extraInfo' | 'entityType' | 'mergeToType', string> &
  Record<'recordId' | 'methodInt' | 'userId' | 'timeStamp' | 'mergeToId' | 'seriesId', number>;

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

interface updateO {
  since: string;
  type?: Entities;
  action?: 'create' | 'delete' | 'update';
  page?: string;
}

type GetContentRatings = Data<ContentRating[]>;
type GetCountries = Data<Country[]>;
type GetGenres = Data<Genre[]>;
type GetLanguages = Data<Language[]>;
type GetUpdates = DataLink<Update[] | null[]>;

export class TheTVDBExtended extends Base {
  public async getContentRatings(): Promise<GetContentRatings> {
    const endpoint = this.api + '/v4/content/ratings';
    return await this.fetcher<GetContentRatings>(endpoint);
  }

  public async getCountries(): Promise<GetCountries> {
    const endpoint = this.api + '/v4/countries';
    return await this.fetcher<GetCountries>(endpoint);
  }

  public async getGenres(): Promise<GetGenres> {
    const endpoint = this.api + '/v4/genres';
    return await this.fetcher<GetGenres>(endpoint);
  }

  public async getLanguages(): Promise<GetLanguages> {
    const endpoint = this.api + '/v4/languages';
    return await this.fetcher<GetLanguages>(endpoint);
  }

  public async getUpdates(options: updateO): Promise<GetUpdates> {
    this.validateInput(options?.since, 'Required since option');
    const endpoint = this.createURL('/v4/updates');
    const query = this.createQuery(endpoint, options);

    return await this.fetcher<GetUpdates>(query);
  }
}
