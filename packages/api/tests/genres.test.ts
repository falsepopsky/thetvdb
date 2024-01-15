import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('genreById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.genreById()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.genreById('1');

    expect(status).toBe('success');
    expect(data.id).toBe(1);
    expect(data.name).toBe('Soap');
    expect(data.slug).toBe('soap');
  });
});

describe('genres()', () => {
  it('returns a successful response', async () => {
    const { status, data } = await client.genres();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Soap');
    expect(data[0]?.slug).toBe('soap');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Science Fiction');
    expect(data[1]?.slug).toBe('science-fiction');
  });
});
