import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/seasons/16
const id = {
  status: 'success',
  data: {
    id: 16,
    seriesId: 70327,
    type: {
      id: 1,
      name: 'Aired Order',
      type: 'official',
      alternateName: null,
    },
    number: 7,
    nameTranslations: [],
    overviewTranslations: ['deu,eng,ita,tur'],
    image: 'https://artworks.thetvdb.com/banners/v4/season/16/posters/61102c0624983.jpg',
    imageType: 7,
    companies: {
      studio: null,
      network: null,
      production: null,
      distributor: null,
      special_effects: null,
    },
    lastUpdated: '2023-02-28 22:42:59',
    year: '2002',
  },
};

// https://api4.thetvdb.com/v4/seasons/6365/extended
const idExtended = {
  status: 'success',
  data: {
    id: 6365,
    seriesId: 73752,
    type: {
      id: 1,
      name: 'Aired Order',
      type: 'official',
      alternateName: null,
    },
    number: 1,
    nameTranslations: [],
    overviewTranslations: ['rus'],
    image: 'https://artworks.thetvdb.com/banners/seasons/24394-1.jpg',
    imageType: 7,
    companies: {
      studio: [],
      network: [
        {
          id: 5,
          name: 'ABC (US)',
          slug: 'abc-us',
          nameTranslations: null,
          overviewTranslations: null,
          aliases: null,
          country: 'usa',
          primaryCompanyType: 1,
          activeDate: null,
          inactiveDate: null,
          companyType: {
            companyTypeId: 1,
            companyTypeName: 'Network',
          },
          parentCompany: {
            id: null,
            name: null,
            relation: {
              id: null,
              typeName: null,
            },
          },
          tagOptions: null,
        },
      ],
      production: [],
      distributor: [],
      special_effects: [],
    },
    lastUpdated: '2023-05-04 17:19:35',
    year: '1997',
    episodes: [
      {
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
        seasons: null,
        number: 1,
        seasonNumber: 1,
        lastUpdated: '2021-01-24 10:55:06',
        finaleType: null,
        year: '1997',
      },
    ],
    trailers: [],
    artwork: [
      {
        id: 61184110,
        image: 'https://artworks.thetvdb.com/banners/seasons/24394-1.jpg',
        thumbnail: 'https://artworks.thetvdb.com/banners/seasons/24394-1_t.jpg',
        language: 'eng',
        type: 7,
        score: 0,
        width: 400,
        height: 578,
        includesText: true,
      },
    ],
    tagOptions: null,
  },
};

// https://api4.thetvdb.com/v4/seasons/6365/extended?meta=translations
const idExtendedMeta = {
  status: 'success',
  data: {
    translations: {
      nameTranslations: null,
      overviewTranslations: [
        {
          overview:
            'Через предательство и кровь к власти пришел новый король. Его демоны-подручные чинят несправедливости до тех пор, пока в город однажды ночью не приходит тяжело вооруженный воин. Весь покрытый оружием, броней и шрамами он называет себя Чёрным Мечником. Размеры его меча могут сравниться только с его ненавистью к королю и его демонам.',
          language: 'rus',
        },
      ],
      aliases: null,
    },
  },
};

// https://api4.thetvdb.com/v4/seasons/types
const sTypes = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Aired Order',
      type: 'official',
      alternateName: null,
    },
    {
      id: 2,
      name: 'DVD Order',
      type: 'dvd',
      alternateName: null,
    },
  ],
};

// https://api4.thetvdb.com/v4/seasons/6365/translations/rus
const idTranslations = {
  status: 'success',
  data: {
    overview:
      'Через предательство и кровь к власти пришел новый король. Его демоны-подручные чинят несправедливости до тех пор, пока в город однажды ночью не приходит тяжело вооруженный воин. Весь покрытый оружием, броней и шрамами он называет себя Чёрным Мечником. Размеры его меча могут сравниться только с его ненавистью к королю и его демонам.',
    language: 'rus',
  },
};

// https://api4.thetvdb.com/v4/seasons?page=1264
const seasonsPage = {
  status: 'success',
  data: [
    {
      id: 2055957,
      seriesId: 433129,
      type: {
        id: 3,
        name: 'Absolute Order',
        type: 'absolute',
        alternateName: null,
      },
      number: 1,
      nameTranslations: null,
      overviewTranslations: null,
      companies: {
        studio: null,
        network: null,
        production: null,
        distributor: null,
        special_effects: null,
      },
      lastUpdated: '2023-03-30 21:50:39',
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/seasons?page=1263',
    self: 'https://api4.thetvdb.com/v4/seasons?page=1264',
    next: 'https://api4.thetvdb.com/v4/seasons?page=1265',
    total_items: 643176,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/seasons
const seasons = {
  status: 'success',
  data: [
    {
      id: 10,
      seriesId: 70327,
      type: {
        id: 1,
        name: 'Aired Order',
        type: 'official',
        alternateName: null,
      },
      number: 1,
      nameTranslations: null,
      overviewTranslations: null,
      image: '/banners/v4/season/10/posters/61102b79ccabb.jpg',
      imageType: 7,
      companies: {
        studio: null,
        network: null,
        production: null,
        distributor: null,
        special_effects: null,
      },
      lastUpdated: '2023-02-28 22:30:23',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/seasons?page=0',
    next: 'https://api4.thetvdb.com/v4/seasons?page=1',
    total_items: 643180,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/seasons/*
const badRequest = { status: 'failure', message: 'query is required', data: null };

export function seasonsPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/seasons/16':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/seasons/6365/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/seasons/6365/extended?meta=translations':
      return HttpResponse.json(idExtendedMeta);
    case 'https://api4.thetvdb.com/v4/seasons/types':
      return HttpResponse.json(sTypes);
    case 'https://api4.thetvdb.com/v4/seasons/6365/translations/rus':
      return HttpResponse.json(idTranslations);
    case 'https://api4.thetvdb.com/v4/seasons?page=1264':
      return HttpResponse.json(seasonsPage);
    case 'https://api4.thetvdb.com/v4/seasons':
      return HttpResponse.json(seasons);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
