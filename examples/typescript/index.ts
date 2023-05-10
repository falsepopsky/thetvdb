import { TheTVDBExtended } from '@untidy/thetvdb';

const token = 'my secret token';
const client = new TheTVDBExtended(token);
const { data } = await client.getCountries();
console.log(data);
