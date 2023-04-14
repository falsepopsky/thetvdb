import { TheTVDBExtended } from '@untidy/thetvdb';

const token = 'my secret token';
const client = new TheTVDBExtended(token);
const { status } = await client.getCountries();
console.log(status);
