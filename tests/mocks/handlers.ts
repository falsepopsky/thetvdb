import { rest, type RestHandler } from 'msw';
import {
  artwork,
  artworkExtended,
  character,
  contentRatings,
  countries,
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
  updatesFull,
} from './response.js';

export const handlers: RestHandler[] = [
  rest.get('https://api4.thetvdb.com/v4/content/ratings', async (_req, res, ctx) => {
    return await res(ctx.json(contentRatings));
  }),
  rest.get('https://api4.thetvdb.com/v4/countries', async (_req, res, ctx) => {
    return await res(ctx.json(countries));
  }),
  rest.get('https://api4.thetvdb.com/v4/genres', async (_req, res, ctx) => {
    return await res(ctx.json(genres));
  }),
  rest.get('https://api4.thetvdb.com/v4/languages', async (_req, res, ctx) => {
    return await res(ctx.json(languages));
  }),
  rest.get('https://api4.thetvdb.com/v4/updates', async (req, res, ctx) => {
    if (req.url.href === 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2') {
      return await res(ctx.json(updatesFull));
    } else {
      return await res(ctx.json(updates));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/artwork/:id/extended', async (req, res, ctx) => {
    return await res(ctx.json(artworkExtended));
  }),
  rest.get('https://api4.thetvdb.com/v4/artwork/:id', async (req, res, ctx) => {
    return await res(ctx.json(artwork));
  }),
  rest.get('https://api4.thetvdb.com/v4/characters/:id', async (req, res, ctx) => {
    return await res(ctx.json(character));
  }),
  rest.get('https://api4.thetvdb.com/v4/episodes/:id/extended', async (req, res, ctx) => {
    if (req.url.href === 'https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations') {
      return await res(ctx.json(episodesET));
    } else {
      return await res(ctx.json(episodesE));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/episodes/:id', async (_req, res, ctx) => {
    return await res(ctx.json(episodes));
  }),
  rest.get('https://api4.thetvdb.com/v4/people/:id/extended', async (req, res, ctx) => {
    if (req.url.href === 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations') {
      return await res(ctx.json(peopleET));
    } else {
      return await res(ctx.json(peopleE));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/people/:id', async (_req, res, ctx) => {
    return await res(ctx.json(people));
  }),
  rest.get('https://api4.thetvdb.com/v4/search', async (req, res, ctx) => {
    switch (req.url.href) {
      case 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series&limit=1':
        return await res(ctx.json(searchTL));
      case 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series':
        return await res(ctx.json(searchT));
      default:
        return await res(ctx.json(search));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/movies/filter', async (req, res, ctx) => {
    switch (req.url.href) {
      case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&sort=name':
        return await res(ctx.json(filterMovieS));
      case 'https://api4.thetvdb.com/v4/movies/filter?country=usa&lang=eng&year=2023':
        return await res(ctx.json(filterMovieY));
      default:
        return await res(ctx.json(filterMovie));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/movies/:id/extended', async (req, res, ctx) => {
    switch (req.url.href) {
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations&short=true':
        return await res(ctx.json(movieEMS));
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?meta=translations':
        return await res(ctx.json(movieEM));
      case 'https://api4.thetvdb.com/v4/movies/3646/extended?short=true':
        return await res(ctx.json(movieES));
      default:
        return await res(ctx.json(movieE));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/movies/:id', async (_req, res, ctx) => {
    return await res(ctx.json(movie));
  }),
  rest.get('https://api4.thetvdb.com/v4/seasons/:id/extended', async (req, res, ctx) => {
    switch (req.url.href) {
      case 'https://api4.thetvdb.com/v4/seasons/6365/extended?meta=translations':
        return await res(ctx.json(seasonEM));
      default:
        return await res(ctx.json(seasonE));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/seasons/:id', async (_req, res, ctx) => {
    return await res(ctx.json(season));
  }),
  rest.get('https://api4.thetvdb.com/v4/series/filter', async (req, res, ctx) => {
    switch (req.url.href) {
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&sort=name':
        return await res(ctx.json(filterSerieS));
      case 'https://api4.thetvdb.com/v4/series/filter?country=usa&lang=eng&year=2023':
        return await res(ctx.json(filterSerieY));
      default:
        return await res(ctx.json(filterSerie));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/series/:id/extended', async (req, res, ctx) => {
    switch (req.url.href) {
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations&short=true':
        return await res(ctx.json(seriesETS));
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes&short=true':
        return await res(ctx.json(seriesEES));
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=translations':
        return await res(ctx.json(seriesET));
      case 'https://api4.thetvdb.com/v4/series/78878/extended?meta=episodes':
        return await res(ctx.json(seriesEE));
      case 'https://api4.thetvdb.com/v4/series/78878/extended?short=true':
        return await res(ctx.json(seriesES));
      default:
        return await res(ctx.json(seriesE));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/series/:id', async (_req, res, ctx) => {
    return await res(ctx.json(series));
  }),
];
