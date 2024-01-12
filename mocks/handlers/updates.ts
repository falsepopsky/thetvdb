import { HttpResponse } from 'msw';

// https://api4.thetvdb.com/v4/updates?since=1699747200&type=artwork&action=update&page=2
const sinceTypeActionPage = {
  status: 'success',
  data: [
    {
      recordType: '',
      recordId: 63721904,
      methodInt: 2,
      method: 'update',
      extraInfo: '',
      userId: 0,
      timeStamp: 1699823038,
      entityType: 'artwork',
    },
    {
      recordType: '',
      recordId: 63721905,
      methodInt: 2,
      method: 'update',
      extraInfo: '',
      userId: 0,
      timeStamp: 1699823038,
      entityType: 'artwork',
    },
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/updates?since=1699747200&type=artwork&action=update&page=1',
    self: 'https://api4.thetvdb.com/v4/updates?since=1699747200&type=artwork&action=update&page=2',
    next: 'https://api4.thetvdb.com/v4/updates?since=1699747200&type=artwork&action=update&page=3',
    total_items: 66329,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/updates?since=1702339200&action=delete
const actionDelete = {
  status: 'success',
  data: [
    {
      recordType: '',
      recordId: 12415980,
      methodInt: 3,
      method: 'delete',
      extraInfo: '',
      userId: 0,
      timeStamp: 1702341751,
      entityType: 'translatedepisodes',
    },
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/updates?since=1702339200&action=delete&page=0',
    next: 'https://api4.thetvdb.com/v4/updates?since=1702339200&action=delete&page=1',
    total_items: 17644,
    page_size: 500,
  },
};

// https://api4.thetvdb.com/v4/updates
const badRequest = {
  status: 'failure',
  message: 'InvalidValueType: since greater than 3 months ago',
  data: null,
};

export function handleUpdates(url: URL): HttpResponse {
  switch (url.href) {
    case 'https://api4.thetvdb.com/v4/updates?since=1699747200&type=artwork&action=update&page=2':
      return HttpResponse.json(sinceTypeActionPage);
    case 'https://api4.thetvdb.com/v4/updates?since=1702339200&action=delete':
      return HttpResponse.json(actionDelete);
    default:
      return HttpResponse.json(badRequest, { status: 400 });
  }
}
