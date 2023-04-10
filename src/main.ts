import { Base, type FetchResult } from './core.js';
import type { ContentRating } from './extended.js';

type NameImageYear = {
  name: string;
  image: string;
  year: string;
} | null;

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

interface RemoteId {
  id: string;
  type: number;
  sourceName: string;
}

interface BaseResponse<T> {
  status: string;
  data: T;
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
  series: NameImageYear;
  movie: NameImageYear;
  movieId: number | null;
  episode?: NameImageYear;
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

interface EpisodeExtended extends Episode {
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
}

interface EpisodeTranslation extends EpisodeExtended {
  translations: {
    nameTranslations: Array<{ name: string; language: string }>;
    overviewTranslations: Array<{ overview: string; language: string }>;
    aliases: string[] | null;
  };
}

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

type GetCharacter = BaseResponse<Character>;

type GetArtwork<T extends boolean> = T extends true
  ? BaseResponse<ArtworkExtended>
  : BaseResponse<ArtworkBase>;

type GetEpisode<E extends boolean, M> = E extends true
  ? M extends true
    ? BaseResponse<EpisodeTranslation>
    : BaseResponse<EpisodeExtended>
  : BaseResponse<Episode>;

export class TheTVDB extends Base {
  public async getArtwork<T extends boolean>(query: {
    id: string;
    extended?: T;
  }): Promise<FetchResult<GetArtwork<T>>> {
    this.validateInput(query.id, 'Required artwork id');

    let endpoint = this.api + '/v4/artwork/' + query.id;

    if (typeof query.extended === 'boolean' && query.extended) endpoint += '/extended';

    const data = await this.fetcher<GetArtwork<T>>(endpoint);

    return data;
  }

  public async getCharacter(id: string): Promise<FetchResult<GetCharacter>> {
    this.validateInput(id, 'Required character id');

    const endpoint = this.api + '/v4/characters/' + id;
    const data = await this.fetcher<GetCharacter>(endpoint);

    return data;
  }

  public async getEpisodes<E extends boolean, M extends boolean>(query: {
    id: string;
    extended?: E;
    meta?: M;
  }): Promise<FetchResult<GetEpisode<E, M>>> {
    this.validateInput(query.id, 'Required episode id');
    let endpoint = this.api + '/v4/episodes/' + query.id;

    if (typeof query.extended === 'boolean' && query.extended) {
      endpoint += '/extended';
      (query.meta ?? false) && (endpoint += '?meta=translations');
    }

    const data = await this.fetcher<GetEpisode<E, M>>(endpoint);

    return data;
  }
}
