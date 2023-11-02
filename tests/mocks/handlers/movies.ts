import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name
const movieFilterSort = {
  data: [{ name: '-Ship: A Visual Poem' }],
};

// https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&year=2023
const movieFilterYear = {
  data: [{ year: '2023' }],
};

// https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng
const movieFilterCountryLang = {
  status: 'success',
  data: [{ name: 'The Fortress' }],
};

// https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations&short=true
const movieEMS = {
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'El caso Figo: El fichaje del siglo',
        },
      ],
      overviewTranslations: [
        {
          language: 'spa',
        },
      ],
    },
    characters: null,
    artworks: null,
    trailers: null,
  },
};

// https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations
const movieEM = {
  data: { translations: { ...movieEMS.data.translations } },
};

// https://api4.thetvdb.com/v4/movies/3646/extended?short=true
const movieES = {
  data: { characters: null, artworks: null, trailers: null },
};

// https://api4.thetvdb.com/v4/movies/3646/extended
const movieE = {
  data: {
    trailers: [
      { id: 143117, language: 'spa' },
      { id: 143118, language: 'eng' },
    ],
  },
};

// https://api4.thetvdb.com/v4/movies/slug/macross-do-you-remember-love
const movieSlug = {
  data: {
    score: 483,
    runtime: 114,
    year: '1984',
  },
};

// https://api4.thetvdb.com/v4/movies/12586
const movie = {
  data: { id: 12586, slug: 'macross-do-you-remember-love' },
};

// https://api4.thetvdb.com/v4/movies?page=674
const moviesPage = {
  data: [
    {
      id: 351048,
      slug: '351048-movie',
    },
    {
      id: 351049,
      slug: 'rekni-to-psem',
    },
  ],
};

// https://api4.thetvdb.com/v4/movies
const movies = {
  data: [
    {
      id: 351047,
      year: '2023',
    },
  ],
};

export const moviesHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/movies/*', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name':
        return HttpResponse.json(movieFilterSort);
      case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&year=2023':
        return HttpResponse.json(movieFilterYear);
      case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng':
        return HttpResponse.json(movieFilterCountryLang);
      case 'https://api4.thetvdb.com/v4/movies/slug/macross-do-you-remember-love':
        return HttpResponse.json(movieSlug);
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations&short=true':
        return HttpResponse.json(movieEMS);
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations':
        return HttpResponse.json(movieEM);
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?short=true':
        return HttpResponse.json(movieES);
      case 'https://api4.thetvdb.com/v4/movies/3646/extended':
        return HttpResponse.json(movieE);
      default:
        return HttpResponse.json(movie);
    }
  }),

  http.get<never>('https://api4.thetvdb.com/v4/movies', ({ request }) => {
    const url = new URL(request.url);

    switch (url.href) {
      case 'https://api4.thetvdb.com/v4/movies?page=674':
        return HttpResponse.json(moviesPage);
      default:
        return HttpResponse.json(movies);
    }
  }),
];
