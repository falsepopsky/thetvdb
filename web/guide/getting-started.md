# Getting Started

[[toc]]

## Prerequisites

To successfully utilize this package, users must meet the following prerequisites:

- **Node.js:** The user must have [Node.js](https://nodejs.org) installed on their system with a
  minimum version of 18.

- **TheTVDB Token:** Use the token provided by the `login` endpoint from TheTVDB.

::: tip INFO

To obtain your token, you first need an API Key from TheTVDB. Then, make a request to the `login`
endpoint to create an authentication token. The token is valid for one month.

:::

## Installation

Use your preferred package manager

::: code-group

```bash [npm]
npm install @untidy/thetvdb
```

```bash [yarn]
yarn add @untidy/thetvdb
```

```bash [pnpm]
pnpm add @untidy/thetvdb
```

:::

## Making your first API request

To get started, simply create an instance of the class with your API token:

```js
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('your token');
```

Then, call any of the available methods to retrieve data from TheTVDB API. In this case, we retrieve
specific character information:

```js
const data = await client.getCharacter('64140522');
```

::: details OUTPUT

```js

{
  status: 'success',
  data: {
    id: 64140522,
    name: 'Spike Spiegel',
    peopleId: 7916957,
    seriesId: 76885,
    series: {
      name: 'カウボーイビバップ',
      image: 'https://artworks.thetvdb.com/https://artworks.thetvdb.com/banners/posters/76885-3.jpg',
      year: '1998'
    },
    movie: null,
    movieId: null,
    episodeId: null,
    type: 3,
    image: 'https://artworks.thetvdb.com/banners/person/7916957/62110430.jpg',
    sort: 1,
    isFeatured: true,
    url: 'https://thetvdb.com/people/7916957-kouichi-yamadera',
    nameTranslations: [],
    overviewTranslations: [],
    aliases: [],
    peopleType: 'Actor',
    personName: 'Kouichi Yamadera',
    tagOptions: [],
    personImgURL: 'https://artworks.thetvdb.com/banners/v4/actor/7916957/photo/61ff8d2552665.jpg'
  }
}
```

:::

That's it! You have now made your first request. For more documentation, please check the
[API](/api) section.
