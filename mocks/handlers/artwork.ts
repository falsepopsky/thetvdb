import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/artwork/63237874/extended
const artworkExtended = {
  data: { movieId: 145830 },
};

// https://api4.thetvdb.com/v4/artwork/statuses
const artworkStatuses = {
  status: 'success',
  data: [{ name: 'Low Quality' }, { id: 2 }],
};

// https://api4.thetvdb.com/v4/artwork/types
const artworkTypes = {
  status: 'success',
  data: [{ thumbHeight: 140 }, { id: 2, imageFormat: 'JPG' }],
};

// https://api4.thetvdb.com/v4/artwork/63237874
const artwork = {
  status: 'success',
  data: { id: 63237874 },
};

export const artworkHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/artwork/*', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/artwork/63237874/extended':
        return HttpResponse.json(artworkExtended);
      case 'https://api4.thetvdb.com/v4/artwork/statuses':
        return HttpResponse.json(artworkStatuses);
      case 'https://api4.thetvdb.com/v4/artwork/types':
        return HttpResponse.json(artworkTypes);
      default:
        return HttpResponse.json(artwork);
    }
  }),
];
