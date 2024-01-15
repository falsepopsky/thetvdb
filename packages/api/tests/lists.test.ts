import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('listById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.listById()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.listById('1');

    expect(status).toBe('success');
    expect(data.id).toBe(1);
    expect(data.name).toBe('Scooby-Doo');
    expect(data.remoteIds).toBeNull();
    expect(data.tags).toBeNull();
    expect(data.score).toBe(2234721);
  });
});

describe('listByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.listByIdExtended()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.listByIdExtended('1');

    expect(status).toBe('success');
    expect(Array.isArray(data.tags)).toBe(true);
    expect(data.tags).toHaveLength(2);
    expect(data.tags[0]?.id).toBe(4397);
    expect(data.tags[0]?.tag).toBe(3782);
    expect(data.tags[0]?.tagName).toBe('Genre');
    expect(data.tags[1]?.id).toBe(4398);
    expect(data.tags[1]?.tag).toBe(3782);
    expect(data.tags[1]?.tagName).toBe('Genre');
    expect(Array.isArray(data.entities)).toBe(true);
    expect(data.entities).toHaveLength(2);
  });

  it('returns a successful meta response', async () => {
    const { status, data } = await client.episodeByIdExtended('127396', true);

    expect(status).toBe('success');
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations).toHaveLength(2);
    expect(data.translations.nameTranslations[0]?.name).toBe('El guerrero negro');
    expect(data.translations.nameTranslations[0]?.language).toBe('spa');
    expect(data.translations.nameTranslations[1]?.name).toBe('黑衣劍士');
    expect(data.translations.nameTranslations[1]?.language).toBe('zho');
    expect(Array.isArray(data.translations.overviewTranslations)).toBe(true);
    expect(data.translations.overviewTranslations).toHaveLength(1);
    expect(typeof data.translations.overviewTranslations[0]?.overview).toBe('string');
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
  });
});

describe('listBySlug()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.listBySlug()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.listBySlug('1001');

    expect(status).toBe('success');
    expect(data.url).toBe('1001');
    expect(data.isOfficial).toBe(false);
    expect(data.imageIsFallback).toBe(false);
  });
});

describe('listWithTranslation()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.listWithTranslation()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: expect a parameter language
    await expect(async () => await client.listWithTranslation('17')).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.listWithTranslation('17', 'spa');

    expect(status).toBe('success');
    expect(data[0]?.name).toBe('Star Wars - Colección');
    expect(typeof data[0]?.overview).toBe('string');
    expect(data[0]?.language).toBe('spa');
  });
});

describe('lists()', () => {
  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.lists('7');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(14374);
    expect(data[0]?.name).toBe('Chateau');
    expect(data[1]?.id).toBe(14375);
    expect(data[1]?.name).toBe('Garage Sale Mysteries');
    expect(links.next).toBe('https://api4.thetvdb.com/v4/lists?page=8');
  });

  it('returns a successful response without a page', async () => {
    const { status, data, links } = await client.lists();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.isOfficial).toBe(false);
    expect(data[0]?.imageIsFallback).toBe(false);
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(4976);
  });
});
