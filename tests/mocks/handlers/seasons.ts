import { HttpResponse, http, type HttpHandler } from 'msw';

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
    const meta = url.searchParams.get('meta');

    if (meta === 'translations') {
      return HttpResponse.json(seasonEM);
    }

    if (request.url === 'https://api4.thetvdb.com/v4/seasons/6365/extended') {
      return HttpResponse.json(seasonE);
    } else {
      return HttpResponse.json(season);
    }
  }),
];
