import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('artworkById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.artworkById()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.artworkById('63237874');

    expect(status).toBe('success');
    expect(data.id).toBe(63237874);
    expect(data.image).toBe('https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460.jpg');
    expect(data.includesText).toBe(true);
  });
});

describe('artworkByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.artworkByIdExtended()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.artworkByIdExtended('63237874');

    expect(status).toBe('success');
    expect(data.updatedAt).toBe(1666276812);
    expect(data.movieId).toBe(145830);
    expect(data.includesText).toBe(false);
    expect(data.thumbnailHeight).toBe(500);
  });
});

describe('artworkStatuses()', () => {
  it('returns a successful response', async () => {
    const { status, data } = await client.artworkStatuses();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Low Quality');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Improper Action Shot');
  });
});

describe('artworkTypes()', () => {
  it('returns a successful response', async () => {
    const { status, data } = await client.artworkTypes();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Banner');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Poster');
  });
});
