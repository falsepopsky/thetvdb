import { Base, type FetchResult } from './core.js';

type NameImageYear = {
  name: string;
  image: string;
  year: string;
} | null;

type TagTypes = Array<{
  id: number;
  tag: number;
  tagName: string;
  name: string;
  helpText: string | null;
} | null>;

interface BaseResponse<T> {
  status: string;
  data: T;
}

interface Character {
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

type GetCharacter = BaseResponse<Character>;
type Artwork<T extends boolean> = T extends true
  ? BaseResponse<ArtworkExtended>
  : BaseResponse<ArtworkBase>;

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

  public async getCharacter(id: string): Promise<FetchResult<GetCharacter>> {
    this.validateInput(id, 'Required character id');

    const endpoint = this.api + '/v4/characters/' + id;
    const data = await this.fetcher<GetCharacter>(endpoint);

    return data;
  }

  public async getEpisodes(id: string): Promise<FetchResult<Character>> {
    this.validateInput(id, 'Required episode id');

    const endpoint = this.api + '/v4/episodes/' + id;
    const data = await this.fetcher<Character>(endpoint);

    return data;
  }
}
