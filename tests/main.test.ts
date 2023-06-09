import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('getArtwork()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getArtwork()).rejects.toThrow('Required artwork id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getArtwork({ id: '' })).rejects.toThrow('Required artwork id');
  });

  test('returns a successful response', async () => {
    const { data, status } = await client.getArtwork({ id: '63237874' });
    expect(status).toBe('success');
    expect(data.id).toBe(63237874);
  });

  test('returns extended data response', async () => {
    const { data } = await client.getArtwork({ id: '63237874', extended: true });
    expect(data.movieId).toBe(145830);
  });
});

describe('getCharacter()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getCharacter()).rejects.toThrow('Required character id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getCharacter('')).rejects.toThrow('Required character id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getCharacter('64140522');
    expect(data.id).toBe(64140522);
    expect(data.name).toBe('Spike Spiegel');
  });
});

describe('getEpisode()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getEpisode()).rejects.toThrow('Required episode id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getEpisode({ id: '' })).rejects.toThrow('Required episode id');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getEpisode({ id: '127396' });
    expect(status).toBe('success');
    expect(data.id).toBe(127396);
  });

  it('returns a extended response', async () => {
    const { data } = await client.getEpisode({ id: '127396', extended: true });
    expect(data.nominations).toBeNull();
    expect(data.seriesId).toBe(73752);
  });

  it('returns a extended & meta response', async () => {
    const { data } = await client.getEpisode({ id: '127396', extended: true, meta: true });
    expect(data.translations.nameTranslations[0]?.name).toBe('Schwarzer Ritter');
  });
});

describe('getFilteredMovie()', () => {
  it('throws an error if no country is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getFilteredMovie()).rejects.toThrow('Required country of origin');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getFilteredMovie({ country: 'eng' })).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getFilteredMovie({ country: 'usa', lang: 'eng' });
    expect(status).toBe('success');
    expect(data[0]?.name).toBe('The Fortress');
    expect(Array.isArray(data)).toBe(true);
  });

  it('returns records filtered by year', async () => {
    const { data } = await client.getFilteredMovie({ country: 'usa', lang: 'eng', year: '2023' });
    expect(data[0]?.year).toBe('2023');
  });

  test('returns records sorted by name', async () => {
    const { data } = await client.getFilteredMovie({ country: 'usa', lang: 'eng', sort: 'name' });
    expect(data).toHaveLength(1);
    expect(data[0]?.name).toBe('-Ship: A Visual Poem');
  });
});

describe('getFilteredSeries()', () => {
  it('throws an error if no country is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getFilteredSeries()).rejects.toThrow('Required country of origin');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getFilteredSeries({ country: 'eng' })).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getFilteredSeries({ country: 'usa', lang: 'eng' });
    expect(status).toBe('success');
    expect(data[0]?.name).toBe('Made In Hollywood');
    expect(Array.isArray(data)).toBe(true);
  });

  it('returns records filtered by year', async () => {
    const { data } = await client.getFilteredSeries({ country: 'usa', lang: 'eng', year: '2023' });
    expect(data[0]?.year).toBe('2023');
  });

  test('returns records sorted by name', async () => {
    const { data } = await client.getFilteredSeries({ country: 'usa', lang: 'eng', sort: 'name' });
    expect(data).toHaveLength(1);
    expect(data[0]?.name).toBe('Adriana Gaming');
  });
});

describe('getMovie()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter query
    await expect(async () => await client.getMovie()).rejects.toThrow('Required movie id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getMovie({ id: '' })).rejects.toThrow('Required movie id');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getMovie({ id: '12586' });
    expect(data.id).toBe(12586);
    expect(data.slug).toBe('macross-do-you-remember-love');
  });

  it('returns a extended response', async () => {
    const { data } = await client.getMovie({ id: '12586', extended: true });
    expect(data.trailers).toHaveLength(2);
    expect(data.trailers[0]?.id).toBe(143117);
  });

  it('returns a extended & meta response', async () => {
    const { data } = await client.getMovie({ id: '3646', extended: true, meta: true });
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
  });

  it('returns a extended & short response', async () => {
    const { data } = await client.getMovie({ id: '3646', extended: true, short: true });
    expect(data.characters).toBeNull();
    expect(data.artworks).toBeNull();
    expect(data.trailers).toBeNull();
  });

  it('returns a extended, meta & short response', async () => {
    const { data } = await client.getMovie({
      id: '3646',
      extended: true,
      meta: true,
      short: true,
    });
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
    expect(data.characters).toBeNull();
    expect(data.artworks).toBeNull();
    expect(data.trailers).toBeNull();
  });
});

describe('getPeople()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getPeople()).rejects.toThrow('Required people id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getPeople({ id: '' })).rejects.toThrow('Required people id');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getPeople({ id: '312388' });
    expect(status).toBe('success');
    expect(data.id).toBe(312388);
  });

  it('returns a extended response', async () => {
    const { data } = await client.getPeople({ id: '312388', extended: true });
    expect(data.gender).toBe(1);
  });

  it('returns a extended & meta response', async () => {
    const { data } = await client.getPeople({ id: '312388', extended: true, meta: true });
    expect(data.translations.nameTranslations[0]?.name).toBe('Chris Pratt');
  });
});

describe('getSearch()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getSearch()).rejects.toThrow('Required search query');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getSearch({ query: '' })).rejects.toThrow('Required search query');
  });

  test('returns a successful response', async () => {
    const { status, data } = await client.getSearch({ query: 'saint seiya' });
    expect(status).toBe('success');
    expect(data[0]?.objectID).toBe('series-426391');
    expect(data[0]?.country).toBe('jpn');
  });

  test('returns a series type response', async () => {
    const { data } = await client.getSearch({ query: 'saint seiya', type: 'series' });
    expect(data[0]?.type).toBe('series');
  });

  test('limits the lenght with 1', async () => {
    const { data } = await client.getSearch({ query: 'saint seiya', type: 'series', limit: '1' });
    expect(data).toHaveLength(1);
    expect(data[0]?.country).toBe('jpn');
  });
});

describe('getSeason()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getSeason()).rejects.toThrow('Required season id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getSeason({ id: '' })).rejects.toThrow('Required season id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getSeason({ id: '1698074' });
    expect(data.seriesId).toBe(70350);
  });

  test('returns a extended response', async () => {
    const { data } = await client.getSeason({ id: '6365', extended: true });
    expect(data.image).toBe('https://artworks.thetvdb.com/banners/seasons/24394-1.jpg');
  });

  test('returns a extended & meta response', async () => {
    const { data } = await client.getSeason({ id: '6365', extended: true, meta: true });
    expect(data.translations.nameTranslations).toBeNull();
  });
});

describe('getSeries()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required series id
    await expect(async () => await client.getSerie()).rejects.toThrow('Required series id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getSerie({ id: '' })).rejects.toThrow('Required series id');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getSerie({ id: '78878' });
    expect(data.id).toBe(78878);
  });

  it('returns a extended response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true });
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks[0]?.id).toBe(686641);
  });

  it('returns a extended & short response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, short: true });
    expect(data.characters).toBeNull();
  });

  it('returns a extended and translations response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'translations' });

    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks[0]?.id).toBe(686641);
    expect(data.translations.nameTranslations[0]?.language).toBe('spa');
  });

  it('returns a extended, translations and short response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'translations', short: true });

    expect(data.characters).toBeNull();
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations[0]?.name).toBe('Fooly Cooly (FLCL)');
  });

  it('returns a extended and meta episodes response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'episodes' });

    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks[0]?.id).toBe(686641);
    expect(data.episodes[0]?.name).toBe('フリクリ プログレ');
  });

  it('returns a extended, episodes and short response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'episodes', short: true });

    expect(data.artworks).toBeNull();
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes[0]?.aired).toBe('2018-09-28');
  });
});
