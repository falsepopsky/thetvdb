import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series&limit=1
const searchTL = {
  data: [
    {
      country: 'jpn',
    },
  ],
};

// https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series
const searchT = {
  data: [
    {
      type: 'series',
    },
  ],
};

// https://api4.thetvdb.com/v4/search?query=saint+seiya
const search = {
  status: 'success',
  data: [
    {
      objectID: 'series-426391',
      country: 'jpn',
    },
  ],
};

export const searchHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/search', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series&limit=1':
        return HttpResponse.json(searchTL);
      case 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series':
        return HttpResponse.json(searchT);
      default:
        return HttpResponse.json(search);
    }
  }),
];
