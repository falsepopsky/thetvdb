interface FetchResult<T> {
  resStatus: number;
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
    seriesId: number;
    status: {
      id: number;
      name: string | null;
    };
    tagOptions: TagTypes;
  };
}

interface Character extends BaseResult {
  data: Array<{
    id: number;
    name: string;
    peopleId: number;
    seriesId: number | null;
    series: {
      image: string;
      name: string;
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
  }>;
}

interface Country extends BaseResult {
  data: Array<{ id: string; name: string; shortCode: string }>;
}

interface ContentRating extends BaseResult {
  data: Array<{
    id: number;
    name: string;
    country: string;
    description: string;
    contentType: string;
    order: number;
    fullName: string;
  }>;
}

interface EntityType extends BaseResult {
  data: Array<{
    id: number;
    name: string;
    hasSpecials: boolean;
  }>;
}

interface Gender extends BaseResult {
  data: Array<{
    id: number;
    name: string;
  }>;
}

export type { Artwork, FetchResult, Country, ContentRating, EntityType, Gender, Character };
