import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('getArtwork()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getArtwork()).rejects.toThrow('Required artwork id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getArtwork({ id: '' })).rejects.toThrow('Required artwork id');
  });

  test('returns a successful response', async () => {
    const { data, status } = await client.getArtwork({ id: '63237874' });
    expect(status).toBe('success');
    expect(data.id).toBe(63237874);
  });

  test('returns extended data response', async () => {
    const { data } = await client.getArtwork({ id: '63237874', extended: true });
    expect(data.movieId).toBe(145830);
  });
});

describe('getAwards()', () => {
  test('returns a successful response', async () => {
    const { data, status } = await client.getAwards();
    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Academy Awards');
  });
});

describe('getAwardsById()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getAwardsById('1');
    expect(data.id).toBe(1);
    expect(data.name).toBe('Academy Awards');
  });
});

describe('getAwardsByIdExtended()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getAwardsByIdExtended('1');
    expect(Array.isArray(data.categories)).toBe(true);
    expect(data.categories[0]?.id).toBe(1);
    expect(data.categories[0]?.name).toBe('Best Picture');
  });
});

describe('getAwardsCategoriesById()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getAwardsCategoriesById('42');
    expect(data.id).toBe(42);
    expect(data.name).toBe('Best Actor in a Television Series – Drama');
  });
});

describe('getAwardsCategoriesByIdExtended()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getAwardsCategoriesByIdExtended('42');
    expect(Array.isArray(data.nominees)).toBe(true);
    expect(data.nominees[0]?.id).toBe(6352);
    expect(data.nominees[0]?.isWinner).toBe(true);
  });
});

describe('getCharacter()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getCharacter()).rejects.toThrow('Required character id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getCharacter('')).rejects.toThrow('Required character id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getCharacter('64140522');
    expect(data.id).toBe(64140522);
    expect(data.name).toBe('Spike Spiegel');
  });
});

describe('getCompanies()', () => {
  test('returns a successful response without a page', async () => {
    const { data } = await client.getCompanies();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(48649);
    expect(data[0]?.name).toBe('Ananey');
  });

  test('returns a successful response with page', async () => {
    const { data } = await client.getCompanies('94');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(48646);
    expect(data[1]?.name).toBe('New Group Productions');
  });
});

describe('getCompaniesTypes()', () => {
  test('returns a successful response', async () => {
    const { data } = await client.getCompaniesTypes();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.companyTypeId).toBe(1);
    expect(data[1]?.companyTypeName).toBe('Studio');
  });
});

describe('getCompanyById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getCompanyById()).rejects.toThrow('Required company id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getCompanyById('4');

    expect(data.id).toBe(4);
    expect(data.name).toBe('Aaj TV');
    expect(data.country).toBe('pak');
  });
});

describe('getEpisode()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getEpisode()).rejects.toThrow('Required episode id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getEpisode({ id: '' })).rejects.toThrow('Required episode id');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getEpisode({ id: '127396' });
    expect(status).toBe('success');
    expect(data.id).toBe(127396);
  });

  it('returns a extended response', async () => {
    const { data } = await client.getEpisode({ id: '127396', extended: true });
    expect(data.nominations).toBeNull();
    expect(data.seriesId).toBe(73752);
  });

  it('returns a extended & meta response', async () => {
    const { data } = await client.getEpisode({ id: '127396', extended: true, meta: true });
    expect(data.translations.nameTranslations[0]?.name).toBe('Schwarzer Ritter');
  });
});

describe('getEpisodeByLanguage()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getEpisodeByLanguage()).rejects.toThrow('Required episode id');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getEpisodeByLanguage('40')).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getEpisodeByLanguage('40', 'spa');
    expect(data.name).toBe('El Baile');
    expect(data.language).toBe('spa');
  });
});

describe('getEpisodesByPage()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getEpisodesByPage();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(502);
    expect(data[0]?.seriesId).toBe(70328);
  });

  it('returns a successful response with query page', async () => {
    const { data } = await client.getEpisodesByPage('11890');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(10124498);
    expect(data[0]?.seriesId).toBe(415404);
    expect(data[1]?.id).toBe(10124499);
    expect(data[1]?.seriesId).toBe(415404);
  });
});

describe('getLists()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getLists();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Scooby-Doo');
    expect(data[1]?.id).toBe(6);
    expect(data[1]?.name).toBe('Hermitcraft');
  });

  it('returns a successful response with query page', async () => {
    const { data } = await client.getLists('7');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(14372);
    expect(data[0]?.url).toBe('14372');
    expect(data[1]?.id).toBe(14373);
    expect(data[1]?.url).toBe('14373');
  });
});

describe('getListById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getListById()).rejects.toThrow('Required list id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getListById('1');
    expect(data.overview).toBe('The following');
  });
});

describe('getListByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getListByIdExtended()).rejects.toThrow('Required list id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getListByIdExtended('1');
    expect(Array.isArray(data.tags)).toBe(true);
    expect(data.tags).toHaveLength(2);
    expect(data.tags[0]?.id).toBe(4397);
    expect(data.tags[0]?.tag).toBe(3782);
    expect(data.tags[1]?.id).toBe(4398);
    expect(data.tags[1]?.tag).toBe(3782);
    expect(Array.isArray(data.entities)).toBe(true);
    expect(data.entities).toHaveLength(2);
    expect(data.entities[0]?.order).toBe(1);
    expect(data.entities[0]?.seriesId).toBe(78260);
    expect(data.entities[1]?.order).toBe(2);
    expect(data.entities[1]?.seriesId).toBe(75661);
  });
});

describe('getListByLanguage()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getListByLanguage()).rejects.toThrow('Required list id');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getListByLanguage('17')).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getListByLanguage('17', 'spa');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.name).toBe('Star Wars - Colección');
    expect(data[0]?.overview).toBe('Star Wars');
    expect(data[0]?.language).toBe('spa');
  });
});

describe('getListBySlug()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getListBySlug()).rejects.toThrow('Required list slug');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getListBySlug('1001');
    expect(data.score).toBe(2193819);
    expect(data.imageIsFallback).toBe(false);
  });
});

describe('getFilteredMovie()', () => {
  it('throws an error if no country is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getFilteredMovie()).rejects.toThrow('Required country of origin');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getFilteredMovie({ country: 'eng' })).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getFilteredMovie({ country: 'usa', lang: 'eng' });
    expect(status).toBe('success');
    expect(data[0]?.name).toBe('The Fortress');
    expect(Array.isArray(data)).toBe(true);
  });

  it('returns records filtered by year', async () => {
    const { data } = await client.getFilteredMovie({ country: 'usa', lang: 'eng', year: '2023' });
    expect(data[0]?.year).toBe('2023');
  });

  test('returns records sorted by name', async () => {
    const { data } = await client.getFilteredMovie({ country: 'usa', lang: 'eng', sort: 'name' });
    expect(data).toHaveLength(1);
    expect(data[0]?.name).toBe('-Ship: A Visual Poem');
  });
});

describe('getFilteredSeries()', () => {
  it('throws an error if no country is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getFilteredSeries()).rejects.toThrow('Required country of origin');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getFilteredSeries({ country: 'eng' })).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getFilteredSeries({ country: 'usa', lang: 'eng' });
    expect(status).toBe('success');
    expect(data[0]?.name).toBe('Made In Hollywood');
    expect(Array.isArray(data)).toBe(true);
  });

  it('returns records filtered by year', async () => {
    const { data } = await client.getFilteredSeries({ country: 'usa', lang: 'eng', year: '2023' });
    expect(data[0]?.year).toBe('2023');
  });

  test('returns records sorted by name', async () => {
    const { data } = await client.getFilteredSeries({ country: 'usa', lang: 'eng', sort: 'name' });
    expect(data).toHaveLength(1);
    expect(data[0]?.name).toBe('Adriana Gaming');
  });
});

describe('getMovie()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter query
    await expect(async () => await client.getMovie()).rejects.toThrow('Required movie id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getMovie({ id: '' })).rejects.toThrow('Required movie id');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getMovie({ id: '12586' });
    expect(data.id).toBe(12586);
    expect(data.slug).toBe('macross-do-you-remember-love');
  });

  it('returns a extended response', async () => {
    const { data } = await client.getMovie({ id: '3646', extended: true });
    expect(data.trailers).toHaveLength(2);
    expect(data.trailers[0]?.id).toBe(143117);
  });

  it('returns a extended & meta response', async () => {
    const { data } = await client.getMovie({ id: '3646', extended: true, meta: true });
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
  });

  it('returns a extended & short response', async () => {
    const { data } = await client.getMovie({ id: '3646', extended: true, short: true });
    expect(data.characters).toBeNull();
    expect(data.artworks).toBeNull();
    expect(data.trailers).toBeNull();
  });

  it('returns a extended, meta & short response', async () => {
    const { data } = await client.getMovie({
      id: '3646',
      extended: true,
      meta: true,
      short: true,
    });
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
    expect(data.characters).toBeNull();
    expect(data.artworks).toBeNull();
    expect(data.trailers).toBeNull();
  });
});

describe('getMovieByLanguage()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getMovieByLanguage()).rejects.toThrow('Required movie id');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getMovieByLanguage('12586')).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getMovieByLanguage('12586', 'spa');
    expect(data.name).toBe('Macross: ¿Recuerdas el amor?');
    expect(data.language).toBe('spa');
  });
});

describe('getMovieBySlug()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter slug
    await expect(async () => await client.getMovieBySlug()).rejects.toThrow('Required slug');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getMovieBySlug('macross-do-you-remember-love');
    expect(data.score).toBe(483);
    expect(data.runtime).toBe(114);
    expect(data.year).toBe('1984');
  });
});

describe('getMoviesByPage()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getMoviesByPage();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(351047);
    expect(data[0]?.year).toBe('2023');
  });

  it('returns a successful response with query page', async () => {
    const { data } = await client.getMoviesByPage('674');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(351048);
    expect(data[0]?.slug).toBe('351048-movie');
    expect(data[1]?.id).toBe(351049);
    expect(data[1]?.slug).toBe('rekni-to-psem');
  });
});

describe('getMovieStatus()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getMovieStatus();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Announced');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Pre-Production');
  });
});

describe('getPeople()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getPeople()).rejects.toThrow('Required people id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getPeople({ id: '' })).rejects.toThrow('Required people id');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.getPeople({ id: '312388' });
    expect(status).toBe('success');
    expect(data.id).toBe(312388);
  });

  it('returns a extended response', async () => {
    const { data } = await client.getPeople({ id: '312388', extended: true });
    expect(data.gender).toBe(1);
  });

  it('returns a extended & meta response', async () => {
    const { data } = await client.getPeople({ id: '312388', extended: true, meta: true });
    expect(data.translations.nameTranslations[0]?.name).toBe('Chris Pratt');
  });
});

describe('getPeopleByLanguage()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getPeopleByLanguage()).rejects.toThrow('Required people id');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getPeopleByLanguage('312388')).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getPeopleByLanguage('312388', 'spa');
    expect(data.name).toBe('Chris Pratt');
    expect(data.language).toBe('spa');
  });
});

describe('getPeopleByPage()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getPeopleByPage();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(247831);
    expect(data[0]?.name).toBe('Michelle Fairley');
    expect(data[1]?.id).toBe(247832);
    expect(data[1]?.name).toBe('Gethin Anthony');
  });

  it('returns a successful response with query page', async () => {
    const { data } = await client.getPeopleByPage('2648');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(9119375);
    expect(data[0]?.name).toBe('Isabela Boscov');
  });
});

describe('getPeopleTypes()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getPeopleTypes();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(3);
    expect(data[0]?.name).toBe('Actor');
    expect(data[1]?.id).toBe(6);
    expect(data[1]?.name).toBe('Creator');
  });
});

describe('getSearch()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getSearch()).rejects.toThrow('Required search query');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getSearch({ query: '' })).rejects.toThrow('Required search query');
  });

  test('returns a successful response', async () => {
    const { status, data } = await client.getSearch({ query: 'saint seiya' });
    expect(status).toBe('success');
    expect(data[0]?.objectID).toBe('series-426391');
    expect(data[0]?.country).toBe('jpn');
  });

  test('returns a series type response', async () => {
    const { data } = await client.getSearch({ query: 'saint seiya', type: 'series' });
    expect(data[0]?.type).toBe('series');
  });

  test('limits the lenght with 1', async () => {
    const { data } = await client.getSearch({ query: 'saint seiya', type: 'series', limit: '1' });
    expect(data).toHaveLength(1);
    expect(data[0]?.country).toBe('jpn');
  });
});

describe('getSeason()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required search query
    await expect(async () => await client.getSeason()).rejects.toThrow('Required season id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getSeason({ id: '' })).rejects.toThrow('Required season id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getSeason({ id: '1698074' });
    expect(data.seriesId).toBe(70350);
  });

  test('returns a extended response', async () => {
    const { data } = await client.getSeason({ id: '6365', extended: true });
    expect(data.image).toBe('https://artworks.thetvdb.com/banners/seasons/24394-1.jpg');
  });

  test('returns a extended & meta response', async () => {
    const { data } = await client.getSeason({ id: '6365', extended: true, meta: true });
    expect(data.translations.nameTranslations).toBeNull();
  });
});

describe('getSeasonByLanguage()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getSeasonByLanguage()).rejects.toThrow('Required season id');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getSeasonByLanguage('12586')).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getSeasonByLanguage('6365', 'rus');
    expect(data.overview).toBe('Через');
    expect(data.language).toBe('rus');
  });
});

describe('getSeasonTypes()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getSeasonTypes();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Aired Order');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.type).toBe('dvd');
  });
});

describe('getSeasonsByPage()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getSeasonsByPage();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.lastUpdated).toBe('2021-11-04 21:03:34');
  });

  it('returns a successful response with query page', async () => {
    const { data } = await client.getSeasonsByPage('1264');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1965685);
    expect(data[0]?.seriesId).toBe(77294);
    expect(data[1]?.id).toBe(1965686);
    expect(data[1]?.seriesId).toBe(77294);
  });
});

describe('getSeries()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required series id
    await expect(async () => await client.getSerie()).rejects.toThrow('Required series id');
  });

  it('throws an error if an empty id "string" is provided', async () => {
    await expect(async () => await client.getSerie({ id: '' })).rejects.toThrow('Required series id');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getSerie({ id: '78878' });
    expect(data.id).toBe(78878);
  });

  it('returns a extended response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true });
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks[0]?.id).toBe(686641);
  });

  it('returns a extended & short response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, short: true });
    expect(data.characters).toBeNull();
  });

  it('returns a extended and translations response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'translations' });

    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks[0]?.id).toBe(686641);
    expect(data.translations.nameTranslations[0]?.language).toBe('spa');
  });

  it('returns a extended, translations and short response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'translations', short: true });

    expect(data.characters).toBeNull();
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations[0]?.name).toBe('Fooly Cooly (FLCL)');
  });

  it('returns a extended and meta episodes response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'episodes' });

    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks[0]?.id).toBe(686641);
    expect(data.episodes[0]?.name).toBe('フリクリ プログレ');
  });

  it('returns a extended, episodes and short response', async () => {
    const { data } = await client.getSerie({ id: '78878', extended: true, meta: 'episodes', short: true });

    expect(data.artworks).toBeNull();
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes[0]?.aired).toBe('2018-09-28');
  });
});

describe('getSerieArtworks()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getSerieArtworks()).rejects.toThrow('Required id serie');
  });
  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getSerieArtworks('78878')).rejects.toThrow('Required language');
  });
  it('throws an error if no type is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getSerieArtworks('78878', 'jpn')).rejects.toThrow('Required type of artwork');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getSerieArtworks('78878', 'jpn', '3');
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks[0]?.id).toBe(686641);
    expect(data.artworks[0]?.language).toBe('jpn');
  });
});

describe('getSeriesByPage()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getSeriesByPage();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(70327);
    expect(data[0]?.name).toBe('Buffy the Vampire Slayer');
  });

  it('returns a successful response with query page', async () => {
    const { data } = await client.getSeriesByPage('294');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(441532);
    expect(data[0]?.name).toBe('Geddy Lee Asks: Are Bass Players Human Too?');
    expect(data[1]?.id).toBe(441533);
    expect(data[1]?.name).toBe('LEGO DUPLO Nursery Rhymes');
  });
});

describe('getSerieBySlug()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter slug
    await expect(async () => await client.getSerieBySlug()).rejects.toThrow('Required slug');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getSerieBySlug('flcl');
    expect(data.originalCountry).toBe('jpn');
    expect(data.originalLanguage).toBe('jpn');
  });
});

describe('getSerieByLanguage()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getSerieByLanguage()).rejects.toThrow('Required serie id');
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: Required language
    await expect(async () => await client.getSerieByLanguage('78878')).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getSerieByLanguage('78878', 'eng');
    expect(data.name).toBe('FLCL');
    expect(data.language).toBe('eng');
    expect(Array.isArray(data.aliases)).toBe(true);
    expect(data.aliases).toHaveLength(2);
  });
});

describe('getSerieEpisodes()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getSerieEpisodes()).rejects.toThrow('Required serie id');
  });

  it('throws an error if no season type is provided', async () => {
    // @ts-expect-error: Required season type
    await expect(async () => await client.getSerieEpisodes({ id: '78878' })).rejects.toThrow('Required season type');
  });

  it('returns a successful response without querys', async () => {
    const { data } = await client.getSerieEpisodes({ id: '75978', type: 'default' });
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.id).toBe(181165);
    expect(data.episodes[0]?.seriesId).toBe(75978);
  });

  it('returns a successful response with airDate', async () => {
    const { data } = await client.getSerieEpisodes({ id: '75978', type: 'default', airDate: '2006-05-21' });
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.name).toBe('Stewie Griffin: The Untold Story');
    expect(data.episodes[0]?.aired).toBe('2006-05-21');
  });

  it('returns a successful response with season and episodeNumber', async () => {
    const { data } = await client.getSerieEpisodes({ id: '81189', type: 'dvd', season: '0', episodeNumber: '1' });
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.id).toBe(3859781);
    expect(data.episodes[0]?.seriesId).toBe(81189);
    expect(data.episodes[0]?.name).toBe('Good Cop / Bad Cop');
  });

  it('returns a successful response with page', async () => {
    const { data } = await client.getSerieEpisodes({ id: '81797', type: 'default', page: '1' });
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(2);
    expect(data.episodes[0]?.id).toBe(7911257);
    expect(data.episodes[0]?.aired).toBe('2020-11-15');
    expect(data.episodes[1]?.id).toBe(7911259);
    expect(data.episodes[1]?.aired).toBe('2020-11-22');
  });
});

describe('getSerieEpisodesWithLanguage()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: Required id
    await expect(async () => await client.getSerieEpisodesWithLanguage()).rejects.toThrow('Required serie id');
  });

  it('throws an error if no season type is provided', async () => {
    // @ts-expect-error: Required season type
    await expect(async () => await client.getSerieEpisodesWithLanguage({ id: '78878' })).rejects.toThrow(
      'Required season type'
    );
  });

  it('throws an error if no language is provided', async () => {
    await expect(
      // @ts-expect-error: Required language
      async () => await client.getSerieEpisodesWithLanguage({ id: '78878', type: 'official' })
    ).rejects.toThrow('Required language');
  });

  it('returns a successful response', async () => {
    const { data } = await client.getSerieEpisodesWithLanguage({ id: '78878', type: 'official', language: 'eng' });
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(2);
    expect(data.episodes[0]?.id).toBe(8051162);
    expect(data.episodes[0]?.seriesId).toBe(78878);
    expect(data.episodes[0]?.name).toBe('FLCL Progressive');
    expect(data.episodes[1]?.id).toBe(8051167);
    expect(data.episodes[1]?.seriesId).toBe(78878);
    expect(data.episodes[1]?.name).toBe('FLCL Alternative');
  });

  it('returns a successful response with page', async () => {
    const { data } = await client.getSerieEpisodesWithLanguage({
      id: '71663',
      type: 'official',
      language: 'eng',
      page: '1',
    });
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(2);
    expect(data.episodes[0]?.id).toBe(420653);
    expect(data.episodes[0]?.seriesId).toBe(71663);
    expect(data.episodes[0]?.name).toBe('In the Name of the Grandfather');
    expect(data.episodes[1]?.id).toBe(420654);
    expect(data.episodes[1]?.seriesId).toBe(71663);
    expect(data.episodes[1]?.name).toBe('Wedding for Disaster');
  });
});

describe('getSerieNextAired()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.getSerieNextAired()).rejects.toThrow('Required serie id');
  });

  test('returns a successful response', async () => {
    const { data } = await client.getSerieNextAired('78878');

    expect(data.firstAired).toBe('2000-04-26');
    expect(data.lastAired).toBe('2023-10-15');
  });
});

describe('getSerieStatus()', () => {
  it('returns a successful response', async () => {
    const { data } = await client.getSerieStatus();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Continuing');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Ended');
  });
});
