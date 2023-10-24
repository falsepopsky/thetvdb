import { HttpResponse, http, type HttpHandler } from 'msw';
import {
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
  genders,
  genres,
  inspirationTypes,
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
  updatesFull,
} from './response.js';

export const handlers: HttpHandler[] = [
  http.get('https://api4.thetvdb.com/v4/awards/categories/:id/extended', () => {
    return HttpResponse.json(awardsCategoryIdExtended);
  }),
  http.get('https://api4.thetvdb.com/v4/awards/categories/:id', () => {
    return HttpResponse.json(awardsCategoryId);
  }),
  http.get('https://api4.thetvdb.com/v4/awards/:id/extended', () => {
    return HttpResponse.json(awardsIdExtended);
  }),
  http.get('https://api4.thetvdb.com/v4/awards/:id', () => {
    return HttpResponse.json(awardsId);
  }),
  http.get('https://api4.thetvdb.com/v4/awards', () => {
    return HttpResponse.json(awards);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/companies', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/companies?page=94') {
      return HttpResponse.json(companiesPage);
    } else {
      return HttpResponse.json(companies);
    }
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/companies/:path', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/companies/types':
        return HttpResponse.json(companiesTypes);
      default:
        return HttpResponse.json(companyId);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/content/ratings', () => {
    return HttpResponse.json(contentRatings);
  }),
  http.get('https://api4.thetvdb.com/v4/countries', () => {
    return HttpResponse.json(countries);
  }),
  http.get('https://api4.thetvdb.com/v4/entities', () => {
    return HttpResponse.json(entities);
  }),
  http.get('https://api4.thetvdb.com/v4/genders', () => {
    return HttpResponse.json(genders);
  }),
  http.get('https://api4.thetvdb.com/v4/genres', () => {
    return HttpResponse.json(genres);
  }),
  http.get('https://api4.thetvdb.com/v4/inspiration/types', () => {
    return HttpResponse.json(inspirationTypes);
  }),
  http.get('https://api4.thetvdb.com/v4/languages', () => {
    return HttpResponse.json(languages);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/updates', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2') {
      return HttpResponse.json(updatesFull);
    } else {
      return HttpResponse.json(updates);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/artwork/:id/extended', () => {
    return HttpResponse.json(artworkExtended);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/artwork/:id', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/artwork/types':
        return HttpResponse.json(artworkTypes);
      case 'https://api4.thetvdb.com/v4/artwork/statuses':
        return HttpResponse.json(artworkStatuses);
      default:
        return HttpResponse.json(artwork);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/characters/:id', () => {
    return HttpResponse.json(character);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/episodes/:id/extended', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations') {
      return HttpResponse.json(episodesET);
    } else {
      return HttpResponse.json(episodesE);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/episodes/:id', () => {
    return HttpResponse.json(episodes);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/people/:id/extended', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations') {
      return HttpResponse.json(peopleET);
    } else {
      return HttpResponse.json(peopleE);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/people/:id', () => {
    return HttpResponse.json(people);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/search', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series&limit=1':
        return HttpResponse.json(searchTL);
      case 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series':
        return HttpResponse.json(searchT);
      default:
        return HttpResponse.json(search);
    }
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/movies/filter', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name':
        return HttpResponse.json(filterMovieS);
      case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&year=2023':
        return HttpResponse.json(filterMovieY);
      default:
        return HttpResponse.json(filterMovie);
    }
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/movies/:id/extended', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations&short=true':
        return HttpResponse.json(movieEMS);
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations':
        return HttpResponse.json(movieEM);
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?short=true':
        return HttpResponse.json(movieES);
      default:
        return HttpResponse.json(movieE);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/movies/:id', () => {
    return HttpResponse.json(movie);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/seasons/:id/extended', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/seasons/6365/extended?meta=translations':
        return HttpResponse.json(seasonEM);
      default:
        return HttpResponse.json(seasonE);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/seasons/:id', () => {
    return HttpResponse.json(season);
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/series/filter', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&sort=name':
        return HttpResponse.json(filterSerieS);
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&year=2023':
        return HttpResponse.json(filterSerieY);
      default:
        return HttpResponse.json(filterSerie);
    }
  }),
  // @ts-expect-error: DefaultBodyType doesn't expect undefined
  http.get('https://api4.thetvdb.com/v4/series/:id/extended', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations&short=true':
        return HttpResponse.json(seriesETS);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes&short=true':
        return HttpResponse.json(seriesEES);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations':
        return HttpResponse.json(seriesET);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes':
        return HttpResponse.json(seriesEE);
      case 'https://api4.thetvdb.com/v4/series/78878/extended?short=true':
        return HttpResponse.json(seriesES);
      default:
        return HttpResponse.json(seriesE);
    }
  }),
  http.get('https://api4.thetvdb.com/v4/series/:id', () => {
    return HttpResponse.json(series);
  }),
];
