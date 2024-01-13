import { TheTVDB } from '../src/index.js';

describe('inspirationTypes()', () => {
  it('returns a successful response', async () => {
    const client = new TheTVDB('fake token');
    const { status, data } = await client.inspirationTypes();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(5);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Historical Event');
    expect(typeof data[0]?.description).toBe('string');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Book Series');
    expect(typeof data[1]?.description).toBe('string');
  });
});
