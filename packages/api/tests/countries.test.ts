import { TheTVDB } from '../src/index.js';

describe('countries()', () => {
  it('returns a successful response', async () => {
    const client = new TheTVDB('fake token');
    const { status, data } = await client.countries();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe('abw');
    expect(data[0]?.name).toBe('Aruba');
    expect(data[1]?.id).toBe('afg');
    expect(data[1]?.name).toBe('Afghanistan');
  });
});
