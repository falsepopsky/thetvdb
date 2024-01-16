import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/content/ratings
const ratings = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'ATP',
      country: 'arg',
      description: 'Suitable for all audiences',
      contentType: 'episode',
      order: 0,
      fullname: 'ATP',
    },
    {
      id: 2,
      name: '+13',
      country: 'arg',
      description: 'Suitable for ages 13 and up',
      contentType: 'episode',
      order: 0,
      fullname: '+13',
    },
  ],
};

export function contentPaths(): HttpResponse {
  return HttpResponse.json(ratings);
}
