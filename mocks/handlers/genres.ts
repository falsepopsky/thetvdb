import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/genres/1
const id = {
  status: 'success',
  data: {
    id: 1,
    name: 'Soap',
    slug: 'soap',
  },
};

// https://api4.thetvdb.com/v4/genres
const genres = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Soap',
      slug: 'soap',
    },
    {
      id: 2,
      name: 'Science Fiction',
      slug: 'science-fiction',
    },
  ],
};

// https://api4.thetvdb.com/v4/genres/*
const badRequest = { status: 'failure', message: 'InvalidValueType: cannot make item path', data: null };

export function genresPaths(url: URL): HttpResponse {
  if (url.href === 'https://api4.thetvdb.com/v4/genres/1') {
    return HttpResponse.json(id);
  } else if (url.href === 'https://api4.thetvdb.com/v4/genres') {
    return HttpResponse.json(genres);
  } else {
    return HttpResponse.json(badRequest, { status: 400 });
  }
}
