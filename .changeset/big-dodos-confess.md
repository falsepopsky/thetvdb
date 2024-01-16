---
'@untidy/thetvdb': major
---

We strongly recommend visiting the new [website](https://untidy-thetvdb.netlify.app) for guidance on
updating your code to the latest stable major version, 1.0.0. In this version, we have addressed
almost all return types and missing properties, and added previously undocumented queries that were
not included in the original API documentation.

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
- major: Only throw `Errors` if the response is not `ok` or the `token` validation fails (previously
  strictly throws an error if you miss an specific argument, now this is handle by the consumers of
  this package).
- feat: add `jsdoc` for better documentation and examples of usage with the new
  [site](https://untidy-thetvdb.netlify.app).
- feat: support more endpoints
  [reference](https://untidy-thetvdb.netlify.app/guides/supported-endpoints).
- feat: support to update your token.
