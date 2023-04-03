interface FetchResult<T> {
  status: number;
  result: T;
}

interface BaseResult {
  status: string;
}

type TagTypes = Array<{
  id: number;
  tag: number;
  tagName: string;
  name: string;
  helpText: string | null;
}> | null;

type Artwork<T extends boolean> = T extends true ? ArtworkExtended : ArtworkBase;

interface ArtworkBase extends BaseResult {
  data: {
    id: number;
    image: string;
    thumbnail: string;
    language: string;
    type: number;
    score: number;
    width: number;
    height: number;
  };
}

interface ArtworkExtended extends ArtworkBase {
  data: ArtworkBase['data'] & {
    episodeId?: number;
    thumbnailWidth: number;
    thumbnailHeight: number;
    updatedAt: number;
    seriesId?: number;
    seriesPeopleId?: number;
    movieId: number;
    status: {
      id: number;
      name: string | null;
    };
    tagOptions: TagTypes;
    type?: number;
  };
}

interface Character extends BaseResult {
  data: {
    id: number;
    name: string;
    peopleId: number;
    seriesId: number | null;
    series: {
      name: string;
      image: string;
      year: string;
    } | null;
    movie: {
      image: string;
      name: string;
      year: string;
    } | null;
    movieId: number | null;
    episode?: {
      image: string;
      name: string;
      year: string;
    };
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

export type { Artwork, FetchResult, BaseResult, Character };
