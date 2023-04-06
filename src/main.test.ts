import { TheTVDB } from './index.js';

const TOKEN = process.env.TVDB_API_TOKEN;

describe('getArtwork method', () => {
  let client: TheTVDB;

  beforeEach(() => {
    client = new TheTVDB('test-token');
  });

  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(client.getArtwork()).rejects.toThrow('Required artwork id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(client.getArtwork('')).rejects.toThrow('Required artwork id');
  });

  test('does not throw an error when ID is provided', async () => {
    await expect(client.getArtwork('63237874')).resolves.not.toThrow();
  });

  test('returns a successful response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { status, result } = await tv.getArtwork('63237874');
    expect(status).toBe(200);
    expect(result.data.id).toBe(63237874);
  });

  test('returns extended data response', async () => {
    const tv = new TheTVDB(TOKEN);
    const { result } = await tv.getArtwork('63237874', true);
    expect(result.data.movieId).toBe(145830);
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
    const { status, result } = await tv.getCharacter('64140522');
    expect(status).toBe(200);
    expect(result.data.id).toBe(64140522);
  });
});