import { Base } from './core.js';

interface DataLink<T> {
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

type Update = {
  [key in 'recordType' | 'method' | 'extraInfo' | 'entityType' | 'mergeToType']: string;
} & {
  [key in 'recordId' | 'methodInt' | 'userId' | 'timeStamp' | 'mergeToId' | 'seriesId']: number;
};

export type ContentRating = {
  [key in 'name' | 'country' | 'description' | 'contentType' | 'fullName']: string;
} & {
  [key in 'id' | 'order']: number;
};

interface Genre {
  id: number;
  name: string;
  slug: string;
}

type Language = {
  [key in 'id' | 'name' | 'nativeName' | 'shortCode']: string;
};

type Country = Omit<Language, 'nativeName'>;

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

  public async getUpdates(options: {
    since: string;
    type?: Entities;
    action?: 'create' | 'delete' | 'update';
    page?: string;
  }): Promise<GetUpdates> {
    this.validateInput(options.since, 'Required since option');

    const endpoint = this.createQuery('/v4/updates', options);
    return await this.fetcher<GetUpdates>(endpoint);
  }
}
