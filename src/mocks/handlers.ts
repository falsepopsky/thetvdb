import type { DefaultBodyType, MockedRequest, RestHandler } from 'msw';
import { rest } from 'msw';

export const handlers: Array<RestHandler<MockedRequest<DefaultBodyType>>> = [
  rest.get('https://api4.thetvdb.com/v4/content/ratings', async (_req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: [
          {
            id: 1,
            name: 'ATP',
            country: 'arg',
            description: 'Suitable for all audiences',
            contentType: 'episode',
            order: 0,
            fullname: 'ATP',
          },
          {
            id: 2,
            name: 'SAM13',
            country: 'arg',
            description: 'Suitable for ages 13 and up',
            contentType: 'episode',
            order: 0,
            fullname: 'SAM13',
          },
        ],
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/countries', async (_req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: [
          {
            id: 'abw',
            name: 'Aruba',
            shortCode: '',
          },
          {
            id: 'afg',
            name: 'Afghanistan',
            shortCode: '',
          },
        ],
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/genres', async (_req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: [
          {
            id: 1,
            name: 'Soap',
            slug: 'soap',
          },
          {
            id: 2,
            name: 'Science Fiction',
            slug: 'science-fiction',
          },
        ],
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/languages', async (_req, res, ctx) => {
    return await res(
      ctx.json({
        status: 'success',
        data: [
          {
            id: 'aar',
            name: 'Afar',
            nativeName: 'Afaraf',
            shortCode: null,
          },
          {
            id: 'zul',
            name: 'Zulu',
            nativeName: 'isiZulu',
            shortCode: null,
          },
        ],
      })
    );
  }),
  rest.get('https://api4.thetvdb.com/v4/updates', async (req, res, ctx) => {
    if (
      req.url.href ===
      'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2'
    ) {
      return await res(
        ctx.json({
          status: 'success',
          data: [
            {
              recordType: '',
              recordId: 979483,
              methodInt: 2,
              method: 'update',
              extraInfo: '',
              userId: 0,
              timeStamp: 1683141951,
              entityType: 'artwork',
            },
            {
              recordType: '',
              recordId: 63281354,
              methodInt: 2,
              method: 'update',
              extraInfo: '',
              userId: 0,
              timeStamp: 1683143122,
              entityType: 'artwork',
            },
          ],
          links: {
            prev: 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=1',
            self: 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=2',
            next: 'https://api4.thetvdb.com/v4/updates?since=1682899200&type=artwork&action=update&page=3',
            total_items: 24965,
            page_size: 500,
          },
        })
      );
    } else {
      return await res(ctx.status(401));
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
                  overview:
                    "Christopher Michael Pratt is an American actor known for starring in both television and action films. He rose to prominence for his television roles, particularly as Andy Dwyer in the NBC sitcom Parks and Recreation (2009–2015), for which he received critical acclaim and was nominated for the Critics' Choice Television Award for Best Supporting Actor in a Comedy Series in 2013.",
                  language: 'eng',
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
