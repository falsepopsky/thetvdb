# @untidy/thetvdb

## 1.0.0

### Major Changes

- 68f97ff: We strongly recommend visiting the new [website](https://untidy-thetvdb.netlify.app) for
  guidance on updating your code to the latest stable major version, 1.0.0. In this version, we have
  addressed almost all return types and missing properties, and added previously undocumented
  queries that were not included in the original API documentation.

  We have also enhanced the methods to specifically handle a particular endpoint along with their
  paths or queries. For instance, in the previous version, if a user wanted to request a specific
  movie's extended record, they would write something like this:

  ```js
  import { TheTVDB } from '@untidy/thetvdb';

  const client = new TheTVDB('access token');
  await client.getMovie({ id: '3646', extended: true });
  ```

  Now, with the new rewrite, there's no need to specify the `extended` argument or even the `id`.

  ```js
  import { TheTVDB } from '@untidy/thetvdb';

  const client = new TheTVDB('access token');
  await client.movieByIdExtended('12586');
  ```

  These changes streamline the code and provide a more intuitive and concise syntax for accessing
  movie extended records.

  BREAKING CHANGES

  - major: Single class only (previously TheTVDB & TheTVDBExtended).
  - major: Rewrite return, entity and other types and export them.
  - major: Rewrite methods for better handling of requests depending on the specific endpoint.
  - major: support to update your token.
  - major: bump minimum version of `Node.js` required `18.17.0`.
  - major: Only throw `Errors` if the response is not `ok` or the `token` validation fails
    (previously strictly throws an error if you miss an specific argument, now this is handle by the
    consumers of this package).
  - feat: add `jsdoc` for better documentation and examples of usage with the new
    [site](https://untidy-thetvdb.netlify.app).
  - feat: support more endpoints
    [reference](https://untidy-thetvdb.netlify.app/guides/supported-endpoints).
  - feat: support to update your token.

## 0.5.0

### Minor Changes

- `/lists` endpoints:

  - da275c8: `/lists`
  - 3acfaaf: `/lists/:id`
  - c3d2bd3: `/lists/:id/translations/:language`
  - 1b50957: `/lists/slug/:slug`
  - 8f76b81: `/lists/:id/extended`

- `/series` endpoints:

  - ee55cb4: `/series`
  - b1499ec: `/series/:id/artworks`
  - ef12d4d: `/series/:id/translations/:language`
  - 3602ab2: `/series/:id/episodes/:season-type`
  - d7cd014: `/series/:id/episodes/:season-type/:language`
  - 0da7078: `/series/:id/nextAired`
  - ef12d4d: `/series/slug/:slug`
  - ef12d4d: `/series/statuses`

- `/seasons` endpoints:

  - c3040e8: `/seasons`
  - 3b7cbca: `/seasons/types`
  - 3b7cbca: `/seasons/:id/translations/:language`

- `/movies` endpoints:

  - f855e0e: `/movies`
  - ef4802a: `/movies/slug/:slug`
  - f3ab2d9: `/movies/:id/translations/:language`
  - 34e775b: `/movies/statuses`

- Other supported endpoints:

  - 21c4fca: `/sources/types`
  - 979b815: `/episodes`
  - 8e7f5ad: `/episodes/:id/translations/:language`
  - d9f13d9: `/genres/:id`
  - 464792e: `/people`
  - 96d0537: `/people/types`
  - 96d0537: `/people/:id/translations/:language`

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
