# awardById

Return a single award record.

| Method                          | Endpoint         | Official documentation                                         |
| ------------------------------- | ---------------- | -------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/awards/:id` | [getAward](https://thetvdb.github.io/v4-api/#/Awards/getAward) |

## Parameters

| params | type     | Required | Description    |
| ------ | -------- | :------: | -------------- |
| id     | `string` |   Yes    | The award `id` |

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.awardById('1'); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: {
    id: 1,
    name: 'Academy Awards',
  },
};
```

:::
