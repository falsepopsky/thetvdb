import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/genders
const genders = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Male',
    },
    {
      id: 2,
      name: 'Female',
    },
    {
      id: 3,
      name: 'Other',
    },
  ],
};

export function gendersPaths(): HttpResponse {
  return HttpResponse.json(genders);
}
