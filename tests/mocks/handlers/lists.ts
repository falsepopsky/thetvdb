import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/lists/17/translations/spa
const listTranslations = {
  data: {
    name: 'Star Wars - Colección',
    overview: 'Star Wars',
    language: 'spa',
  },
};

// https://api4.thetvdb.com/v4/lists/slug/1001
const listSlug = {
  data: { score: 2193819, imageIsFallback: false },
};

// https://api4.thetvdb.com/v4/lists/1/extended
const listIdExtended = {
  data: {
    tags: [
      {
        id: 4397,
        tag: 3782,
      },
      {
        id: 4398,
        tag: 3782,
      },
    ],
    entities: [
      {
        order: 1,
        seriesId: 78260,
      },
      {
        order: 2,
        seriesId: 75661,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/lists/1
const listId = {
  data: {
    overview: 'The following',
  },
};

// https://api4.thetvdb.com/v4/lists?page=7
const listsPage = {
  data: [
    {
      id: 14372,
      url: '14372',
    },
    {
      id: 14373,
      url: '14373',
    },
  ],
};

// https://api4.thetvdb.com/v4/lists
const lists = {
  data: [
    {
      id: 1,
      name: 'Scooby-Doo',
    },
    {
      id: 6,
      name: 'Hermitcraft',
    },
  ],
};

export const listHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/lists/*', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/lists/17/translations/spa':
        return HttpResponse.json(listTranslations);
      case 'https://api4.thetvdb.com/v4/lists/slug/1001':
        return HttpResponse.json(listSlug);
      case 'https://api4.thetvdb.com/v4/lists/1/extended':
        return HttpResponse.json(listIdExtended);
      default:
        return HttpResponse.json(listId);
    }
  }),

  http.get<never>('https://api4.thetvdb.com/v4/lists', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/lists?page=7') {
      return HttpResponse.json(listsPage);
    } else {
      return HttpResponse.json(lists);
    }
  }),
];
