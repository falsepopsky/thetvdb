import type { DefaultBodyType, MockedRequest, RestHandler } from 'msw';
import { rest } from 'msw';
import {
  artwork,
  artworkExtended,
  character,
  contentRatings,
  countries,
  episodes,
  episodesE,
  episodesET,
  genres,
  languages,
  people,
  peopleE,
  peopleET,
  search,
  searchT,
  searchTL,
  updates,
  updatesFull,
} from './response.js';

export const handlers: Array<RestHandler<MockedRequest<DefaultBodyType>>> = [
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
    if (
      req.url.href ===
      'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2'
    ) {
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
  rest.get('https://api4.thetvdb.com/v4/episodes/:id', async (req, res, ctx) => {
    return await res(ctx.json(episodes));
  }),
  rest.get('https://api4.thetvdb.com/v4/people/:id/extended', async (req, res, ctx) => {
    if (req.url.href === 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations') {
      return await res(ctx.json(peopleET));
    } else {
      return await res(ctx.json(peopleE));
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/people/:id', async (req, res, ctx) => {
    return await res(ctx.json(people));
  }),
  rest.get('https://api4.thetvdb.com/v4/search', async (req, res, ctx) => {
    if (
      req.url.href === 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series&limit=1'
    ) {
      return await res(ctx.json(searchTL));
    } else if (
      req.url.href === 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series'
    ) {
      return await res(ctx.json(searchT));
    } else {
      return await res(ctx.json(search));
    }
  }),
];
