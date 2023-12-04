# countries

Returns a list of country records.

| Method                          | Endpoint        | Official documentation                                                          |
| ------------------------------- | --------------- | ------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/countries` | [getAllCountries](https://thetvdb.github.io/v4-api/#/Countries/getAllCountries) |

## Parameters

This method does not require any parameters.

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.countries(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 'abw',
      name: 'Aruba',
      shortCode: '',
    },
    {
      id: 'afg',
      name: 'Afghanistan',
      shortCode: '',
    },
    // ...
  ],
};
```

:::
