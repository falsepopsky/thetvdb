import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/lists/1
const id = {
  status: 'success',
  data: {
    id: 1,
    name: 'Scooby-Doo',
    overview:
      'The following is a list of the various media from the Scooby-Doo franchise which includes series, films and specials.',
    url: '1001',
    isOfficial: false,
    nameTranslations: ['eng'],
    overviewTranslations: ['eng'],
    aliases: [],
    score: 2234721,
    image: '',
    imageIsFallback: false,
    remoteIds: null,
    tags: null,
  },
};

// https://api4.thetvdb.com/v4/lists/1/extended
const idExtended = {
  status: 'success',
  data: {
    tags: [
      {
        id: 4397,
        tag: 3782,
        tagName: 'Genre',
        name: 'Adventure',
        helpText: null,
      },
      {
        id: 4398,
        tag: 3782,
        tagName: 'Genre',
        name: 'Animation',
        helpText: null,
      },
    ],
    entities: [
      {
        order: 1,
        seriesId: 78260,
        movieId: null,
      },
      {
        order: 2,
        seriesId: 75661,
        movieId: null,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/lists/slug/1001
const slug = {
  status: 'success',
  data: {
    id: 1,
    name: 'Scooby-Doo',
    overview:
      'The following is a list of the various media from the Scooby-Doo franchise which includes series, films and specials.',
    url: '1001',
    isOfficial: false,
    nameTranslations: ['eng'],
    overviewTranslations: ['eng'],
    aliases: [],
    score: 2226999,
    image: '',
    imageIsFallback: false,
    remoteIds: null,
    tags: null,
  },
};

// https://api4.thetvdb.com/v4/lists/17/translations/spa
const idTranslations = {
  status: 'success',
  data: [
    {
      name: 'Star Wars - Colección',
      overview:
        'Star Wars,​ es una franquicia compuesta por series, películas y comics concebidas por el cineasta George Lucas. La trama describe las vivencias de un grupo de personajes que habitan en una galaxia ficticia e interactúan con elementos como «la Fuerza».',
      language: 'spa',
    },
  ],
};

// https://api4.thetvdb.com/v4/lists?page=7
const listsPage = {
  status: 'success',
  data: [
    {
      id: 14374,
      name: 'Chateau',
      overview: '',
      url: '14374',
      isOfficial: false,
      nameTranslations: ['eng'],
      overviewTranslations: ['eng'],
      aliases: [],
      score: 0,
      image: '',
      imageIsFallback: false,
      remoteIds: null,
      tags: null,
    },
    {
      id: 14375,
      name: 'Garage Sale Mysteries',
      overview:
        'Jennifer Shannon can always find a diamond in the rough, she has made a career out of her treasure-hunting prowess. Jennifer learns that crime-solving can be far more dangerous than any garage sale.',
      url: 'garage-sale-mysteries',
      isOfficial: true,
      nameTranslations: ['eng'],
      overviewTranslations: ['eng'],
      aliases: [],
      score: 0,
      image: '',
      imageIsFallback: false,
      remoteIds: null,
      tags: null,
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/lists?page=6',
    self: 'https://api4.thetvdb.com/v4/lists?page=7',
    next: 'https://api4.thetvdb.com/v4/lists?page=8',
    total_items: 4969,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/lists
const lists = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Scooby-Doo',
      overview:
        'The following is a list of the various media from the Scooby-Doo franchise which includes series, films and specials.',
      url: '1001',
      isOfficial: false,
      nameTranslations: ['eng'],
      overviewTranslations: ['eng'],
      aliases: [],
      score: 2234721,
      image: '',
      imageIsFallback: false,
      remoteIds: null,
      tags: null,
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/lists?page=0',
    next: 'https://api4.thetvdb.com/v4/lists?page=1',
    total_items: 4976,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/lists/*
const badRequest = { status: 'failure', message: 'InvalidValueType: cannot make item path', data: null };

export function listsPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/lists/1':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/lists/1/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/lists/slug/1001':
      return HttpResponse.json(slug);
    case 'https://api4.thetvdb.com/v4/lists/17/translations/spa':
      return HttpResponse.json(idTranslations);
    case 'https://api4.thetvdb.com/v4/lists?page=7':
      return HttpResponse.json(listsPage);
    case 'https://api4.thetvdb.com/v4/lists':
      return HttpResponse.json(lists);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
