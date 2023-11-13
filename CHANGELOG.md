# @untidy/thetvdb

## 0.5.0

### Minor Changes

- da275c8: feat: `/lists` endpoint
- d7cd014: feat: `/series/:id/episodes/:season-type/:language` endpoint
- 21c4fca: feat: `/sources/types` endpoint
- 1b50957: feat: `/lists/slug/:slug` endpoint
- 3acfaaf: feat: `/lists/:id` endpoint
- 34e775b: feat: `/movies/statuses` endpoint
- 464792e: feat: `/people` endpoint
- 0da7078: feat: `/series/:id/nextAired` endpoint
- c3d2bd3: feat: `/lists/:id/translations/:language` endpoint
- ef12d4d: Support the following `/series` endpoints:

  - `/series/:id/translations/:language`
  - `/series/slug/:slug`
  - `/series/statuses`

- 3602ab2: feat: `/series/:id/episodes/:season-type` endpoint
- 979b815: feat: `/episodes` endpoint
- d9f13d9: feat: `/genres/:id` endpoint
- c3040e8: feat: `/seasons` endpoint
- b1499ec: feat: `/series/:id/artworks` endpoint
- 3b7cbca: feat: `/seasons/types` and `/seasons/:id/translations/:language` endpoints
- 8e7f5ad: feat: `/episodes/:id/translations/:language` endpoint
- 96d0537: feat: `/people/types` and `/people/:id/translations/:language` endpoints
- f3ab2d9: feat: `/movies/:id/translations/:language` endpoint
- 8f76b81: feat: `/lists/:id/extended` endpoint
- ee55cb4: feat: `/series` endpoint
- ef4802a: feat: `/movies/slug/:slug` endpoint
- f855e0e: feat: `/movies` endpoint

## 0.4.0

### Minor Changes

- d9fc667: feat: support `entities` endpoint
- 4e632dd: feat: temporarily remove signal, possibly due to a memory leak.
- 047df33: feat: support `/inspiration/types` and `/genders` endpoints
- 6e8850e: feat: support `/companies` endpoint

## 0.3.0

### Minor Changes

- 102b3db: feat: support awards api

## 0.2.0

### Minor Changes

- c2d7133: feat: support artwork api statuses and types

### Patch Changes

- d20458a: chore: Remove GPL-3.0 and use Apache License instead

## 0.1.0

### Minor Changes

- feat: add homepage for docs
- fix: don't use main fallback for old node versions

## 0.0.7

### Patch Changes

- 4eb973e: feat: add getSerie method, covers /series/{id}/extended & /series/{id} endpoints
- 0aeb382: feat: add getFilteredSeries method

## 0.0.6

### Patch Changes

- 78da041: feat: add getSeason
- 1883e31: feat: add filtered movie

## 0.0.5

### Patch Changes

- 2ddaf72: feat: add AbortController
- cd75c61: feat: add getMovie method

## 0.0.4

### Patch Changes

- d864df3: release missing patch version

## 0.0.3

### Patch Changes

- 0c46813: fix(build): don't ship playground in dist folder
- 3d11aa0: chore: add js & ts setup examples
- 280ff68: feat: add search method
- 445fbad: fix: add types in package.json

## 0.0.2

### Patch Changes

- 99ec91a: Initial release
