import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('characterById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.characterById()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.characterById('64140522');

    expect(status).toBe('success');
    expect(data.id).toBe(64140522);
    expect(data.name).toBe('Spike Spiegel');
    expect(data.personName).toBe('Kouichi Yamadera');
    expect(data.seriesId).toBe(76885);
  });
});
