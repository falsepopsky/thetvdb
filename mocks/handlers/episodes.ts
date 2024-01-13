import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/episodes/127396
const id = {
  status: 'success',
  data: {
    id: 127396,
    seriesId: 73752,
    name: '黒い騎士',
    aired: '1997-10-08',
    runtime: 24,
    nameTranslations: ['deu', 'eng', 'fra', 'heb', 'ita', 'jpn', 'rus', 'spa', 'zho'],
    overview:
      'とある城下の酒場に現れた、黒いよろいの剣士が起こした事件。それは酒場にいた城の兵士を大剣で襲ったというもので、剣士の捜索で町中が色めき立つ。領主はその報告を受けると、なんと軍を率いて町を破壊し、剣士をおびき出す。そして現れた剣士はボウガンで領主を倒すが、領主は大蛇の化け物になってよみがえった！　攻撃を受け、絶体絶命の剣士……。起死回生に左腕の義手大砲を放つと、領主は体を吹き飛ばされてしまう。さらに剣士は矢で止めをさし、立ち去っていく。――この剣士の名はガッツ。この男の若き日の物語が今始まる。',
    overviewTranslations: ['deu', 'eng', 'fra', 'jpn', 'spa'],
    image: 'https://artworks.thetvdb.com/banners/episodes/73752/127396.jpg',
    imageType: 12,
    isMovie: 0,
    seasons: [
      {
        id: 6365,
        seriesId: 73752,
        type: {
          id: 1,
          name: 'Aired Order',
          type: 'official',
          alternateName: null,
        },
      },
    ],
    number: 1,
    seasonNumber: 1,
    lastUpdated: '2021-01-24 10:55:06',
    finaleType: null,
    year: '1997',
  },
};

// https://api4.thetvdb.com/v4/episodes/127396/extended
const idExtended = {
  status: 'success',
  data: {
    characters: [
      {
        id: 65480386,
        peopleType: 'Creator',
        personName: 'Kentaro Miura',
      },
      {
        id: 65480413,
        peopleType: 'Writer',
        personName: 'Atsuhiro Tomioka',
      },
    ],
    companies: [
      {
        id: 161,
        name: 'Nippon TV',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations
const idExtendedMeta = {
  status: 'success',
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'El guerrero negro',
          language: 'spa',
        },
        {
          name: '黑衣劍士',
          language: 'zho',
        },
      ],
      overviewTranslations: [
        {
          overview:
            'El espadachín negro, conocido como Guts, entra en un pequeño pueblo y comienza a luchar con un ejército dirigido por apóstoles malvados.',
          language: 'spa',
        },
      ],
      aliases: null,
    },
    awards: [],
  },
};

// https://api4.thetvdb.com/v4/episodes/40/translations/spa
const idTranslations = {
  status: 'success',
  data: {
    name: 'El Baile',
    overview:
      'Buffy y Cordelia compiten por ser reina del baile, intentando ambas captar la ayuda de los demás. Paralelamente, un vampiro ha convocado a varios asesinos demoníacos, cuyo objetivo es matar a las Cazadoras.',
    language: 'spa',
  },
};

// https://api4.thetvdb.com/v4/episodes?page=11890
const episodesPage = {
  status: 'success',
  data: [
    {
      id: 10131123,
      seriesId: 411511,
    },
    {
      id: 10131124,
      seriesId: 411513,
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/episodes?page=11889',
    self: 'https://api4.thetvdb.com/v4/episodes?page=11890',
    next: 'https://api4.thetvdb.com/v4/episodes?page=11891',
    total_items: 6056735,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/episodes
const episodes = {
  status: 'success',
  data: [
    {
      id: 2,
      seriesId: 70327,
      name: null,
      aired: '1997-03-10',
      runtime: null,
      nameTranslations: null,
      overview: null,
      overviewTranslations: null,
      image: null,
      imageType: null,
      isMovie: 0,
      seasons: null,
      number: null,
      seasonNumber: null,
      lastUpdated: '2023-01-07 22:22:27',
      finaleType: null,
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/episodes?page=0',
    next: 'https://api4.thetvdb.com/v4/episodes?page=1',
    total_items: 6056735,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/episodes/*
const badRequest = { status: 'failure', message: 'InvalidValueType: invalid path', data: null };

export function episodesPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/episodes/127396':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/episodes/127396/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations':
      return HttpResponse.json(idExtendedMeta);
    case 'https://api4.thetvdb.com/v4/episodes/40/translations/spa':
      return HttpResponse.json(idTranslations);
    case 'https://api4.thetvdb.com/v4/episodes?page=11890':
      return HttpResponse.json(episodesPage);
    case 'https://api4.thetvdb.com/v4/episodes':
      return HttpResponse.json(episodes);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
