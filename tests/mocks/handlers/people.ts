import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/people/312388/translations/spa
const peopleTranslations = {
  data: {
    name: 'Chris Pratt',
    language: 'spa',
  },
};

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

// https://api4.thetvdb.com/v4/people/types
const peopleTypes = {
  data: [
    {
      id: 3,
      name: 'Actor',
    },
    {
      id: 6,
      name: 'Creator',
    },
  ],
};

// https://api4.thetvdb.com/v4/people?page=2648
const peoplesPage = {
  data: [
    {
      id: 9119375,
      name: 'Isabela Boscov',
    },
  ],
};

// https://api4.thetvdb.com/v4/people
const peoples = {
  data: [
    {
      id: 247831,
      name: 'Michelle Fairley',
    },
    {
      id: 247832,
      name: 'Gethin Anthony',
    },
  ],
};

export const peopleHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/people/*', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/people/312388/translations/spa':
        return HttpResponse.json(peopleTranslations);
      case 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations':
        return HttpResponse.json(peopleET);
      case 'https://api4.thetvdb.com/v4/people/312388/extended':
        return HttpResponse.json(peopleE);
      case 'https://api4.thetvdb.com/v4/people/types':
        return HttpResponse.json(peopleTypes);
      default:
        return HttpResponse.json(people);
    }
  }),

  http.get<never>('https://api4.thetvdb.com/v4/people', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/people?page=2648') {
      return HttpResponse.json(peoplesPage);
    } else {
      return HttpResponse.json(peoples);
    }
  }),
];
