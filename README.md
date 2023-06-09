# @untidy/thetvdb

## :information_source: About

A lightweight and fully-typed client for accessing the TheTVDB API V4 for Node.js. This package
provides a simple and intuitive interface for querying multiple API endpoints.

> **Note**  
> This is an unofficial package and is not affiliated with or endorsed by TheTVDB. However, it uses
> the official TheTVDB API endpoints to retrieve information.

## :sparkles: Features

- Access multiple endpoints of the TheTVDB API
  [(check supported endpoints)](https://github.com/falsepopsky/thetvdb/blob/main/docs/endpoints.md)
- Built with TypeScript for full typing support
- Uses the native `fetch` module from Node.js for making HTTP requests
- ESM only

## :package: Install

You can install `@untidy/thetvdb` package using your preferred package manager:

With npm:

```
npm install @untidy/thetvdb
```

With yarn:

```
yarn add @untidy/thetvdb
```

With pnpm:

```
pnpm add @untidy/thetvdb
```

## :beginner: Usage

`@untidy/thetvdb` is easy to use, simply create an instance of the class with your API token, and
call any of the available methods to retrieve data from the TheTVDB API.

Example usage:

```javascript
import { TheTVDB } from '@untidy/thetvdb';

const token = 'your secret jwt token';
const client = new TheTVDB(token);
const { data } = await client.getCharacter('64140522');

console.log(data);
```

## :page_facing_up: Docs

- [API](https://github.com/falsepopsky/thetvdb/blob/main/docs/api.md)
- [Supported endpoints](https://github.com/falsepopsky/thetvdb/blob/main/docs/endpoints.md)
- [Examples](https://github.com/falsepopsky/thetvdb/blob/main/docs/examples.md)

## :scroll: License

`@untidy/thetvdb` is licensed under the
[GPL-3.0-or-later](https://github.com/falsepopsky/thetvdb/blob/main/LICENSE) license - © 2023
[falsepopsky](https://github.com/falsepopsky).
