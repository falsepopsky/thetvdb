# Endpoints

List of supported endpoints from [TheTVDB API V4](https://thetvdb.github.io/v4-api/)

## TheTVDB

| Endpoint                  |     Supported      | Method                                            |
| :------------------------ | :----------------: | :------------------------------------------------ |
| `/artwork/{id}`           | :heavy_check_mark: | `getArtwork({ id: "63237874" })`                  |
| `/artwork/{id}/extended`  | :heavy_check_mark: | `getArtwork({ id: "63237874", extended: true })`  |
| `/characters/{id}`        | :heavy_check_mark: | `getCharacter("64140522")`                        |
| `/episodes/{id}`          | :heavy_check_mark: | `getEpisodes({ id: "64140522" })`                 |
| `/episodes/{id}/extended` | :heavy_check_mark: | `getEpisodes({ id: "64140522", extended: true })` |

## TheTVDBExtended

| Endpoint           |     Supported      | Method                                |
| :----------------- | :----------------: | :------------------------------------ |
| `/content/ratings` | :heavy_check_mark: | `getContentRatings()`                 |
| `/countries`       | :heavy_check_mark: | `getCountries()`                      |
| `/genres`          | :heavy_check_mark: | `getGenres()`                         |
| `/languages`       | :heavy_check_mark: | `getLanguages()`                      |
| `/updates`         | :heavy_check_mark: | `getUpdates({ since: '1677780034' })` |
