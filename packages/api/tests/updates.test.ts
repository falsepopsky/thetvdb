import { TheTVDB } from '../src/index.js';

describe('updates()', () => {
  const client = new TheTVDB('fake token');

  it('throws an error if the queryParams since is not provided', async () => {
    await expect(async () => {
      // @ts-expect-error: Expected a parameter queryParams.since
      await client.updates();
    }).rejects.toThrow('HTTP response status: 400 from thetvdb API');
  });

  it('returns a successful response with since, type, action and page', async () => {
    const { status, data, links } = await client.updates({
      since: '1699747200',
      type: 'artwork',
      action: 'update',
      page: '2',
    });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.method).toBe('update');
    expect(data[1]?.timeStamp).toBe(1699823038);
    expect(data).toHaveLength(2);
    expect(links.next).toBe('https://api4.thetvdb.com/v4/updates?since=1699747200&type=artwork&action=update&page=3');
  });

  it('returns a successful response with action delete', async () => {
    const { status, data, links } = await client.updates({
      since: '1702339200',
      action: 'delete',
    });

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data[0]?.method).toBe('delete');
    expect(data).toHaveLength(1);
    expect(links.next).toBe('https://api4.thetvdb.com/v4/updates?since=1702339200&action=delete&page=1');
  });
});
