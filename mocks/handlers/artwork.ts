import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/artwork/63237874
const id = {
  status: 'success',
  data: {
    id: 63237874,
    image: 'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460.jpg',
    thumbnail: 'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460_t.jpg',
    language: 'eng',
    type: 14,
    score: 0,
    width: 680,
    height: 1000,
    includesText: true,
  },
};

// https://api4.thetvdb.com/v4/artwork/63237874/extended
const idExtended = {
  status: 'success',
  data: {
    id: 63237874,
    image: 'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460.jpg',
    thumbnail: 'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460_t.jpg',
    language: 'eng',
    type: 14,
    score: 0,
    width: 680,
    height: 1000,
    includesText: false,
    thumbnailWidth: 340,
    thumbnailHeight: 500,
    updatedAt: 1666276812,
    movieId: 145830,
    status: {
      id: 0,
      name: null,
    },
    tagOptions: [],
  },
};

// https://api4.thetvdb.com/v4/artwork/statuses
const statuses = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Low Quality',
    },
    {
      id: 2,
      name: 'Improper Action Shot',
    },
  ],
};

// https://api4.thetvdb.com/v4/artwork/types
const artTypes = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Banner',
      recordType: 'series',
      slug: 'banners',
      imageFormat: 'JPG',
      width: 758,
      height: 140,
      thumbWidth: 758,
      thumbHeight: 140,
    },
    {
      id: 2,
      name: 'Poster',
      recordType: 'series',
      slug: 'posters',
      imageFormat: 'JPG',
      width: 680,
      height: 1000,
      thumbWidth: 340,
      thumbHeight: 500,
    },
  ],
};

// https://api4.thetvdb.com/v4/artwork/*
const badRequest = {
  status: 'failure',
  message: 'InvalidValueType: invalid path',
  data: null,
};

export function artworkPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/artwork/63237874/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/artwork/63237874':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/artwork/statuses':
      return HttpResponse.json(statuses);
    case 'https://api4.thetvdb.com/v4/artwork/types':
      return HttpResponse.json(artTypes);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
