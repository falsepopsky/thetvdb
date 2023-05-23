import { Base } from './core.js';
import type { ContentRating, Data, DataLink, Genre } from './extended.js';

type Aliases = Record<'language' | 'name', string>;

interface AwardsHelper {
  id: number;
  name: string;
}

type NameImageYear = Record<'name' | 'image' | 'year', string>;

interface RemoteId {
  id: string;
  type: number;
  sourceName: string;
}

interface SeasonType {
  id: number;
  name: string;
  type: string;
  alternateName: string | null;
}

interface StudiosHelper {
  id: number;
  name: string;
  parentStudio: number;
}

interface TagOptions {
  id: number;
  tag: number;
  tagName: string;
  name: string;
  helpText: string | null;
}

interface Trailer {
  id: number;
  language: string;
  name: string;
  url: string;
  runtime: number;
}

interface TranslationHelper {
  name: string;
  overview: string;
  language: string;
  aliases?: string[];
  isAlias?: boolean;
  isPrimary?: boolean;
  tagline?: string;
}

interface Translations {
  nameTranslations: TranslationHelper[];
  overviewTranslations: TranslationHelper[];
  aliases: string[] | null;
}

interface SharedProps {
  id: number;
  name: string | null;
  image: string | null;
  nameTranslations: string[];
  overviewTranslations: string[];
}

interface Artwork {
  id: number;
  image: string;
  thumbnail: string;
  language: string | null;
  type: number;
  score: number;
  width: number;
  height: number;
  includesText: boolean;
}

interface ArtworkExtended extends Artwork {
  thumbnailWidth: number;
  thumbnailHeight: number;
  updatedAt: number;
  episodeId?: number;
  seriesId?: number;
  seriesPeopleId?: number;
  movieId?: number;
  status: {
    id: number;
    name: string | null;
  };
  tagOptions: TagOptions[];
}

interface Character extends SharedProps {
  peopleId: number;
  seriesId: number | null;
  series: NameImageYear | null;
  movie: NameImageYear | null;
  movieId: number | null;
  episode?: NameImageYear | null;
  episodeId: number | null;
  type: number;
  sort: number;
  isFeatured: boolean;
  url: string;
  aliases: Aliases[];
  peopleType: string;
  personName: string;
  tagOptions: TagOptions[];
  personImgURL: string | null;
}

interface Episode extends SharedProps {
  seriesId: number;
  aired: string | null;
  runtime: number | null;
  overview: string | null;
  imageType: number | null;
  isMovie: number;
  seasons: Season[];
  number: number;
  seasonNumber: number;
  lastUpdated: string;
  finaleType: string | null;
  airsAfterSeason?: number;
  airsBeforeSeason?: number;
  airsBeforeEpisode?: number;
  year: string;
  linkedMovie?: number;
}

interface EpisodeMeta extends Episode {
  productionCode: string;
  nominations: unknown;
  characters: Character[];
  contentRatings: ContentRating[];
  remoteIds: RemoteId[];
  tagOptions: TagOptions[];
  trailers: Trailer[];
  networks: unknown;
  studios: StudiosHelper[];
  companies: unknown;
  awards: AwardsHelper[];
  translations: Translations;
}

type EpisodeExtended = Omit<EpisodeMeta, 'translations'>;

interface Movie extends SharedProps {
  slug: string;
  aliases: Aliases[];
  score: number;
  runtime: number;
  status: {
    id: number;
    keepUpdated: boolean;
    name: string;
    recordType: string;
  };
  lastUpdated: string;
  year: string;
}

interface MovieExtended extends Movie {
  trailers: Trailer[];
  genres: Genre[];
  releases: Array<Record<'country' | 'date' | 'detail', string>>;
  artworks: Artwork[];
  remoteIds: RemoteId[];
  characters: Character[];
  budget: string;
  boxOffice: string;
  boxOfficeUS: string;
  originalCountry: string;
  originalLanguage: string;
  audioLanguages: string[] | null;
  subtitleLanguages: string[] | null;
  studios: StudiosHelper[];
  awards: AwardsHelper[];
  tagOptions: TagOptions[];
  lists: unknown;
  contentRatings: ContentRating[];
  companies: unknown;
  production_countries: unknown;
  inspirations: unknown;
  spoken_languages: string[];
  first_release: Record<'country' | 'date' | 'detail', string>;
}

interface MovieExtendedMeta extends MovieExtended {
  translations: Translations;
}

interface MovieShort {
  characters: null;
  artworks: null;
  trailers: null;
}

type MovieExtendedShort = Omit<MovieExtended, 'characters' | 'artworks' | 'trailers'> & MovieShort;

type MovieExtendedMetaShort = Omit<MovieExtendedMeta, 'characters' | 'artworks' | 'trailers'> & MovieShort;

type People = Pick<Character, 'id' | 'name' | 'image' | 'nameTranslations' | 'overviewTranslations' | 'aliases'>;

interface PeopleMeta extends People {
  birth: string | null;
  death: string | null;
  birthPlace: string | null;
  remoteIds: RemoteId[];
  gender: number;
  characters: Character[];
  biographies: Array<Record<'biography' | 'language', string>>;
  awards: AwardsHelper[];
  tagOptions: TagOptions[];
  translations: Translations;
  slug: string;
}

type PeopleExtended = Omit<PeopleMeta, 'translations'>;

interface Season extends SharedProps {
  seriesId: number;
  type: SeasonType;
  number: number;
  imageType: number;
  companies: unknown;
  lastUpdated: string;
  year?: string;
}

interface SeasonExtendedMeta extends Season {
  artworks: Artwork[];
  episodes: Episode[];
  trailers: Trailer[];
  tagOptions: TagOptions[];
  translations: Translations;
}

type SeasonExtended = Omit<SeasonExtendedMeta, 'translations'>;

interface Search {
  country: string;
  director: string;
  extended_title: string;
  first_air_time: string;
  id: string;
  image_url: string;
  name: string;
  network: string;
  objectID: string;
  overview: string;
  primary_language: string;
  primary_type: string;
  status: string;
  slug: string;
  thumbnail: string;
  tvdb_id: string;
  type: string;
  year: string;
  aliases: string[];
  genres: string[];
  studios: string[];
  overviews: Record<string, string>;
  translations: Record<string, string>;
  remote_ids: string[];
}

interface Serie extends Omit<Movie, 'runtime'> {
  averageRuntime: number;
  country: string;
  defaultSeasonType: number;
  episodes: Episode[];
  firstAired: string;
  isOrderRandomized: boolean;
  lastAired: string;
  nextAired: string;
  originalCountry: string;
  originalLanguage: string;
}

interface Options {
  id: string;
  extended?: boolean;
  meta?: boolean;
}

interface FilterOptions {
  country: string;
  lang: string;
  company?: string;
  contentRating?: string;
  genre?: string;
  sort?: 'score' | 'firstAired' | 'name';
  status?: '1' | '2' | '3';
  year?: string;
}

interface FilterSeriesOptions extends Omit<FilterOptions, 'sort'> {
  sort?: 'score' | 'firstAired' | 'name' | 'lastAired';
  sortType?: 'asc' | 'desc';
}

type ArtworkOptions = Omit<Options, 'meta'>;

interface MovieOptions extends Options {
  short?: boolean;
}

interface SearchOptions {
  query: string;
  type?: string;
  year?: string;
  company?: string;
  country?: string;
  director?: string;
  language?: string;
  primaryType?: string;
  network?: string;
  remote_id?: string;
  offset?: string;
  limit?: string;
}

type GetArtwork<O extends ArtworkOptions> = O['extended'] extends true ? Data<ArtworkExtended> : Data<Artwork>;

type GetCharacter = Data<Character>;

type GetFilteredMovie = DataLink<Movie[]>;

type GetFilteredSeries = DataLink<Serie[]>;

type GetEpisode<O extends Options> = O['extended'] extends true
  ? O['meta'] extends true
    ? Data<EpisodeMeta>
    : Data<EpisodeExtended>
  : Data<Episode>;

type GetMovie<O extends MovieOptions> = O['extended'] extends true
  ? O['meta'] extends true
    ? O['short'] extends true
      ? Data<MovieExtendedMetaShort>
      : Data<MovieExtendedMeta>
    : O['short'] extends true
    ? Data<MovieExtendedShort>
    : Data<MovieExtended>
  : Data<Movie>;

type GetPeople<O extends Options> = O['extended'] extends true
  ? O['meta'] extends true
    ? Data<PeopleMeta>
    : Data<PeopleExtended>
  : Data<People>;

type GetSearch = DataLink<Search[]>;

type GetSeason<O extends Options> = O['extended'] extends true
  ? O['meta'] extends true
    ? Data<SeasonExtendedMeta>
    : Data<SeasonExtended>
  : Data<Season>;

export class TheTVDB extends Base {
  public async getArtwork<O extends ArtworkOptions>(options: O): Promise<GetArtwork<O>> {
    this.validateInput(options?.id, 'Required artwork id');
    let endpoint = this.api + '/v4/artwork/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) endpoint += '/extended';

    return await this.fetcher<GetArtwork<O>>(endpoint);
  }

  public async getCharacter(id: string): Promise<GetCharacter> {
    this.validateInput(id, 'Required character id');
    const endpoint = this.api + '/v4/characters/' + id;

    return await this.fetcher<GetCharacter>(endpoint);
  }

  public async getFilteredMovie(options: FilterOptions): Promise<GetFilteredMovie> {
    this.validateInput(options?.country, 'Required country of origin');
    this.validateInput(options?.lang, 'Required language');
    const endpoint = this.createURL('/v4/movies/filter');
    const query = this.createQuery(endpoint, options);

    return await this.fetcher<GetFilteredMovie>(query);
  }

  public async getFilteredSeries(options: FilterSeriesOptions): Promise<GetFilteredSeries> {
    this.validateInput(options?.country, 'Required country of origin');
    this.validateInput(options?.lang, 'Required language');
    const endpoint = this.createURL('/v4/series/filter');
    const query = this.createQuery(endpoint, options);

    return await this.fetcher<GetFilteredSeries>(query);
  }

  public async getEpisode<O extends Options>(options: O): Promise<GetEpisode<O>> {
    this.validateInput(options?.id, 'Required episode id');
    let endpoint = this.api + '/v4/episodes/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) {
      endpoint += '/extended';
      (options.meta ?? false) && (endpoint += '?meta=translations');
    }

    return await this.fetcher<GetEpisode<O>>(endpoint);
  }

  public async getMovie<O extends MovieOptions>(options: O): Promise<GetMovie<O>> {
    this.validateInput(options?.id, 'Required movie id');
    const endpoint = this.createURL('/v4/movies/' + options.id);

    if (typeof options.extended === 'boolean' && options.extended) {
      endpoint.pathname += '/extended';

      if (options.meta === true) {
        endpoint.searchParams.set('meta', 'translations');
      }

      if (options.short === true) {
        endpoint.searchParams.set('short', 'true');
      }
    }

    return await this.fetcher<GetMovie<O>>(endpoint.href);
  }

  public async getPeople<O extends Options>(options: O): Promise<GetPeople<O>> {
    this.validateInput(options?.id, 'Required people id');
    let endpoint = this.api + '/v4/people/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) {
      endpoint += '/extended';
      (options.meta ?? false) && (endpoint += '?meta=translations');
    }

    return await this.fetcher<GetPeople<O>>(endpoint);
  }

  public async getSearch(options: SearchOptions): Promise<GetSearch> {
    this.validateInput(options?.query, 'Required search query');
    const endpoint = this.createURL('/v4/search');
    const query = this.createQuery(endpoint, options);

    return await this.fetcher<GetSearch>(query);
  }

  public async getSeason<O extends Options>(options: O): Promise<GetSeason<O>> {
    this.validateInput(options?.id, 'Required season id');
    let endpoint = this.api + '/v4/seasons/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) {
      endpoint += '/extended';
      (options.meta ?? false) && (endpoint += '?meta=translations');
    }

    return await this.fetcher<GetSeason<O>>(endpoint);
  }
}
