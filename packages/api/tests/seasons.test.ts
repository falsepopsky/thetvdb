import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('seasonById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.seasonById()).rejects.toThrow('HTTP response status: 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.seasonById('16');

    expect(status).toBe('success');
    expect(data.id).toBe(16);
    expect(data.seriesId).toBe(70327);
    expect(data.lastUpdated).toBe('2023-02-28 22:42:59');
    expect(data.imageType).toBe(7);
    expect(data.year).toBe('2002');
  });
});

describe('seasonByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.seasonByIdExtended()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.seasonByIdExtended('6365');

    expect(status).toBe('success');
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.id).toBe(127396);
    expect(data.episodes[0]?.name).toBe('黒い騎士');
    expect(data.episodes[0]?.lastUpdated).toBe('2021-01-24 10:55:06');
    expect(Array.isArray(data.artwork)).toBe(true);
    expect(data.artwork).toHaveLength(1);
  });

  it('returns a successful meta response', async () => {
    const { status, data } = await client.seasonByIdExtended('6365', true);

    expect(status).toBe('success');
    expect(data.translations.nameTranslations).toBeNull();
    expect(Array.isArray(data.translations.overviewTranslations)).toBe(true);
    expect(data.translations.overviewTranslations).toHaveLength(1);
    expect(typeof data.translations.overviewTranslations[0]?.overview).toBe('string');
    expect(data.translations.overviewTranslations[0]?.language).toBe('rus');
  });
});

describe('seasonTypes()', () => {
  it('returns a successful response', async () => {
    const client = new TheTVDB('fake token');
    const { status, data } = await client.seasonTypes();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Aired Order');
    expect(data[0]?.type).toBe('official');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('DVD Order');
    expect(data[1]?.type).toBe('dvd');
  });
});

describe('seasonWithTranslation()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.seasonWithTranslation()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: expect a parameter language
    await expect(async () => await client.seasonWithTranslation('6365')).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.seasonWithTranslation('6365', 'rus');

    expect(status).toBe('success');
    expect(typeof data.overview).toBe('string');
    expect(data.language).toBe('rus');
  });
});

describe('seasons()', () => {
  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.seasons('1264');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(2055957);
    expect(data[0]?.seriesId).toBe(433129);
    expect(data[0]?.companies.distributor).toBeNull();
    expect(data[0]?.companies.special_effects).toBeNull();
    expect(links.next).toBe('https://api4.thetvdb.com/v4/seasons?page=1265');
  });

  it('returns a successful response without a page', async () => {
    const { status, data, links } = await client.seasons();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(10);
    expect(data[0]?.seriesId).toBe(70327);
    expect(data[0]?.image).toBe('/banners/v4/season/10/posters/61102b79ccabb.jpg');
    expect(data[0]?.companies.distributor).toBeNull();
    expect(data[0]?.companies.special_effects).toBeNull();
    expect(data[0]?.lastUpdated).toBe('2023-02-28 22:30:23');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(643180);
  });
});
