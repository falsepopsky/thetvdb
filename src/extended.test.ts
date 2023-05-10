import { TheTVDBExtended } from './index.js';

const TOKEN = process.env.TVDB_API_TOKEN;

describe('getContentRatings method', () => {
  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, data } = await client.getContentRatings();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('ATP');
  });
});

describe('getCountries method', () => {
  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, data } = await client.getCountries();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Aruba');
  });
});

describe('getGenres method', () => {
  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, data } = await client.getGenres();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Soap');
  });
});

describe('getLanguages method', () => {
  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, data } = await client.getLanguages();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Afar');
  });
});

describe('getUpdates method', () => {
  it('should throw an error if since option is not provided', async () => {
    const client = new TheTVDBExtended('fake_token');

    await expect(async () => {
      // @ts-expect-error: expect a parameter since
      await client.getUpdates({ action: 'update' });
    }).rejects.toThrow('Required since option');
  });

  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, data } = await client.getUpdates({
      since: '1677780034',
      type: 'artwork',
      action: 'update',
      page: '0',
    });
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
  });
});
