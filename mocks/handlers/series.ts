import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/series/78878
const id = {
  status: 'success',
  data: {
    id: 78878,
    name: 'フリクリ',
    slug: 'flcl',
    image: 'https://artworks.thetvdb.com/banners/posters/78878-1.jpg',
    nameTranslations: ['deu', 'eng'],
    overviewTranslations: ['deu', 'eng'],
    aliases: [
      {
        language: 'jpn',
        name: 'フリクリ プログレ',
      },
    ],
    firstAired: '2000-04-26',
    lastAired: '2023-10-15',
    nextAired: '',
    score: 29369,
    status: {
      id: 2,
      name: 'Ended',
      recordType: 'series',
      keepUpdated: false,
    },
    originalCountry: 'jpn',
    originalLanguage: 'jpn',
    defaultSeasonType: 1,
    isOrderRandomized: false,
    lastUpdated: '2023-12-18 10:27:18',
    averageRuntime: 24,
    episodes: null,
    overview:
      '平凡な地方都市・疎瀬（まばせ）に住む小学生、ナンダバ・ナオ太は、兄の元恋人である女子高生、サメジマ・マミ美から誘惑的なちょっかいを受けながらも、その日常に退屈さを感じていた。\r\nその二人の前にベスパに乗った謎の女、ハルハラ・ハル子が現れ、初対面のナオ太を突然エレキベース（リッケンバッカー）で殴り飛ばし去っていく。それから間もなく、ナオ太の額からは奇妙な角らしきものが生えるようになってしまった。その後「ベスパ女」ハル子は家政婦としてナンダバ家に転がり込み、ナオ太の額から出現した謎のロボットのカンチと共に居候する事になる。',
    year: '2000',
  },
};

// https://api4.thetvdb.com/v4/series/327417/artworks
const idArtworks = {
  status: 'success',
  data: {
    id: 327417,
    name: 'La casa de papel',
    slug: 'la-casa-de-papel',
    image: 'https://artworks.thetvdb.com/banners/v4/series/327417/posters/61081245a014c.jpg',
    nameTranslations: ['deu', 'eng'],
    overviewTranslations: ['deu', 'eng'],
    aliases: [
      {
        language: 'ron',
        name: 'Casa de Papel',
      },
    ],
    firstAired: '2017-05-02',
    lastAired: '2021-12-03',
    nextAired: '',
    score: 4538376,
    status: {
      id: 2,
      name: 'Ended',
      recordType: 'series',
      keepUpdated: false,
    },
    originalCountry: 'esp',
    originalLanguage: 'spa',
    defaultSeasonType: 1,
    isOrderRandomized: false,
    lastUpdated: '2024-01-12 13:54:13',
    averageRuntime: 57,
    episodes: null,
    overview:
      'Un golpe maestro ideado y perfeccionado durante años, planificado durante meses y ejecutado en pocos minutos para que el elegido grupo de ladrones que se adentra en la Fábrica Nacional de Moneda y Timbre a punta de pistola haga creer a la Policía que su plan ha fallado… y que los tienen asediados dentro del edificio sin otra salida que su rendición.\r\n\r\nOnce días de encierro con los 67 rehenes (entre empleados de la FNMT y alumnos de un colegio que se encontraban de visita) y un operativo policial sin precedentes que mantendrá en jaque a todo el Gobierno. Un atraco de minuciosa planificación, cuyos ejecutores necesitan un mínimo de días para poder llevarlo a cabo. Por esta razón es por lo que en el propio transcurso del tiempo está la clave de su éxito. ¿Quién puede estar detrás de esta descabellada idea?',
    year: '2017',
    artworks: [
      {
        id: 62116198,
        image: 'https://artworks.thetvdb.com/banners/series/327417/backgrounds/5e75f224ac334.jpg',
        thumbnail: 'https://artworks.thetvdb.com/banners/series/327417/backgrounds/5e75f224ac334_t.jpg',
        language: null,
        type: 3,
        score: 100012,
        width: 1920,
        height: 1080,
        includesText: false,
        thumbnailWidth: 0,
        thumbnailHeight: 0,
        updatedAt: 0,
        status: {
          id: 0,
          name: null,
        },
        tagOptions: null,
      },
    ],
    companies: null,
    genres: null,
    trailers: null,
    lists: null,
    remoteIds: null,
    characters: null,
    airsDays: {
      sunday: false,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    },
    airsTime: null,
    seasons: null,
    tags: null,
    contentRatings: null,
  },
};

// https://api4.thetvdb.com/v4/series/327417/artworks?lang=spa
const idArtworksLang = {
  status: 'success',
  data: {
    id: 327417,
    artworks: [
      {
        id: 1254142,
        image: 'https://artworks.thetvdb.com/banners/series/327417/posters/5e824889ad675.jpg',
        thumbnail: 'https://artworks.thetvdb.com/banners/series/327417/posters/5e824889ad675_t.jpg',
        language: 'spa',
        type: 2,
        score: 100011,
        width: 680,
        height: 1000,
        includesText: true,
        thumbnailWidth: 0,
        thumbnailHeight: 0,
        updatedAt: 0,
        status: {
          id: 0,
          name: null,
        },
        tagOptions: null,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/327417/artworks?type=3
const idArtworksType = {
  status: 'success',
  data: {
    name: 'La casa de papel',
    year: '2017',
    artworks: [
      {
        id: 62116198,
        image: 'https://artworks.thetvdb.com/banners/series/327417/backgrounds/5e75f224ac334.jpg',
        thumbnail: 'https://artworks.thetvdb.com/banners/series/327417/backgrounds/5e75f224ac334_t.jpg',
        language: null,
        type: 3,
        score: 100012,
        width: 1920,
        height: 1080,
        includesText: false,
        thumbnailWidth: 0,
        thumbnailHeight: 0,
        updatedAt: 0,
        status: {
          id: 0,
          name: null,
        },
        tagOptions: null,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/113561/artworks?lang=jpn&type=2
const idArtworksLangType = {
  status: 'success',
  data: {
    id: 113561,
    name: '遊☆戯☆王',
    slug: 'yu-gi-oh',
    artworks: [
      {
        id: 62971175,
        image: 'https://artworks.thetvdb.com/banners/v4/series/113561/posters/61e5a3979602d.jpg',
        thumbnail: 'https://artworks.thetvdb.com/banners/v4/series/113561/posters/61e5a3979602d_t.jpg',
        language: 'jpn',
        type: 2,
        score: 100001,
        width: 680,
        height: 1000,
        includesText: true,
        thumbnailWidth: 0,
        thumbnailHeight: 0,
        updatedAt: 0,
        status: {
          id: 0,
          name: null,
        },
        tagOptions: null,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended
const idExtended = {
  status: 'success',
  data: {
    id: 78878,
    name: 'フリクリ',
    slug: 'flcl',
    image: 'https://artworks.thetvdb.com/banners/posters/78878-1.jpg',
    nameTranslations: ['deu', 'eng'],
    overviewTranslations: ['deu', 'eng'],
    aliases: [
      {
        language: 'eng',
        name: 'Fooly Cooly',
      },
    ],
    firstAired: '2000-04-26',
    lastAired: '2023-10-15',
    nextAired: '',
    score: 29369,
    status: {
      id: 2,
      name: 'Ended',
      recordType: 'series',
      keepUpdated: false,
    },
    originalCountry: 'jpn',
    originalLanguage: 'jpn',
    defaultSeasonType: 1,
    isOrderRandomized: false,
    lastUpdated: '2023-12-18 10:27:18',
    averageRuntime: 24,
    episodes: null,
    overview:
      '平凡な地方都市・疎瀬（まばせ）に住む小学生、ナンダバ・ナオ太は、兄の元恋人である女子高生、サメジマ・マミ美から誘惑的なちょっかいを受けながらも、その日常に退屈さを感じていた。\r\nその二人の前にベスパに乗った謎の女、ハルハラ・ハル子が現れ、初対面のナオ太を突然エレキベース（リッケンバッカー）で殴り飛ばし去っていく。それから間もなく、ナオ太の額からは奇妙な角らしきものが生えるようになってしまった。その後「ベスパ女」ハル子は家政婦としてナンダバ家に転がり込み、ナオ太の額から出現した謎のロボットのカンチと共に居候する事になる。',
    year: '2000',
    artworks: [
      {
        id: 686641,
        image: 'https://artworks.thetvdb.com/banners/fanart/original/78878-6.jpg',
        thumbnail: 'https://artworks.thetvdb.com/banners/fanart/original/78878-6_t.jpg',
        language: 'jpn',
        type: 3,
        score: 100000,
        width: 1280,
        height: 720,
        includesText: true,
        thumbnailWidth: 0,
        thumbnailHeight: 0,
        updatedAt: 0,
        status: {
          id: 0,
          name: null,
        },
        tagOptions: null,
      },
    ],
    companies: [
      {
        id: 698,
        name: 'Adult Swim',
        slug: 'adult-swim',
        nameTranslations: ['eng'],
        overviewTranslations: [],
        aliases: [
          {
            language: 'eng',
            name: '[adult swim]',
          },
        ],
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
      {
        id: 1026,
        name: 'Anime OAV',
        slug: 'anime-oav',
        nameTranslations: ['eng'],
        overviewTranslations: [],
        aliases: [],
        country: 'jpn',
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
    originalNetwork: {
      id: 1026,
      name: 'Anime OAV',
      slug: 'anime-oav',
      nameTranslations: ['eng'],
      overviewTranslations: [],
      aliases: [],
      country: 'jpn',
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
    latestNetwork: {
      id: 698,
      name: 'Adult Swim',
      slug: 'adult-swim',
      nameTranslations: ['eng'],
      overviewTranslations: [],
      aliases: [
        {
          language: 'eng',
          name: '[adult swim]',
        },
      ],
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
    genres: [
      {
        id: 2,
        name: 'Science Fiction',
        slug: 'science-fiction',
      },
    ],
    trailers: [],
    lists: [
      {
        id: 8176,
        name: 'Anime Series',
        overview: 'All Anime TV Series',
        url: '8176',
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
    ],
    remoteIds: [
      {
        id: '10.5240/AC4A-9A44-3548-E09D-2A54-D',
        type: 13,
        sourceName: 'EIDR',
      },
    ],
    characters: [
      {
        id: 64468557,
        name: 'Tabata Kanda',
        peopleId: 464299,
        seriesId: 78878,
        series: null,
        movie: null,
        movieId: null,
        episodeId: null,
        type: 3,
        image: null,
        sort: 0,
        isFeatured: false,
        url: 'https://thetvdb.com/people/464299-yutaka-aoyama',
        nameTranslations: null,
        overviewTranslations: null,
        aliases: null,
        peopleType: 'Actor',
        personName: 'Yutaka Aoyama',
        tagOptions: null,
        personImgURL: 'https://artworks.thetvdb.com/banners/person/464299/primary.jpg',
      },
    ],
    airsDays: {
      sunday: true,
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
    },
    airsTime: '13:00',
    seasons: [
      {
        id: 15795,
        seriesId: 78878,
        type: {
          id: 1,
          name: 'Aired Order',
          type: 'official',
          alternateName: null,
        },
        number: 1,
        nameTranslations: [],
        overviewTranslations: [],
        image: 'https://artworks.thetvdb.com/banners/series/78878/seasons/15795/posters/62089884.jpg',
        imageType: 7,
        companies: {
          studio: null,
          network: null,
          production: null,
          distributor: null,
          special_effects: null,
        },
        lastUpdated: '2023-12-18 10:27:17',
      },
    ],
    tags: [
      {
        id: 498,
        tag: 31,
        tagName: 'Geographic Location',
        name: 'Japan',
        helpText: null,
      },
    ],
    contentRatings: [
      {
        id: 560,
        name: '12+',
        country: 'deu',
        description: 'Restricted to ages 12 and older',
        contentType: '',
        order: 0,
        fullname: null,
      },
    ],
    seasonTypes: [
      {
        id: 1,
        name: 'Aired Order',
        type: 'official',
        alternateName: null,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=translations
const idExtendedMetaT = {
  status: 'success',
  data: {
    slug: 'flcl',
    translations: {
      nameTranslations: [
        {
          name: 'FLCL',
          language: 'deu',
        },
      ],
      overviewTranslations: [
        {
          overview:
            'Noatas ruhiges Leben wird jäh gestört, als sein Bruder als Baseballspieler in die USA geht, dessen Ex-Freundin Naota gegenüber merkwürdige Annäherungsversuche macht und auch noch Haruko auftaucht, die von sich selbst behauptet eine Außerirdische zu sein.',
          language: 'deu',
        },
        {
          overview:
            'Todo comienza cuando Naota Nandaba, chico bastante maduro para su edad, admirador de su hermano mayor, Tasuku que ha ido a Estados Unidos a jugar baseball, se encuentra aburrido y atrapado en la cotidianidad de la vida y acompañando a la solitaria novia de su hermano llamada Mamimi Samemija debajo de un puente en el tranquilo pueblo ficticio de Mabase, coronado por una enorme fabrica llamada Medical Mechanica en forma de plancha.\r\n\r\nTodo cambia un día en el que conoce abruptamente a una chica muy extraña que lo atropella accidentalmente, al pasar por delante de la lata que tiro Naota porque tenia un sabor amargo "Esa lata la habia elegido Mamimi sin preguntar a Naota" y lo golpea con su bajo eléctrico en la cabeza, lo que le provoca que le salga un enorme chichón. A partir de ese momento, su vida tiene un giro de 180° y comienzan a suceder extrañas cosas alrededor de él, pues la chica que se hace llamar Haruko Haruhara llega a vivir con ellos de buenas a primeras, le salen cosas extrañas de la cabeza, como orejas de gato y gatillos de revolver que tiene que ocultar a sus amigos, es tragado por robots y termina envuelto en una pelea entre Haruko y Medical Mecánica por conseguir a Atomsk, el rey pirata capaz de robar planetas enteros.',
          language: 'spa',
        },
      ],
      aliases: ['Fooly Cooly'],
    },
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes
const idExtendedMetaE = {
  status: 'success',
  data: {
    lastAired: '2023-10-15',
    episodes: [
      {
        id: 8051162,
        seriesId: 78878,
        name: 'フリクリ プログレ',
        aired: '2018-09-28',
        runtime: 132,
        nameTranslations: null,
        overview: null,
        overviewTranslations: null,
        image: null,
        imageType: null,
        isMovie: 0,
        seasons: null,
        number: 1,
        seasonNumber: 0,
        lastUpdated: '2023-08-11 17:27:39',
        finaleType: null,
        airsBeforeSeason: 2,
        airsBeforeEpisode: 1,
        year: '2018',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/327417/extended?short=true
const idExtendedShort = {
  status: 'success',
  data: {
    id: 327417,
    artworks: null,
    characters: null,
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=translations&short=true
const idExtendedMetaTShort = {
  status: 'success',
  data: {
    year: '2000',
    artworks: null,
    characters: null,
    translations: {
      nameTranslations: [
        {
          name: 'Furi Kuri',
          isAlias: true,
          language: 'pol',
        },
      ],
      overviewTranslations: [
        {
          overview:
            'Uma aventura rebelde, caótica e às vezes surrealista sobre os altos e baixos da adolescência, com robôs, aliens, grandes corporações e muita música.',
          language: 'pt',
        },
      ],
      aliases: ['Furi Kuri: Alternatywa'],
    },
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes&short=true
const idExtendedMetaEShort = {
  status: 'success',
  data: {
    lastUpdated: '2023-12-18 10:27:18',
    episodes: [
      {
        id: 8051162,
        seriesId: 78878,
        name: 'フリクリ プログレ',
        aired: '2018-09-28',
        runtime: 132,
        nameTranslations: null,
        overview: null,
        overviewTranslations: null,
        image: null,
        imageType: null,
        isMovie: 0,
        seasons: null,
        number: 1,
        seasonNumber: 0,
        lastUpdated: '2023-08-11 17:27:39',
        finaleType: null,
        airsBeforeSeason: 2,
        airsBeforeEpisode: 1,
        year: '2018',
      },
    ],
    artworks: null,
    characters: null,
  },
};

// https://api4.thetvdb.com/v4/series/78878/nextAired
const idNextAired = {
  status: 'success',
  data: {
    id: 78878,
    nextAired: '',
  },
};

// https://api4.thetvdb.com/v4/series/slug/yu-gi-oh
const slug = {
  status: 'success',
  data: {
    id: 113561,
    name: '遊☆戯☆王',
    slug: 'yu-gi-oh',
    image: 'https://artworks.thetvdb.com/banners/posters/113561-4.jpg',
    nameTranslations: ['eng'],
    overviewTranslations: ['eng'],
    aliases: [
      {
        language: 'fra',
        name: 'Yu-Gi-Oh Season 0',
      },
    ],
    firstAired: '1998-04-04',
    lastAired: '1998-10-10',
    nextAired: '',
    score: 41596,
    status: {
      id: 2,
      name: 'Ended',
      recordType: 'series',
      keepUpdated: false,
    },
    originalCountry: 'jpn',
    originalLanguage: 'jpn',
    defaultSeasonType: 1,
    isOrderRandomized: false,
    lastUpdated: '2023-09-17 19:36:14',
    averageRuntime: 21,
    episodes: null,
    overview:
      '『遊☆戯☆王』（ゆうぎおう）は、高橋和希の漫画『遊☆戯☆王』の最初のアニメ化作品。1998年4月4日から10月10日まで、全27話がテレビ朝日系列（フルネット局のみ）で放送された。制作は東映動画（放送期間中に東映アニメーションに商号変更）。',
    year: '1998',
  },
};

// https://api4.thetvdb.com/v4/series/75978/episodes/default
const idSeasonType = {
  status: 'success',
  data: {
    series: {
      id: 75978,
      name: 'Family Guy',
      slug: 'family-guy',
      image: 'https://artworks.thetvdb.com/banners/posters/75978-13.jpg',
      nameTranslations: ['ces', 'dan'],
      overviewTranslations: ['ces', 'dan'],
      aliases: [],
      firstAired: '1999-01-31',
      lastAired: '2024-03-13',
      nextAired: '2024-03-06',
      score: 1799691,
      status: {
        id: 1,
        name: 'Continuing',
        recordType: 'series',
        keepUpdated: true,
      },
      originalCountry: 'usa',
      originalLanguage: 'eng',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-13 18:53:23',
      averageRuntime: 22,
      episodes: null,
      overview:
        "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
      year: '1999',
    },
    episodes: [
      {
        id: 181165,
        seriesId: 75978,
        name: 'Stewie Griffin: The Untold Story',
        aired: '2006-05-21',
        runtime: 90,
        nameTranslations: ['deu', 'eng', 'fra', 'rus', 'spa'],
        overview:
          "When Stewie sees a man who looks just like him on TV, he's convinced that he must be his real father. Stewie sets off on a cross-country road trip to find him, but his incredible journey leads to outrageous discoveries.",
        overviewTranslations: ['deu', 'eng', 'fra', 'rus', 'spa'],
        image: 'https://artworks.thetvdb.com/banners/episodes/75978/181165.jpg',
        imageType: 11,
        isMovie: 0,
        seasons: null,
        number: 1,
        seasonNumber: 0,
        lastUpdated: '2023-07-28 00:35:16',
        finaleType: null,
        airsBeforeSeason: 4,
        airsBeforeEpisode: 28,
        year: '2006',
      },
    ],
  },
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series/75978/episodes/default?page=0',
    next: null,
    total_items: 469,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/81797/episodes/default?page=1
const idSeasonTypePage = {
  status: 'success',
  data: {
    series: {
      id: 81797,
      name: 'ワンピース',
      slug: 'one-piece',
      image: 'https://artworks.thetvdb.com/banners/posters/81797-4.jpg',
      nameTranslations: ['deu', 'eng'],
      overviewTranslations: ['deu', 'eng'],
      aliases: [
        {
          language: 'zhtw',
          name: 'ONE PIECE',
        },
        {
          language: 'jpn',
          name: 'Wan Pisu',
        },
      ],
      firstAired: '1999-10-20',
      lastAired: '2024-01-21',
      nextAired: '2024-01-21',
      score: 2228870,
      status: {
        id: 1,
        name: 'Continuing',
        recordType: 'series',
        keepUpdated: true,
      },
      originalCountry: 'jpn',
      originalLanguage: 'jpn',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-15 00:37:51',
      averageRuntime: 25,
      episodes: null,
      overview:
        'かつてこの世の全てを手に入れた海賊王ゴールド・ロジャーが遺した「ひとつなぎの大秘宝（ワンピース）」をめぐり、幾多の海賊たちが覇権を賭けて争う大海賊時代。\r\n\r\nそんな時代に生まれ、幼い頃の命の恩人である海賊赤髪のシャンクスに憧れる少年モンキー・D・ルフィは、「ゴムゴムの実」という悪魔の実を食べてゴム人間となり、その副作用で泳げない体になりながらも、海賊王を目指して仲間と共に冒険と戦いを繰り広げていく。',
      year: '1999',
    },
    episodes: [
      {
        id: 2176651,
        seriesId: 81797,
        name: null,
        aired: '2010-05-09',
        runtime: 25,
        nameTranslations: ['deu', 'eng'],
        overview: null,
        overviewTranslations: ['deu', 'eng'],
        image: 'https://artworks.thetvdb.com/banners/episodes/81797/2176651.jpg',
        imageType: 11,
        isMovie: 0,
        seasons: null,
        number: 69,
        seasonNumber: 13,
        lastUpdated: '2023-11-10 17:11:10',
        finaleType: null,
        year: '2010',
      },
    ],
  },
  links: {
    prev: 'https://api4.thetvdb.com/v4/series/81797/episodes/default?page=0',
    self: 'https://api4.thetvdb.com/v4/series/81797/episodes/default?page=1',
    next: 'https://api4.thetvdb.com/v4/series/81797/episodes/default?page=2',
    total_items: 1141,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/81189/episodes/dvd?season=0&episodeNumber=1
const idSeasonTypeSeasonEpisode = {
  status: 'success',
  data: {
    series: {
      id: 81189,
      name: 'Breaking Bad',
      slug: 'breaking-bad',
      image: 'https://artworks.thetvdb.com/banners/posters/81189-10.jpg',
      nameTranslations: ['ces', 'dan'],
      overviewTranslations: ['ces', 'dan'],
      aliases: [
        {
          language: 'zho',
          name: '絕命毒師',
        },
      ],
      firstAired: '2008-01-20',
      lastAired: '2013-09-29',
      nextAired: '',
      score: 3287090,
      status: {
        id: 2,
        name: 'Ended',
        recordType: 'series',
        keepUpdated: false,
      },
      originalCountry: 'usa',
      originalLanguage: 'eng',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-07 04:46:35',
      averageRuntime: 48,
      episodes: null,
      overview:
        "When Walter White, a chemistry teacher, is diagnosed with Stage III cancer and given a prognosis of two years left to live, he chooses to enter a dangerous world of drugs and crime with the intent to secure his family's financial security.",
      year: '2008',
    },
    episodes: [
      {
        id: 3859781,
        seriesId: 81189,
        name: 'Good Cop / Bad Cop',
        aired: '2009-02-17',
        runtime: 3,
        nameTranslations: ['eng', 'fra'],
        overview: "Hank and Marie try to spice up their relationship on Valentine's Day.",
        overviewTranslations: ['eng', 'fra'],
        image: 'https://artworks.thetvdb.com/banners/episodes/81189/3859781.jpg',
        imageType: 11,
        isMovie: 0,
        seasons: null,
        number: 1,
        seasonNumber: 0,
        lastUpdated: '2023-03-29 17:43:22',
        finaleType: null,
        airsBeforeSeason: 2,
        airsBeforeEpisode: 1,
        year: '2009',
      },
    ],
  },
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series/81189/episodes/dvd?season=0&episodeNumber=1&page=0',
    next: null,
    total_items: 1,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/75978/episodes/default?airDate=2006-05-21
const idSeasonTypeAirdate = {
  status: 'success',
  data: {
    series: {
      id: 75978,
      name: 'Family Guy',
      slug: 'family-guy',
      image: 'https://artworks.thetvdb.com/banners/posters/75978-13.jpg',
      nameTranslations: ['ces'],
      overviewTranslations: ['ces'],
      aliases: [],
      firstAired: '1999-01-31',
      lastAired: '2024-03-13',
      nextAired: '2024-03-06',
      score: 1799691,
      status: {
        id: 1,
        name: 'Continuing',
        recordType: 'series',
        keepUpdated: true,
      },
      originalCountry: 'usa',
      originalLanguage: 'eng',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-13 18:53:23',
      averageRuntime: 22,
      episodes: null,
      overview:
        "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
      year: '1999',
    },
    episodes: [
      {
        id: 181165,
        seriesId: 75978,
        name: 'Stewie Griffin: The Untold Story',
        aired: '2006-05-21',
        runtime: 90,
        nameTranslations: ['deu'],
        overview:
          "When Stewie sees a man who looks just like him on TV, he's convinced that he must be his real father. Stewie sets off on a cross-country road trip to find him, but his incredible journey leads to outrageous discoveries.",
        overviewTranslations: ['deu'],
        image: 'https://artworks.thetvdb.com/banners/episodes/75978/181165.jpg',
        imageType: 11,
        isMovie: 0,
        seasons: null,
        number: 1,
        seasonNumber: 0,
        lastUpdated: '2023-07-28 00:35:16',
        finaleType: null,
        airsBeforeSeason: 4,
        airsBeforeEpisode: 28,
        year: '2006',
      },
    ],
  },
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series/75978/episodes/default?airDate=2006-05-21&page=0',
    next: null,
    total_items: 469,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/78878/episodes/official/eng
const idSeasonTypePageLanguage = {
  status: 'success',
  data: {
    id: 78878,
    name: 'フリクリ',
    slug: 'flcl',
    image: 'https://artworks.thetvdb.com/banners/posters/78878-1.jpg',
    nameTranslations: ['deu'],
    overviewTranslations: ['deu'],
    aliases: [
      {
        language: 'eng',
        name: 'Fooly Cooly',
      },
    ],
    firstAired: '2000-04-26',
    lastAired: '2023-10-15',
    nextAired: '',
    score: 29369,
    status: {
      id: 2,
      name: 'Ended',
      recordType: 'series',
      keepUpdated: false,
    },
    originalCountry: 'jpn',
    originalLanguage: 'jpn',
    defaultSeasonType: 1,
    isOrderRandomized: false,
    lastUpdated: '2023-12-18 10:27:18',
    averageRuntime: 24,
    episodes: [
      {
        id: 8051162,
        seriesId: 78878,
        name: 'FLCL Progressive',
        aired: '2018-09-28',
        runtime: 132,
        nameTranslations: null,
        overview: 'Movie Release of FLCL Progressive',
        overviewTranslations: null,
        image: null,
        imageType: null,
        isMovie: 0,
        seasons: null,
        number: 1,
        seasonNumber: 0,
        lastUpdated: '2023-08-11 17:27:39',
        finaleType: null,
        airsBeforeSeason: 2,
        airsBeforeEpisode: 1,
        year: '2018',
      },
    ],
    overview:
      '平凡な地方都市・疎瀬（まばせ）に住む小学生、ナンダバ・ナオ太は、兄の元恋人である女子高生、サメジマ・マミ美から誘惑的なちょっかいを受けながらも、その日常に退屈さを感じていた。\r\nその二人の前にベスパに乗った謎の女、ハルハラ・ハル子が現れ、初対面のナオ太を突然エレキベース（リッケンバッカー）で殴り飛ばし去っていく。それから間もなく、ナオ太の額からは奇妙な角らしきものが生えるようになってしまった。その後「ベスパ女」ハル子は家政婦としてナンダバ家に転がり込み、ナオ太の額から出現した謎のロボットのカンチと共に居候する事になる。',
    year: '2000',
  },
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series/78878/episodes/official/eng?page=0',
    next: null,
    total_items: 26,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/71663/episodes/official/eng?page=1
const idSeasonTypePageLanguagePage = {
  status: 'success',
  data: {
    id: 71663,
    name: 'The Simpsons',
    slug: 'the-simpsons',
    image: 'https://artworks.thetvdb.com/banners/posters/71663-15.jpg',
    nameTranslations: ['eng'],
    overviewTranslations: ['eng'],
    aliases: [
      {
        language: 'kor',
        name: '심슨',
      },
    ],
    firstAired: '1989-12-17',
    lastAired: '2023-12-24',
    nextAired: '',
    score: 3431861,
    status: {
      id: 1,
      name: 'Continuing',
      recordType: 'series',
      keepUpdated: true,
    },
    originalCountry: 'usa',
    originalLanguage: 'eng',
    defaultSeasonType: 1,
    isOrderRandomized: false,
    lastUpdated: '2024-01-14 12:16:12',
    averageRuntime: 24,
    episodes: [
      {
        id: 420653,
        seriesId: 71663,
        name: 'In the Name of the Grandfather',
        aired: '2009-03-22',
        runtime: 25,
        nameTranslations: null,
        overview:
          "The Simpsons travel to Ireland so that Grampa can have a final drink at O'Flanagan's Pub - an old watering hole of his. But when the small town of Dunkilderry isn't quite what Grampa remembers it as, and O'Flanagans has become a rundown and empty pub, he and Homer decide to buy it and fix it up.",
        overviewTranslations: null,
        image: '/banners/episodes/71663/420653.jpg',
        imageType: 11,
        isMovie: 0,
        seasons: null,
        number: 14,
        seasonNumber: 20,
        lastUpdated: '2024-01-06 16:56:04',
        finaleType: null,
        year: '2009',
      },
    ],
    overview:
      'Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.',
    year: '1989',
  },
  links: {
    prev: 'https://api4.thetvdb.com/v4/series/71663/episodes/official/eng?page=0',
    self: 'https://api4.thetvdb.com/v4/series/71663/episodes/official/eng?page=1',
    next: null,
    total_items: 827,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/statuses
const statuses = {
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Continuing',
      recordType: 'series',
      keepUpdated: false,
    },
    {
      id: 2,
      name: 'Ended',
      recordType: 'series',
      keepUpdated: false,
    },
  ],
};

// https://api4.thetvdb.com/v4/series/78878/translations/eng
const idTranslations = {
  status: 'success',
  data: {
    name: 'FLCL',
    overview:
      "Naota's life is confined to going to school and living with his father and grandfather. The usually tranquil life in Mabase is rudely interrupted by the arrival of Haruhara Haruko, who bursts on the scene by running Naota over with her Vespa scooter and hitting him on the head with a Rickenbacker 4003 bass guitar. Later, Naota is shocked to find Haruko working in his house as a live-in maid.\r\n\r\nHaruko's search for the alien being Atomsk puts her at odds with Medical Mechanica. At the same time, Naota is being watched by Commander Amarao. The Commander believes Haruko is in love with Atomsk and Medical Mechanica is out to conquer the galaxy. The fortuitous circumstances get Naota involved in a three-way battle between Haruko, Amarao and Medical Mechanica.",
    language: 'eng',
    aliases: ['Fooly Cooly', 'FLCL: Progressive', 'FLCL: Alternative', 'FLCL: Grunge', 'FLCL: Shoegaze'],
  },
};

// https://api4.thetvdb.com/v4/series?page=294
const seriesPage = {
  status: 'success',
  data: [
    {
      id: 441685,
      name: 'Well Versed',
      slug: 'well-versed',
      image: '/banners/v4/series/441685/posters/65428ca857d65.jpg',
      nameTranslations: ['eng'],
      overviewTranslations: ['eng'],
      aliases: [],
      firstAired: '2023-11-01',
      lastAired: '2023-11-01',
      nextAired: '',
      score: 1,
      status: {
        id: null,
        name: null,
        recordType: '',
        keepUpdated: false,
      },
      originalCountry: 'usa',
      originalLanguage: 'eng',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2023-11-15 14:24:23',
      averageRuntime: 3,
      episodes: null,
      overview:
        'From Nickelodeon comes the Well Versed series, songs dedicated to understanding government! Catch full episodes on Nick Music and Nick Jr.!',
      year: '2023',
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/series?page=293',
    self: 'https://api4.thetvdb.com/v4/series?page=294',
    next: 'https://api4.thetvdb.com/v4/series?page=295',
    total_items: 149693,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series
const series = {
  status: 'success',
  data: [
    {
      id: 70327,
      name: 'Buffy the Vampire Slayer',
      slug: 'buffy-the-vampire-slayer',
      image: '/banners/posters/70327-1.jpg',
      nameTranslations: ['ces'],
      overviewTranslations: ['ces'],
      aliases: [
        {
          language: 'spa',
          name: 'Buffy, cazavampiros',
        },
      ],
      firstAired: '1997-03-10',
      lastAired: '2003-05-20',
      nextAired: '',
      score: 430445,
      status: {
        id: null,
        name: null,
        recordType: '',
        keepUpdated: false,
      },
      originalCountry: 'usa',
      originalLanguage: 'eng',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-08 13:29:22',
      averageRuntime: 44,
      episodes: null,
      overview:
        'In every generation there is a Chosen One. She alone will stand against the vampires, the demons and the forces of darkness. She is the Slayer.\r\n\r\nBuffy Summers is The Chosen One, the one girl in all the world with the strength and skill to fight the vampires. With the help of her close friends, Willow, Xander, and her Watcher Giles she balances slaying, family, friendships, and relationships.',
      year: '1997',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series?page=0',
    next: 'https://api4.thetvdb.com/v4/series?page=1',
    total_items: 149693,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/filter
const filter = {
  status: 'success',
  data: [
    {
      id: 70327,
      name: 'Buffy the Vampire Slayer',
      slug: 'buffy-the-vampire-slayer',
      image: 'https://artworks.thetvdb.com/banners/posters/70327-1.jpg',
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      firstAired: '1997-03-10',
      lastAired: '2003-05-20',
      nextAired: '',
      score: 430445,
      status: {
        id: 2,
        name: 'Ended',
        recordType: 'series',
        keepUpdated: false,
      },
      originalCountry: 'usa',
      originalLanguage: 'eng',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-08 13:29:22',
      averageRuntime: 44,
      episodes: null,
      overview:
        'In every generation there is a Chosen One. She alone will stand against the vampires, the demons and the forces of darkness. She is the Slayer.\r\n\r\nBuffy Summers is The Chosen One, the one girl in all the world with the strength and skill to fight the vampires. With the help of her close friends, Willow, Xander, and her Watcher Giles she balances slaying, family, friendships, and relationships.',
      year: '1997',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series/filter?page=0',
    next: 'https://api4.thetvdb.com/v4/series/filter?page=1',
    total_items: 149693,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng
const filterCountryLang = {
  status: 'success',
  data: [
    {
      id: 70327,
      name: 'Buffy the Vampire Slayer',
      slug: 'buffy-the-vampire-slayer',
      image: 'https://artworks.thetvdb.com/banners/posters/70327-1.jpg',
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      firstAired: '1997-03-10',
      lastAired: '2003-05-20',
      nextAired: '',
      score: 430445,
      status: {
        id: 2,
        name: 'Ended',
        recordType: 'series',
        keepUpdated: false,
      },
      originalCountry: 'usa',
      originalLanguage: 'eng',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-08 13:29:22',
      averageRuntime: 44,
      episodes: null,
      overview:
        'In every generation there is a Chosen One. She alone will stand against the vampires, the demons and the forces of darkness. She is the Slayer.\r\n\r\nBuffy Summers is The Chosen One, the one girl in all the world with the strength and skill to fight the vampires. With the help of her close friends, Willow, Xander, and her Watcher Giles she balances slaying, family, friendships, and relationships.',
      year: '1997',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&page=0',
    next: 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&page=1',
    total_items: 37518,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/filter?sort=name&year=2024
const filterSortYear = {
  status: 'success',
  data: [
    {
      id: 444138,
      name: '... a szomszéd tehene',
      slug: 'a-szomszed-tehene',
      image: null,
      nameTranslations: null,
      overviewTranslations: null,
      aliases: null,
      firstAired: '2024-01-01',
      lastAired: '2024-01-19',
      nextAired: '',
      score: 0,
      status: {
        id: 1,
        name: 'Continuing',
        recordType: 'series',
        keepUpdated: true,
      },
      originalCountry: 'hun',
      originalLanguage: 'hun',
      defaultSeasonType: 1,
      isOrderRandomized: false,
      lastUpdated: '2024-01-13 17:51:13',
      averageRuntime: 42,
      episodes: null,
      overview: 'A két szomszéd nem sejti, milyen komoly fenyegetés közeleg feléjük.',
      year: '2024',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/series/filter?sort=name&year=2024&page=0',
    next: null,
    total_items: 447,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/series/*
const badRequest = { status: 'failure', message: 'query is required', data: null };

export function seriesPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/series/78878':
      return HttpResponse.json(id);
    case 'https://api4.thetvdb.com/v4/series/327417/artworks':
      return HttpResponse.json(idArtworks);
    case 'https://api4.thetvdb.com/v4/series/327417/artworks?lang=spa':
      return HttpResponse.json(idArtworksLang);
    case 'https://api4.thetvdb.com/v4/series/327417/artworks?type=3':
      return HttpResponse.json(idArtworksType);
    case 'https://api4.thetvdb.com/v4/series/113561/artworks?lang=jpn&type=2':
      return HttpResponse.json(idArtworksLangType);
    case 'https://api4.thetvdb.com/v4/series/78878/extended':
      return HttpResponse.json(idExtended);
    case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations':
      return HttpResponse.json(idExtendedMetaT);
    case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes':
      return HttpResponse.json(idExtendedMetaE);
    case 'https://api4.thetvdb.com/v4/series/327417/extended?short=true':
      return HttpResponse.json(idExtendedShort);
    case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations&short=true':
      return HttpResponse.json(idExtendedMetaTShort);
    case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes&short=true':
      return HttpResponse.json(idExtendedMetaEShort);
    case 'https://api4.thetvdb.com/v4/series/78878/nextAired':
      return HttpResponse.json(idNextAired);
    case 'https://api4.thetvdb.com/v4/series/slug/yu-gi-oh':
      return HttpResponse.json(slug);
    case 'https://api4.thetvdb.com/v4/series/75978/episodes/default':
      return HttpResponse.json(idSeasonType);
    case 'https://api4.thetvdb.com/v4/series/81797/episodes/default?page=1':
      return HttpResponse.json(idSeasonTypePage);
    case 'https://api4.thetvdb.com/v4/series/81189/episodes/dvd?season=0&episodeNumber=1':
      return HttpResponse.json(idSeasonTypeSeasonEpisode);
    case 'https://api4.thetvdb.com/v4/series/75978/episodes/default?airDate=2006-05-21':
      return HttpResponse.json(idSeasonTypeAirdate);
    case 'https://api4.thetvdb.com/v4/series/78878/episodes/official/eng':
      return HttpResponse.json(idSeasonTypePageLanguage);
    case 'https://api4.thetvdb.com/v4/series/71663/episodes/official/eng?page=1':
      return HttpResponse.json(idSeasonTypePageLanguagePage);
    case 'https://api4.thetvdb.com/v4/series/statuses':
      return HttpResponse.json(statuses);
    case 'https://api4.thetvdb.com/v4/series/78878/translations/eng':
      return HttpResponse.json(idTranslations);
    case 'https://api4.thetvdb.com/v4/series?page=294':
      return HttpResponse.json(seriesPage);
    case 'https://api4.thetvdb.com/v4/series':
      return HttpResponse.json(series);
    case 'https://api4.thetvdb.com/v4/series/filter':
      return HttpResponse.json(filter);
    case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng':
      return HttpResponse.json(filterCountryLang);
    case 'https://api4.thetvdb.com/v4/series/filter?sort=name&year=2024':
      return HttpResponse.json(filterSortYear);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
