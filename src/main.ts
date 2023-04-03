import { Base } from './core.js';
import type { Artwork, Character, FetchResult } from './types.js';

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
