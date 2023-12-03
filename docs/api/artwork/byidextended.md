# artworkByIdExtended

Return a single extended artwork record.

| Method                          | Endpoint                   | Official documentation                                                              |
| ------------------------------- | -------------------------- | ----------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/artwork/:id/extended` | [getArtworkExtended](https://thetvdb.github.io/v4-api/#/Artwork/getArtworkExtended) |

## Parameters

| params | type     | Required | Description      |
| ------ | -------- | :------: | ---------------- |
| id     | `string` |   Yes    | The artwork `id` |

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.artworkByIdExtended('63237874'); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: {
    id: 63237874,
    image: 'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460.jpg',
    thumbnail: 'https://artworks.thetvdb.com/banners/v4/movie/145830/posters/63515dcbcc460_t.jpg',
    language: 'eng',
    type: 14,
    score: 0,
    width: 680,
    height: 1000,
    includesText: false,
    thumbnailWidth: 340,
    thumbnailHeight: 500,
    // ...
  },
};
```

:::
