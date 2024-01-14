import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/people?page=2648
const peoplePage = {
  status: 'success',
  data: [
    {
      id: 9119680,
      name: 'Galliano',
      image: null,
      score: 0,
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      lastUpdated: '2023-11-13 18:31:37',
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/people?page=2647',
    self: 'https://api4.thetvdb.com/v4/people?page=2648',
    next: 'https://api4.thetvdb.com/v4/people?page=2649',
    total_items: 1326548,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/people
const people = {
  status: 'success',
  data: [
    {
      id: 247831,
      name: 'Michelle Fairley',
      image: 'https://artworks.thetvdb.com/banners/v4/actor/247831/photo/62742718e0819.jpg',
      score: 0,
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      lastUpdated: '2023-01-25 17:03:54',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/people?page=0',
    next: 'https://api4.thetvdb.com/v4/people?page=1',
    total_items: 1326548,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/people/312388
const id = {
  status: 'success',
  data: {
    id: 312388,
    name: 'Chris Pratt',
    image: 'https://artworks.thetvdb.com/banners/person/312388/primary.jpg',
    score: 0,
    nameTranslations: ['eng', 'spa'],
    overviewTranslations: ['eng', 'spa'],
    aliases: [
      {
        language: 'eng',
        name: 'Christopher Michael Pratt',
      },
    ],
    lastUpdated: '2023-07-20 19:39:12',
  },
};

// https://api4.thetvdb.com/v4/people/312388/extended
const idExtended = {
  status: 'success',
  data: {
    id: 312388,
    name: 'Chris Pratt',
    image: 'https://artworks.thetvdb.com/banners/person/312388/primary.jpg',
    nameTranslations: ['eng', 'spa'],
    overviewTranslations: ['eng', 'spa'],
    aliases: [
      {
        language: 'eng',
        name: 'Christopher Michael Pratt',
      },
    ],
    lastUpdated: '2023-07-20 19:39:12',
    birth: '1979-06-21',
    death: null,
    score: 0,
    birthPlace: 'Virginia, Minnesota, USA',
    remoteIds: [
      {
        id: 'PrattPrattPratt',
        type: 5,
        sourceName: 'Facebook',
      },
    ],
    gender: 1,
    characters: [
      {
        id: 12136724,
        name: 'Peter Quill / Star-Lord',
        peopleId: 312388,
        seriesId: null,
        series: null,
        movie: {
          name: 'Avengers: Infinity War',
          image: 'https://artworks.thetvdb.com/banners/v4/movie/8/posters/60bc273188ee0.jpg',
          year: '2018',
        },
        movieId: 8,
        episodeId: null,
        type: 3,
        image: 'https://artworks.thetvdb.com/banners/person/312388/movie-8.jpg',
        sort: 28,
        isFeatured: true,
        url: '312388-chris-pratt',
        nameTranslations: [],
        overviewTranslations: [],
        aliases: [],
        peopleType: 'Actor',
        personName: 'Chris Pratt',
        tagOptions: null,
        personImgURL: '/banners/person/312388/primary.jpg',
      },
    ],
    biographies: [
      {
        biography:
          "Christopher Michael Pratt is an American actor known for starring in both television and action films. He rose to prominence for his television roles, particularly as Andy Dwyer in the NBC sitcom Parks and Recreation (2009–2015), for which he received critical acclaim and was nominated for the Critics' Choice Television Award for Best Supporting Actor in a Comedy Series in 2013.",
        language: 'eng',
      },
    ],
    awards: null,
    tagOptions: [
      {
        id: 135,
        tag: 6,
        tagName: 'Race',
        name: 'White or Caucasian (Non-Hispanic)',
        helpText: null,
      },
    ],
    slug: '312388-chris-pratt',
  },
};

// https://api4.thetvdb.com/v4/people/312388/extended?meta=translations
const idExtendedMeta = {
  status: 'success',
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'Chris Pratt',
          overview:
            'Christopher Michael Pratt, conocido simplemente como Chris Pratt, es un actor, actor de voz y productor estadounidense.',
          language: 'spa',
        },
      ],
      overviewTranslations: [
        {
          name: 'Chris Pratt',
          overview:
            'Christopher Michael Pratt, conocido simplemente como Chris Pratt, es un actor, actor de voz y productor estadounidense.',
          language: 'spa',
        },
      ],
      aliases: ['Christopher Michael Pratt'],
    },
    slug: '312388-chris-pratt',
  },
};

// https://api4.thetvdb.com/v4/people/types
const pTypes = {
  status: 'success',
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

// https://api4.thetvdb.com/v4/people/312388/translations/spa
const idTranslations = {
  status: 'success',
  data: {
    name: 'Chris Pratt',
    overview:
      'Christopher Michael Pratt, conocido simplemente como Chris Pratt, es un actor, actor de voz y productor estadounidense.',
    language: 'spa',
  },
};

// https://api4.thetvdb.com/v4/people/*
const badRequest = { status: 'failure', message: 'InvalidValueType: cannot make item path', data: null };

export function peoplePaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/people?page=2648':
      return HttpResponse.json(peoplePage);
    case 'https://api4.thetvdb.com/v4/people':
      return HttpResponse.json(people);
    case 'https://api4.thetvdb.com/v4/people/312388':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/people/312388/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations':
      return HttpResponse.json(idExtendedMeta);
    case 'https://api4.thetvdb.com/v4/people/types':
      return HttpResponse.json(pTypes);
    case 'https://api4.thetvdb.com/v4/people/312388/translations/spa':
      return HttpResponse.json(idTranslations);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
