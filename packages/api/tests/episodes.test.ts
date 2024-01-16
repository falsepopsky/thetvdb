import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('episodeById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.episodeById()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.episodeById('127396');

    expect(status).toBe('success');
    expect(data.id).toBe(127396);
    expect(data.name).toBe('黒い騎士');
    expect(Array.isArray(data.seasons)).toBe(true);
    expect(data.seasons).toHaveLength(1);
    expect(data.lastUpdated).toBe('2021-01-24 10:55:06');
  });
});

describe('episodeByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.episodeByIdExtended()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.episodeByIdExtended('127396');

    expect(status).toBe('success');
    expect(Array.isArray(data.characters)).toBe(true);
    expect(data.characters).toHaveLength(2);
    expect(data.characters[0]?.id).toBe(65480386);
    expect(data.characters[0]?.peopleType).toBe('Creator');
    expect(data.characters[0]?.personName).toBe('Kentaro Miura');
    expect(data.characters[1]?.id).toBe(65480413);
    expect(data.characters[1]?.peopleType).toBe('Writer');
    expect(data.characters[1]?.personName).toBe('Atsuhiro Tomioka');
    expect(Array.isArray(data.companies)).toBe(true);
    expect(data.companies).toHaveLength(1);
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

describe('episodeWithTranslation()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.episodeWithTranslation()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: expect a parameter language
    await expect(async () => await client.episodeWithTranslation('40')).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.episodeWithTranslation('40', 'spa');

    expect(status).toBe('success');
    expect(data.name).toBe('El Baile');
    expect(typeof data.overview).toBe('string');
    expect(data.language).toBe('spa');
  });
});

describe('episodes()', () => {
  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.episodes('11890');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(10131123);
    expect(data[0]?.seriesId).toBe(411511);
    expect(data[1]?.id).toBe(10131124);
    expect(data[1]?.seriesId).toBe(411513);
    expect(links.next).toBe('https://api4.thetvdb.com/v4/episodes?page=11891');
  });

  it('returns a successful response without a page', async () => {
    const { status, data, links } = await client.episodes();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(2);
    expect(data[0]?.seriesId).toBe(70327);
    expect(data[0]?.aired).toBe('1997-03-10');
    expect(data[0]?.lastUpdated).toBe('2023-01-07 22:22:27');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(6056735);
  });
});
