import { TheTVDB } from './index.js';

const client = new TheTVDB('fake token');

describe('getArtwork method', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getArtwork()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'id')"
    );
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getArtwork({ id: '' })).rejects.toThrow('Required artwork id');
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

describe('getCharacter method', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getCharacter()).rejects.toThrow('Required character id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getCharacter('')).rejects.toThrow('Required character id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getCharacter('64140522');
    expect(data.id).toBe(64140522);
    expect(data.name).toBe('Spike Spiegel');
  });
});

describe('getEpisode method', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getEpisode()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'id')"
    );
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getEpisode({ id: '' })).rejects.toThrow('Required episode id');
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

describe('getPeople method', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getPeople()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'id')"
    );
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getPeople({ id: '' })).rejects.toThrow('Required people id');
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

describe('getSearch method', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter query
    await expect(client.getSearch()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'query')"
    );
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getSearch({ query: '' })).rejects.toThrow('Required search query');
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
