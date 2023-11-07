import { Base } from './core.js';
import type { ContentRating, Data, DataLink, Genre } from './extended.js';

type Aliases = Record<'language' | 'name', string>;

interface AwardsHelper {
  id: number;
  name: string;
}
interface AwardCategory {
  id: number;
  name: string;
  allowCoNominees: boolean;
  forSeries: boolean;
  forMovies: boolean;
  award: AwardsHelper;
}

interface AwardExtended extends AwardsHelper {
  categories: AwardCategory[];
}

interface AwardCategoryExtended extends AwardCategory {
  nominees: Array<{
    character: Character;
    details: string;
    episode: Episode;
    id: number;
    isWinner: boolean;
    movie: Movie;
    series: Serie;
    year: string;
    category: string;
    name: string;
  }>;
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

interface StatusHelper {
  id: number;
  keepUpdated: boolean;
  name: string;
  recordType: string;
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

interface Company extends Omit<SharedProps, 'image'> {
  activeDate: string;
  aliases: Aliases[];
  country: string;
  inactiveDate: string;
  primaryCompanyType: number;
  slug: string;
  parentCompany: {
    id: number;
    name: string;
    relation: {
      id: number;
      typeName: string;
    };
  };
  tagOptions: TagOptions[];
}

interface CompanyType {
  companyTypeId: number;
  companyTypeName: string;
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
  status: StatusHelper;
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
  episodes: null;
  firstAired: string;
  isOrderRandomized: boolean;
  lastAired: string;
  nextAired: string;
  originalCountry: string;
  originalLanguage: string;
}

interface SerieExtended extends Serie {
  overview: string;
  artworks: Artwork[];
  companies: unknown;
  originalNetwork: unknown;
  latestNetwork: unknown;
  genres: Genre[];
  trailers: Trailer[];
  lists: unknown;
  remoteIds: RemoteId[];
  characters: Character[];
  airsDays: Record<string, boolean>;
  airsTime: string;
  seasons: Season[];
  tags: TagOptions[];
  contentRatings: ContentRating[];
  seasonTypes: SeasonType[];
}

interface SerieExtendedShort extends Omit<SerieExtended, 'artworks' | 'characters'> {
  characters: null;
  artworks: null;
}

interface SerieExtendedTranslations extends SerieExtended {
  translations: Translations;
}

interface SerieExtendedTranslationsShort extends Omit<SerieExtendedTranslations, 'artworks' | 'characters'> {
  characters: null;
  artworks: null;
}

interface SerieExtendedEpisodes extends Omit<SerieExtended, 'episodes'> {
  episodes: Episode[];
}

interface SerieExtendedEpisodesShort extends Omit<SerieExtendedEpisodes, 'artworks' | 'characters'> {
  characters: null;
  artworks: null;
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

interface SeriesOptions extends Omit<Options, 'meta'> {
  meta?: 'translations' | 'episodes';
  short?: boolean;
}

type GetArtwork<O extends ArtworkOptions> = O['extended'] extends true ? Data<ArtworkExtended> : Data<Artwork>;

type GetAwards = Data<AwardsHelper[]>;
type GetAwardsById = Data<AwardsHelper>;
type GetAwardsByIdExtended = Data<AwardExtended>;
type GetAwardsCategoriesById = Data<AwardCategory>;
type GetAwardsCategoriesByIdExtended = Data<AwardCategoryExtended>;

type GetCharacter = Data<Character>;
type GetCompanies = DataLink<Company[]>;
type GetCompaniesTypes = Data<CompanyType[]>;
type GetCompanyById = Data<Company>;

type GetFilteredMovie = DataLink<Movie[]>;

type GetFilteredSeries = DataLink<Serie[]>;

type GetEpisode<O extends Options> = O['extended'] extends true
  ? O['meta'] extends true
    ? Data<EpisodeMeta>
    : Data<EpisodeExtended>
  : Data<Episode>;

type GetEpisodeByLanguage = Data<Pick<TranslationHelper, 'name' | 'overview' | 'language'>>;

type GetEpisodesByPage = DataLink<Episode[]>;

type GetMovie<O extends MovieOptions> = O['extended'] extends true
  ? O['meta'] extends true
    ? O['short'] extends true
      ? Data<MovieExtendedMetaShort>
      : Data<MovieExtendedMeta>
    : O['short'] extends true
    ? Data<MovieExtendedShort>
    : Data<MovieExtended>
  : Data<Movie>;

type GetMoviesByPage = DataLink<Movie[]>;

type GetMovieByLanguage = Data<Pick<TranslationHelper, 'name' | 'overview' | 'language'>>;

type GetMovieBySlug = Data<Movie>;

type GetMovieStatus = DataLink<StatusHelper[]>;

type GetPeople<O extends Options> = O['extended'] extends true
  ? O['meta'] extends true
    ? Data<PeopleMeta>
    : Data<PeopleExtended>
  : Data<People>;

type GetPeopleByLanguage = Data<Pick<TranslationHelper, 'name' | 'overview' | 'language'>>;
type GetPeopleTypes = DataLink<AwardsHelper[]>;

type GetSearch = DataLink<Search[]>;

type GetSeason<O extends Options> = O['extended'] extends true
  ? O['meta'] extends true
    ? Data<SeasonExtendedMeta>
    : Data<SeasonExtended>
  : Data<Season>;

type GetSeasonByLanguage = Data<TranslationHelper>;
type GetSeasonTypes = DataLink<SeasonType[]>;
type GetSeasonsByPage = DataLink<Season[]>;

type GetSerie<O extends SeriesOptions> = O['extended'] extends true
  ? O['meta'] extends 'translations'
    ? O['short'] extends true
      ? Data<SerieExtendedTranslationsShort>
      : Data<SerieExtendedTranslations>
    : O['meta'] extends 'episodes'
    ? O['short'] extends true
      ? Data<SerieExtendedEpisodesShort>
      : Data<SerieExtendedEpisodes>
    : O['short'] extends true
    ? Data<SerieExtendedShort>
    : Data<SerieExtended>
  : Data<Serie>;

export class TheTVDB extends Base {
  public async getArtwork<O extends ArtworkOptions>(options: O): Promise<GetArtwork<O>> {
    this.validateInput(options?.id, 'Required artwork id');
    let endpoint = this.api + '/v4/artwork/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) endpoint += '/extended';

    return await this.fetcher<GetArtwork<O>>(endpoint);
  }

  public async getAwards(): Promise<GetAwards> {
    return await this.fetcher<GetAwards>(this.api + '/v4/awards');
  }

  public async getAwardsById(id: string): Promise<GetAwardsById> {
    this.validateInput(id, 'Required id');

    return await this.fetcher<GetAwardsById>(`${this.api}/v4/awards/${id}`);
  }

  public async getAwardsByIdExtended(id: string): Promise<GetAwardsByIdExtended> {
    this.validateInput(id, 'Required id');

    return await this.fetcher<GetAwardsByIdExtended>(`${this.api}/v4/awards/${id}/extended`);
  }

  public async getAwardsCategoriesById(id: string): Promise<GetAwardsCategoriesById> {
    this.validateInput(id, 'Required id');

    return await this.fetcher<GetAwardsCategoriesById>(`${this.api}/v4/awards/categories/${id}`);
  }

  public async getAwardsCategoriesByIdExtended(id: string): Promise<GetAwardsCategoriesByIdExtended> {
    this.validateInput(id, 'Required id');

    return await this.fetcher<GetAwardsCategoriesByIdExtended>(`${this.api}/v4/awards/categories/${id}/extended`);
  }

  public async getCharacter(id: string): Promise<GetCharacter> {
    this.validateInput(id, 'Required character id');

    return await this.fetcher<GetCharacter>(this.api + '/v4/characters/' + id);
  }

  public async getCompanies(page?: string): Promise<GetCompanies> {
    let endpoint = this.api + '/v4/companies';
    if (typeof page === 'string' && page.length > 0 && page.length < 3) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetCompanies>(endpoint);
  }

  public async getCompaniesTypes(): Promise<GetCompaniesTypes> {
    return await this.fetcher<GetCompaniesTypes>(this.api + '/v4/companies/types');
  }

  public async getCompanyById(id: string): Promise<GetCompanyById> {
    this.validateInput(id, 'Required company id');

    return await this.fetcher<GetCompanyById>(`${this.api}/v4/companies/${id}`);
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

  public async getEpisodeByLanguage(id: string, language: string): Promise<GetEpisodeByLanguage> {
    this.validateInput(id, 'Required episode id');
    this.validateInput(language, 'Required language');

    return await this.fetcher<GetEpisodeByLanguage>(this.api + '/v4/episodes/' + id + '/translations/' + language);
  }

  public async getEpisodesByPage(page?: string): Promise<GetEpisodesByPage> {
    let endpoint = this.api + '/v4/episodes';
    if (typeof page === 'string' && page.length > 0 && page.length <= 5) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetEpisodesByPage>(endpoint);
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

  public async getMoviesByPage(page?: string): Promise<GetMoviesByPage> {
    let endpoint = this.api + '/v4/movies';
    if (typeof page === 'string' && page.length > 0 && page.length <= 3) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetMoviesByPage>(endpoint);
  }

  public async getMovieByLanguage(id: string, language: string): Promise<GetMovieByLanguage> {
    this.validateInput(id, 'Required movie id');
    this.validateInput(language, 'Required language');
    return await this.fetcher<GetMovieByLanguage>(this.api + '/v4/movies/' + id + '/translations/' + language);
  }

  public async getMovieBySlug(slug: string): Promise<GetMovieBySlug> {
    this.validateInput(slug, 'Required slug');
    return await this.fetcher<GetMovieBySlug>(this.api + '/v4/movies/slug/' + slug);
  }

  public async getMovieStatus(): Promise<GetMovieStatus> {
    return await this.fetcher<GetMovieStatus>(this.api + '/v4/movies/statuses');
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

  public async getPeopleByLanguage(id: string, language: string): Promise<GetPeopleByLanguage> {
    this.validateInput(id, 'Required people id');
    this.validateInput(language, 'Required language');
    return await this.fetcher<GetPeopleByLanguage>(this.api + '/v4/people/' + id + '/translations/' + language);
  }

  public async getPeopleTypes(): Promise<GetPeopleTypes> {
    return await this.fetcher<GetPeopleTypes>(this.api + '/v4/people/types');
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

  public async getSeasonByLanguage(id: string, language: string): Promise<GetSeasonByLanguage> {
    this.validateInput(id, 'Required season id');
    this.validateInput(language, 'Required language');
    return await this.fetcher<GetSeasonByLanguage>(this.api + '/v4/seasons/' + id + '/translations/' + language);
  }

  public async getSeasonTypes(): Promise<GetSeasonTypes> {
    return await this.fetcher<GetSeasonTypes>(this.api + '/v4/seasons/types');
  }

  public async getSeasonsByPage(page?: string): Promise<GetSeasonsByPage> {
    let endpoint = this.api + '/v4/seasons';
    if (typeof page === 'string' && page.length > 0 && page.length <= 4) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetSeasonsByPage>(endpoint);
  }

  public async getSerie<O extends SeriesOptions>(options: O): Promise<GetSerie<O>> {
    this.validateInput(options?.id, 'Required series id');
    const endpoint = this.createURL('/v4/series/' + options.id);

    if (typeof options.extended === 'boolean' && options.extended) {
      endpoint.pathname += '/extended';

      if (typeof options.meta === 'string') {
        endpoint.searchParams.set('meta', options.meta);
      }

      if (options.short === true) {
        endpoint.searchParams.set('short', 'true');
      }
    }

    return await this.fetcher<GetSerie<O>>(endpoint.href);
  }
}
