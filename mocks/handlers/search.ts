import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/search?query=saint+seiya
const query = {
  status: 'success',
  data: [
    {
      objectID: 'list-14303',
      id: 'list-14303',
      image_url: 'https://artworks.thetvdb.com/banners/movies/9601/posters/9601.jpg',
      name: 'Saint Seiya Anime Movie Collection',
      primary_type: 'list',
      type: 'list',
      tvdb_id: '14303',
      translations: {
        eng: 'Saint Seiya Anime Movie Collection',
      },
    },
    {
      objectID: 'list-14302',
      id: 'list-14302',
      image_url: 'https://artworks.thetvdb.com/banners/posters/72775-23.jpg',
      name: 'Saint Seiya Franchise',
      primary_type: 'list',
      type: 'list',
      tvdb_id: '14302',
      translations: {
        eng: 'Saint Seiya Franchise',
      },
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/search?query=saint seiya&limit=50&page=0',
    next: null,
    total_items: 14,
    page_size: 50,
  },
};

// https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series
const queryType = {
  status: 'success',
  data: [
    {
      objectID: 'series-72775',
      aliases: ['Knights of the Zodiac', 'Saint Seiya: Sanctuary'],
      country: 'jpn',
      id: 'series-72775',
      image_url: 'https://artworks.thetvdb.com/banners/series/72775/posters/5f847a476866b.jpg',
      name: '聖闘士星矢',
      first_air_time: '1986-10-11',
      overview:
        'この世に邪悪がはびこるとき、必ずや現れるという希望の闘士聖闘士（セイント）。その拳は空を裂き、蹴りは大地を割るという。彼らは神話の時代より女神アテナに仕え、武器を嫌うアテナのために素手で敵と戦い、天空に輝く88の星座を守護としてそれを模した聖衣（クロス）と呼ばれる防具を纏う。6年もの厳しい修行を経てアテナの聖闘士となった少年星矢が、同じ境遇の仲間の聖闘士たちとともにこの世に蔓延する邪悪と戦う。',
      primary_language: 'jpn',
      primary_type: 'series',
      status: 'Ended',
      type: 'series',
      tvdb_id: '72775',
      year: '1986',
      slug: 'saint-seiya',
      overviews: {
        spa: 'Hace siglos, la diosa Atenea fue servida por luchadores llamados los caballeros de Atenea que canalizaron el poder del Cosmos dentro de ellos. Ahora, un joven llamado Seiya se ha entrenado para convertirse en un caballero al ganar la armadura de Pegaso. A él se le unen otros caballeros con armaduras propias para luchar por Atenea.',
      },
      translations: {
        spa: 'Los Caballeros del Zodíaco',
        zho: '圣斗士星矢',
        zhtw: '聖鬥士星矢',
      },
      network: 'TV Asahi',
      remote_ids: [
        {
          id: 'tt0161952',
          type: 2,
          sourceName: 'IMDB',
        },
        {
          id: '42444',
          type: 12,
          sourceName: 'TheMovieDB.com',
        },
      ],
      thumbnail: 'https://artworks.thetvdb.com/banners/series/72775/posters/5f847a476866b_t.jpg',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/search?query=saint seiya&type=series&limit=50&page=0',
    next: null,
    total_items: 5,
    page_size: 50,
  },
};

// https://api4.thetvdb.com/v4/search?query=yu+gi+oh&type=series&limit=1
const queryTypeLimit = {
  status: 'success',
  data: [
    {
      objectID: 'series-253797',
      country: 'usa',
      id: 'series-253797',
      image_url: 'https://artworks.thetvdb.com/banners/posters/253797-1.jpg',
      name: 'Yu-Gi-Oh!: The Abridged Series',
      first_air_time: '2006-07-14',
      overview:
        'As the name suggests, Yu-Gi-Oh: The Abridged Series is a dramatically shortened down version of the original series, cutting each episode down from its original twenty minutes. This includes episodes in two or more parts. All characters in the series are voiced by LittleKuriboh, even the female ones, adding to the comical effect of the parody.',
      primary_language: 'eng',
      primary_type: 'series',
      status: 'Continuing',
      type: 'series',
      tvdb_id: '253797',
      year: '2006',
      slug: 'yu-gi-oh-the-abridged-series',
      overviews: {
        eng: 'As the name suggests, Yu-Gi-Oh: The Abridged Series is a dramatically shortened down version of the original series, cutting each episode down from its original twenty minutes. This includes episodes in two or more parts. All characters in the series are voiced by LittleKuriboh, even the female ones, adding to the comical effect of the parody.',
      },
      translations: {
        eng: 'Yu-Gi-Oh!: The Abridged Series',
      },
      network: 'YouTube',
      remote_ids: [
        {
          id: 'tt1578694',
          type: 2,
          sourceName: 'IMDB',
        },
      ],
      thumbnail: 'https://artworks.thetvdb.com/banners/posters/253797-1_t.jpg',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/search?query=yu gi oh&type=series&limit=1&page=0',
    next: 'https://api4.thetvdb.com/v4/search?query=yu gi oh&type=series&limit=1&page=1',
    total_items: 12,
    page_size: 1,
  },
};

// https://api4.thetvdb.com/v4/search/remoteid/42444
const remoteId = {
  status: 'success',
  data: [
    {
      people: {
        id: 9116037,
        name: 'Shlomi Avraham',
        image: '/banners/v4/actor/9116037/photo/64d93ec0244fd.jpg',
        score: 0,
        nameTranslations: null,
        overviewTranslations: null,
        aliases: null,
        lastUpdated: '2023-08-13 20:36:49',
      },
    },
    {
      movie: {
        id: 14915,
        name: "Vacanze Di Natale '91",
        slug: 'christmas-vacation-91',
        image: 'https://artworks.thetvdb.com/banners/movies/14915/posters/14915.jpg',
        nameTranslations: ['ita', 'eng'],
        overviewTranslations: ['ita'],
        aliases: [],
        score: 1368,
        runtime: 112,
        status: {
          id: 5,
          name: 'Released',
          recordType: 'movie',
          keepUpdated: true,
        },
        lastUpdated: '2023-01-08 19:12:00',
        year: '1991',
      },
    },
    {
      series: {
        id: 72775,
        name: '聖闘士星矢',
        slug: 'saint-seiya',
        image: 'https://artworks.thetvdb.com/banners/posters/72775-23.jpg',
        nameTranslations: ['deu', 'eng'],
        overviewTranslations: ['deu', 'eng'],
        aliases: [
          {
            language: 'fra',
            name: 'Saint Seiya: Hadès Elysion',
          },
        ],
        firstAired: '1986-10-11',
        lastAired: '2019-02-18',
        nextAired: '',
        score: 126574,
        status: {
          id: null,
          name: null,
          recordType: '',
          keepUpdated: false,
        },
        originalCountry: 'jpn',
        originalLanguage: 'jpn',
        defaultSeasonType: 1,
        isOrderRandomized: false,
        lastUpdated: '2024-01-03 13:52:25',
        averageRuntime: 25,
        episodes: null,
        overview:
          'この世に邪悪がはびこるとき、必ずや現れるという希望の闘士聖闘士（セイント）。その拳は空を裂き、蹴りは大地を割るという。彼らは神話の時代より女神アテナに仕え、武器を嫌うアテナのために素手で敵と戦い、天空に輝く88の星座を守護としてそれを模した聖衣（クロス）と呼ばれる防具を纏う。6年もの厳しい修行を経てアテナの聖闘士となった少年星矢が、同じ境遇の仲間の聖闘士たちとともにこの世に蔓延する邪悪と戦う。',
        year: '1986',
      },
    },
  ],
};

// https://api4.thetvdb.com/v4/search/*
const badRequest = { status: 'failure', message: 'query is required', data: null };

export function searchPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/search?query=saint+seiya':
      return HttpResponse.json(query);
    case 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series':
      return HttpResponse.json(queryType);
    case 'https://api4.thetvdb.com/v4/search?query=yu+gi+oh&type=series&limit=1':
      return HttpResponse.json(queryTypeLimit);
    case 'https://api4.thetvdb.com/v4/search/remoteid/42444':
      return HttpResponse.json(remoteId);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
