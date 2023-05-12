import type { DefaultBodyType, MockedRequest, RestHandler } from 'msw';
import { rest } from 'msw';
import { contentRatings, countries, genres, languages, updates, updatesFull } from './response.js';

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
    return await res(
      ctx.json({
        data: {
          movieId: 145830,
        },
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/artwork/:id', async (req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: {
          id: 63237874,
          image: 'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460.jpg',
          thumbnail:
            'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460_t.jpg',
          language: 'eng',
          type: 14,
          score: 0,
          width: 680,
          height: 1000,
          includesText: true,
        },
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/characters/:id', async (req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: {
          id: 64140522,
          name: 'Spike Spiegel',
        },
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/episodes/:id/extended', async (req, res, ctx) => {
    if (req.url.href === 'https://api4.thetvdb.com/v4/episodes/127396/extended?meta=translations') {
      return await res(
        ctx.json({
          data: {
            translations: {
              nameTranslations: [
                {
                  name: 'Schwarzer Ritter',
                  language: 'deu',
                },
              ],
            },
          },
        })
      );
    } else {
      return await res(
        ctx.json({
          data: {
            seriesId: 73752,
            nominations: null,
          },
        })
      );
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/episodes/:id', async (req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: {
          id: 127396,
        },
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/people/:id/extended', async (req, res, ctx) => {
    if (req.url.href === 'https://api4.thetvdb.com/v4/people/312388/extended?meta=translations') {
      return await res(
        ctx.json({
          data: {
            translations: {
              nameTranslations: [
                {
                  name: 'Chris Pratt',
                },
              ],
            },
          },
        })
      );
    } else {
      return await res(
        ctx.json({
          data: {
            gender: 1,
          },
        })
      );
    }
  }),
  rest.get('https://api4.thetvdb.com/v4/people/:id', async (req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: {
          id: 312388,
        },
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/search', async (req, res, ctx) => {
    if (
      req.url.href === 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series&limit=1'
    ) {
      return await res(
        ctx.json({
          data: [
            {
              objectID: 'series-426391',
              aliases: ['Saint Seiya Omega'],
              country: 'jpn',
              id: 'series-426391',
              image_url: 'https://artworks.thetvdb.com/banners/images/missing/series.jpg',
            },
          ],
        })
      );
    } else if (
      req.url.href === 'https://api4.thetvdb.com/v4/search?query=saint+seiya&type=series'
    ) {
      return await res(
        ctx.json({
          status: 'success',
          data: [
            {
              objectID: 'series-426391',
              aliases: ['Saint Seiya Omega'],
              country: 'jpn',
              id: 'series-426391',
              primary_language: 'jpn',
              primary_type: 'series',
              status: 'Ended',
              type: 'series',
              tvdb_id: '426391',
              slug: 'saint-seiya-omega-w',
              remote_ids: [
                {
                  id: '10.5240/ACDE-C13C-C96F-5A12-3E5C-W',
                  type: 13,
                  sourceName: 'EIDR',
                },
                {
                  id: 'https://www.toei-anim.co.jp/tv/seiya/index.html',
                  type: 4,
                  sourceName: 'Official Website',
                },
                {
                  id: '44317-saint-seiya-omega',
                  type: 12,
                  sourceName: 'TheMovieDB.com',
                },
                {
                  id: 'Q1370881',
                  type: 18,
                  sourceName: 'Wikidata',
                },
                {
                  id: 'Saint_Seiya_Omega',
                  type: 24,
                  sourceName: 'Wikipedia',
                },
                {
                  id: '44317',
                  type: 12,
                  sourceName: 'TheMovieDB.com',
                },
                {
                  id: 'tt2230515',
                  type: 2,
                  sourceName: 'IMDB',
                },
              ],
            },
          ],
          links: {
            prev: null,
            self: 'https://api4.thetvdb.com/v4/search?query=saint seiya&type=series&limit=50&page=0',
            next: null,
            total_items: 6,
            page_size: 50,
          },
        })
      );
    } else {
      return await res(
        ctx.json({
          status: 'success',
          data: [
            {
              objectID: 'series-426391',
              aliases: ['Saint Seiya Omega'],
              country: 'jpn',
            },
          ],
        })
      );
    }
  }),
];
