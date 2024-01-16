import { URL } from 'node:url';

/* Check every task BEFORE release 1.0.0
 - [x] Complete other TODOs first.
 - [x] Remove "get" from method names.
 - [ ] Include links to documentation for each method.
 - [x] Ensure method names match their respective endpoints.
 - [x] Use the parameter name "queries" for methods requiring multiple query parameters.
 - [x] Alphabetically sort public methods (A to Z) https://www.online-utility.org/text/sort.jsp.
 - [x] Begin return types with "Get" for all methods.
 - [x] Incorporate the appropriate "Response" or "ResponseLink" in each method's return type.
 - [x] Specify the correct "Type" or "Type[]" in each method's return type.
 - [x] Remove all "console.log" instances.
 */

interface Response<T> {
  status: string;
  data: T;
}

interface ResponseLink<T> extends Response<T> {
  links: {
    prev: string | null;
    self: string;
    next: string | null;
    total_items: number;
    page_size: number;
  };
}

// Helpers for properties

type Aliases = Record<'language' | 'name', string>;

type CompanyRecord = Record<'studio' | 'network' | 'production' | 'distributor' | 'special_effects', Company[]>;

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
  | 'translatedseries';

interface IdName {
  id: number;
  name: string;
}

interface Inspirations extends Record<'type' | 'type_name' | 'url', string> {
  id: number;
}

type NameImageYear = Record<'name' | 'image' | 'year', string>;

interface ProductionCountries extends IdName {
  country: string;
}

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

interface SharedProps {
  id: number;
  name: string | null;
  image: string | null;
  nameTranslations: string[] | null;
  overviewTranslations: string[] | null;
}

interface StatusHelper extends IdName {
  keepUpdated: boolean;
  recordType: string;
}

interface StudiosHelper extends IdName {
  parentStudio: number;
}

interface TagOptions {
  helpText: string | null;
  id: number;
  name: string;
  tag: number;
  tagName: string;
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

// FROM HERE ENTITY TYPES

interface Artwork {
  height: number;
  id: number;
  image: string;
  includesText: boolean;
  language: string | null;
  score: number;
  thumbnail: string;
  type: number;
  width: number;
}

interface ArtworkExtended extends Artwork {
  thumbnailWidth: number;
  thumbnailHeight: number;
  updatedAt: number;
  episodeId?: number;
  seriesId?: number;
  seriesPeopleId?: number;
  movieId?: number;
  status: IdName;
  tagOptions: TagOptions[];
}

interface ArtworkType {
  height: number;
  id: number;
  imageFormat: string;
  name: string;
  recordType: string;
  slug: string;
  thumbHeight: number;
  thumbWidth: number;
  width: number;
}

interface AwardCategory {
  allowCoNominees: boolean;
  award: IdName;
  forMovies: boolean;
  forSeries: boolean;
  name: string;
  id: number;
}

interface AwardCategoryExtended extends AwardCategory {
  nominees: Array<{
    category: null;
    character: null;
    details: string;
    episode: null;
    id: number;
    isWinner: boolean;
    movie: Movie | null;
    name: null;
    series: Serie | null;
    year: string;
  }>;
}

interface AwardExtended extends IdName {
  categories: AwardCategory[];
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
  aliases: Aliases[] | null;
  peopleType: string;
  personName: string;
  tagOptions: TagOptions[] | null;
  personImgURL: string | null;
}

interface Company extends Omit<SharedProps, 'image'> {
  activeDate: string;
  aliases: Aliases[];
  companyType: CompanyType;
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

type ContentRating = Record<'name' | 'country' | 'description' | 'contentType' | 'fullname', string> &
  Record<'id' | 'order', number>;

type Country = Omit<Language, 'nativeName'>;

interface Entity extends IdName {
  hasSpecials: boolean;
}

interface EpisodePage extends Omit<SharedProps, 'nameTranslations' | 'overviewTranslations'> {
  aired: string;
  finaleType: string | null;
  imageType: null;
  isMovie: number;
  lastUpdated: string;
  nameTranslations: null;
  number: null;
  overview: null;
  overviewTranslations: null;
  runtime: null;
  seasons: null;
  seasonNumber: null;
  seriesId: number;
}

interface Episode extends SharedProps {
  aired: string;
  airsAfterSeason?: number;
  airsBeforeSeason?: number;
  airsBeforeEpisode?: number;
  finaleType: string | null;
  imageType: number;
  isMovie: number;
  lastUpdated: string;
  linkedMovie?: number;
  number: number;
  overview: string;
  runtime: number | null;
  seasons: SeasonPage[];
  seasonNumber: number;
  seriesId: number;
  year: string;
}

interface EpisodeExtended extends Episode {
  productionCode: string;
  nominations: null;
  characters: Character[];
  contentRatings: ContentRating[];
  remoteIds: RemoteId[];
  tagOptions: TagOptions[];
  trailers: Trailer[];
  networks: null;
  studios: StudiosHelper[];
  companies: Company[];
  awards: IdName[];
}

interface EpisodeExtendedTranslations extends EpisodeExtended {
  translations: Translations;
}

interface Genre extends IdName {
  slug: string;
}

interface Inspiration extends IdName {
  description: string;
  reference_name: string;
  url: string;
}

type Language = Record<'id' | 'name' | 'nativeName' | 'shortCode', string>;

interface List extends SharedProps {
  overview: string;
  url: string;
  isOfficial: boolean;
  aliases: Aliases[];
  score: number;
  imageIsFallback: boolean;
  remoteIds: null;
  tags: null;
}

interface ListExtended extends Omit<List, 'tags'> {
  tags: TagOptions[];
  entities: Array<Record<'order' | 'seriesId' | 'movieId', number | null>>;
}

interface Movie extends SharedProps {
  aliases: Aliases[];
  lastUpdated: string;
  runtime: number;
  score: number;
  slug: string;
  status: StatusHelper;
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
  awards: IdName[];
  tagOptions: TagOptions[];
  lists: List[];
  contentRatings: ContentRating[];
  companies: CompanyRecord;
  production_countries: ProductionCountries[];
  inspirations: Inspirations[];
  spoken_languages: string[];
  first_release: Record<'country' | 'date' | 'detail', string>;
}

interface MovieExtendedMeta extends MovieExtended {
  translations: Translations;
}

interface MovieExtendedMetaShort extends Omit<MovieExtendedMeta, 'characters' | 'artworks' | 'trailers'> {
  characters: null;
  artworks: null;
  trailers: null;
}

interface MovieExtendedShort extends Omit<MovieExtended, 'characters' | 'artworks' | 'trailers'> {
  characters: null;
  artworks: null;
  trailers: null;
}

interface People extends SharedProps {
  aliases: Aliases[] | null;
  lastUpdated: string;
  score: number;
}

interface PeopleExtended extends People {
  birth: string | null;
  death: string | null;
  birthPlace: string | null;
  remoteIds: RemoteId[];
  gender: number;
  characters: Character[];
  biographies: Array<Record<'biography' | 'language', string>>;
  awards: IdName[];
  tagOptions: TagOptions[];
  slug: string;
}

interface PeopleExtendedTranslations extends PeopleExtended {
  translations: Translations;
}

interface SeasonPage extends Omit<SharedProps, 'name'> {
  seriesId: number;
  type: SeasonType;
  number: number;
  imageType: number;
  companies: Record<'studio' | 'network' | 'production' | 'distributor' | 'special_effects', null>;
  lastUpdated: string;
}

interface Season extends SeasonPage {
  year: string;
}

interface SeasonExtended extends Omit<Season, 'companies'> {
  artwork: Artwork[];
  episodes: Episode[];
  trailers: Trailer[];
  tagOptions: TagOptions[];
  companies: CompanyRecord;
}

interface SeasonExtendedTranslations extends SeasonExtended {
  translations: Translations;
}

interface Search {
  aliases: string[];
  country: string;
  director: string;
  extended_title: string;
  first_air_time: string;
  genres: string[];
  id: string;
  image_url: string;
  name: string;
  network: string;
  objectID: string;
  overview: string;
  overviews: Record<string, string>;
  primary_language: string;
  primary_type: string;
  remote_ids: string[];
  slug: string;
  status: string;
  studios: string[];
  thumbnail: string;
  translations: Record<string, string>;
  tvdb_id: string;
  type: string;
  year: string;
}

interface SearchRemote {
  episode?: Episode;
  company?: Company;
  movie?: Movie;
  people?: People;
  series?: Serie;
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
  overview: string;
}

interface SerieExtended extends Serie {
  airsDays: Record<string, boolean>;
  airsTime: string;
  artworks: ArtworkExtended[];
  characters: Character[];
  companies: Company[];
  contentRatings: ContentRating[];
  genres: Genre[];
  latestNetwork: Company;
  lists: List[];
  originalNetwork: Company;
  remoteIds: RemoteId[];
  seasonTypes: SeasonType[];
  seasons: SeasonPage[];
  tags: TagOptions[];
  trailers: Trailer[];
}

interface SerieArtworks extends Serie {
  airsDays: Record<string, boolean>;
  airsTime: null;
  artworks: ArtworkExtended[];
  characters: null;
  companies: null;
  contentRatings: null;
  genres: null;
  lists: null;
  remoteIds: null;
  seasons: null;
  tags: null;
  trailers: null;
}

interface SerieExtendedTranslations extends SerieExtended {
  translations: Translations;
}

interface SerieExtendedEpisodes extends Omit<SerieExtended, 'episodes'> {
  episodes: Episode[];
}

interface SerieExtendedShort extends Omit<SerieExtended, 'artworks' | 'characters'> {
  artworks: null;
  characters: null;
}

interface SerieExtendedShortTranslations extends SerieExtendedShort {
  translations: Translations;
}

interface SerieExtendedShortEpisodes extends Omit<SerieExtendedShort, 'episodes'> {
  episodes: Episode[];
}

interface SerieSeasonType {
  series: Serie;
  episodes: Episode[];
}

interface SerieSeasonTypeLanguage extends Omit<Serie, 'episodes'> {
  episodes: Episode[];
}

interface Source extends Genre {
  postfix: string | null;
  prefix: string | null;
  sort: number;
}

type Update = Record<'recordType' | 'method' | 'extraInfo' | 'entityType' | 'mergeToType', string> &
  Record<'recordId' | 'methodInt' | 'userId' | 'timeStamp' | 'mergeToId' | 'seriesId', number>;

// Paths parameters for methods

interface PathsSerieEpisodes {
  id: string;
  seasonType: string;
}

interface PathsSerieEpisodesLanguage extends PathsSerieEpisodes {
  language: string;
}

// Query parameters for methods

interface QueriesMoviesFilter {
  country?: string;
  lang?: string;
  company?: string;
  contentRating?: string;
  genre?: string;
  sort?: 'score' | 'firstAired' | 'name';
  status?: '1' | '2' | '3';
  year?: string;
  page?: string;
}

interface QueriesMovieExtended {
  meta?: 'translations';
  short?: 'true' | 'false';
}

interface QueriesSearch {
  company?: string;
  country?: string;
  director?: string;
  language?: string;
  limit?: string;
  network?: string;
  offset?: string;
  page?: string;
  primaryType?: string;
  query: string;
  remote_id?: string;
  type?: string;
  year?: string;
}

interface QueriesSerieArtworks {
  lang?: string;
  type?: string;
}

interface QueriesSerieExtended {
  meta?: 'translations' | 'episodes';
  short?: 'true' | 'false';
}

interface QueriesSeriesFilter extends Omit<QueriesMoviesFilter, 'sort'> {
  sort?: 'score' | 'firstAired' | 'name' | 'lastAired';
  sortType?: 'asc' | 'desc';
}

interface QueriesSerieEpisodes {
  airDate?: string;
  episodeNumber?: string;
  page?: string;
  season?: string;
}

interface QueriesUpdates {
  since: string;
  type?: Entities;
  action?: 'create' | 'delete' | 'update';
  page?: string;
}

// Return types for methods

type GetArtwork = Response<Artwork>;
type GetArtworkExtended = Response<ArtworkExtended>;
type GetArtworkStatuses = Response<IdName[]>;
type GetArtworkTypes = Response<ArtworkType[]>;
type GetAwardsById = Response<IdName>;
type GetAwardByIdExtended = Response<AwardExtended>;
type GetAwardCategoryById = Response<AwardCategory>;
type GetAwardCategoryByIdExtended = Response<AwardCategoryExtended>;
type GetAwards = Response<IdName[]>;
type GetCharacterById = Response<Character>;
type GetCompanies = ResponseLink<Company[]>;
type GetCompaniesTypes = Response<CompanyType[]>;
type GetCompanyById = Response<Company>;
type GetContentRatings = Response<ContentRating[]>;
type GetCountries = Response<Country[]>;
type GetEntities = Response<Entity[]>;
type GetEpisodeById = Response<Episode>;
type GetEpisodeByIdExtended<T> = T extends true ? Response<EpisodeExtendedTranslations> : Response<EpisodeExtended>;
type GetEpisodeWithTranslation = Response<TranslationHelper>;
type GetEpisodes = ResponseLink<EpisodePage[]>;
type GetGenders = Response<IdName[]>;
type GetGenreById = Response<Genre>;
type GetGenres = Response<Genre[]>;
type GetInspirationTypes = Response<Inspiration[]>;
type GetLanguages = Response<Language[]>;
type GetListById = Response<List>;
type GetListByIdExtended = Response<ListExtended>;
type GetListBySlug = Response<List>;
type GetListWithTranslation = Response<TranslationHelper[]>;
type GetLists = ResponseLink<List[]>;
type GetMovieById = Response<Movie>;
type GetMovieByIdExtended<Q extends QueriesMovieExtended> = Q['meta'] extends 'translations'
  ? Q['short'] extends 'true'
    ? Response<MovieExtendedMetaShort>
    : Response<MovieExtendedMeta>
  : Q['short'] extends 'true'
    ? Response<MovieExtendedShort>
    : Response<MovieExtended>;
type GetMovieBySlug = Response<Movie>;
type GetMovieStatuses = Response<StatusHelper[]>;
type GetMovieWithTranslation = Response<TranslationHelper>;
type GetMovies = ResponseLink<Movie[]>;
type GetMoviesFilter = ResponseLink<Movie[]>;
type GetPeople = ResponseLink<People[]>;
type GetPeopleById = Response<People>;
type GetPeopleByIdExtended<T> = T extends true ? Response<PeopleExtendedTranslations> : Response<PeopleExtended>;
type GetPeopleTypes = Response<IdName[]>;
type GetPeopleWithTranslation = Response<TranslationHelper>;
type GetSearch = ResponseLink<Search[]>;
type GetSearchRemoteId = Response<SearchRemote[]>;
type GetSeasonById = Response<Season>;
type GetSeasonByIdExtended<T> = T extends true ? Response<SeasonExtendedTranslations> : Response<SeasonExtended>;
type GetSeasonTypes = Response<SeasonType[]>;
type GetSeasonWithTranslation = Response<TranslationHelper>;
type GetSeasons = ResponseLink<SeasonPage[]>;
type GetSerieById = Response<Serie>;
type GetSerieByIdArtworks = Response<SerieArtworks>;
type GetSerieByIdExtended<Q extends QueriesSerieExtended> = Q['meta'] extends 'translations'
  ? Q['short'] extends 'true'
    ? Response<SerieExtendedShortTranslations>
    : Response<SerieExtendedTranslations>
  : Q['meta'] extends 'episodes'
    ? Q['short'] extends 'true'
      ? Response<SerieExtendedShortEpisodes>
      : Response<SerieExtendedEpisodes>
    : Q['short'] extends 'true'
      ? Response<SerieExtendedShort>
      : Response<SerieExtended>;
type GetSerieByIdNextAired = Response<Serie>;
type GetSerieBySlug = Response<Serie>;
type GetSerieEpisodes = ResponseLink<SerieSeasonType>;
type GetSerieEpisodesWithLanguage = ResponseLink<SerieSeasonTypeLanguage>;
type GetSerieStatuses = Response<StatusHelper[]>;
type GetSerieWithTranslation = Response<TranslationHelper>;
type GetSeries = ResponseLink<Serie[]>;
type GetSeriesFilter = ResponseLink<Serie[]>;
type GetSourcesTypes = Response<Source[]>;
type GetUpdates = ResponseLink<Update[]>;

/**
 * Client library for TheTVDB API in Node.js
 */
export class TheTVDB {
  private _token: string;
  private readonly api = 'https://api4.thetvdb.com';

  /**
   * @param token Bearer token for subsequent API calls.
   */
  constructor(token: string) {
    if (typeof token !== 'string' || token.length === 0) {
      throw new Error('Token is required');
    }

    this._token = token;
  }

  /**
   * @param url The URL target.
   * @returns A promise with the fetching data.
   * @throws Will throw an error if `response.ok` is false.
   */
  protected async fetcher<T>(url: string | URL): Promise<T> {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this._token}` },
    });

    if (!response.ok) {
      const status = response.status;
      const resJSON = await response.json();
      throw new RangeError(`HTTP response status ${status} from thetvdb API.`, {
        cause: {
          status,
          resJSON,
        },
      });
    }

    return (await response.json()) as T;
  }

  /**
   * @param path paths for the URL.
   * @returns The URL instance with paths.
   */
  protected createURL(path: string): URL {
    return new URL(path, this.api);
  }

  /**
   * @param url The `URL` instance.
   * @param queries The object with search parameters.
   * @returns The URL with queries applied.
   */
  protected createQuery(url: URL, queries?: object): string {
    if (typeof queries === 'object') {
      for (const [key, value] of Object.entries(queries)) {
        if (typeof value === 'string' && value.length >= 1) {
          url.searchParams.set(key, value);
        }
      }
    }
    return url.href;
  }

  /**
   * @param token The new token for making API calls.
   */
  public updateToken(token: string): void {
    this._token = token;
  }

  /**
   * @param id The artwork `id`.
   * @returns Single artwork record.
   */
  public async artworkById(id: string): Promise<GetArtwork> {
    return await this.fetcher<GetArtwork>(`${this.api}/v4/artwork/${id}`);
  }

  /**
   * @param id The `artwork` id.
   * @returns Single extended artwork record.
   */
  public async artworkByIdExtended(id: string): Promise<GetArtworkExtended> {
    return await this.fetcher<GetArtworkExtended>(`${this.api}/v4/artwork/${id}/extended`);
  }

  /**
   * @returns A list of artwork status records.
   */
  public async artworkStatuses(): Promise<GetArtworkStatuses> {
    return await this.fetcher<GetArtworkStatuses>(`${this.api}/v4/artwork/statuses`);
  }

  /**
   * @returns A list of artwork types records.
   */
  public async artworkTypes(): Promise<GetArtworkTypes> {
    return await this.fetcher<GetArtworkTypes>(`${this.api}/v4/artwork/types`);
  }

  /**
   * @param id The award `id`.
   * @returns Single award record.
   */
  public async awardById(id: string): Promise<GetAwardsById> {
    return await this.fetcher<GetAwardsById>(`${this.api}/v4/awards/${id}`);
  }

  /**
   * @param id The award `id`.
   * @returns Single extended award record.
   */
  public async awardByIdExtended(id: string): Promise<GetAwardByIdExtended> {
    return await this.fetcher<GetAwardByIdExtended>(`${this.api}/v4/awards/${id}/extended`);
  }

  /**
   * @param id The award category `id`.
   * @returns Single award category record.
   */
  public async awardCategoryById(id: string): Promise<GetAwardCategoryById> {
    return await this.fetcher<GetAwardCategoryById>(`${this.api}/v4/awards/categories/${id}`);
  }

  /**
   * @param id The award category `id`.
   * @returns Single extended award category record.
   */
  public async awardCategoryByIdExtended(id: string): Promise<GetAwardCategoryByIdExtended> {
    return await this.fetcher<GetAwardCategoryByIdExtended>(`${this.api}/v4/awards/categories/${id}/extended`);
  }

  /**
   * @returns A list of awards records.
   */
  public async awards(): Promise<GetAwards> {
    return await this.fetcher<GetAwards>(`${this.api}/v4/awards`);
  }

  /**
   * @param id The character `id`.
   * @returns Single character record.
   */
  public async characterById(id: string): Promise<GetCharacterById> {
    return await this.fetcher<GetCharacterById>(`${this.api}/v4/characters/${id}`);
  }

  /**
   * @param page Restrict results to a specific page.
   * @returns A list of companies records.
   */
  public async companies(page?: string): Promise<GetCompanies> {
    let endpoint = this.api + '/v4/companies';
    if (typeof page === 'string' && page.length > 0 && page.length < 3) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetCompanies>(endpoint);
  }

  /**
   * @returns A list of companies type records.
   */
  public async companiesTypes(): Promise<GetCompaniesTypes> {
    return await this.fetcher<GetCompaniesTypes>(`${this.api}/v4/companies/types`);
  }

  /**
   * @param id The company `id`.
   * @returns Single company record.
   */
  public async companyById(id: string): Promise<GetCompanyById> {
    return await this.fetcher<GetCompanyById>(`${this.api}/v4/companies/${id}`);
  }

  /**
   * @returns A list of content ratings records.
   */
  public async contentRatings(): Promise<GetContentRatings> {
    return await this.fetcher<GetContentRatings>(`${this.api}/v4/content/ratings`);
  }

  /**
   * @returns A list of country records.
   */
  public async countries(): Promise<GetCountries> {
    return await this.fetcher<GetCountries>(`${this.api}/v4/countries`);
  }

  /**
   * @returns A list of entity types records.
   */
  public async entities(): Promise<GetEntities> {
    return await this.fetcher<GetEntities>(`${this.api}/v4/entities`);
  }

  /**
   * @param id The episode `id`.
   * @returns Single episode record.
   */
  public async episodeById(id: string): Promise<GetEpisodeById> {
    return await this.fetcher<GetEpisodeById>(`${this.api}/v4/episodes/${id}`);
  }

  /**
   * @param id The episode `id`.
   * @param translation Indicates whether to include translation information in the response.
   *   Set to `true` to include the `translations` property in the record.
   *   Defaults to `false` if not provided.
   * @returns Single extended episode record.
   */
  public async episodeByIdExtended<T extends boolean = false>(
    id: string,
    translation = false as T
  ): Promise<GetEpisodeByIdExtended<T>> {
    let endpoint = `${this.api}/v4/episodes/${id}/extended`;
    if (typeof translation === 'boolean' && translation) {
      endpoint += '?meta=translations';
    }
    return await this.fetcher<GetEpisodeByIdExtended<T>>(endpoint);
  }

  /**
   * @param id The episode `id`.
   * @param language The episode `language`.
   * @returns Single episode translation record.
   */
  public async episodeWithTranslation(id: string, language: string): Promise<GetEpisodeWithTranslation> {
    return await this.fetcher<GetEpisodeWithTranslation>(`${this.api}/v4/episodes/${id}/translations/${language}`);
  }

  /**
   * @param page Restrict results to a specific page.
   * @returns A list of episode records.
   */
  public async episodes(page?: string): Promise<GetEpisodes> {
    let endpoint = this.api + '/v4/episodes';
    if (typeof page === 'string' && page.length > 0 && page.length <= 5) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetEpisodes>(endpoint);
  }

  /**
   * @returns A list of gender records.
   */
  public async genders(): Promise<GetGenders> {
    return await this.fetcher<GetGenders>(`${this.api}/v4/genders`);
  }

  /**
   * @param id The genre `id`.
   * @returns Single genre record.
   */
  public async genreById(id: string): Promise<GetGenreById> {
    return await this.fetcher<GetGenreById>(`${this.api}/v4/genres/${id}`);
  }

  /**
   * @returns A list of genre records.
   */
  public async genres(): Promise<GetGenres> {
    return await this.fetcher<GetGenres>(`${this.api}/v4/genres`);
  }

  /**
   * @returns A list of inspiration types records.
   */
  public async inspirationTypes(): Promise<GetInspirationTypes> {
    return await this.fetcher<GetInspirationTypes>(`${this.api}/v4/inspiration/types`);
  }

  /**
   * @returns A list of language records.
   */
  public async languages(): Promise<GetLanguages> {
    return await this.fetcher<GetLanguages>(`${this.api}/v4/languages`);
  }

  /**
   * @param id The list `id`.
   * @returns Single list record.
   */
  public async listById(id: string): Promise<GetListById> {
    return await this.fetcher<GetListById>(`${this.api}/v4/lists/${id}`);
  }

  /**
   * @param id The list `id`.
   * @returns Single extended list record.
   */
  public async listByIdExtended(id: string): Promise<GetListByIdExtended> {
    return await this.fetcher<GetListByIdExtended>(`${this.api}/v4/lists/${id}/extended`);
  }

  /**
   * @param slug The list `slug`.
   * @returns Single list record.
   */
  public async listBySlug(slug: string): Promise<GetListBySlug> {
    return await this.fetcher<GetListBySlug>(`${this.api}/v4/lists/slug/${slug}`);
  }

  /**
   * @param id The list `id`.
   * @param language The list `language`.
   * @returns Single list translation record.
   */
  public async listWithTranslation(id: string, language: string): Promise<GetListWithTranslation> {
    return await this.fetcher<GetListWithTranslation>(`${this.api}/v4/lists/${id}/translations/${language}`);
  }

  /**
   * @param page Restrict results to a specific page.
   * @returns A list of list records.
   */
  public async lists(page?: string): Promise<GetLists> {
    let endpoint = `${this.api}/v4/lists`;
    if (typeof page === 'string' && page.length > 0 && page.length < 3) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetLists>(endpoint);
  }

  /**
   * @param id The movie `id`
   * @returns Single movie record.
   */
  public async movieById(id: string): Promise<GetMovieById> {
    return await this.fetcher<GetMovieById>(`${this.api}/v4/movies/${id}`);
  }

  /**
   * @param id The movie `id`
   * @param queries An object containing search parameters to restrict the result.
   * @returns Single extended movie record.
   */
  public async movieByIdExtended<Q extends QueriesMovieExtended>(
    id: string,
    queries?: Q
  ): Promise<GetMovieByIdExtended<Q>> {
    const url = this.createURL(`/v4/movies/${id}/extended`);
    const endpoint = this.createQuery(url, queries);

    return await this.fetcher<GetMovieByIdExtended<Q>>(endpoint);
  }

  /**
   * @param slug The movie `slug`.
   * @returns Single movie record.
   */
  public async movieBySlug(slug: string): Promise<GetMovieBySlug> {
    return await this.fetcher<GetMovieBySlug>(`${this.api}/v4/movies/slug/${slug}`);
  }

  /**
   * @returns A list of movie status records.
   */
  public async movieStatuses(): Promise<GetMovieStatuses> {
    return await this.fetcher<GetMovieStatuses>(`${this.api}/v4/movies/statuses`);
  }

  /**
   * @param id The movie `id`.
   * @param language The movie `language`.
   * @returns Single movie translation record.
   */
  public async movieWithTranslation(id: string, language: string): Promise<GetMovieWithTranslation> {
    return await this.fetcher<GetMovieWithTranslation>(`${this.api}/v4/movies/${id}/translations/${language}`);
  }

  /**
   * @param page Restrict results to a specific page.
   * @returns A list of movie records.
   */
  public async movies(page?: string): Promise<GetMovies> {
    let endpoint = `${this.api}/v4/movies`;
    if (typeof page === 'string' && page.length > 0 && page.length <= 3) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetMovies>(endpoint);
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of movie records.
   */
  public async moviesFilter(queries?: QueriesMoviesFilter): Promise<GetMoviesFilter> {
    const url = this.createURL('/v4/movies/filter');
    const endpoint = this.createQuery(url, queries);
    return await this.fetcher<GetMoviesFilter>(endpoint);
  }

  /**
   * @param page Restrict results to a specific page.
   * @returns A list of people records.
   */
  public async people(page?: string): Promise<GetPeople> {
    let endpoint = `${this.api}/v4/people`;
    if (typeof page === 'string' && page.length > 0 && page.length <= 4) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetPeople>(endpoint);
  }

  /**
   * @param id The people `id`
   * @returns Single people record.
   */
  public async peopleById(id: string): Promise<GetPeopleById> {
    return await this.fetcher<GetPeopleById>(`${this.api}/v4/people/${id}`);
  }

  /**
   * @param id The people `id`.
   * @param translation Indicates whether to include translation information in the response.
   *   Set to `true` to include the `translations` property in the record.
   *   Defaults to `false` if not provided.
   * @returns Single extended people record.
   */
  public async peopleByIdExtended<T extends boolean = false>(
    id: string,
    translation = false as T
  ): Promise<GetPeopleByIdExtended<T>> {
    let endpoint = `${this.api}/v4/people/${id}/extended`;
    if (typeof translation === 'boolean' && translation) {
      endpoint += '?meta=translations';
    }
    return await this.fetcher<GetPeopleByIdExtended<T>>(endpoint);
  }

  /**
   * @returns A list of people types records.
   */
  public async peopleTypes(): Promise<GetPeopleTypes> {
    return await this.fetcher<GetPeopleTypes>(`${this.api}/v4/people/types`);
  }

  /**
   * @param id The people `id`.
   * @param language The people `language`.
   * @returns Single people translation record.
   */
  public async peopleWithTranslation(id: string, language: string): Promise<GetPeopleWithTranslation> {
    return await this.fetcher<GetPeopleWithTranslation>(`${this.api}/v4/people/${id}/translations/${language}`);
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of query search records.
   */
  public async search(queries: QueriesSearch): Promise<GetSearch> {
    const endpoint = this.createURL('/v4/search');
    const query = this.createQuery(endpoint, queries);
    return await this.fetcher<GetSearch>(query);
  }

  /**
   * @param id The remote `id`
   * @returns A list of entity records based on remote id.
   */
  public async searchRemoteId(id: string): Promise<GetSearchRemoteId> {
    return await this.fetcher<GetSearchRemoteId>(`${this.api}/v4/search/remoteid/${id}`);
  }

  /**
   * @param id The season `id`
   * @returns Single season record.
   */
  public async seasonById(id: string): Promise<GetSeasonById> {
    return await this.fetcher<GetSeasonById>(`${this.api}/v4/seasons/${id}`);
  }

  /**
   * @param id The season `id`.
   * @param translation Indicates whether to include translation information in the response.
   *   Set to `true` to include the `translations` property in the record.
   *   Defaults to `false` if not provided.
   * @returns Single extended season record.
   */
  public async seasonByIdExtended<T extends boolean = false>(
    id: string,
    translation = false as T
  ): Promise<GetSeasonByIdExtended<T>> {
    let endpoint = `${this.api}/v4/seasons/${id}/extended`;
    if (typeof translation === 'boolean' && translation) {
      endpoint += '?meta=translations';
    }
    return await this.fetcher<GetSeasonByIdExtended<T>>(endpoint);
  }

  /**
   * @returns A list of season types records.
   */
  public async seasonTypes(): Promise<GetSeasonTypes> {
    return await this.fetcher<GetSeasonTypes>(`${this.api}/v4/seasons/types`);
  }

  /**
   * @param id The season `id`.
   * @param language The season `language`.
   * @returns Single season translation record.
   */
  public async seasonWithTranslation(id: string, language: string): Promise<GetSeasonWithTranslation> {
    return await this.fetcher<GetSeasonWithTranslation>(`${this.api}/v4/seasons/${id}/translations/${language}`);
  }

  /**
   * @param page Restrict results to a specific page.
   * @returns A list of seasons records.
   */
  public async seasons(page?: string): Promise<GetSeasons> {
    let endpoint = `${this.api}/v4/seasons`;
    if (typeof page === 'string' && page.length > 0 && page.length <= 4) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetSeasons>(endpoint);
  }

  /**
   * @param id The serie `id`
   * @returns Single serie record.
   */
  public async serieById(id: string): Promise<GetSerieById> {
    return await this.fetcher<GetSerieById>(`${this.api}/v4/series/${id}`);
  }

  /**
   * @param id The serie `id`
   * @param queries An object containing search parameters to restrict the result.
   * @returns Single serie record.
   */
  public async serieByIdArtworks(id: string, queries?: QueriesSerieArtworks): Promise<GetSerieByIdArtworks> {
    const url = this.createURL(`/v4/series/${id}/artworks`);
    const endpoint = this.createQuery(url, queries);

    return await this.fetcher<GetSerieByIdArtworks>(endpoint);
  }

  /**
   * @param id The serie `id`
   * @param queries An object containing search parameters to restrict the result.
   * @returns Single extended serie record.
   */
  public async serieByIdExtended<Q extends QueriesSerieExtended>(
    id: string,
    queries?: Q
  ): Promise<GetSerieByIdExtended<Q>> {
    const url = this.createURL(`/v4/series/${id}/extended`);
    const endpoint = this.createQuery(url, queries);

    return await this.fetcher<GetSerieByIdExtended<Q>>(endpoint);
  }

  /**
   * @param id The serie `id`
   * @returns Single serie record.
   */
  public async serieByIdNextAired(id: string): Promise<GetSerieByIdNextAired> {
    return await this.fetcher<GetSerieByIdNextAired>(`${this.api}/v4/series/${id}/nextAired`);
  }

  /**
   * @param slug The serie `slug`.
   * @returns Single serie record.
   */
  public async serieBySlug(slug: string): Promise<GetSerieBySlug> {
    return await this.fetcher<GetSerieBySlug>(`${this.api}/v4/series/slug/${slug}`);
  }

  /**
   * @param paths An object containing the `id` and `seasonType` of the serie.
   * @param queries An object containing query parameters to restrict the result.
   * @returns Episodes from the specified season type in a serie record.
   */
  public async serieEpisodes(paths: PathsSerieEpisodes, queries?: QueriesSerieEpisodes): Promise<GetSerieEpisodes> {
    const url = this.createURL(`/v4/series/${paths.id}/episodes/${paths.seasonType}`);
    const endpoint = this.createQuery(url, queries);
    return await this.fetcher<GetSerieEpisodes>(endpoint);
  }

  /**
   * @param paths An object containing the `id` and `seasonType` of the serie.
   * @param page Restrict results to a specific page.
   * @returns Episodes from the specified season type and language in a serie record.
   */
  public async serieEpisodesWithLanguage(
    paths: PathsSerieEpisodesLanguage,
    page?: string
  ): Promise<GetSerieEpisodesWithLanguage> {
    let endpoint = `${this.api}/v4/series/${paths.id}/episodes/${paths.seasonType}/${paths.language}`;
    if (typeof page === 'string' && page.length > 0 && page.length <= 3) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetSerieEpisodesWithLanguage>(endpoint);
  }

  /**
   * @returns A list of serie status records.
   */
  public async serieStatuses(): Promise<GetSerieStatuses> {
    return await this.fetcher<GetSerieStatuses>(`${this.api}/v4/series/statuses`);
  }

  /**
   * @param id The serie `id`.
   * @param language The serie `language`.
   * @returns Single serie translation record.
   */
  public async serieWithTranslation(id: string, language: string): Promise<GetSerieWithTranslation> {
    return await this.fetcher<GetSerieWithTranslation>(`${this.api}/v4/series/${id}/translations/${language}`);
  }

  /**
   * @param page Restrict results to a specific page.
   * @returns A list of series records.
   */
  public async series(page?: string): Promise<GetSeries> {
    let endpoint = `${this.api}/v4/series`;
    if (typeof page === 'string' && page.length > 0 && page.length <= 3) {
      endpoint += `?page=${page}`;
    }
    return await this.fetcher<GetSeries>(endpoint);
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of series records.
   */
  public async seriesFilter(queries?: QueriesSeriesFilter): Promise<GetSeriesFilter> {
    const url = this.createURL('/v4/series/filter');
    const endpoint = this.createQuery(url, queries);

    return await this.fetcher<GetSeriesFilter>(endpoint);
  }

  /**
   * @returns A list of source types records.
   */
  public async sourcesTypes(): Promise<GetSourcesTypes> {
    return await this.fetcher<GetSourcesTypes>(`${this.api}/v4/sources/types`);
  }

  /**
   * @param queries An object containing query parameters to restrict the result.
   * @returns A list of updated records.
   */
  public async updates(queries: QueriesUpdates): Promise<GetUpdates> {
    const url = this.createURL('/v4/updates');
    const endpoint = this.createQuery(url, queries);
    return await this.fetcher<GetUpdates>(endpoint);
  }
}
