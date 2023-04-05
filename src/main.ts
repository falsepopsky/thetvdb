import { Base, type FetchResult } from './core.js';
import type { BaseResult } from './types.js';

type TagTypes = Array<{
  id: number;
  tag: number;
  tagName: string;
  name: string;
  helpText: string | null;
} | null>;

type Artwork<T extends boolean> = T extends true ? ArtworkExtended : ArtworkBase;

type NameImageYear = {
  name: string;
  image: string;
  year: string;
} | null;

interface ArtworkBase extends BaseResult {
  data: {
    id: number;
    image: string;
    thumbnail: string;
    language: string | null;
    type: number;
    score: number;
    width: number;
    height: number;
  };
}

interface ArtworkExtended extends ArtworkBase {
  data: ArtworkBase['data'] & {
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
  };
}

interface Character extends BaseResult {
  data: {
    id: number;
    name: string;
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
  };
}

/**
 * TheTVDB class for making API requests to TheTVDB.
 * @extends Base
 */
export class TheTVDB extends Base {
  public async getArtwork<T extends boolean = false>(
    id: string,
    extended: T = false as T
  ): Promise<FetchResult<Artwork<T>>> {
    this.validateInput(id, 'Required artwork id');

    let endpoint = this.api + '/v4/artwork/' + id;

    if (extended) endpoint += '/extended';

    const data = await this.fetcher<Artwork<T>>(endpoint);

    return data;
  }

  public async getCharacter(id: string): Promise<FetchResult<Character>> {
    this.validateInput(id, 'Required character id');

    const endpoint = this.api + '/v4/characters/' + id;
    const data = await this.fetcher<Character>(endpoint);

    return data;
  }

  public async getEpisodes(id: string): Promise<FetchResult<Character>> {
    this.validateInput(id, 'Required episode id');

    const endpoint = this.api + '/v4/episodes/' + id;
    const data = await this.fetcher<Character>(endpoint);

    return data;
  }
}
