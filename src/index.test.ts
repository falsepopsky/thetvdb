import { TheTVDB } from './index.js';

const TOKEN = process.env.API_TOKEN;

describe('constructor token validation tests', () => {
  it('throws an error if no token is provided', () => {
    expect(
      // @ts-expect-error: expect a parameter token
      () => new TheTVDB()
    ).toThrow('Token is required');
  });

  it('throws an error if an empty string is provided', () => {
    expect(() => new TheTVDB('')).toThrow('Token is required');
  });

  it('throws error when non-string token is provided', () => {
    expect(
      // @ts-expect-error: expect a parameter token with type 'string'
      () => new TheTVDB(1234)
    ).toThrow('Token is required');
  });

  it('creates an instance when a valid token is provided', () => {
    expect(() => new TheTVDB('valid_token')).not.toThrow();
  });
});

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
    const { resStatus, result } = await tv.getArtwork('63237874');
    expect(resStatus).toBe(200);
    expect(result.data.id).toBe(63237874);
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
    const { resStatus, result } = await tv.getCharacter('64140522');
    expect(resStatus).toBe(200);
    expect(result.data.id).toBe(64140522);
  });
});
