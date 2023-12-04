# entities

Returns a list of entity types records.

| Method                          | Endpoint       | Official documentation                                                             |
| ------------------------------- | -------------- | ---------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/entities` | [getEntityTypes](https://thetvdb.github.io/v4-api/#/Entity%20Types/getEntityTypes) |

## Parameters

This method does not require any parameters.

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.entities(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 1,
      name: 'series',
      hasSpecials: false,
    },
    {
      id: 2,
      name: 'season',
      hasSpecials: false,
    },
    // ...
  ],
};
```

:::
