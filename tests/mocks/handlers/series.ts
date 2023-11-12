import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/series/81797/episodes/default?page=1
const serieSeasonTypePage = {
  data: {
    episodes: [
      { id: 7911257, aired: '2020-11-15' },
      { id: 7911259, aired: '2020-11-22' },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/81189/episodes/dvd?season=0&episodeNumber=1
const serieSeasonTypeSeasonAndEpisodeNumber = {
  data: {
    episodes: [
      {
        id: 3859781,
        seriesId: 81189,
        name: 'Good Cop / Bad Cop',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/75978/episodes/default?airDate=2006-05-21
const serieSeasonTypeAirDate = {
  data: {
    episodes: [
      {
        name: 'Stewie Griffin: The Untold Story',
        aired: '2006-05-21',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/75978/episodes/default
const serieSeasonType = {
  data: {
    episodes: [
      {
        id: 181165,
        seriesId: 75978,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/71663/episodes/official/eng?page=1
const serieSeasonTypeLanguagePage = {
  data: {
    episodes: [
      {
        id: 420653,
        seriesId: 71663,
        name: 'In the Name of the Grandfather',
      },
      {
        id: 420654,
        seriesId: 71663,
        name: 'Wedding for Disaster',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/episodes/official/eng
const serieSeasonTypeLanguage = {
  data: {
    episodes: [
      {
        id: 8051162,
        seriesId: 78878,
        name: 'FLCL Progressive',
      },
      {
        id: 8051167,
        seriesId: 78878,
        name: 'FLCL Alternative',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&sort=name
const seriesFilterSort = {
  data: [{ name: 'Adriana Gaming' }],
};

// https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&year=2023
const seriesFilterYear = {
  data: [{ year: '2023' }],
};

// https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng
const seriesFilterCountryLang = {
  status: 'success',
  data: [{ name: 'Made In Hollywood' }],
};

// https://api4.thetvdb.com/v4/series/78878
const serie = {
  data: {
    id: 78878,
  },
};

// https://api4.thetvdb.com/v4/series/78878/artworks?lang=jpn&type=3
const serieArtworks = {
  data: {
    artworks: [
      {
        id: 686641,
        language: 'jpn',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/nextAired
const serieNextAired = {
  data: {
    firstAired: '2000-04-26',
    lastAired: '2023-10-15',
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended
const serieExtended = {
  data: {
    artworks: [
      {
        id: 686641,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?short=true
const seriesES = {
  data: {
    characters: null,
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=translations&short=true
const seriesETS = {
  data: {
    characters: null,
    translations: {
      nameTranslations: [
        {
          name: 'Fooly Cooly (FLCL)',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=translations
const seriesET = {
  data: {
    artworks: [
      {
        id: 686641,
      },
    ],
    translations: {
      nameTranslations: [
        {
          language: 'spa',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes&short=true
const seriesEES = {
  data: {
    artworks: null,
    episodes: [
      {
        aired: '2018-09-28',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes
const seriesEE = {
  data: {
    artworks: [
      {
        id: 686641,
      },
    ],
    episodes: [
      {
        name: 'フリクリ プログレ',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/translations/eng
const serieTranslations = {
  data: {
    name: 'FLCL',
    language: 'eng',
    aliases: ['Fooly Cooly', 'FLCL: Progressive'],
  },
};

// https://api4.thetvdb.com/v4/series/slug/flcl
const serieSlug = {
  data: {
    originalCountry: 'jpn',
    originalLanguage: 'jpn',
  },
};

// https://api4.thetvdb.com/v4/series/statuses
const seriesStatus = {
  data: [
    {
      id: 1,
      name: 'Continuing',
    },
    {
      id: 2,
      name: 'Ended',
    },
  ],
};

// https://api4.thetvdb.com/v4/series?page=294
const seriesPage = {
  data: [
    {
      id: 441532,
      name: 'Geddy Lee Asks: Are Bass Players Human Too?',
    },
    {
      id: 441533,
      name: 'LEGO DUPLO Nursery Rhymes',
    },
  ],
};

// https://api4.thetvdb.com/v4/series
const series = {
  data: [
    {
      id: 70327,
      name: 'Buffy the Vampire Slayer',
    },
  ],
};

export const seriesHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/series/*', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/series/81189/episodes/dvd?season=0&episodeNumber=1':
        return HttpResponse.json(serieSeasonTypeSeasonAndEpisodeNumber);
      case 'https://api4.thetvdb.com/v4/series/75978/episodes/default?airDate=2006-05-21':
        return HttpResponse.json(serieSeasonTypeAirDate);
      case 'https://api4.thetvdb.com/v4/series/81797/episodes/default?page=1':
        return HttpResponse.json(serieSeasonTypePage);
      case 'https://api4.thetvdb.com/v4/series/75978/episodes/default':
        return HttpResponse.json(serieSeasonType);
      case 'https://api4.thetvdb.com/v4/series/71663/episodes/official/eng?page=1':
        return HttpResponse.json(serieSeasonTypeLanguagePage);
      case 'https://api4.thetvdb.com/v4/series/78878/episodes/official/eng':
        return HttpResponse.json(serieSeasonTypeLanguage);
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&sort=name':
        return HttpResponse.json(seriesFilterSort);
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&year=2023':
        return HttpResponse.json(seriesFilterYear);
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng':
        return HttpResponse.json(seriesFilterCountryLang);
      case 'https://api4.thetvdb.com/v4/series/78878/translations/eng':
        return HttpResponse.json(serieTranslations);
      case 'https://api4.thetvdb.com/v4/series/slug/flcl':
        return HttpResponse.json(serieSlug);
      case 'https://api4.thetvdb.com/v4/series/78878/artworks?lang=jpn&type=3':
        return HttpResponse.json(serieArtworks);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations&short=true':
        return HttpResponse.json(seriesETS);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes&short=true':
        return HttpResponse.json(seriesEES);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations':
        return HttpResponse.json(seriesET);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes':
        return HttpResponse.json(seriesEE);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?short=true':
        return HttpResponse.json(seriesES);
      case 'https://api4.thetvdb.com/v4/series/78878/extended':
        return HttpResponse.json(serieExtended);
      case 'https://api4.thetvdb.com/v4/series/78878/nextAired':
        return HttpResponse.json(serieNextAired);
      case 'https://api4.thetvdb.com/v4/series/statuses':
        return HttpResponse.json(seriesStatus);
      default:
        return HttpResponse.json(serie);
    }
  }),
  http.get<never>('https://api4.thetvdb.com/v4/series', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/series?page=294':
        return HttpResponse.json(seriesPage);
      default:
        return HttpResponse.json(series);
    }
  }),
];
