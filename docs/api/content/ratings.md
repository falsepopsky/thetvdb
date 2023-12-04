# contentRatings

Returns a list of content ratings records.

| Method                          | Endpoint              | Official documentation                                                                            |
| ------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/content/ratings` | [getAllContentRatings](https://thetvdb.github.io/v4-api/#/Content%20Ratings/getAllContentRatings) |

## Parameters

This method does not require any parameters.

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.contentRatings(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 1,
      name: 'ATP',
      country: 'arg',
      description: 'Suitable for all audiences',
      contentType: 'episode',
      order: 0,
      fullname: 'ATP',
    },
    // ...
  ],
};
```

:::
