import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/movies/12586
const id = {
  status: 'success',
  data: {
    id: 12586,
    name: '超時空要塞マクロス 愛・おぼえていますか',
    slug: 'macross-do-you-remember-love',
    image: 'https://artworks.thetvdb.com/banners/movies/12586/posters/12586.jpg',
    nameTranslations: ['ita', 'jpn', 'zho', 'kor', 'nld', 'deu', 'spa', 'fra', 'por', 'hun', 'eng', 'rus'],
    overviewTranslations: ['ita', 'jpn', 'zho', 'kor', 'nld', 'deu', 'spa', 'fra', 'por', 'hun', 'eng', 'rus', 'rus'],
    aliases: [],
    score: 492,
    runtime: 114,
    status: {
      id: 5,
      name: 'Released',
      recordType: 'movie',
      keepUpdated: true,
    },
    lastUpdated: '2023-05-15 02:16:07',
    year: '1984',
  },
};

// https://api4.thetvdb.com/v4/movies/12586/extended
const idExtended = {
  status: 'success',
  data: {
    id: 12586,
    name: '超時空要塞マクロス 愛・おぼえていますか',
    slug: 'macross-do-you-remember-love',
    image: 'https://artworks.thetvdb.com/banners/movies/12586/posters/12586.jpg',
    nameTranslations: ['ita', 'jpn', 'zho', 'kor', 'nld', 'deu', 'spa', 'fra', 'por', 'hun', 'eng', 'rus'],
    overviewTranslations: ['ita', 'jpn', 'zho', 'kor', 'nld', 'deu', 'spa', 'fra', 'por', 'hun', 'eng', 'rus', 'rus'],
    aliases: [],
    score: 491,
    runtime: 114,
    status: {
      id: 5,
      name: 'Released',
      recordType: 'movie',
      keepUpdated: true,
    },
    lastUpdated: '2023-05-15 02:16:07',
    year: '1984',
    trailers: [
      {
        id: 175849,
        name: 'Trailer',
        url: 'https://www.youtube.com/watch?v=uY4fme_AvW4',
        language: 'jpn',
        runtime: 0,
      },
    ],
    genres: [
      {
        id: 19,
        name: 'Action',
        slug: 'action',
      },
    ],
    releases: [
      {
        country: 'global',
        date: '1984-07-21',
        detail: null,
      },
    ],
    artworks: [
      {
        id: 2534504,
        image: 'https://artworks.thetvdb.com/banners/movies/12586/backgrounds/12586.jpg',
        thumbnail: 'https://artworks.thetvdb.com/banners/movies/12586/backgrounds/12586_t.jpg',
        language: null,
        type: 15,
        score: 100000,
        width: 1920,
        height: 1080,
        includesText: true,
      },
    ],
    remoteIds: [
      {
        id: 'tt0087660',
        type: 2,
        sourceName: 'IMDB',
      },
      {
        id: 'http://www.macross.co.jp',
        type: 4,
        sourceName: 'Official Website',
      },
      {
        id: '14132',
        type: 10,
        sourceName: 'TheMovieDB.com',
      },
    ],
    characters: [
      {
        id: 12354030,
        name: 'Hikaru Ichijyo',
        peopleId: 353918,
        seriesId: null,
        series: null,
        movie: null,
        movieId: 12586,
        episodeId: null,
        type: 3,
        image: 'https://artworks.thetvdb.com/banners/v4/actor/353918/photo/64304a850fbab.jpg',
        sort: 1,
        isFeatured: true,
        url: '353918-arihiro-hase',
        nameTranslations: null,
        overviewTranslations: null,
        aliases: null,
        peopleType: 'Actor',
        personName: 'Arihiro Hase',
        tagOptions: null,
        personImgURL: '',
      },
    ],
    budget: '0.00',
    boxOffice: '0.00',
    boxOfficeUS: '',
    originalCountry: 'jpn',
    originalLanguage: 'jpn',
    audioLanguages: null,
    subtitleLanguages: null,
    studios: null,
    awards: null,
    tagOptions: null,
    lists: [],
    contentRatings: null,
    companies: {
      studio: [],
      network: [],
      production: [
        {
          id: 5395,
          name: 'Artland',
          slug: 'artland',
          nameTranslations: null,
          overviewTranslations: null,
          aliases: null,
          country: null,
          primaryCompanyType: 3,
          activeDate: null,
          inactiveDate: null,
          companyType: {
            companyTypeId: 3,
            companyTypeName: 'Production Company',
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
      distributor: [],
      special_effects: [],
    },
    production_countries: [
      {
        id: 238997,
        country: 'jpn',
        name: 'Japan',
      },
    ],
    inspirations: [],
    spoken_languages: ['jpn'],
    first_release: {
      country: 'global',
      date: '1984-07-21',
      detail: null,
    },
  },
};

// https://api4.thetvdb.com/v4/movies/12586/extended?meta=translations
const idExtendedMeta = {
  status: 'success',
  data: {
    id: 12586,
    translations: {
      nameTranslations: [
        {
          name: 'Macross: ¿Recuerdas el amor?',
          language: 'spa',
        },
        {
          name: 'Macross: Do You Remember Love?',
          language: 'eng',
        },
      ],
      overviewTranslations: [
        {
          overview:
            'Una raza alienígena, los Zentraedi, atraviesan la galaxia con destino a la Tierra. Con un ejército de naves que se cuenta por millones y una tecnología mucho más avanzada que la de los humanos, los Zentraedi no necesitarán demasiado tiempo para acabar con la raza humana y recuperar una de sus naves, que se estrelló en el planeta tiempo atrás. Los humanos no tienen mucho donde escoger para escaparse de su aniquilación, así que deciden salvar a los habitantes de la isla donde cayó "Macross", la nave alienígena, usándola para abandonar el planeta, dirigiéndose más allá de los límites del Sistema Solar. Siendo los Zentraedi los nuevos amos del planeta, sólo el tiempo dirá si alguna vez podrán volver a la Tierra y vencerles.',
          language: 'spa',
        },
      ],
      aliases: null,
    },
  },
};

// https://api4.thetvdb.com/v4/movies/3862/extended?short=true
const idExtendedShort = {
  status: 'success',
  data: {
    id: 3862,
    name: 'Interstella 5555: The 5tory of the 5ecret 5tar 5ystem',
    trailers: null,
    characters: null,
  },
};

// https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations&short=true
const idExtendedMetaShort = {
  status: 'success',
  data: {
    slug: 'cowboy-bebop-the-movie',
    trailers: null,
    artworks: null,
    characters: null,
    translations: {
      nameTranslations: [
        {
          name: 'Cowboy Bebop, la película: Llamando a las puertas del cielo',
          language: 'spa',
        },
      ],
      overviewTranslations: [
        {
          overview:
            'Marte, año 2071, poco antes del día de Halloween. Un camión cisterna lleno de productos químicos hace explosión en una de las calles más importantes de la ciudad, liberando un nuevo virus letal que acaba con la vida de cientos de personas. Las autoridades, temiendo un nuevo ataque aún más destructivo, fijan una recompensa millonaria para quien capture a los responsables. Mientras tanto, en la nave "Bebop", Spike y su banda de cazadores de recompensas están aburridos y sin dinero, hasta que conocen la noticia de la recompensa...',
          language: 'spa',
        },
      ],
      aliases: null,
    },
  },
};

// https://api4.thetvdb.com/v4/movies/slug/cowboy-bebop-the-movie
const slug = {
  status: 'success',
  data: {
    id: 3646,
    name: 'カウボーイビバップ 天国の扉',
    slug: 'cowboy-bebop-the-movie',
    image: 'https://artworks.thetvdb.com/banners/v4/movie/3646/posters/645c4eab38ac2.jpg',
    nameTranslations: ['ces', 'dan'],
    overviewTranslations: ['ces', 'dan'],
    aliases: [],
    score: 19317,
    runtime: 116,
    status: {
      id: 5,
      name: 'Released',
      recordType: 'movie',
      keepUpdated: true,
    },
    lastUpdated: '2023-10-11 16:32:15',
    year: '2001',
  },
};

// https://api4.thetvdb.com/v4/movies/statuses
const statuses = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Announced',
      recordType: 'movie',
      keepUpdated: false,
    },
    {
      id: 2,
      name: 'Pre-Production',
      recordType: 'movie',
      keepUpdated: false,
    },
  ],
};

// https://api4.thetvdb.com/v4/movies/2036/translations/spa
const idTranslations = {
  status: 'success',
  data: {
    name: 'Neon Genesis Evangelion: The End of Evangelion',
    overview:
      'NERV se enfrenta al Decimoctavo Ángel, pero al final el destino del mundo depende de las elecciones de Shinji.',
    language: 'spa',
  },
};

// https://api4.thetvdb.com/v4/movies?page=674
const moviesPage = {
  status: 'success',
  data: [
    {
      id: 351074,
      name: 'How We Get Free',
      slug: 'how-we-get-free',
      image: '/banners/v4/movie/351074/posters/65625ccb2348e.jpg',
      nameTranslations: ['eng'],
      overviewTranslations: ['eng'],
      aliases: [],
      score: 24,
      runtime: 29,
      status: {
        id: 5,
        name: 'Released',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2023-12-23 00:34:00',
      year: '2023',
    },
    {
      id: 351075,
      name: 'South to Black Power',
      slug: 'south-to-black-power',
      image: '/banners/v4/movie/351075/posters/656a14967a296.jpg',
      nameTranslations: ['eng'],
      overviewTranslations: ['eng'],
      aliases: [],
      score: 42,
      runtime: 87,
      status: {
        id: 5,
        name: 'Released',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2023-12-22 15:20:57',
      year: '2023',
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/movies?page=673',
    self: 'https://api4.thetvdb.com/v4/movies?page=674',
    next: 'https://api4.thetvdb.com/v4/movies?page=675',
    total_items: 338905,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/movies
const movies = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Alita: Battle Angel',
      slug: 'alita-battle-angel',
      image: '/banners/movies/1/posters/2170750.jpg',
      nameTranslations: ['hun', 'jpn'],
      overviewTranslations: ['hun', 'jpn'],
      aliases: [],
      score: 386049,
      runtime: 122,
      status: {
        id: 5,
        name: 'Released',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2023-12-07 22:44:01',
      year: '2019',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/movies?page=0',
    next: 'https://api4.thetvdb.com/v4/movies?page=1',
    total_items: 338905,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/movies/filter
const filter = {
  status: 'success',
  data: [
    {
      id: 7231,
      name: 'The Chronicles of Narnia: The Silver Chair',
      slug: 'the-chronicles-of-narnia-the-silver-chair',
      image: null,
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      score: 32223,
      runtime: 0,
      status: {
        id: 1,
        name: 'Announced',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2022-03-20 16:30:32',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/movies/filter?page=0',
    next: 'https://api4.thetvdb.com/v4/movies/filter?page=1',
    total_items: 337202,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/movies/filter?country=usa
const filterCountry = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Alita: Battle Angel',
      slug: 'alita-battle-angel',
      image: '/banners/movies/1/posters/2170750.jpg',
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      score: 386049,
      runtime: 122,
      status: {
        id: 5,
        name: 'Released',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2023-12-07 22:44:01',
      year: '2019',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/movies/filter?country=usa&page=0',
    next: 'https://api4.thetvdb.com/v4/movies/filter?country=usa&page=1',
    total_items: 112317,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/movies/filter?lang=spa
const filterLang = {
  status: 'success',
  data: [
    {
      id: 336179,
      name: 'Los Simuladores: La Película',
      slug: 'los-simuladores-la-pelicula',
      image: null,
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      score: 94,
      runtime: 0,
      status: {
        id: 1,
        name: 'Announced',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2022-09-15 19:57:58',
      year: '2024',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/movies/filter?lang=spa&page=0',
    next: 'https://api4.thetvdb.com/v4/movies/filter?lang=spa&page=1',
    total_items: 17108,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/movies/filter?year=2024
const filterYear = {
  status: 'success',
  data: [
    {
      id: 59698,
      name: 'Nosferatu',
      slug: '59698-nosferatu',
      image: '/banners/movies/59698/posters/59698.jpg',
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      score: 2045,
      runtime: 0,
      status: {
        id: 1,
        name: 'Announced',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2023-12-06 10:35:19',
      year: '2024',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/movies/filter?year=2024&page=0',
    next: null,
    total_items: 414,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name&year=2024
const filterCountryLangSortYear = {
  status: 'success',
  data: [
    {
      id: 350222,
      name: 'AEW All In London 2024',
      slug: 'aew-all-in-london-2024',
      image: null,
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      score: 45,
      runtime: 0,
      status: {
        id: 1,
        name: 'Announced',
        recordType: 'movie',
        keepUpdated: true,
      },
      lastUpdated: '2023-09-28 18:31:04',
      year: '2024',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name&year=2024&genre=21&page=0',
    next: null,
    total_items: 20,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/movies/*
const badRequest = { status: 'failure', message: 'InvalidValueType: cannot make item path', data: null };

export function moviesPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/movies/12586':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/movies/12586/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/movies/12586/extended?meta=translations':
      return HttpResponse.json(idExtendedMeta);
    case 'https://api4.thetvdb.com/v4/movies/3862/extended?short=true':
      return HttpResponse.json(idExtendedShort);
    case 'https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations&short=true':
      return HttpResponse.json(idExtendedMetaShort);
    case 'https://api4.thetvdb.com/v4/movies/slug/cowboy-bebop-the-movie':
      return HttpResponse.json(slug);
    case 'https://api4.thetvdb.com/v4/movies/statuses':
      return HttpResponse.json(statuses);
    case 'https://api4.thetvdb.com/v4/movies/2036/translations/spa':
      return HttpResponse.json(idTranslations);
    case 'https://api4.thetvdb.com/v4/movies?page=674':
      return HttpResponse.json(moviesPage);
    case 'https://api4.thetvdb.com/v4/movies':
      return HttpResponse.json(movies);
    case 'https://api4.thetvdb.com/v4/movies/filter':
      return HttpResponse.json(filter);
    case 'https://api4.thetvdb.com/v4/movies/filter?country=usa':
      return HttpResponse.json(filterCountry);
    case 'https://api4.thetvdb.com/v4/movies/filter?lang=spa':
      return HttpResponse.json(filterLang);
    case 'https://api4.thetvdb.com/v4/movies/filter?year=2024':
      return HttpResponse.json(filterYear);
    case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name&year=2024':
      return HttpResponse.json(filterCountryLangSortYear);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
