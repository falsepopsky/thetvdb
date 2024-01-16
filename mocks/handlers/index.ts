import { http, type HttpHandler } from 'msw';
import {
  artworkPaths,
  awardsPaths,
  charactersPaths,
  companiesPaths,
  contentPaths,
  countriesPaths,
  entitiesPaths,
  episodesPaths,
  gendersPaths,
  genresPaths,
  inspirationPaths,
  languagesPaths,
  listsPaths,
  moviesPaths,
  peoplePaths,
  searchPaths,
  seasonsPaths,
  seriesPaths,
  sourcesTypesPaths,
  updatesPaths,
} from './global.js';

export const handlers: HttpHandler[] = [
  // Implement request interception after the /v4 path to prevent memory leaks when the array contains more than 10 objects.
  http.get<never>('https://api4.thetvdb.com/v4/*', ({ request }) => {
    const url = new URL(request.url);
    const pathname = url.pathname;

    switch (true) {
      case pathname.startsWith('/v4/artwork'):
        return artworkPaths(url);
      case pathname.startsWith('/v4/awards'):
        return awardsPaths(url);
      case pathname.startsWith('/v4/characters'):
        return charactersPaths(url);
      case pathname.startsWith('/v4/companies'):
        return companiesPaths(url);
      case pathname.startsWith('/v4/content'):
        return contentPaths();
      case pathname.startsWith('/v4/countries'):
        return countriesPaths();
      case pathname.startsWith('/v4/entities'):
        return entitiesPaths();
      case pathname.startsWith('/v4/episodes'):
        return episodesPaths(url);
      case pathname.startsWith('/v4/genders'):
        return gendersPaths();
      case pathname.startsWith('/v4/genres'):
        return genresPaths(url);
      case pathname.startsWith('/v4/inspiration'):
        return inspirationPaths();
      case pathname.startsWith('/v4/languages'):
        return languagesPaths();
      case pathname.startsWith('/v4/lists'):
        return listsPaths(url);
      case pathname.startsWith('/v4/movies'):
        return moviesPaths(url);
      case pathname.startsWith('/v4/people'):
        return peoplePaths(url);
      case pathname.startsWith('/v4/search'):
        return searchPaths(url);
      case pathname.startsWith('/v4/seasons'):
        return seasonsPaths(url);
      case pathname.startsWith('/v4/series'):
        return seriesPaths(url);
      case pathname.startsWith('/v4/sources'):
        return sourcesTypesPaths();
      case pathname.startsWith('/v4/updates'):
        return updatesPaths(url);
      default:
        throw new Error(`Path "${pathname}" is not handled`);
    }
  }),
];
