import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('movieById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.movieById()).rejects.toThrow('HTTP response status: 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.movieById('12586');

    expect(status).toBe('success');
    expect(data.id).toBe(12586);
    expect(data.name).toBe('超時空要塞マクロス 愛・おぼえていますか');
    expect(data.lastUpdated).toBe('2023-05-15 02:16:07');
    expect(data.score).toBe(492);
  });
});

describe('movieByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.movieByIdExtended()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.movieByIdExtended('12586');

    expect(status).toBe('success');
    expect(Array.isArray(data.trailers)).toBe(true);
    expect(data.trailers).toHaveLength(1);
    expect(data.trailers[0]?.id).toBe(175849);
    expect(data.trailers[0]?.name).toBe('Trailer');
    expect(data.trailers[0]?.language).toBe('jpn');
    expect(Array.isArray(data.genres)).toBe(true);
    expect(data.genres).toHaveLength(1);
  });

  it('returns a successful meta response', async () => {
    const { status, data } = await client.movieByIdExtended('12586', { meta: 'translations' });

    expect(status).toBe('success');
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations).toHaveLength(2);
    expect(data.translations.nameTranslations[0]?.name).toBe('Macross: ¿Recuerdas el amor?');
    expect(data.translations.nameTranslations[0]?.language).toBe('spa');
    expect(data.translations.nameTranslations[1]?.name).toBe('Macross: Do You Remember Love?');
    expect(data.translations.nameTranslations[1]?.language).toBe('eng');
    expect(Array.isArray(data.translations.overviewTranslations)).toBe(true);
    expect(data.translations.overviewTranslations).toHaveLength(1);
    expect(typeof data.translations.overviewTranslations[0]?.overview).toBe('string');
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
  });

  it('returns a successful short response', async () => {
    const { status, data } = await client.movieByIdExtended('3862', { short: 'true' });

    expect(status).toBe('success');
    expect(data.id).toBe(3862);
    expect(data.name).toBe('Interstella 5555: The 5tory of the 5ecret 5tar 5ystem');
    expect(data.trailers).toBeNull();
    expect(data.characters).toBeNull();
  });

  it('returns a successful meta & short response', async () => {
    const { status, data } = await client.movieByIdExtended('3646', { meta: 'translations', short: 'true' });

    expect(status).toBe('success');
    expect(data.slug).toBe('cowboy-bebop-the-movie');
    expect(data.artworks).toBeNull();
    expect(data.characters).toBeNull();
    expect(data.trailers).toBeNull();
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.nameTranslations[0]?.name).toBe(
      'Cowboy Bebop, la película: Llamando a las puertas del cielo'
    );
    expect(data.translations.nameTranslations[0]?.language).toBe('spa');
    expect(Array.isArray(data.translations.overviewTranslations)).toBe(true);
    expect(data.translations.overviewTranslations).toHaveLength(1);
    expect(typeof data.translations.overviewTranslations[0]?.overview).toBe('string');
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
  });
});

describe('movieBySlug()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.movieBySlug()).rejects.toThrow('HTTP response status: 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.movieBySlug('cowboy-bebop-the-movie');

    expect(status).toBe('success');
    expect(data.id).toBe(3646);
    expect(data.name).toBe('カウボーイビバップ 天国の扉');
    expect(data.lastUpdated).toBe('2023-10-11 16:32:15');
    expect(data.score).toBe(19317);
  });
});

describe('movieStatuses()', () => {
  it('returns a successful response', async () => {
    const client = new TheTVDB('fake token');
    const { status, data } = await client.movieStatuses();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Announced');
    expect(data[0]?.recordType).toBe('movie');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Pre-Production');
    expect(data[1]?.recordType).toBe('movie');
  });
});

describe('movieWithTranslation()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.movieWithTranslation()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: expect a parameter language
    await expect(async () => await client.movieWithTranslation('2036')).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.movieWithTranslation('2036', 'spa');

    expect(status).toBe('success');
    expect(data.name).toBe('Neon Genesis Evangelion: The End of Evangelion');
    expect(data.language).toBe('spa');
  });
});

describe('movies()', () => {
  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.movies('674');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(351074);
    expect(data[0]?.name).toBe('How We Get Free');
    expect(data[1]?.id).toBe(351075);
    expect(data[1]?.name).toBe('South to Black Power');
    expect(links.next).toBe('https://api4.thetvdb.com/v4/movies?page=675');
  });

  it('returns a successful response without a page', async () => {
    const { status, data, links } = await client.movies();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Alita: Battle Angel');
    expect(data[0]?.lastUpdated).toBe('2023-12-07 22:44:01');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(338905);
  });
});

describe('moviesFilter()', () => {
  it('returns a successful response without queryParams', async () => {
    const { status, data, links } = await client.moviesFilter();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(7231);
    expect(data[0]?.name).toBe('The Chronicles of Narnia: The Silver Chair');
    expect(links.next).toBe('https://api4.thetvdb.com/v4/movies/filter?page=1');
  });

  it('returns a successful response with country', async () => {
    const { status, data, links } = await client.moviesFilter({ country: 'usa' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Alita: Battle Angel');
    expect(data[0]?.lastUpdated).toBe('2023-12-07 22:44:01');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(112317);
  });

  it('returns a successful response with lang', async () => {
    const { status, data, links } = await client.moviesFilter({ lang: 'spa' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(336179);
    expect(data[0]?.name).toBe('Los Simuladores: La Película');
    expect(data[0]?.lastUpdated).toBe('2022-09-15 19:57:58');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(17108);
  });

  it('returns a successful response with year', async () => {
    const { status, data, links } = await client.moviesFilter({ year: '2024' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(59698);
    expect(data[0]?.name).toBe('Nosferatu');
    expect(data[0]?.lastUpdated).toBe('2023-12-06 10:35:19');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(414);
  });

  it('returns a successful response with country, lang, sort and year params', async () => {
    const { status, data, links } = await client.moviesFilter({
      country: 'usa',
      lang: 'eng',
      sort: 'name',
      year: '2024',
    });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(350222);
    expect(data[0]?.name).toBe('AEW All In London 2024');
    expect(data[0]?.lastUpdated).toBe('2023-09-28 18:31:04');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(20);
  });
});
