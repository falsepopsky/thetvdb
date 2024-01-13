import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/awards/1
const id = {
  status: 'success',
  data: {
    id: 1,
    name: 'Academy Awards',
  },
};

// https://api4.thetvdb.com/v4/awards/1/extended
const idExtended = {
  status: 'success',
  data: {
    id: 1,
    name: 'Academy Awards',
    categories: [
      {
        id: 1,
        name: 'Best Picture',
        allowCoNominees: false,
        forSeries: false,
        forMovies: true,
        award: {
          id: 1,
          name: 'Academy Awards',
        },
      },
      {
        id: 2,
        name: 'Actor in a Leading Role',
        allowCoNominees: false,
        forSeries: false,
        forMovies: true,
        award: {
          id: 1,
          name: 'Academy Awards',
        },
      },
    ],
    score: 0,
  },
};

// https://api4.thetvdb.com/v4/awards/categories/42
const idCategory = {
  status: 'success',
  data: {
    id: 42,
    name: 'Best Actor in a Television Series – Drama',
    allowCoNominees: false,
    forSeries: true,
    forMovies: false,
    award: {
      id: 2,
      name: 'Golden Globe Awards',
    },
  },
};

// https://api4.thetvdb.com/v4/awards/categories/42/extended
const idCategoryExtended = {
  status: 'success',
  data: {
    id: 42,
    name: 'Best Actor in a Television Series – Drama',
    allowCoNominees: false,
    forSeries: true,
    forMovies: false,
    award: {
      id: 2,
      name: 'Golden Globe Awards',
    },
    nominees: [
      {
        id: 6341,
        year: '2014',
      },
      {
        id: 6349,
        year: '2015',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/awards
const awards = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Academy Awards',
    },
    {
      id: 2,
      name: 'Golden Globe Awards',
    },
  ],
};

// https://api4.thetvdb.com/v4/awards/*
const badRequest = { status: 'failure', message: 'InvalidValueType: cannot make item path', data: null };

export function awardsPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/awards/1':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/awards/1/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/awards/categories/42':
      return HttpResponse.json(idCategory);
    case 'https://api4.thetvdb.com/v4/awards/categories/42/extended':
      return HttpResponse.json(idCategoryExtended);
    case 'https://api4.thetvdb.com/v4/awards':
      return HttpResponse.json(awards);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
