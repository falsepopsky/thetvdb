# artworkStatuses

Returns a list of artwork status records.

| Method                          | Endpoint               | Official documentation                                                                               |
| ------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/artwork/statuses` | [getAllArtworkStatuses](https://thetvdb.github.io/v4-api/#/Artwork%20Statuses/getAllArtworkStatuses) |

## Parameters

This method does not require any parameters.

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.artworkStatuses(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 1,
      name: 'Low Quality',
    },
    {
      id: 2,
      name: 'Improper Action Shot',
    },
    // ...
  ],
};
```

:::
