// https://api4.thetvdb.com/v4/characters/64140522
const character = {
  data: { id: 64140522, name: 'Spike Spiegel' },
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
      name: 'series',
    },
  ],
};

// https://api4.thetvdb.com/v4/genders
const genders = {
  data: [
    {
      id: 1,
      name: 'Male',
    },
    {
      id: 2,
      name: 'Female',
    },
  ],
};

// https://api4.thetvdb.com/v4/genres/1
const genreId = {
  data: {
    id: 1,
    name: 'Soap',
  },
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

// https://api4.thetvdb.com/v4/inspiration/types
const inspirationTypes = {
  data: [
    {
      id: 1,
      name: 'Historical Event',
      reference_name: 'Wikipedia',
    },
    {
      id: 2,
      name: 'Book Series',
      reference_name: 'Goodreads',
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

// https://api4.thetvdb.com/v4/sources/types
const sourceTypes = {
  data: [
    {
      id: 2,
      name: 'IMDB',
    },
    {
      id: 3,
      name: 'TMS (Zap2It)',
    },
  ],
};

export {
  character,
  contentRatings,
  countries,
  entities,
  genders,
  genreId,
  genres,
  inspirationTypes,
  languages,
  sourceTypes,
};
