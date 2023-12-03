# companiesTypes

Returns a list of companies type records.

| Method                          | Endpoint              | Official documentation                                                          |
| ------------------------------- | --------------------- | ------------------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/companies/types` | [getCompanyTypes](https://thetvdb.github.io/v4-api/#/Companies/getCompanyTypes) |

## Parameters

This method does not require any parameters.

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.companiesTypes(); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: [
    {
      companyTypeId: 1,
      companyTypeName: 'Network',
    },
    {
      companyTypeId: 2,
      companyTypeName: 'Studio',
    },
    // ...
  ],
};
```

:::
