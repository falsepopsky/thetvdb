import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('serieById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.serieById()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.serieById('78878');

    expect(status).toBe('success');
    expect(data.id).toBe(78878);
    expect(data.year).toBe('2000');
    expect(data.lastUpdated).toBe('2023-12-18 10:27:18');
    expect(data.image).toBe('https://artworks.thetvdb.com/banners/posters/78878-1.jpg');
  });
});

describe('serieByIdArtworks()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.serieByIdArtworks()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.serieByIdArtworks('327417');

    expect(status).toBe('success');
    expect(data.id).toBe(327417);
    expect(data.episodes).toBeNull();
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks).toHaveLength(1);
    expect(data.artworks[0]?.id).toBe(62116198);
    expect(data.artworks[0]?.image).toBe(
      'https://artworks.thetvdb.com/banners/series/327417/backgrounds/5e75f224ac334.jpg'
    );
    expect(data.artworks[0]?.height).toBe(1080);
  });

  it('returns a successful response with lang', async () => {
    const { status, data } = await client.serieByIdArtworks('327417', { lang: 'spa' });

    expect(status).toBe('success');
    expect(data.id).toBe(327417);
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks).toHaveLength(1);
    expect(data.artworks[0]?.id).toBe(1254142);
    expect(data.artworks[0]?.image).toBe(
      'https://artworks.thetvdb.com/banners/series/327417/posters/5e824889ad675.jpg'
    );
    expect(data.artworks[0]?.height).toBe(1000);
  });

  it('returns a successful response with type', async () => {
    const { status, data } = await client.serieByIdArtworks('327417', { type: '3' });

    expect(status).toBe('success');
    expect(data.name).toBe('La casa de papel');
    expect(data.year).toBe('2017');
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks).toHaveLength(1);
    expect(data.artworks[0]?.id).toBe(62116198);
    expect(data.artworks[0]?.thumbnail).toBe(
      'https://artworks.thetvdb.com/banners/series/327417/backgrounds/5e75f224ac334_t.jpg'
    );
    expect(data.artworks[0]?.width).toBe(1920);
  });

  it('returns a successful response with lang & type', async () => {
    const { status, data } = await client.serieByIdArtworks('113561', { lang: 'jpn', type: '2' });

    expect(status).toBe('success');
    expect(data.id).toBe(113561);
    expect(data.name).toBe('遊☆戯☆王');
    expect(data.slug).toBe('yu-gi-oh');
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks).toHaveLength(1);
    expect(data.artworks[0]?.id).toBe(62971175);
    expect(data.artworks[0]?.thumbnail).toBe(
      'https://artworks.thetvdb.com/banners/v4/series/113561/posters/61e5a3979602d_t.jpg'
    );
    expect(data.artworks[0]?.width).toBe(680);
  });
});

describe('serieByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.serieByIdExtended()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.serieByIdExtended('78878');

    expect(status).toBe('success');
    expect(data.id).toBe(78878);
    expect(data.slug).toBe('flcl');
    expect(data.episodes).toBeNull();
    expect(Array.isArray(data.artworks)).toBe(true);
    expect(data.artworks).toHaveLength(1);
    expect(data.artworks[0]?.id).toBe(686641);
    expect(data.artworks[0]?.image).toBe('https://artworks.thetvdb.com/banners/fanart/original/78878-6.jpg');
    expect(data.artworks[0]?.height).toBe(720);
    expect(data.airsTime).toBe('13:00');
  });

  it('returns a successful response with translations', async () => {
    const { status, data } = await client.serieByIdExtended('78878', { meta: 'translations' });

    expect(status).toBe('success');
    expect(data.slug).toBe('flcl');
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.nameTranslations[0]?.name).toBe('FLCL');
    expect(data.translations.nameTranslations[0]?.language).toBe('deu');
    expect(Array.isArray(data.translations.overviewTranslations)).toBe(true);
    expect(data.translations.overviewTranslations).toHaveLength(2);
    expect(typeof data.translations.overviewTranslations[0]?.overview).toBe('string');
    expect(data.translations.overviewTranslations[0]?.language).toBe('deu');
    expect(Array.isArray(data.translations.aliases)).toBe(true);
    expect(data.translations.aliases).toHaveLength(1);
  });

  it('returns a successful response with episodes', async () => {
    const { status, data } = await client.serieByIdExtended('78878', { meta: 'episodes' });

    expect(status).toBe('success');
    expect(data.lastAired).toBe('2023-10-15');
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.name).toBe('フリクリ プログレ');
    expect(data.episodes[0]?.aired).toBe('2018-09-28');
    expect(data.episodes[0]?.year).toBe('2018');
  });

  it('returns a successful response with short', async () => {
    const { status, data } = await client.serieByIdExtended('327417', { short: 'true' });

    expect(status).toBe('success');
    expect(data.id).toBe(327417);
    expect(data.artworks).toBeNull();
    expect(data.characters).toBeNull();
  });

  it('returns a successful response with translations & short', async () => {
    const { status, data } = await client.serieByIdExtended('78878', { meta: 'translations', short: 'true' });

    expect(status).toBe('success');
    expect(data.year).toBe('2000');
    expect(data.artworks).toBeNull();
    expect(data.characters).toBeNull();
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.nameTranslations[0]?.name).toBe('Furi Kuri');
    expect(data.translations.nameTranslations[0]?.language).toBe('pol');
    expect(Array.isArray(data.translations.overviewTranslations)).toBe(true);
    expect(data.translations.overviewTranslations).toHaveLength(1);
    expect(typeof data.translations.overviewTranslations[0]?.overview).toBe('string');
    expect(data.translations.overviewTranslations[0]?.language).toBe('pt');
    expect(Array.isArray(data.translations.aliases)).toBe(true);
    expect(data.translations.aliases).toHaveLength(1);
  });

  it('returns a successful response with episodes & short', async () => {
    const { status, data } = await client.serieByIdExtended('78878', { meta: 'episodes', short: 'true' });

    expect(status).toBe('success');
    expect(data.lastUpdated).toBe('2023-12-18 10:27:18');
    expect(data.artworks).toBeNull();
    expect(data.characters).toBeNull();
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.id).toBe(8051162);
    expect(data.episodes[0]?.runtime).toBe(132);
    expect(data.episodes[0]?.lastUpdated).toBe('2023-08-11 17:27:39');
    expect(data.episodes[0]?.year).toBe('2018');
  });
});

describe('serieByIdNextAired()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.serieByIdNextAired()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.serieByIdNextAired('78878');

    expect(status).toBe('success');
    expect(data.id).toBe(78878);
    expect(data.nextAired).toBe('');
  });
});

describe('serieBySlug()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.serieBySlug()).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.serieBySlug('yu-gi-oh');

    expect(status).toBe('success');
    expect(data.id).toBe(113561);
    expect(data.lastAired).toBe('1998-10-10');
    expect(data.image).toBe('https://artworks.thetvdb.com/banners/posters/113561-4.jpg');
    expect(data.lastUpdated).toBe('2023-09-17 19:36:14');
    expect(data.year).toBe('1998');
  });
});

describe('serieEpisodes()', () => {
  it('throws an error if no paths is provided', async () => {
    // @ts-expect-error: expect a parameter paths
    await expect(async () => await client.serieEpisodes()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'id')"
    );
  });

  it('throws an error if no paths.id is provided', async () => {
    // @ts-expect-error: expect a parameter paths.id
    await expect(async () => await client.serieEpisodes({ seasonType: 'default' })).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('throws an error if no paths.seasonType is provided', async () => {
    // @ts-expect-error: expect a parameter paths.seasonType
    await expect(async () => await client.serieEpisodes({ id: '75978' })).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data, links } = await client.serieEpisodes({ id: '75978', seasonType: 'default' });

    expect(status).toBe('success');
    expect(data.series.id).toBe(75978);
    expect(data.series.name).toBe('Family Guy');
    expect(data.series.episodes).toBeNull();
    expect(Array.isArray(data.series.nameTranslations)).toBe(true);
    expect(data.series.nameTranslations).toHaveLength(2);
    expect(data.series.nameTranslations?.[0]).toBe('ces');
    expect(data.series.nameTranslations?.[1]).toBe('dan');
    expect(data.episodes[0]?.id).toBe(181165);
    expect(data.episodes[0]?.name).toBe('Stewie Griffin: The Untold Story');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(469);
  });

  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.serieEpisodes({ id: '81797', seasonType: 'default' }, { page: '1' });

    expect(status).toBe('success');
    expect(data.series.id).toBe(81797);
    expect(data.series.slug).toBe('one-piece');
    expect(data.series.year).toBe('1999');
    expect(data.series.originalCountry).toBe('jpn');
    expect(data.series.nextAired).toBe('2024-01-21');
    expect(data.episodes[0]?.id).toBe(2176651);
    expect(data.episodes[0]?.name).toBeNull();
    expect(links.prev).toBe('https://api4.thetvdb.com/v4/series/81797/episodes/default?page=0');
    expect(links.total_items).toBe(1141);
  });

  it('returns a successful response with season and episodeNumber', async () => {
    const { status, data, links } = await client.serieEpisodes(
      { id: '81189', seasonType: 'dvd' },
      { season: '0', episodeNumber: '1' }
    );

    expect(status).toBe('success');
    expect(data.series.id).toBe(81189);
    expect(data.series.slug).toBe('breaking-bad');
    expect(data.series.year).toBe('2008');
    expect(data.series.originalCountry).toBe('usa');
    expect(data.series.lastAired).toBe('2013-09-29');
    expect(data.episodes[0]?.id).toBe(3859781);
    expect(data.episodes[0]?.name).toBe('Good Cop / Bad Cop');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(1);
  });

  it('returns a successful response with airDate', async () => {
    const { status, data, links } = await client.serieEpisodes(
      { id: '75978', seasonType: 'default' },
      { airDate: '2006-05-21' }
    );

    expect(status).toBe('success');
    expect(data.series.id).toBe(75978);
    expect(data.series.slug).toBe('family-guy');
    expect(data.series.lastAired).toBe('2024-03-13');
    expect(data.series.originalCountry).toBe('usa');
    expect(data.series.year).toBe('1999');
    expect(data.episodes[0]?.id).toBe(181165);
    expect(data.episodes[0]?.name).toBe('Stewie Griffin: The Untold Story');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(469);
  });
});

describe('serieEpisodesWithLanguage()', () => {
  it('throws an error if no paths is provided', async () => {
    // @ts-expect-error: expect a parameter paths
    await expect(async () => await client.serieEpisodesWithLanguage()).rejects.toThrow(
      "Cannot read properties of undefined (reading 'id')"
    );
  });

  it('throws an error if no paths.id is provided', async () => {
    // @ts-expect-error: expect a parameter paths.id
    await expect(async () => await client.serieEpisodesWithLanguage({ seasonType: 'official' })).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('throws an error if no paths.seasonType is provided', async () => {
    // @ts-expect-error: expect a parameter paths.seasonType
    await expect(async () => await client.serieEpisodesWithLanguage({ id: '78878' })).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('throws an error if no paths.language is provided', async () => {
    await expect(
      // @ts-expect-error: expect a parameter paths.language
      async () => await client.serieEpisodesWithLanguage({ id: '78878', seasonType: 'official' })
    ).rejects.toThrow('HTTP response status 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data, links } = await client.serieEpisodesWithLanguage({
      id: '78878',
      seasonType: 'official',
      language: 'eng',
    });

    expect(status).toBe('success');
    expect(data.id).toBe(78878);
    expect(data.name).toBe('フリクリ');
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.id).toBe(8051162);
    expect(data.episodes[0]?.name).toBe('FLCL Progressive');
    expect(data.episodes[0]?.overview).toBe('Movie Release of FLCL Progressive');
    expect(data.episodes[0]?.runtime).toBe(132);
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(26);
  });

  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.serieEpisodesWithLanguage(
      {
        id: '71663',
        seasonType: 'official',
        language: 'eng',
      },
      '1'
    );

    expect(status).toBe('success');
    expect(data.id).toBe(71663);
    expect(data.name).toBe('The Simpsons');
    expect(Array.isArray(data.episodes)).toBe(true);
    expect(data.episodes).toHaveLength(1);
    expect(data.episodes[0]?.id).toBe(420653);
    expect(data.episodes[0]?.name).toBe('In the Name of the Grandfather');
    expect(data.episodes[0]?.image).toBe('/banners/episodes/71663/420653.jpg');
    expect(data.episodes[0]?.runtime).toBe(25);
    expect(links.prev).toBe('https://api4.thetvdb.com/v4/series/71663/episodes/official/eng?page=0');
    expect(links.total_items).toBe(827);
  });
});

describe('serieStatuses()', () => {
  it('returns a successful response', async () => {
    const { status, data } = await client.serieStatuses();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Continuing');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Ended');
  });
});

describe('serieWithTranslation()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.serieWithTranslation()).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: expect a parameter language
    await expect(async () => await client.serieWithTranslation('78878')).rejects.toThrow(
      'HTTP response status 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.serieWithTranslation('78878', 'eng');

    expect(status).toBe('success');
    expect(data.name).toBe('FLCL');
    expect(typeof data.overview).toBe('string');
    expect(data.language).toBe('eng');
  });
});

describe('series()', () => {
  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.series('294');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(441685);
    expect(data[0]?.name).toBe('Well Versed');
    expect(data[0]?.episodes).toBeNull();
    expect(data[0]?.lastUpdated).toBe('2023-11-15 14:24:23');
    expect(links.next).toBe('https://api4.thetvdb.com/v4/series?page=295');
  });

  it('returns a successful response without a page', async () => {
    const { status, data, links } = await client.series();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(70327);
    expect(data[0]?.name).toBe('Buffy the Vampire Slayer');
    expect(data[0]?.image).toBe('/banners/posters/70327-1.jpg');
    expect(data[0]?.lastUpdated).toBe('2024-01-08 13:29:22');
    expect(data[0]?.year).toBe('1997');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(149693);
  });
});

describe('seriesFilter()', () => {
  it('returns a successful response without queries', async () => {
    const { status, data, links } = await client.seriesFilter();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(70327);
    expect(data[0]?.slug).toBe('buffy-the-vampire-slayer');
    expect(links.next).toBe('https://api4.thetvdb.com/v4/series/filter?page=1');
  });

  it('returns a successful response with country & lang', async () => {
    const { status, data, links } = await client.seriesFilter({ country: 'usa', lang: 'eng' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(70327);
    expect(data[0]?.name).toBe('Buffy the Vampire Slayer');
    expect(data[0]?.lastUpdated).toBe('2024-01-08 13:29:22');
    expect(links.prev).toBeNull();
    expect(links.next).toBe('https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&page=1');
    expect(links.total_items).toBe(37518);
  });

  it('returns a successful response with sort & year', async () => {
    const { status, data, links } = await client.seriesFilter({ sort: 'name', year: '2024' });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(444138);
    expect(data[0]?.name).toBe('... a szomszéd tehene');
    expect(data[0]?.lastUpdated).toBe('2024-01-13 17:51:13');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(447);
  });
});
