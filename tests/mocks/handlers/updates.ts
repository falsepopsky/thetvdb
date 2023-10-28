import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2
const updatesFull = {
  status: 'success',
  data: [
    {
      method: 'update',
    },
    {
      entityType: 'artwork',
    },
  ],
  links: {
    next: 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=3',
  },
};

// https://api4.thetvdb.com/v4/updates?since=1682899200&action=delete
const updates = {
  data: [
    {
      method: 'delete',
    },
  ],
};

export const updatesHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/updates', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2') {
      return HttpResponse.json(updatesFull);
    } else {
      return HttpResponse.json(updates);
    }
  }),
];
