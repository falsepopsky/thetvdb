import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/awards/categories/42/extended
const awardsCategoryIdExtended = {
  data: {
    nominees: [{ id: 6352, isWinner: true }],
  },
};

// https://api4.thetvdb.com/v4/awards/categories/42
const awardsCategoryId = {
  data: { id: 42, name: 'Best Actor in a Television Series – Drama' },
};

// https://api4.thetvdb.com/v4/awards/1/extended
const awardsIdExtended = {
  data: {
    categories: [{ id: 1, name: 'Best Picture' }],
  },
};

// https://api4.thetvdb.com/v4/awards/1
const awardsId = {
  data: { id: 1, name: 'Academy Awards' },
};

// https://api4.thetvdb.com/v4/awards
const awards = {
  status: 'success',
  data: [{ id: 1, name: 'Academy Awards' }],
};

export const awardsHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/awards/*', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/awards/categories/42/extended':
        return HttpResponse.json(awardsCategoryIdExtended);
      case 'https://api4.thetvdb.com/v4/awards/categories/42':
        return HttpResponse.json(awardsCategoryId);
      case 'https://api4.thetvdb.com/v4/awards/1/extended':
        return HttpResponse.json(awardsIdExtended);
      default:
        return HttpResponse.json(awardsId);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/awards', () => {
    return HttpResponse.json(awards);
  }),
];
