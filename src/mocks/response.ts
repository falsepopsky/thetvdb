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

export { contentRatings, countries, genres, languages, updatesFull, updates };
