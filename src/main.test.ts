import { TheTVDB } from './index.js';

const TOKEN = process.env.TVDB_API_TOKEN;

describe('getArtwork method', () => {
  let client: TheTVDB;

  beforeEach(() => {
    client = new TheTVDB('test-token');
  });

  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getArtwork()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'id')"
    );
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getArtwork({ id: '' })).rejects.toThrow('Required artwork id');
  });

  test('does not throw an error when ID is provided', async () => {
    await expect(client.getArtwork({ id: '63237874' })).resolves.not.toThrow();
  });

  test('returns a successful response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { data } = await tv.getArtwork({ id: '63237874' });
    expect(data.id).toBe(63237874);
  });

  test('returns extended data response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { data } = await tv.getArtwork({ id: '63237874', extended: true });
    expect(data.movieId).toBe(145830);
  });
});

describe('getCharacter method', () => {
  let client: TheTVDB;

  beforeEach(() => {
    client = new TheTVDB('test-token');
  });

  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getCharacter()).rejects.toThrow('Required character id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getCharacter('')).rejects.toThrow('Required character id');
  });

  test('does not throw an error when ID is provided', async () => {
    await expect(client.getCharacter('64140522')).resolves.not.toThrow();
  });

  test('returns a successful response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { data } = await tv.getCharacter('64140522');
    expect(data.id).toBe(64140522);
  });
});

describe('getEpisode method', () => {
  let client: TheTVDB;

  beforeEach(() => {
    client = new TheTVDB('test-token');
  });

  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getEpisode()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'id')"
    );
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getEpisode({ id: '' })).rejects.toThrow('Required episode id');
  });

  test('does not throw an error when ID is provided', async () => {
    await expect(client.getEpisode({ id: '127396' })).resolves.not.toThrow();
  });

  test('returns a successful response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { status, data } = await tv.getEpisode({ id: '127396' });
    expect(status).toBe('success');
    expect(data.id).toBe(127396);
  });

  test('returns a extended response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { data } = await tv.getEpisode({ id: '127396', extended: true });
    expect(data.nominations).toBeNull();
  });

  test('returns a extended & meta response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { data } = await tv.getEpisode({ id: '127396', extended: true, meta: true });
    expect(data.translations.nameTranslations[0]?.name).toBe('Schwarzer Ritter');
  });
});
