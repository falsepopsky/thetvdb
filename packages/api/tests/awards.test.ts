import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('awardById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.awardById()).rejects.toThrow('HTTP response status: 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.awardById('1');

    expect(status).toBe('success');
    expect(data.id).toBe(1);
    expect(data.name).toBe('Academy Awards');
  });
});

describe('awardByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.awardByIdExtended()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.awardByIdExtended('1');

    expect(status).toBe('success');
    expect(data.id).toBe(1);
    expect(data.name).toBe('Academy Awards');
    expect(Array.isArray(data.categories)).toBe(true);
    expect(data.categories).toHaveLength(2);
    expect(data.categories[0]?.id).toBe(1);
    expect(data.categories[0]?.name).toBe('Best Picture');
    expect(data.categories[1]?.id).toBe(2);
    expect(data.categories[1]?.name).toBe('Actor in a Leading Role');
  });
});

describe('awardCategoryById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.awardCategoryById()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.awardCategoryById('42');

    expect(status).toBe('success');
    expect(data.id).toBe(42);
    expect(data.name).toBe('Best Actor in a Television Series – Drama');
  });
});

describe('awardCategoryByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.awardCategoryByIdExtended()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.awardCategoryByIdExtended('42');

    expect(status).toBe('success');
    expect(data.id).toBe(42);
    expect(data.name).toBe('Best Actor in a Television Series – Drama');
    expect(Array.isArray(data.nominees)).toBe(true);
    expect(data.nominees).toHaveLength(2);
    expect(data.nominees[0]?.id).toBe(6341);
    expect(data.nominees[0]?.year).toBe('2014');
    expect(data.nominees[1]?.id).toBe(6349);
    expect(data.nominees[1]?.year).toBe('2015');
  });
});

describe('awards()', () => {
  it('returns a successful response', async () => {
    const { status, data } = await client.awards();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.name).toBe('Academy Awards');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.name).toBe('Golden Globe Awards');
  });
});
