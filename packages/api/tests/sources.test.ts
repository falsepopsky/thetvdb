import { TheTVDB } from '../src/index.js';

describe('sourcesTypes()', () => {
  it('returns a successful response', async () => {
    const client = new TheTVDB('fake token');
    const { status, data } = await client.sourcesTypes();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(2);
    expect(data[1]?.prefix).toBe('https://tvlistings.zap2it.com/overview.html?programSeriesId=');
  });
});
