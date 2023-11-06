import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/seasons/6365/translations/rus
const seasonT = {
  data: {
    overview: 'Через',
    language: 'rus',
  },
};

// https://api4.thetvdb.com/v4/seasons/types
const seasonTypes = {
  data: [
    {
      id: 1,
      name: 'Aired Order',
    },
    {
      id: 2,
      type: 'dvd',
    },
  ],
};

// https://api4.thetvdb.com/v4/seasons/6365/extended?meta=translations
const seasonEM = {
  data: {
    translations: {
      nameTranslations: null,
    },
  },
};

// https://api4.thetvdb.com/v4/seasons/6365/extended
const seasonE = {
  data: {
    image: 'https://artworks.thetvdb.com/banners/seasons/24394-1.jpg',
  },
};

// https://api4.thetvdb.com/v4/seasons/1698074
const season = {
  data: {
    seriesId: 70350,
  },
};

export const seasonHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/seasons/*', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/seasons/6365/translations/rus':
        return HttpResponse.json(seasonT);
      case 'https://api4.thetvdb.com/v4/seasons/6365/extended?meta=translations':
        return HttpResponse.json(seasonEM);
      case 'https://api4.thetvdb.com/v4/seasons/6365/extended':
        return HttpResponse.json(seasonE);
      case 'https://api4.thetvdb.com/v4/seasons/types':
        return HttpResponse.json(seasonTypes);
      default:
        return HttpResponse.json(season);
    }
  }),
];
