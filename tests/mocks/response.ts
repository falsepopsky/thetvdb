// https://api4.thetvdb.com/v4/artwork/63237874/extended
const artworkExtended = {
  data: { movieId: 145830 },
};

// https://api4.thetvdb.com/v4/artwork/63237874
const artwork = {
  status: 'success',
  data: { id: 63237874 },
};

// https://api4.thetvdb.com/v4/artwork/statuses
const artworkStatuses = {
  status: 'success',
  data: [{ name: 'Low Quality' }, { id: 2 }],
};

// https://api4.thetvdb.com/v4/artwork/types
const artworkTypes = {
  status: 'success',
  data: [{ thumbHeight: 140 }, { id: 2, imageFormat: 'JPG' }],
};

// https://api4.thetvdb.com/v4/awards
const awards = {
  status: 'success',
  data: [{ id: 1, name: 'Academy Awards' }],
};

// https://api4.thetvdb.com/v4/awards/1
const awardsId = {
  data: { id: 1, name: 'Academy Awards' },
};

// https://api4.thetvdb.com/v4/awards/1/extended
const awardsIdExtended = {
  data: {
    categories: [{ id: 1, name: 'Best Picture' }],
  },
};

// https://api4.thetvdb.com/v4/awards/categories/42
const awardsCategoryId = {
  data: { id: 42, name: 'Best Actor in a Television Series – Drama' },
};

// https://api4.thetvdb.com/v4/awards/categories/42/extended
const awardsCategoryIdExtended = {
  data: {
    nominees: [{ id: 6352, isWinner: true }],
  },
};

// https://api4.thetvdb.com/v4/characters/64140522
const character = {
  data: { id: 64140522, name: 'Spike Spiegel' },
};

// https://api4.thetvdb.com/v4/companies
const companies = {
  data: [{ id: 48649, name: 'Ananey' }],
};

// https://api4.thetvdb.com/v4/companies?page=94
const companiesPage = {
  data: [
    {
      id: 48646,
    },
    {
      name: 'New Group Productions',
    },
  ],
};

// https://api4.thetvdb.com/v4/companies/types
const companiesTypes = {
  data: [
    {
      companyTypeId: 1,
    },
    {
      companyTypeName: 'Studio',
    },
  ],
};

// https://api4.thetvdb.com/v4/companies/4
const companyId = {
  data: { id: 4, name: 'Aaj TV', country: 'pak' },
};

// https://api4.thetvdb.com/v4/content/ratings
const contentRatings = {
  status: 'success',
  data: [{ name: 'ATP' }],
};

// https://api4.thetvdb.com/v4/countries
const countries = {
  status: 'success',
  data: [
    {
      name: 'Aruba',
    },
    {
      id: 'afg',
    },
  ],
};

// https://api4.thetvdb.com/v4/entities
const entities = {
  status: 'success',
  data: [
    {
      name: "series",
    },
  ],
};

// https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations
const episodesET = {
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'Schwarzer Ritter',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/episodes/127396/extended
const episodesE = {
  data: {
    seriesId: 73752,
    nominations: null,
  },
};

// https://api4.thetvdb.com/v4/episodes/127396
const episodes = {
  status: 'success',
  data: {
    id: 127396,
  },
};

// https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name
const filterMovieS = {
  data: [{ name: '-Ship: A Visual Poem' }],
};

// https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&year=2023
const filterMovieY = {
  data: [{ year: '2023' }],
};

// https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng
const filterMovie = {
  status: 'success',
  data: [{ name: 'The Fortress' }],
};

// https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&sort=name
const filterSerieS = {
  data: [{ name: 'Adriana Gaming' }],
};

// https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&year=2023
const filterSerieY = {
  data: [{ year: '2023' }],
};

// https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng
const filterSerie = {
  status: 'success',
  data: [{ name: 'Made In Hollywood' }],
};

// https://api4.thetvdb.com/v4/genres
const genres = {
  status: 'success',
  data: [
    {
      name: 'Soap',
    },
    {
      id: 2,
    },
  ],
};

// https://api4.thetvdb.com/v4/languages
const languages = {
  status: 'success',
  data: [
    {
      name: 'Afar',
    },
    {
      nativeName: 'isiZulu',
    },
  ],
};

// https://api4.thetvdb.com/v4/people/312388/extended?meta=translations
const peopleET = {
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'Chris Pratt',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/people/312388/extended
const peopleE = {
  data: {
    gender: 1,
  },
};

// https://api4.thetvdb.com/v4/people/312388
const people = {
  status: 'success',
  data: {
    id: 312388,
  },
};

// https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series&limit=1
const searchTL = {
  data: [
    {
      country: 'jpn',
    },
  ],
};

// https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series
const searchT = {
  data: [
    {
      type: 'series',
    },
  ],
};

// https://api4.thetvdb.com/v4/search?query=saint+seiya
const search = {
  status: 'success',
  data: [
    {
      objectID: 'series-426391',
      country: 'jpn',
    },
  ],
};

// https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2
const updatesFull = {
  status: 'success',
  data: [
    {
      method: 'update',
    },
    {
      entityType: 'artwork',
    },
  ],
  links: {
    next: 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=3',
  },
};

// https://api4.thetvdb.com/v4/updates?since=1682899200&action=delete
const updates = {
  data: [
    {
      method: 'delete',
    },
  ],
};

// https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations&short=true
const movieEMS = {
  data: {
    translations: {
      nameTranslations: [
        {
          name: 'El caso Figo: El fichaje del siglo',
        },
      ],
      overviewTranslations: [
        {
          language: 'spa',
        },
      ],
    },
    characters: null,
    artworks: null,
    trailers: null,
  },
};

// https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations
const movieEM = {
  data: { translations: { ...movieEMS.data.translations } },
};

// https://api4.thetvdb.com/v4/movies/3646/extended?short=true
const movieES = {
  data: { characters: null, artworks: null, trailers: null },
};

// https://api4.thetvdb.com/v4/movies/3646/extended
const movieE = {
  data: {
    trailers: [
      { id: 143117, language: 'spa' },
      { id: 143118, language: 'eng' },
    ],
  },
};

// https://api4.thetvdb.com/v4/movies/12586
const movie = {
  data: { id: 12586, slug: 'macross-do-you-remember-love' },
};

// https://api4.thetvdb.com/v4/seasons/6365/extended?meta=translations
const seasonEM = {
  data: {
    translations: {
      nameTranslations: null,
    },
  },
};

// https://api4.thetvdb.com/v4/seasons/6365/extended
const seasonE = {
  data: {
    image: 'https://artworks.thetvdb.com/banners/seasons/24394-1.jpg',
  },
};

// https://api4.thetvdb.com/v4/seasons/1698074
const season = {
  data: {
    seriesId: 70350,
  },
};

// https://api4.thetvdb.com/v4/series/78878
const series = {
  data: {
    id: 78878,
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended
const seriesE = {
  data: {
    artworks: [
      {
        id: 686641,
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?short=true
const seriesES = {
  data: {
    characters: null,
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=translations&short=true
const seriesETS = {
  data: {
    characters: null,
    translations: {
      nameTranslations: [
        {
          name: 'Fooly Cooly (FLCL)',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=translations
const seriesET = {
  data: {
    artworks: [
      {
        id: 686641,
      },
    ],
    translations: {
      nameTranslations: [
        {
          language: 'spa',
        },
      ],
    },
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes&short=true
const seriesEES = {
  data: {
    artworks: null,
    episodes: [
      {
        aired: '2018-09-28',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes
const seriesEE = {
  data: {
    artworks: [
      {
        id: 686641,
      },
    ],
    episodes: [
      {
        name: 'フリクリ プログレ',
      },
    ],
  },
};

export {
  artwork,
  artworkExtended,
  artworkStatuses,
  artworkTypes,
  awards,
  awardsCategoryId,
  awardsCategoryIdExtended,
  awardsId,
  awardsIdExtended,
  character,
  companies,
  companiesPage,
  companiesTypes,
  companyId,
  contentRatings,
  countries,
  entities,
  episodes,
  episodesE,
  episodesET,
  filterMovie,
  filterMovieS,
  filterMovieY,
  filterSerie,
  filterSerieS,
  filterSerieY,
  genres,
  languages,
  movie,
  movieE,
  movieEM,
  movieEMS,
  movieES,
  people,
  peopleE,
  peopleET,
  search,
  searchT,
  searchTL,
  season,
  seasonE,
  seasonEM,
  series,
  seriesE,
  seriesEE,
  seriesEES,
  seriesES,
  seriesET,
  seriesETS,
  updates,
  updatesFull
};

