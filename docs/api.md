# :rocket: API

This package consists of two primary classes, [TheTVDB](#thetvdb) and
[TheTVDBExtended](#thetvdbextended), each of which supports multiple endpoints. In this
documentation, we will divide the information into two sections, one for each class, and provide
details on their respective methods.

> **Warning**  
> All required parameters must be provided, otherwise an error will be thrown.

## TheTVDB

The main class for @untidy/thetvdb

### Constructor

| name  | type     | Required | Description          |
| ----- | -------- | :------: | -------------------- |
| token | `string` |   Yes    | Your TVDB API token. |

### getArtwork

> Returns a single artwork base or extended record

| name     | type      | Required | Description                                        |
| -------- | --------- | :------: | -------------------------------------------------- |
| options  | `object`  |   Yes    | An object containing the parameters for the query. |
| id       | `string`  |   Yes    | The `id` of the artwork.                           |
| extended | `boolean` | Optional | If true, returns the extended record.              |

### getCharacter

> Returns a character base record

| name | type     | Required | Description                |
| ---- | -------- | :------: | -------------------------- |
| id   | `string` |   Yes    | The `id` of the Character. |

### getEpisode

> Returns an episode base or extended record

| name     | type      | Required | Description                                                                    |
| -------- | --------- | :------: | ------------------------------------------------------------------------------ |
| options  | `object`  |   Yes    | An object containing the parameters for the query.                             |
| id       | `string`  |   Yes    | The `id` of the episode.                                                       |
| extended | `boolean` | Optional | If true, returns the extended record.                                          |
| meta     | `boolean` | Optional | If `extended` & `meta` is true, returns the extended record with translations. |

### getPeople

> Returns a people base or extended record

| name     | type      | Required | Description                                                                    |
| -------- | --------- | :------: | ------------------------------------------------------------------------------ |
| options  | `object`  |   Yes    | An object containing the parameters for the query.                             |
| id       | `string`  |   Yes    | The `id` of the episode.                                                       |
| extended | `boolean` | Optional | If true, returns the extended record.                                          |
| meta     | `boolean` | Optional | If `extended` & `meta` is true, returns the extended record with translations. |

---

## TheTVDBExtended

The extended class for @untidy/thetvdb

### Constructor

| name  | type     | Required | Description          |
| ----- | -------- | :------: | -------------------- |
| token | `string` |   Yes    | Your TVDB API token. |

### getContentRatings

> This method returns a list of content rating records and does not require any parameters.

### getCountries

> This method returns a list of country records and does not require any parameters.

### getGenres

> This method returns a list of genre records and does not require any parameters.

### getLanguages

> This method returns a list of language records and does not require any parameters.

### getUpdates

> Returns updated entities.

| name    | type     | Required | Description                                                   |
| ------- | -------- | :------: | ------------------------------------------------------------- |
| options | `object` |   Yes    | An object containing the parameters for the query.            |
| since   | `string` |   Yes    | The timestamp to get updates in epoch Unix format in seconds. |
| type    | `string` | Optional | The type of entities to return.                               |
| action  | `action` | Optional | The type of action to return.                                 |
| page    | `string` | Optional | Selects the page of the current query. Defaults to `0`.       |
