// https://api4.thetvdb.com/v4/content/ratings
const contentRatings = {
  status: 'success',
  data: [
    {
      name: 'ATP',
    },
  ],
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

// https://api4.thetvdb.com/v4/artwork/63237874/extended
const artworkExtended = {
  data: {
    movieId: 145830,
  },
};

// https://api4.thetvdb.com/v4/artwork/63237874
const artwork = {
  status: 'success',
  data: {
    id: 63237874,
  },
};

// https://api4.thetvdb.com/v4/characters/64140522
const character = {
  data: {
    id: 64140522,
    name: 'Spike Spiegel',
  },
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
  data: {
    characters: null,
    artworks: null,
    trailers: null,
  },
};

// https://api4.thetvdb.com/v4/movies/3646/extended
const movieE = {
  data: {
    trailers: [
      {
        id: 143117,
        language: 'spa',
      },
      {
        id: 143118,
        language: 'eng',
      },
    ],
  },
};

// https://api4.thetvdb.com/v4/movies/12586
const movie = {
  data: {
    id: 12586,
    slug: 'macross-do-you-remember-love',
  },
};

export {
  contentRatings,
  countries,
  episodes,
  episodesET,
  episodesE,
  character,
  genres,
  languages,
  updatesFull,
  updates,
  artworkExtended,
  artwork,
  people,
  peopleET,
  peopleE,
  searchTL,
  searchT,
  search,
  movie,
  movieES,
  movieE,
  movieEMS,
  movieEM,
};
