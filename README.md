# @untidy/thetvdb

## :information_source: About

> **Note**
> Unofficial TheTVDB API.

`@untidy/thetvdb` is a lightweight and fully-typed client for accessing the TheTVDB API V4 for Node.js. It provides a simple and intuitive interface for querying multiple API endpoints.

## :sparkles: Features

- Access multiple endpoints of the TheTVDB API [(check supported endpoints)](./docs/endpoints.md).
- Built with TypeScript for full typing support.
- Uses the native `fetch` module from Node.js for making HTTP requests.

## :beginner: Usage

`@untidy/thetvdb` is easy to use, simply create an instance of the class with your API token, and call any of the available methods to retrieve data from the TheTVDB API.

Example usage:

```javascript
import { TheTVDB } from '@untidy/thetvdb';

const token = 'your secret jwt token';
const client = new TheTVDB(token);
const { status, result } = await client.getCharacter('64140522');

console.log(status, result);
console.log(result);
```
