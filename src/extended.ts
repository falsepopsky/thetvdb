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

interface ArtworkType {
  id: number;
  name: string;
  recordType: string;
  slug: string;
  imageFormat: string;
  width: number;
  height: number;
  thumbWidth: number;
  thumbHeight: number;
}

interface Entity {
  id: number;
  name: string;
  hasSpecials: boolean;
}

interface Shared {
  id: number;
  name: string;
}

interface Inspiration extends Shared {
  description: string;
  reference_name: string;
  url: string;
}

type GetContentRatings = Data<ContentRating[]>;
type GetCountries = Data<Country[]>;
type GetEntities = Data<Entity[]>;
type GetGenders = Data<Shared[]>;
type GetGenres = Data<Genre[]>;
type GetGenreById = Data<Genre>;
type GetInspirationTypes = Data<Inspiration[]>;
type GetLanguages = Data<Language[]>;
type GetUpdates = DataLink<Update[] | null[]>;
type GetArtworkStatuses = Data<Shared[]>;
type GetArtworkTypes = Data<ArtworkType[]>;

export class TheTVDBExtended extends Base {
  public async getArtworkStatuses(): Promise<GetArtworkStatuses> {
    return await this.fetcher<GetArtworkStatuses>(this.api + '/v4/artwork/statuses');
  }

  public async getArtworkTypes(): Promise<GetArtworkTypes> {
    return await this.fetcher<GetArtworkTypes>(this.api + '/v4/artwork/types');
  }

  public async getContentRatings(): Promise<GetContentRatings> {
    return await this.fetcher<GetContentRatings>(this.api + '/v4/content/ratings');
  }

  public async getCountries(): Promise<GetCountries> {
    return await this.fetcher<GetCountries>(this.api + '/v4/countries');
  }

  public async getEntities(): Promise<GetEntities> {
    return await this.fetcher<GetEntities>(this.api + '/v4/entities');
  }

  public async getGenders(): Promise<GetGenders> {
    return await this.fetcher<GetGenders>(this.api + '/v4/genders');
  }

  public async getGenres(): Promise<GetGenres> {
    return await this.fetcher<GetGenres>(this.api + '/v4/genres');
  }

  public async getGenreById(id: string): Promise<GetGenreById> {
    this.validateInput(id, 'Required genre id');

    return await this.fetcher<GetGenreById>(this.api + '/v4/genres/' + id);
  }

  public async getInspirationTypes(): Promise<GetInspirationTypes> {
    return await this.fetcher<GetInspirationTypes>(this.api + '/v4/inspiration/types');
  }

  public async getLanguages(): Promise<GetLanguages> {
    return await this.fetcher<GetLanguages>(this.api + '/v4/languages');
  }

  public async getUpdates(options: updateO): Promise<GetUpdates> {
    this.validateInput(options?.since, 'Required since option');
    const endpoint = this.createURL('/v4/updates');
    const query = this.createQuery(endpoint, options);

    return await this.fetcher<GetUpdates>(query);
  }
}
