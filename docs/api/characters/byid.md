# characterById

Return a single character record.

| Method                          | Endpoint             | Official documentation                                                             |
| ------------------------------- | -------------------- | ---------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/characters/:id` | [getCharacterBase](https://thetvdb.github.io/v4-api/#/Characters/getCharacterBase) |

## Parameters

| params | type     | Required | Description        |
| ------ | -------- | :------: | ------------------ |
| id     | `string` |   Yes    | The character `id` |

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.characterById('64140522'); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: {
    id: 64140522,
    name: 'Spike Spiegel',
    peopleId: 7916957,
    seriesId: 76885,
    series: {
      name: 'カウボーイビバップ',
      image: 'https://artworks.thetvdb.com/https://artworks.thetvdb.com/banners/posters/76885-3.jpg',
      year: '1998',
    },
    // ...
  },
};
```

:::
