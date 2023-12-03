# awardByIdExtended

Return a single extended award record.

| Method                          | Endpoint                  | Official documentation                                                         |
| ------------------------------- | ------------------------- | ------------------------------------------------------------------------------ |
| <Badge type="tip" text="GET" /> | `/v4/awards/:id/extended` | [getAwardExtended](https://thetvdb.github.io/v4-api/#/Awards/getAwardExtended) |

## Parameters

| params | type     | Required | Description    |
| ------ | -------- | :------: | -------------- |
| id     | `string` |   Yes    | The award `id` |

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.awardByIdExtended('1'); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: {
    id: 1,
    name: 'Academy Awards',
    categories: [
      {
        id: 1,
        name: 'Best Picture',
        allowCoNominees: false,
        forSeries: false,
        forMovies: true,
        award: {
          id: 1,
          name: 'Academy Awards',
        },
      },
      {
        id: 2,
        name: 'Actor in a Leading Role',
        allowCoNominees: false,
        forSeries: false,
        forMovies: true,
        award: {
          id: 1,
          name: 'Academy Awards',
        },
      },
      // ...
    ],
    score: 0,
  },
};
```

:::
