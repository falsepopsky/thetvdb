import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/characters/64140522
const id = {
  status: 'success',
  data: {
    id: 64140522,
    name: 'Spike Spiegel',
    peopleId: 7916957,
    seriesId: 76885,
    series: {
      name: 'カウボーイビバップ',
      image: 'https://artworks.thetvdb.com/https://artworks.thetvdb.com/banners/posters/76885-3.jpg',
      year: '1998',
    },
    movie: null,
    movieId: null,
    episodeId: null,
    type: 3,
    image: 'https://artworks.thetvdb.com/banners/person/7916957/62110430.jpg',
    sort: 1,
    isFeatured: true,
    url: 'https://thetvdb.com/people/7916957-kouichi-yamadera',
    nameTranslations: [],
    overviewTranslations: [],
    aliases: [],
    peopleType: 'Actor',
    personName: 'Kouichi Yamadera',
    tagOptions: [],
    personImgURL: 'https://artworks.thetvdb.com/banners/v4/actor/7916957/photo/61ff8d2552665.jpg',
  },
};

// https://api4.thetvdb.com/v4/characters/*
const badRequest = { status: 'failure', message: 'InvalidValueType: cannot make item path', data: null };

export function charactersPaths(url: URL): HttpResponse {
  if (url.href === 'https://api4.thetvdb.com/v4/characters/64140522') {
    return HttpResponse.json(id);
  } else {
    return HttpResponse.json(badRequest, { status: 400 });
  }
}
