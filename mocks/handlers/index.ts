import type { HttpHandler } from 'msw';
import { artworkHandlers } from './artwork.js';
import { awardsHandlers } from './awards.js';
import { companiesHandlers } from './companies.js';
import { episodesHandlers } from './episodes.js';
import { listHandlers } from './lists.js';
import { moviesHandlers } from './movies.js';
import { handlers as otherHandlers } from './otherhandlers.js';
import { peopleHandlers } from './people.js';
import { searchHandlers } from './search.js';
import { seasonHandlers } from './seasons.js';
import { seriesHandlers } from './series.js';
import { updatesHandlers } from './updates.js';

export const handlers: HttpHandler[] = [
  ...artworkHandlers,
  ...awardsHandlers,
  ...companiesHandlers,
  ...episodesHandlers,
  ...listHandlers,
  ...moviesHandlers,
  ...otherHandlers,
  ...peopleHandlers,
  ...searchHandlers,
  ...seasonHandlers,
  ...seriesHandlers,
  ...updatesHandlers,
];
