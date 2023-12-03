# companyById

Returns a single company record.

| Method                          | Endpoint            | Official documentation                                                |
| ------------------------------- | ------------------- | --------------------------------------------------------------------- |
| <Badge type="tip" text="GET" /> | `/v4/companies/:id` | [getCompany](https://thetvdb.github.io/v4-api/#/Companies/getCompany) |

## Parameters

| params | type     | Required | Description      |
| ------ | -------- | :------: | ---------------- |
| id     | `string` |   Yes    | The company `id` |

## Example

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
const data = await client.companyById('4'); // [!code focus]
```

::: details Successful response output

```js
{
  status: 'success',
  data: {
    id: 4,
    name: 'Aaj TV',
    slug: 'aaj-tv',
    nameTranslations: ['eng'],
    overviewTranslations: [],
    aliases: [],
    country: 'pak',
    primaryCompanyType: 1,
    activeDate: null,
    inactiveDate: null,
    companyType: {
      companyTypeId: 1,
      companyTypeName: 'Network',
    },
    parentCompany: {
      id: null,
      name: null,
      relation: {
        id: null,
        typeName: null,
      },
    },
    tagOptions: null,
  },
};
```

:::
