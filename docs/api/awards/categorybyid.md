# awardCategoryById

Return a single award category record.

| Method                          | Endpoint                    | Official documentation                                                                     |
| ------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------ |
| <Badge type="tip" text="GET" /> | `/v4/awards/categories/:id` | [getAwardCategory](https://thetvdb.github.io/v4-api/#/Award%20Categories/getAwardCategory) |

## Parameters

| params | type     | Required | Description             |
| ------ | -------- | :------: | ----------------------- |
| id     | `string` |   Yes    | The award category `id` |

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.awardCategoryById('42'); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: {
    id: 42,
    name: 'Best Actor in a Television Series – Drama',
    allowCoNominees: false,
    forSeries: true,
    forMovies: false,
    award: {
      id: 2,
      name: 'Golden Globe Awards',
    },
  },
};
```

:::
