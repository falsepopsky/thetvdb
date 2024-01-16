import { TheTVDB } from '../src/index.js';

describe('entities()', () => {
  it('returns a successful response', async () => {
    const client = new TheTVDB('fake token');
    const { status, data } = await client.entities();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('series');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('season');
  });
});
