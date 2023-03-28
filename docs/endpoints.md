# Endpoints

List of supported endpoints from [TheTVDB API V4](https://thetvdb.github.io/v4-api/)

| Endpoint                                 |     Supported      | Method                         |
| :--------------------------------------- | :----------------: | :----------------------------- |
| `/artwork/{id}`                          | :heavy_check_mark: | `getArtwork("63237874")`       |
| `/artwork/{id}/extended`                 | :heavy_check_mark: | `getArtwork("63237874", true)` |
| `/characters/{id}`                       | :heavy_check_mark: | `getCharacter("64140522")`     |
| `/content/ratings`                       | :heavy_check_mark: | `getContentRatings()`          |
| `/countries`                             | :heavy_check_mark: | `getCountries()`               |
| `/episodes/{id}`                         | :heavy_check_mark: | -                              |
| `/episodes/{id}/extended`                | :heavy_check_mark: | -                              |
| `/episodes/{id}/translations/{language}` | :heavy_check_mark: | -                              |
