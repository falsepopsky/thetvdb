import { TheTVDBExtended } from './index.js';
import { server } from './mocks/server.js';

const client = new TheTVDBExtended('fake token');

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe('getContentRatings method', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getContentRatings();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('ATP');
  });
});

describe('getCountries method', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getCountries();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Aruba');
    expect(data[1]?.id).toBe('afg');
  });
});

describe('getGenres method', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getGenres();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Soap');
    expect(data[1]?.id).toBe(2);
  });
});

describe('getLanguages method', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getLanguages();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Afar');
    expect(data[1]?.nativeName).toBe('isiZulu');
  });
});

describe('getUpdates method', () => {
  it('should throw an error if since option is not provided', async () => {
    await expect(async () => {
      // @ts-expect-error: expect a parameter since
      await client.getUpdates({ action: 'update' });
    }).rejects.toThrow('Required since option');
  });

  test('returns a successful response', async () => {
    const { status, data, links } = await client.getUpdates({
      since: '1682899200',
      type: 'artwork',
      action: 'update',
      page: '2',
    });
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.method).toBe('update');
    expect(data).toHaveLength(2);
    expect(links.next).toBe(
      'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=3'
    );
  });
});
