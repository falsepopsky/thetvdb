import { HttpResponse, http, type HttpHandler } from 'msw';
import {
  character,
  contentRatings,
  countries,
  entities,
  genders,
  genreId,
  genres,
  inspirationTypes,
  languages,
} from '../response.js';

export const handlers: HttpHandler[] = [
  http.get('https://api4.thetvdb.com/v4/content/ratings', () => {
    return HttpResponse.json(contentRatings);
  }),
  http.get('https://api4.thetvdb.com/v4/countries', () => {
    return HttpResponse.json(countries);
  }),
  http.get('https://api4.thetvdb.com/v4/entities', () => {
    return HttpResponse.json(entities);
  }),
  http.get('https://api4.thetvdb.com/v4/genders', () => {
    return HttpResponse.json(genders);
  }),
  http.get('https://api4.thetvdb.com/v4/genres/:id', () => {
    return HttpResponse.json(genreId);
  }),
  http.get('https://api4.thetvdb.com/v4/genres', () => {
    return HttpResponse.json(genres);
  }),
  http.get('https://api4.thetvdb.com/v4/inspiration/types', () => {
    return HttpResponse.json(inspirationTypes);
  }),
  http.get('https://api4.thetvdb.com/v4/languages', () => {
    return HttpResponse.json(languages);
  }),

  http.get('https://api4.thetvdb.com/v4/characters/:id', () => {
    return HttpResponse.json(character);
  }),
];
