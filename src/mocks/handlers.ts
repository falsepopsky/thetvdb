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
];
