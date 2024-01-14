import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('people()', () => {
  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.people('2648');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(9119680);
    expect(data[0]?.name).toBe('Galliano');
    expect(links.next).toBe('https://api4.thetvdb.com/v4/people?page=2649');
  });

  it('returns a successful response without a page', async () => {
    const { status, data, links } = await client.people();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    expect(data[0]?.id).toBe(247831);
    expect(data[0]?.name).toBe('Michelle Fairley');
    expect(data[0]?.lastUpdated).toBe('2023-01-25 17:03:54');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(1326548);
  });
});

describe('peopleById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.peopleById()).rejects.toThrow('HTTP response status: 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.peopleById('312388');

    expect(status).toBe('success');
    expect(data.id).toBe(312388);
    expect(data.name).toBe('Chris Pratt');
    expect(data.lastUpdated).toBe('2023-07-20 19:39:12');
    expect(data.score).toBe(0);
  });
});

describe('peopleByIdExtended()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.peopleByIdExtended()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.peopleByIdExtended('312388');

    expect(status).toBe('success');
    expect(Array.isArray(data.tagOptions)).toBe(true);
    expect(data.tagOptions).toHaveLength(1);
    expect(data.tagOptions[0]?.id).toBe(135);
    expect(data.tagOptions[0]?.name).toBe('White or Caucasian (Non-Hispanic)');
    expect(data.tagOptions[0]?.tagName).toBe('Race');
    expect(Array.isArray(data.characters)).toBe(true);
    expect(data.characters).toHaveLength(1);
  });

  it('returns a successful meta response', async () => {
    const { status, data } = await client.peopleByIdExtended('312388', true);

    expect(status).toBe('success');
    expect(Array.isArray(data.translations.nameTranslations)).toBe(true);
    expect(data.translations.nameTranslations).toHaveLength(1);
    expect(data.translations.nameTranslations[0]?.name).toBe('Chris Pratt');
    expect(data.translations.nameTranslations[0]?.language).toBe('spa');
    expect(Array.isArray(data.translations.overviewTranslations)).toBe(true);
    expect(data.translations.overviewTranslations).toHaveLength(1);
    expect(typeof data.translations.overviewTranslations[0]?.overview).toBe('string');
    expect(data.translations.overviewTranslations[0]?.language).toBe('spa');
  });
});

describe('peopleTypes()', () => {
  it('returns a successful response', async () => {
    const { status, data } = await client.peopleTypes();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(3);
    expect(data[0]?.name).toBe('Actor');
    expect(data[1]?.id).toBe(6);
    expect(data[1]?.name).toBe('Creator');
  });
});

describe('peopleWithTranslation()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.peopleWithTranslation()).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('throws an error if no language is provided', async () => {
    // @ts-expect-error: expect a parameter language
    await expect(async () => await client.peopleWithTranslation('312388')).rejects.toThrow(
      'HTTP response status: 400 from thetvdb API.'
    );
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.peopleWithTranslation('312388', 'spa');

    expect(status).toBe('success');
    expect(data.name).toBe('Chris Pratt');
    expect(data.language).toBe('spa');
  });
});
