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
    await expect(client.getArtwork('175491')).resolves.not.toThrow();
  });

  test('returns a successful response', async () => {
    const tv = new TheTVDB(TOKEN);
    const result = await tv.getArtwork('175491');
    expect(result.resStatus).toBe(200);
  });
});
