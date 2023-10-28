import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/people/312388/extended?meta=translations
const peopleET = {
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'Chris Pratt',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/people/312388/extended
const peopleE = {
  data: {
    gender: 1,
  },
};

// https://api4.thetvdb.com/v4/people/312388
const people = {
  status: 'success',
  data: {
    id: 312388,
  },
};

export const peopleHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/people/:id/extended', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations') {
      return HttpResponse.json(peopleET);
    } else {
      return HttpResponse.json(peopleE);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/people/:id', () => {
    return HttpResponse.json(people);
  }),
];
