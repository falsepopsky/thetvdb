import { Base } from './core.js';
import type { ContentRating, Data, DataLink } from './extended.js';

type NameImageYear = {
  [key in 'name' | 'image' | 'year']: string;
};

interface SeasonType {
  id: number;
  name: string;
  type: string;
  alternateName: string | null;
}

type TagTypes = Array<{
  id: number;
  tag: number;
  tagName: string;
  name: string;
  helpText: string | null;
} | null>;

interface DefaultTranslation {
  name: string;
  overview: string;
  language: string;
  aliases?: string[];
  isAlias?: boolean;
  isPrimary?: boolean;
  tagline?: string;
}

interface Translations {
  nameTranslations: DefaultTranslation[];
  overviewTranslations: DefaultTranslation[];
  aliases: string[] | null;
}

interface RemoteId {
  id: string;
  type: number;
  sourceName: string;
}

interface ArtworkBase {
  id: number;
  image: string;
  thumbnail: string;
  language: string | null;
  type: number;
  score: number;
  width: number;
  height: number;
}

interface ArtworkExtended extends ArtworkBase {
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
  tagOptions: TagTypes;
}

interface Character {
  id: number;
  name: string | null;
  peopleId: number;
  seriesId: number | null;
  series: NameImageYear | null;
  movie: NameImageYear | null;
  movieId: number | null;
  episode?: NameImageYear | null;
  episodeId: number | null;
  type: number;
  image: string | null;
  sort: number;
  isFeatured: boolean;
  url: string;
  nameTranslations: Array<string | null>;
  overviewTranslations: Array<string | null>;
  aliases: Array<{
    language: string;
    name: string;
  } | null>;
  peopleType: string;
  personName: string;
  tagOptions: TagTypes;
  personImgURL: string | null;
}

type PeopleKeys = 'id' | 'name' | 'image' | 'nameTranslations' | 'overviewTranslations' | 'aliases';

type People = Pick<Character, PeopleKeys>;

type PeopleTranslation = People & {
  birth: string | null;
  death: string | null;
  birthPlace: string | null;
  remoteIds: RemoteId[];
  gender: number;
  characters: Character[];
  biographies: Array<{ biography: string; language: string } | null>;
  awards: unknown;
  tagOptions: TagTypes;
  translations: Translations;
  slug: string;
};

type PeopleExtended = Omit<PeopleTranslation, 'translations'>;

interface Episode {
  id: number;
  seriesId: number;
  name: string;
  aired: string | null;
  runtime: number | null;
  nameTranslations: string[];
  overview: string | null;
  overviewTranslations: string[] | null[];
  image: string | null;
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

interface EpisodeTranslation extends Episode {
  productionCode: string;
  nominations: unknown;
  characters: Character[];
  contentRatings: ContentRating[];
  remoteIds: RemoteId[];
  tagOptions: TagTypes;
  trailers: unknown;
  networks: unknown;
  studios: unknown;
  companies: unknown;
  awards: unknown;
  translations: Translations;
}

type EpisodeExtended = Omit<EpisodeTranslation, 'translations'>;

interface Season {
  id: number;
  seriesId: number;
  type: SeasonType;
  name: string;
  number: number;
  nameTranslations: string[] | null;
  overviewTranslations: string[] | null;
  image: string;
  imageType: number;
  companies: {
    studio: null;
    network: null;
    production: null;
    distributor: null;
    special_effects: null;
  };
  lastUpdated: string;
  year?: string;
}

type SearchKeys = {
  [key in
    | 'type'
    | 'year'
    | 'company'
    | 'country'
    | 'director'
    | 'language'
    | 'primaryType'
    | 'network'
    | 'remote_id'
    | 'offset'
    | 'limit']: string;
};

type SearchOptions = Partial<SearchKeys> & {
  query: string;
};

type SearchStringKeys =
  | 'country'
  | 'director'
  | 'extended_title'
  | 'first_air_time'
  | 'id'
  | 'image_url'
  | 'name'
  | 'network'
  | 'objectID'
  | 'overview'
  | 'primary_language'
  | 'primary_type'
  | 'status'
  | 'slug'
  | 'thumbnail'
  | 'tvdb_id'
  | 'type'
  | 'year';

type SearchArrayStringKeys = 'aliases' | 'genres' | 'studios';

type Search = {
  [key in SearchStringKeys]: string;
} & {
  [key in SearchArrayStringKeys]: string[];
} & {
  overviews: Record<string, string>;
  translations: Record<string, string>;
  remote_ids: RemoteId[];
};

type GetCharacter = Data<Character>;

type GetArtwork<T extends boolean> = T extends true ? Data<ArtworkExtended> : Data<ArtworkBase>;

type GetEpisode<E extends boolean, M> = E extends true
  ? M extends true
    ? Data<EpisodeTranslation>
    : Data<EpisodeExtended>
  : Data<Episode>;

type GetPeople<E extends boolean, M> = E extends true
  ? M extends true
    ? Data<PeopleTranslation>
    : Data<PeopleExtended>
  : Data<People>;

type GetSearch = DataLink<Search[]>;

export class TheTVDB extends Base {
  public async getArtwork<T extends boolean>(options: {
    id: string;
    extended?: T;
  }): Promise<GetArtwork<T>> {
    this.validateInput(options.id, 'Required artwork id');
    let endpoint = this.api + '/v4/artwork/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) endpoint += '/extended';

    return await this.fetcher<GetArtwork<T>>(endpoint);
  }

  public async getCharacter(id: string): Promise<GetCharacter> {
    this.validateInput(id, 'Required character id');
    const endpoint = this.api + '/v4/characters/' + id;

    return await this.fetcher<GetCharacter>(endpoint);
  }

  public async getEpisode<E extends boolean, M extends boolean>(options: {
    id: string;
    extended?: E;
    meta?: M;
  }): Promise<GetEpisode<E, M>> {
    this.validateInput(options.id, 'Required episode id');
    let endpoint = this.api + '/v4/episodes/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) {
      endpoint += '/extended';
      (options.meta ?? false) && (endpoint += '?meta=translations');
    }

    return await this.fetcher<GetEpisode<E, M>>(endpoint);
  }

  public async getPeople<E extends boolean, M extends boolean>(options: {
    id: string;
    extended?: E;
    meta?: M;
  }): Promise<GetPeople<E, M>> {
    this.validateInput(options.id, 'Required people id');
    let endpoint = this.api + '/v4/people/' + options.id;

    if (typeof options.extended === 'boolean' && options.extended) {
      endpoint += '/extended';
      (options.meta ?? false) && (endpoint += '?meta=translations');
    }

    return await this.fetcher<GetPeople<E, M>>(endpoint);
  }

  public async getSearch(options: SearchOptions): Promise<GetSearch> {
    this.validateInput(options.query, 'Required search query');
    const endpoint = this.createQuery('/v4/search', options);

    return await this.fetcher<GetSearch>(endpoint);
  }
}
