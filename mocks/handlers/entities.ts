import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/entities
const entities = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'series',
      hasSpecials: false,
    },
    {
      id: 2,
      name: 'season',
      hasSpecials: false,
    },
  ],
};

export function entitiesPaths(): HttpResponse {
  return HttpResponse.json(entities);
}
