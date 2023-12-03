# artworkTypes

Returns a list of artwork types records.

| Method                          | Endpoint            | Official documentation                                                                      |
| ------------------------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/artwork/types` | [getAllArtworkTypes](https://thetvdb.github.io/v4-api/#/Artwork%20Types/getAllArtworkTypes) |

## Parameters

This method does not require any parameters.

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.artworkTypes(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Banner',
      recordType: 'series',
      slug: 'banners',
      imageFormat: 'JPG',
      width: 758,
      height: 140,
      thumbWidth: 758,
      thumbHeight: 140,
    },
    {
      id: 2,
      name: 'Poster',
      recordType: 'series',
      slug: 'posters',
      imageFormat: 'JPG',
      width: 680,
      height: 1000,
      thumbWidth: 340,
      thumbHeight: 500,
    },
    // ...
  ],
};
```

:::
