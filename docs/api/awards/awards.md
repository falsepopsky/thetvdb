# awards

Return a list of awards records.

| Method                          | Endpoint     | Official documentation                                                 |
| ------------------------------- | ------------ | ---------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/awards` | [getAllAwards](https://thetvdb.github.io/v4-api/#/Awards/getAllAwards) |

## Parameters

This method does not require any parameters.

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.awards(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Academy Awards',
    },
    {
      id: 2,
      name: 'Golden Globe Awards',
    },
    // ...
  ],
};
```

:::
