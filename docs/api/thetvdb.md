# TheTVDB

::: info

Here's a skeleton for the next examples

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
```

:::

[[toc]]

## getArtwork

Returns a single artwork base or extended record

| params           | type      | Required | Description                                        |
| ---------------- | --------- | :------: | -------------------------------------------------- |
| options          | `object`  |   Yes    | An object containing the parameters for the query. |
| options.id       | `string`  |   Yes    | The `id` of the artwork.                           |
| options.extended | `boolean` | Optional | Returns the extended record.                       |

### Supports the following endpoints <Badge type="warning" text="endpoint" />

| method                          | endpoint                |
| ------------------------------- | ----------------------- |
| <Badge type="tip" text="GET" /> | `/artwork/:id`          |
| <Badge type="tip" text="GET" /> | `/artwork/:id/extended` |

### Single record <Badge type="tip" text="example" />

```js
await client.getArtwork({ id: '63237874' });
```

### Extended record <Badge type="tip" text="example" />

```js
await client.getArtwork({ id: '63237874', extended: true });
```

## getAwards

Returns a list of awards base records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint  |
| ------------------------------- | --------- |
| <Badge type="tip" text="GET" /> | `/awards` |

### List of awards records <Badge type="tip" text="example" />

```js
await client.getAwards();
```

## getAwardsById

Returns a single award record

| params | type     | Required | Description            |
| ------ | -------- | :------: | ---------------------- |
| id     | `string` |   Yes    | The `id` of the Award. |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint      |
| ------------------------------- | ------------- |
| <Badge type="tip" text="GET" /> | `/awards/:id` |

### Single award record <Badge type="tip" text="example" />

```js
await client.getAwardsById('2');
```

## getAwardsByIdExtended

Returns a single award extended record

| params | type     | Required | Description            |
| ------ | -------- | :------: | ---------------------- |
| id     | `string` |   Yes    | The `id` of the Award. |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint               |
| ------------------------------- | ---------------------- |
| <Badge type="tip" text="GET" /> | `/awards/:id/extended` |

### Single award extended record <Badge type="tip" text="example" />

```js
await client.getAwardsByIdExtended('2');
```

## getAwardsCategoriesById

Returns a single award category record

| params | type     | Required | Description                     |
| ------ | -------- | :------: | ------------------------------- |
| id     | `string` |   Yes    | The `id` of the award category. |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint                 |
| ------------------------------- | ------------------------ |
| <Badge type="tip" text="GET" /> | `/awards/categories/:id` |

### Single award extended record <Badge type="tip" text="example" />

```js
await client.getAwardsCategoriesById('2');
```

## getAwardsCategoriesByIdExtended

Returns a single award category extended record

| params | type     | Required | Description                     |
| ------ | -------- | :------: | ------------------------------- |
| id     | `string` |   Yes    | The `id` of the award category. |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint                          |
| ------------------------------- | --------------------------------- |
| <Badge type="tip" text="GET" /> | `/awards/categories/:id/extended` |

### Single award extended record <Badge type="tip" text="example" />

```js
await client.getAwardsCategoriesByIdExtended('2');
```

## getFilteredMovie

Returns a search movies records based on filter parameters

| params                | type     | Required | Description                                        |
| --------------------- | -------- | :------: | -------------------------------------------------- |
| options               | `object` |   Yes    | An object containing the parameters for the query. |
| options.country       | `string` |   Yes    | Country of origin.                                 |
| options.lang          | `string` |   Yes    | Original language.                                 |
| options.company       | `string` | Optional | Production company id.                             |
| options.contentRating | `string` | Optional | Content rating id.                                 |
| options.genre         | `string` | Optional | Genre id.                                          |
| options.sort          | `string` | Optional | Sort by results.                                   |
| options.status        | `string` | Optional | Status of the record.                              |
| options.year          | `string` | Optional | Release year.                                      |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint         |
| ------------------------------- | ---------------- |
| <Badge type="tip" text="GET" /> | `/movies/filter` |

### Search movies based on USA with english language <Badge type="tip" text="example" />

```js
await client.getFilteredMovie({ country: 'usa', lang: 'eng' });
```

## getFilteredSeries

Returns a search series records based on filter parameters

| params                | type     | Required | Description                                        |
| --------------------- | -------- | :------: | -------------------------------------------------- |
| options               | `object` |   Yes    | An object containing the parameters for the query. |
| options.country       | `string` |   Yes    | Country of origin.                                 |
| options.lang          | `string` |   Yes    | Original language.                                 |
| options.company       | `string` | Optional | Production company `id`.                           |
| options.contentRating | `string` | Optional | Content rating `id`.                               |
| options.genre         | `string` | Optional | Genre `id`.                                        |
| options.sort          | `string` | Optional | Sort by results.                                   |
| options.sortType      | `string` | Optional | Sort by ascending or descending.                   |
| options.status        | `string` | Optional | Status of the record.                              |
| options.year          | `string` | Optional | Release year.                                      |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint         |
| ------------------------------- | ---------------- |
| <Badge type="tip" text="GET" /> | `/series/filter` |

### Search Series with USA Country and English Language <Badge type="tip" text="example" />

```js
await client.getFilteredSeries({ country: 'usa', lang: 'eng' });
```

## getCharacter

Returns a character base record

| params | type     | Required | Description                |
| ------ | -------- | :------: | -------------------------- |
| id     | `string` |   Yes    | The `id` of the Character. |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint          |
| ------------------------------- | ----------------- |
| <Badge type="tip" text="GET" /> | `/characters/:id` |

### Single record <Badge type="tip" text="example" />

```js
await client.getCharacter('64140522');
```

## getEpisode

Returns an episode base or extended record

| params           | type      | Required | Description                                                        |
| ---------------- | --------- | :------: | ------------------------------------------------------------------ |
| options          | `object`  |   Yes    | An object containing the parameters for the query.                 |
| options.id       | `string`  |   Yes    | The episode `id`.                                                  |
| options.extended | `boolean` | Optional | Returns the extended record.                                       |
| options.meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |

### Supports the following endpoints <Badge type="warning" text="endpoint" />

| method                          | endpoint                 |
| ------------------------------- | ------------------------ |
| <Badge type="tip" text="GET" /> | `/episodes/:id`          |
| <Badge type="tip" text="GET" /> | `/episodes/:id/extended` |

### Single record <Badge type="tip" text="example" />

```js
await client.getEpisode({ id: '127396' });
```

### Extended record <Badge type="tip" text="example" />

```js
await client.getEpisode({ id: '127396', extended: true });
```

### Extended record with translations <Badge type="tip" text="example" />

```js
await client.getEpisode({ id: '127396', extended: true, meta: true });
```

## getMovie

Returns a movie base or extended record

| params           | type      | Required | Description                                                        |
| ---------------- | --------- | :------: | ------------------------------------------------------------------ |
| options          | `object`  |   Yes    | An object containing the parameters for the query.                 |
| options.id       | `string`  |   Yes    | The movie `id`.                                                    |
| options.extended | `boolean` | Optional | Returns the extended record.                                       |
| options.meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |
| options.short    | `boolean` | Optional | Returns the short version of the record (Requires extended).       |

### Supports the following endpoints <Badge type="warning" text="endpoint" />

- <Badge type="tip" text="GET" /> `/movies/:id`
- <Badge type="tip" text="GET" /> `/movies/:id/extended`

### Single record <Badge type="tip" text="example" />

```js
await client.getMovie({ id: '3646' });
```

### Extended record <Badge type="tip" text="example" />

```js
await client.getMovie({ id: '3646', extended: true });
```

### Extended record with translations <Badge type="tip" text="example" />

```js
await client.getMovie({ id: '3646', extended: true, meta: true });
```

### Extended record without characters, artworks and trailers <Badge type="tip" text="example" />

```js
await client.getMovie({ id: '3646', extended: true, short: true });
```

### Extended record with translations and short payload <Badge type="tip" text="example" />

```js
await client.getMovie({ id: '3646', extended: true, meta: true, short: true });
```

## getPeople

Returns a people base or extended record

| params           | type      | Required | Description                                                        |
| ---------------- | --------- | :------: | ------------------------------------------------------------------ |
| options          | `object`  |   Yes    | An object containing the parameters for the query.                 |
| options.id       | `string`  |   Yes    | The people `id`.                                                   |
| options.extended | `boolean` | Optional | Returns the extended record.                                       |
| options.meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |

### Supports the following endpoints <Badge type="warning" text="endpoint" />

| method                          | endpoint               |
| ------------------------------- | ---------------------- |
| <Badge type="tip" text="GET" /> | `/people/:id`          |
| <Badge type="tip" text="GET" /> | `/people/:id/extended` |

### Single record <Badge type="tip" text="example" />

```js
await client.getPeople({ id: '312388' });
```

### Extended record <Badge type="tip" text="example" />

```js
await client.getPeople({ id: '312388', extended: true });
```

### Extended record with translations <Badge type="tip" text="example" />

```js
await client.getPeople({ id: '312388', extended: true, meta: true });
```

## getSearch

Returns a query search record(s).

| params              | type     | Required | Description                                        |
| ------------------- | -------- | :------: | -------------------------------------------------- |
| options             | `object` |   Yes    | An object containing the parameters for the query. |
| options.query       | `string` |   Yes    | The primary search.                                |
| options.type        | `string` | Optional | Restrict results to a specific entity type.        |
| options.year        | `string` | Optional | Restrict results to a specific year.               |
| options.company     | `string` | Optional | Restrict results to a specific company.            |
| options.country     | `string` | Optional | Restrict results to a specific country of origin.  |
| options.director    | `string` | Optional | Restrict results to a specific director.           |
| options.language    | `string` | Optional | Restrict results to a specific primary language.   |
| options.primaryType | `string` | Optional | Restrict results to a specific type of company.    |
| options.network     | `string` | Optional | Restrict results to a specific network.            |
| options.remote_id   | `string` | Optional | Search for a specific remote id.                   |
| options.offset      | `string` | Optional | Offset results.                                    |
| options.limit       | `string` | Optional | Limit results.                                     |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint  |
| ------------------------------- | --------- |
| <Badge type="tip" text="GET" /> | `/search` |

### Search for a Specific Title <Badge type="tip" text="example" />

```js
await client.getSearch({ query: 'saint seiya' });
```

### Search for Series Title <Badge type="tip" text="example" />

```js
await client.getSearch({ query: 'saint seiya', type: 'series' });
```

## getSeason

Returns a season base or extended record

| params           | type      | Required | Description                                                        |
| ---------------- | --------- | :------: | ------------------------------------------------------------------ |
| options          | `object`  |   Yes    | An object containing the parameters for the query.                 |
| options.id       | `string`  |   Yes    | The season `id`.                                                   |
| options.extended | `boolean` | Optional | Returns the extended record.                                       |
| options.meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |

### Supports the following endpoints <Badge type="warning" text="endpoint" />

- <Badge type="tip" text="GET" /> `/seasons/:id`
- <Badge type="tip" text="GET" /> `/seasons/:id/extended`

### Single record <Badge type="tip" text="example" />

```js
await client.getSeason({ id: '6365', extended: true, meta: true });
```

### Extended record <Badge type="tip" text="example" />

```js
await client.getSeason({ id: '6365', extended: true });
```

### Extended record with translations <Badge type="tip" text="example" />

```js
await client.getSeason({ id: '6365', extended: true, meta: true });
```

## getSerie

Returns a serie base or extended record

| params           | type      | Required | Description                                                                    |
| ---------------- | --------- | :------: | ------------------------------------------------------------------------------ |
| options          | `object`  |   Yes    | An object containing the parameters for the query.                             |
| options.id       | `string`  |   Yes    | The serie `id`.                                                                |
| options.extended | `boolean` | Optional | Returns the extended record.                                                   |
| options.meta     | `string`  | Optional | Returns the extended record with translations or episodes (Requires extended). |

### Supports the following endpoints <Badge type="warning" text="endpoint" />

- <Badge type="tip" text="GET" /> `/series/:id`
- <Badge type="tip" text="GET" /> `/series/:id/extended`

### Single record <Badge type="tip" text="example" />

```js
await client.getSerie({ id: '78878' });
```

### Extended record <Badge type="tip" text="example" />

```js
await client.getSerie({ id: '78878', extended: true });
```

### Extended record with translations <Badge type="tip" text="example" />

```js
await client.getSerie({ id: '78878', extended: true, meta: 'translations' });
```

### Extended record with episodes <Badge type="tip" text="example" />

```js
await client.getSerie({ id: '78878', extended: true, meta: 'episodes' });
```

### Extended record without characters and artworks <Badge type="tip" text="example" />

```js
await client.getSerie({ id: '78878', extended: true, short: true });
```

### Extended record with translations and short payload <Badge type="tip" text="example" />

```js
await client.getSerie({ id: '78878', extended: true, meta: 'translations', short: true });
```

### Extended record with episodes and short payload <Badge type="tip" text="example" />

```js
await client.getSerie({ id: '78878', extended: true, meta: 'episodes', short: true });
```
