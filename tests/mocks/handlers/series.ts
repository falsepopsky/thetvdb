import { HttpResponse, http, type HttpHandler } from 'msw';

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
const series = {
  data: {
    id: 78878,
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended
const seriesE = {
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

export const seriesHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/series/filter', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&sort=name':
        return HttpResponse.json(seriesFilterSort);
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&year=2023':
        return HttpResponse.json(seriesFilterYear);
      default:
        return HttpResponse.json(seriesFilterCountryLang);
    }
  }),
  http.get<never>('https://api4.thetvdb.com/v4/series/:id/extended', ({ request }) => {
    switch (request.url) {
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
      default:
        return HttpResponse.json(seriesE);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/series/:id', () => {
    return HttpResponse.json(series);
  }),
];
