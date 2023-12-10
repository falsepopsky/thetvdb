import { TheTVDBExtended } from '../src/index.js';

const client = new TheTVDBExtended('fake token');

describe('getArtworkStatuses()', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getArtworkStatuses();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Low Quality');
    expect(data[1]?.id).toBe(2);
  });
});

describe('getArtworkTypes()', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getArtworkTypes();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.thumbHeight).toBe(140);
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.imageFormat).toBe('JPG');
  });
});

describe('getContentRatings()', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getContentRatings();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('ATP');
  });
});

describe('getCountries()', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getCountries();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Aruba');
    expect(data[1]?.id).toBe('afg');
  });
});

describe('getEntities()', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getEntities();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('series');
  });
});

describe('getGenres()', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getGenres();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Soap');
    expect(data[1]?.id).toBe(2);
  });
});

describe('getGenreById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getGenreById()).rejects.toThrow('Required genre id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getGenreById('')).rejects.toThrow('Required genre id');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getGenreById('1');
    expect(data.id).toBe(1);
    expect(data.name).toBe('Soap');
  });
});

describe('getGenders()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getGenders();
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Male');
    expect(data[1]?.id).toBe(2);
  });
});

describe('getInspirationTypes()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getInspirationTypes();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.name).toBe('Historical Event');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.reference_name).toBe('Goodreads');
  });
});

describe('getLanguages()', () => {
  test('returns a successful response', async () => {
    const { status, data } = await client.getLanguages();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Afar');
    expect(data[1]?.nativeName).toBe('isiZulu');
  });
});

describe('getSourceTypes()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getSourceTypes();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(2);
    expect(data[0]?.name).toBe('IMDB');
    expect(data[1]?.id).toBe(3);
    expect(data[1]?.name).toBe('TMS (Zap2It)');
  });
});

describe('getUpdates()', () => {
  it('throws an error if since option is not provided', async () => {
    await expect(async () => {
      // @ts-expect-error: expect a parameter since
      await client.getUpdates();
    }).rejects.toThrow('Required since option');
  });

  it('should throw an error if since option is missing in the object', async () => {
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
    expect(links.next).toBe('https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=3');
  });

  test('returns deleted updates', async () => {
    const { data } = await client.getUpdates({
      since: '1682899200',
      action: 'delete',
    });
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.method).toBe('delete');
  });
});
