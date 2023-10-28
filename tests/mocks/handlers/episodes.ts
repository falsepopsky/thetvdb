import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations
const episodesEM = {
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'Schwarzer Ritter',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/episodes/127396/extended
const episodesE = {
  data: {
    seriesId: 73752,
    nominations: null,
  },
};

// https://api4.thetvdb.com/v4/episodes/127396
const episodes = {
  status: 'success',
  data: {
    id: 127396,
  },
};

export const episodesHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/episodes/*', ({ request }) => {
    const url = new URL(request.url);
    const meta = url.searchParams.get('meta');

    if (meta === 'translations') {
      return HttpResponse.json(episodesEM);
    }
    if (request.url === 'https://api4.thetvdb.com/v4/episodes/127396/extended') {
      return HttpResponse.json(episodesE);
    } else {
      return HttpResponse.json(episodes);
    }
  }),
];
