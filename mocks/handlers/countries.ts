import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/countries
const countries = {
  status: 'success',
  data: [
    {
      id: 'abw',
      name: 'Aruba',
      shortCode: '',
    },
    {
      id: 'afg',
      name: 'Afghanistan',
      shortCode: '',
    },
  ],
};

export function countriesPaths(): HttpResponse {
  return HttpResponse.json(countries);
}
