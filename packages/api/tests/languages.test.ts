import { TheTVDB } from '../src/index.js';

describe('languages()', () => {
  it('returns a successful response', async () => {
    const client = new TheTVDB('fake token');
    const { status, data } = await client.languages();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe('aar');
    expect(data[0]?.name).toBe('Afar');
    expect(data[0]?.nativeName).toBe('Afaraf');
    expect(data[1]?.id).toBe('abk');
    expect(data[1]?.name).toBe('Abkhaz');
    expect(data[1]?.nativeName).toBe('аҧсуа бызшәа');
  });
});
