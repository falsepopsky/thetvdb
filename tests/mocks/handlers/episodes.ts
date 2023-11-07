import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/episodes/40/translations/spa
const episodeLang = {
  data: {
    name: 'El Baile',
    language: 'spa',
  },
};

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
const episodeE = {
  data: {
    seriesId: 73752,
    nominations: null,
  },
};

// https://api4.thetvdb.com/v4/episodes/127396
const episode = {
  status: 'success',
  data: {
    id: 127396,
  },
};

// https://api4.thetvdb.com/v4/episodes?page=11890
const episodesPage = {
  data: [
    {
      id: 10124498,
      seriesId: 415404,
    },
    {
      id: 10124499,
      seriesId: 415404,
    },
  ],
};

// https://api4.thetvdb.com/v4/episodes
const episodes = {
  data: [
    {
      id: 502,
      seriesId: 70328,
    },
  ],
};

export const episodesHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/episodes/*', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/episodes/40/translations/spa':
        return HttpResponse.json(episodeLang);
      case 'https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations':
        return HttpResponse.json(episodesEM);
      case 'https://api4.thetvdb.com/v4/episodes/127396/extended':
        return HttpResponse.json(episodeE);
      default:
        return HttpResponse.json(episode);
    }
  }),
  http.get<never>('https://api4.thetvdb.com/v4/episodes', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/episodes?page=11890':
        return HttpResponse.json(episodesPage);
      default:
        return HttpResponse.json(episodes);
    }
  }),
];
