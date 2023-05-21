# :rocket: API

This package consists of two primary classes, [TheTVDB](#thetvdb) and
[TheTVDBExtended](#thetvdbextended), each of which supports multiple endpoints. In this
documentation, we will divide the information into two sections, one for each class, and provide
details on their respective methods.

> **Warning**  
> All required parameters must be provided, otherwise an error will be thrown.

## Shared Methods

### getTime

> This method retrieves the custom request timeout value in milliseconds.

| type     | Description                                     |
| -------- | ----------------------------------------------- |
| `number` | The custom request timeout value currently set. |

### setTime

> This method allows setting a custom request timeout value in milliseconds.

| name    | type     | Required | Description                                    |
| ------- | -------- | :------: | ---------------------------------------------- |
| timeout | `number` |   Yes    | The new request timeout value in milliseconds. |

## TheTVDB

The main class for @untidy/thetvdb

### Constructor

| name    | type     | Required | Description                                       |
| ------- | -------- | :------: | ------------------------------------------------- |
| token   | `string` |   Yes    | Your TVDB API token.                              |
| timeout | `number` | optional | Request timeout in milliseconds. `Default: 5000`. |

### getArtwork

> Returns a single artwork base or extended record

| name     | type      | Required | Description                                        |
| -------- | --------- | :------: | -------------------------------------------------- |
| options  | `object`  |   Yes    | An object containing the parameters for the query. |
| id       | `string`  |   Yes    | The `id` of the artwork.                           |
| extended | `boolean` | Optional | Returns the extended record.                       |

### getFilteredMovie

> Returns a search movies based on filter parameters

| name          | type     | Required | Description                                        |
| ------------- | -------- | :------: | -------------------------------------------------- |
| options       | `object` |   Yes    | An object containing the parameters for the query. |
| country       | `string` |   Yes    | Country of origin.                                 |
| lang          | `string` |   Yes    | Original language.                                 |
| company       | `string` | Optional | Production company id.                             |
| contentRating | `string` | Optional | Content rating id.                                 |
| genre         | `string` | Optional | Genre id.                                          |
| sort          | `string` | Optional | Sort by results.                                   |
| status        | `string` | Optional | Status of the record.                              |
| year          | `string` | Optional | Release year.                                      |

### getCharacter

> Returns a character base record

| name | type     | Required | Description                |
| ---- | -------- | :------: | -------------------------- |
| id   | `string` |   Yes    | The `id` of the Character. |

### getEpisode

> Returns an episode base or extended record

| name     | type      | Required | Description                                                        |
| -------- | --------- | :------: | ------------------------------------------------------------------ |
| options  | `object`  |   Yes    | An object containing the parameters for the query.                 |
| id       | `string`  |   Yes    | The episode `id`.                                                  |
| extended | `boolean` | Optional | Returns the extended record.                                       |
| meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |

### getMovie

> Returns a movie base or extended record

| name     | type      | Required | Description                                                        |
| -------- | --------- | :------: | ------------------------------------------------------------------ |
| options  | `object`  |   Yes    | An object containing the parameters for the query.                 |
| id       | `string`  |   Yes    | The movie `id`.                                                    |
| extended | `boolean` | Optional | Returns the extended record.                                       |
| meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |
| short    | `boolean` | Optional | Returns the short version of the record (Requires extended).       |

### getPeople

> Returns a people base or extended record

| name     | type      | Required | Description                                                        |
| -------- | --------- | :------: | ------------------------------------------------------------------ |
| options  | `object`  |   Yes    | An object containing the parameters for the query.                 |
| id       | `string`  |   Yes    | The people `id`.                                                   |
| extended | `boolean` | Optional | Returns the extended record.                                       |
| meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |

### getSearch

> Returns a query search record(s).

| name        | type     | Required | Description                                        |
| ----------- | -------- | :------: | -------------------------------------------------- |
| options     | `object` |   Yes    | An object containing the parameters for the query. |
| query       | `string` |   Yes    | The primary search.                                |
| type        | `string` | Optional | Restrict results to a specific entity type.        |
| year        | `string` | Optional | Restrict results to a specific year.               |
| company     | `string` | Optional | Restrict results to a specific company.            |
| country     | `string` | Optional | Restrict results to a specific country of origin.  |
| director    | `string` | Optional | Restrict results to a specific director.           |
| language    | `string` | Optional | Restrict results to a specific primary language.   |
| primaryType | `string` | Optional | Restrict results to a specific type of company.    |
| network     | `string` | Optional | Restrict results to a specific network.            |
| remote_id   | `string` | Optional | Search for a specific remote id.                   |
| offset      | `string` | Optional | Offset results.                                    |
| limit       | `string` | Optional | Limit results.                                     |

### getSeason

> Returns a season base or extended record

| name     | type      | Required | Description                                                        |
| -------- | --------- | :------: | ------------------------------------------------------------------ |
| options  | `object`  |   Yes    | An object containing the parameters for the query.                 |
| id       | `string`  |   Yes    | The season `id`.                                                   |
| extended | `boolean` | Optional | Returns the extended record.                                       |
| meta     | `boolean` | Optional | Returns the extended record with translations (Requires extended). |

---

## TheTVDBExtended

The extended class for @untidy/thetvdb

### Constructor

| name    | type     | Required | Description                                       |
| ------- | -------- | :------: | ------------------------------------------------- |
| token   | `string` |   Yes    | Your TVDB API token.                              |
| timeout | `number` | optional | Request timeout in milliseconds. `Default: 5000`. |

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
| action  | `string` | Optional | The type of action to return.                                 |
| page    | `string` | Optional | Selects the page of the current query. Defaults to `0`.       |
