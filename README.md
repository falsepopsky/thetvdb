# @untidy/thetvdb

## About

> **Note**
> Unofficial TheTVDB API.

`@untidy/thetvdb` is a lightweight and fully-typed client for accessing the TheTVDB API V4 for Node.js. It provides a simple and intuitive interface for querying multiple API endpoints.

## Features

- Access multiple endpoints of the TheTVDB API [(check supported endpoints)](./docs/endpoints.md).
- Built with TypeScript for full typing support.

## Usage

`@untidy/thetvdb` is easy to use, simply create an instance of the class with your API token, and call any of the available methods to retrieve data from the TVDB API.

Example usage:

```javascript
import { TheTVDB } from '@untidy/thetvdb';

const token = 'secret jwt token';
const client = new TheTVDB(token);
const { resStatus, result } = await client.getCountries();

console.log(resStatus);
console.log(result);
```
