import { TheTVDB } from '../src/index.js';

const client = new TheTVDB('fake token');

describe('companies()', () => {
  it('returns a successful response with page', async () => {
    const { status, data, links } = await client.companies('94');

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(48655);
    expect(data[0]?.name).toBe('Quality Control Films');
    expect(data[1]?.id).toBe(48656);
    expect(data[1]?.name).toBe('Crime District');
    expect(links.next).toBe('https://api4.thetvdb.com/v4/companies?page=95');
  });

  it('returns a successful response without a page', async () => {
    const { status, data, links } = await client.companies();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.id).toBe(1);
    expect(data[0]?.slug).toBe('3sat');
    expect(data[1]?.id).toBe(2);
    expect(data[1]?.slug).toBe('ae');
    expect(links.prev).toBeNull();
    expect(links.total_items).toBe(47531);
  });
});

describe('companiesTypes()', () => {
  it('returns a successful response', async () => {
    const { status, data } = await client.companiesTypes();

    expect(status).toBe('success');
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(2);
    expect(data[0]?.companyTypeId).toBe(1);
    expect(data[0]?.companyTypeName).toBe('Network');
    expect(data[1]?.companyTypeId).toBe(2);
    expect(data[1]?.companyTypeName).toBe('Studio');
  });
});

describe('companyById()', () => {
  it('throws an error if no id is provided', async () => {
    // @ts-expect-error: expect a parameter id
    await expect(async () => await client.companyById()).rejects.toThrow('HTTP response status: 400 from thetvdb API.');
  });

  it('returns a successful response', async () => {
    const { status, data } = await client.companyById('4');

    expect(status).toBe('success');
    expect(data.id).toBe(4);
    expect(data.name).toBe('Aaj TV');
    expect(data.companyType.companyTypeId).toBe(1);
    expect(data.companyType.companyTypeName).toBe('Network');
  });
});
