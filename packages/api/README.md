# @untidy/thetvdb

![thetvdb logo](https://github.com/falsepopsky/thetvdb/blob/main/packages/web/src/assets/favicon.png)

## ℹ️ About

A lightweight and fully-typed client for accessing the TheTVDB API V4 for Node.js. This package
provides a simple and intuitive interface for querying multiple API endpoints.

> **Note**  
> This is an unofficial package and is not affiliated with or endorsed by TheTVDB. However, it uses
> the official TheTVDB API endpoints to retrieve information.

## ✨ Features

- Access multiple endpoints of the TheTVDB API
  [(check supported endpoints)](https://falsepopsky.github.io/thetvdb/guides/supported-endpoints/)
- Built with TypeScript for full typing support
- Uses the native `fetch` module from Node.js for making HTTP requests
- ESM only

## 📦 Install

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

## 🔰 Usage

`@untidy/thetvdb` is easy to use, simply create an instance of the TheTVDB class with your API
token, and call any of the available methods to retrieve data from the TheTVDB API.

Example usage:

```javascript
import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('access token');
const { data } = await client.characterById('64140522');

console.log(data);
```

## 📄 Docs

- [API](https://falsepopsky.github.io/thetvdb/api/)
- [Supported endpoints](https://falsepopsky.github.io/thetvdb/guides/supported-endpoints/)
- [Examples](https://falsepopsky.github.io/thetvdb/guides/examples/)

## 📜 License

`@untidy/thetvdb` is licensed under the
[Apache-2.0](https://github.com/falsepopsky/thetvdb/blob/main/packages/api/LICENSE) license - ©
2023, 2024 [falsepopsky](https://github.com/falsepopsky).
