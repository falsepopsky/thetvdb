# TheTVDBExtended

::: info

Here's a skeleton for the next examples

```js
import { TheTVDBExtended } from '@untidy/thetvdb';

const client = new TheTVDBExtended('your token');
```

:::

[[toc]]

## getArtworkStatuses

This method returns a list of artwork status records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint            |
| ------------------------------- | ------------------- |
| <Badge type="tip" text="GET" /> | `/artwork/statuses` |

### List of artwork status records <Badge type="tip" text="example" />

```js
await client.getArtworkStatuses();
```

## getArtworkTypes

This method returns a list of artwork types records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint         |
| ------------------------------- | ---------------- |
| <Badge type="tip" text="GET" /> | `/artwork/types` |

### List of artwork types records <Badge type="tip" text="example" />

```js
await client.getArtworkTypes();
```

## getContentRatings

This method returns a list of content rating records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint           |
| ------------------------------- | ------------------ |
| <Badge type="tip" text="GET" /> | `/content/ratings` |

### List of content rating records <Badge type="tip" text="example" />

```js
await client.getContentRatings();
```

## getCountries

This method returns a list of country records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint     |
| ------------------------------- | ------------ |
| <Badge type="tip" text="GET" /> | `/countries` |

### List of country records<Badge type="tip" text="example" />

```js
await client.getCountries();
```

## getEntities

This method returns a list of active entity types records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint    |
| ------------------------------- | ----------- |
| <Badge type="tip" text="GET" /> | `/entities` |

### List of active entity types records<Badge type="tip" text="example" />

```js
await client.getEntities();
```

## getGenres

This method returns a list of genre records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint  |
| ------------------------------- | --------- |
| <Badge type="tip" text="GET" /> | `/genres` |

### List of genre records <Badge type="tip" text="example" />

```js
await client.getGenres();
```

## getLanguages

This method returns a list of language records and does not require any parameters.

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint     |
| ------------------------------- | ------------ |
| <Badge type="tip" text="GET" /> | `/languages` |

### List of language records <Badge type="tip" text="example" />

```js
await cient.getLanguages();
```

## getUpdates

Returns updated entities.

| name    | type     | Required | Description                                                   |
| ------- | -------- | :------: | ------------------------------------------------------------- |
| options | `object` |   Yes    | An object containing the parameters for the query.            |
| since   | `string` |   Yes    | The timestamp to get updates in epoch Unix format in seconds. |
| type    | `string` | Optional | The type of entities to return.                               |
| action  | `string` | Optional | The type of action to return.                                 |
| page    | `string` | Optional | Selects the page of the current query. Defaults to `0`.       |

### Supported endpoint <Badge type="warning" text="endpoint" />

| method                          | endpoint   |
| ------------------------------- | ---------- |
| <Badge type="tip" text="GET" /> | `/updates` |

### Created entities <Badge type="tip" text="example" />

```js
await client.getUpdates({ since: '1682899200', action: 'create' });
```

### Updated entities <Badge type="tip" text="example" />

```js
await client.getUpdates({ since: '1682899200', action: 'update' });
```

### Deleted entities <Badge type="tip" text="example" />

```js
await client.getUpdates({ since: '1682899200', action: 'delete' });
```
