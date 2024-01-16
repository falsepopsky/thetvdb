import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/companies?page=94
const companiesPage = {
  status: 'success',
  data: [
    {
      id: 48655,
      name: 'Quality Control Films',
      slug: 'quality-control-films',
    },
    {
      id: 48656,
      name: 'Crime District',
      slug: 'crime-district',
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/companies?page=93',
    self: 'https://api4.thetvdb.com/v4/companies?page=94',
    next: 'https://api4.thetvdb.com/v4/companies?page=95',
    total_items: 47531,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/companies
const companies = {
  status: 'success',
  data: [
    {
      id: 1,
      name: '3sat',
      slug: '3sat',
    },
    {
      id: 2,
      name: 'A&E',
      slug: 'ae',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/companies?page=0',
    next: 'https://api4.thetvdb.com/v4/companies?page=1',
    total_items: 47531,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/companies/types
const cTypes = {
  status: 'success',
  data: [
    {
      companyTypeId: 1,
      companyTypeName: 'Network',
    },
    {
      companyTypeId: 2,
      companyTypeName: 'Studio',
    },
  ],
};

// https://api4.thetvdb.com/v4/companies/4
const id = {
  status: 'success',
  data: {
    id: 4,
    name: 'Aaj TV',
    slug: 'aaj-tv',
    nameTranslations: ['eng'],
    overviewTranslations: [],
    aliases: [],
    country: 'pak',
    primaryCompanyType: 1,
    activeDate: null,
    inactiveDate: null,
    companyType: {
      companyTypeId: 1,
      companyTypeName: 'Network',
    },
    parentCompany: {
      id: null,
      name: null,
      relation: {
        id: null,
        typeName: null,
      },
    },
    tagOptions: null,
  },
};

// https://api4.thetvdb.com/v4/companies/*
const badRequest = { status: 'failure', message: 'InvalidValueType: cannot make item path', data: null };

export function companiesPaths(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/companies?page=94':
      return HttpResponse.json(companiesPage);
    case 'https://api4.thetvdb.com/v4/companies':
      return HttpResponse.json(companies);
    case 'https://api4.thetvdb.com/v4/companies/types':
      return HttpResponse.json(cTypes);
    case 'https://api4.thetvdb.com/v4/companies/4':
      return HttpResponse.json(id);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
