import { HttpResponse, http, type HttpHandler } from 'msw';

// https://api4.thetvdb.com/v4/companies
const companies = {
  data: [{ id: 48649, name: 'Ananey' }],
};

// https://api4.thetvdb.com/v4/companies?page=94
const companiesPage = {
  data: [
    {
      id: 48646,
    },
    {
      name: 'New Group Productions',
    },
  ],
};

// https://api4.thetvdb.com/v4/companies/types
const companiesTypes = {
  data: [
    {
      companyTypeId: 1,
    },
    {
      companyTypeName: 'Studio',
    },
  ],
};

// https://api4.thetvdb.com/v4/companies/4
const companyId = {
  data: { id: 4, name: 'Aaj TV', country: 'pak' },
};

export const companiesHandlers: HttpHandler[] = [
  http.get<never>('https://api4.thetvdb.com/v4/companies', ({ request }) => {
    if (request.url === 'https://api4.thetvdb.com/v4/companies?page=94') {
      return HttpResponse.json(companiesPage);
    } else {
      return HttpResponse.json(companies);
    }
  }),
  http.get<never>('https://api4.thetvdb.com/v4/companies/:path', ({ request }) => {
    switch (request.url) {
      case 'https://api4.thetvdb.com/v4/companies/types':
        return HttpResponse.json(companiesTypes);
      default:
        return HttpResponse.json(companyId);
    }
  }),
];
