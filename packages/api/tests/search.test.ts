import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('search()', () => {
  it('throws an error if no queries.query is provided', async () => {
    // @ts-expect-error: expect a parameter queries.query
    await expect(async () => await client.search()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response with query', async () => {
    const { status, data, links } = await client.search({ query: 'saint seiya' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe('list-14303');
    expect(data[0]?.name).toBe('Saint Seiya Anime Movie Collection');
    expect(data[0]?.type).toBe('list');
    expect(data[0]?.image_url).toBe('https://artworks.thetvdb.com/banners/movies/9601/posters/9601.jpg');
    expect(data[1]?.id).toBe('list-14302');
    expect(data[1]?.name).toBe('Saint Seiya Franchise');
    expect(data[1]?.type).toBe('list');
    expect(data[1]?.image_url).toBe('https://artworks.thetvdb.com/banners/posters/72775-23.jpg');
    expect(links.total_items).toBe(14);
    expect(links.page_size).toBe(50);
  });

  it('returns a successful response with query & type', async () => {
    const { status, data, links } = await client.search({ query: 'saint seiya', type: 'series' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe('series-72775');
    expect(data[0]?.name).toBe('聖闘士星矢');
    expect(data[0]?.type).toBe('series');
    expect(data[0]?.image_url).toBe('https://artworks.thetvdb.com/banners/series/72775/posters/5f847a476866b.jpg');
    expect(links.prev).toBeNull();
    expect(links.next).toBeNull();
  });

  it('returns a successful response with query, type & limit', async () => {
    const { status, data, links } = await client.search({ query: 'yu gi oh', type: 'series', limit: '1' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe('series-253797');
    expect(data[0]?.name).toBe('Yu-Gi-Oh!: The Abridged Series');
    expect(data[0]?.type).toBe('series');
    expect(data[0]?.image_url).toBe('https://artworks.thetvdb.com/banners/posters/253797-1.jpg');
    expect(links.prev).toBeNull();
    expect(links.next).toBe('https://api4.thetvdb.com/v4/search?query=yu gi oh&type=series&limit=1&page=1');
  });
});

describe('searchRemoteId()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.searchRemoteId()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.searchRemoteId('42444');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(3);
    expect(data[0]?.people?.id).toBe(9116037);
    expect(data[0]?.people?.name).toBe('Shlomi Avraham');
    expect(data[0]?.people?.image).toBe('/banners/v4/actor/9116037/photo/64d93ec0244fd.jpg');
    expect(data[0]?.people?.lastUpdated).toBe('2023-08-13 20:36:49');
    expect(data[1]?.movie?.id).toBe(14915);
    expect(data[1]?.movie?.name).toBe("Vacanze Di Natale '91");
    expect(data[1]?.movie?.image).toBe('https://artworks.thetvdb.com/banners/movies/14915/posters/14915.jpg');
    expect(data[1]?.movie?.lastUpdated).toBe('2023-01-08 19:12:00');
    expect(data[2]?.series?.id).toBe(72775);
    expect(data[2]?.series?.name).toBe('聖闘士星矢');
    expect(data[2]?.series?.image).toBe('https://artworks.thetvdb.com/banners/posters/72775-23.jpg');
    expect(data[2]?.series?.lastUpdated).toBe('2024-01-03 13:52:25');
  });
});
