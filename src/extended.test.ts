import { TheTVDBExtended } from './index.js';

const TOKEN = process.env.TVDB_API_TOKEN;

describe('getContentRatings method', () => {
  test('returns unauthorized status', async () => {
    const client = new TheTVDBExtended('fake_token');
    const { status } = await client.getContentRatings();
    expect(status).toBe(401);
  });

  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, result } = await client.getContentRatings();
    expect(status).toBe(200);
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data[0]?.name).toBe('ATP');
  });
});

describe('getCountries method', () => {
  test('returns unauthorized status', async () => {
    const client = new TheTVDBExtended('fake_token');
    const { status } = await client.getCountries();
    expect(status).toBe(401);
  });

  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, result } = await client.getCountries();
    expect(status).toBe(200);
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data[0]?.name).toBe('Aruba');
  });
});

describe('getGenres method', () => {
  test('returns unauthorized status', async () => {
    const client = new TheTVDBExtended('fake_token');
    const { status } = await client.getGenres();
    expect(status).toBe(401);
  });

  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, result } = await client.getGenres();
    expect(status).toBe(200);
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.data[0]?.name).toBe('Soap');
  });
});

describe('getUpdates method', () => {
  test('returns unauthorized status', async () => {
    const client = new TheTVDBExtended('fake_token');
    const { status } = await client.getUpdates({ since: '1677780034' });
    expect(status).toBe(401);
  });

  it('should throw an error if since option is not provided', async () => {
    const client = new TheTVDBExtended('fake_token');

    await expect(async () => {
      // @ts-expect-error: expect a parameter since
      await client.getUpdates({ action: 'update' });
    }).rejects.toThrow('Required since option');
  });

  test('returns a successful response', async () => {
    const client = new TheTVDBExtended(TOKEN);
    const { status, result } = await client.getUpdates({
      since: '1677780034',
      type: 'artwork',
      action: 'update',
      page: '0',
    });
    expect(status).toBe(200);
    expect(Array.isArray(result.data)).toBe(true);
    expect(result.status).toBe('success');
    expect(result.data[0]?.recordId).toBe(63394462);
  });
});
