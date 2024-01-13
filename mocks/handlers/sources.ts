import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/sources/types
const sourcesTypes = {
  status: 'success',
  data: [
    {
      id: 2,
      name: 'IMDB',
      slug: 'imdb',
      prefix: 'https://www.imdb.com/title/',
      postfix: '/',
      sort: 4,
    },
    {
      id: 3,
      name: 'TMS (Zap2It)',
      slug: 'zap2it',
      prefix: 'https://tvlistings.zap2it.com/overview.html?programSeriesId=',
      postfix: null,
      sort: 6,
    },
  ],
};

export function sourcesTypesPaths(): HttpResponse {
  return HttpResponse.json(sourcesTypes);
}
