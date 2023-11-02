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
  http.get<never>('https://api4.thetvdb.com/v4/people/*', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations':
        return HttpResponse.json(peopleET);
      case 'https://api4.thetvdb.com/v4/people/312388/extended':
        return HttpResponse.json(peopleE);
      default:
        return HttpResponse.json(people);
    }
  }),
];
