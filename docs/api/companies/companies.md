# companies

Returns a list of companies records.

| Method                          | Endpoint        | Official documentation                                                          |
| ------------------------------- | --------------- | ------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/companies` | [getAllCompanies](https://thetvdb.github.io/v4-api/#/Companies/getAllCompanies) |

## Parameters

| params | type     | Required | Description                         |
| ------ | -------- | :------: | ----------------------------------- |
| page   | `string` | Optional | Restrict results to a specific page |

## Examples

### Without parameters

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.companies(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 1,
      name: '3sat',
      slug: '3sat',
      nameTranslations: ['eng'],
      overviewTranslations: [],
      aliases: [],
      country: 'deu',
      primaryCompanyType: 1,
      // ...
    },
    // ...
  ],
  links: {
    prev: null,
    self: 'https://api4.thetvdb.com/v4/companies?page=0',
    next: 'https://api4.thetvdb.com/v4/companies?page=1',
    total_items: 47500,
    page_size: 500,
  },
};
```

:::

### Restricted results to page 94

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.companies('94'); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      id: 48653,
      name: 'Nutmeg Productions',
      slug: 'nutmeg-productions',
      nameTranslations: ['dan', 'eng'],
      overviewTranslations: [],
      aliases: [],
      country: 'dnk',
      primaryCompanyType: 3,
      // ...
    },
    // ...
  ],
  links: {
    prev: 'https://api4.thetvdb.com/v4/companies?page=93',
    self: 'https://api4.thetvdb.com/v4/companies?page=94',
    next: 'https://api4.thetvdb.com/v4/companies?page=95',
    total_items: 47500,
    page_size: 500,
  },
};
```

:::
