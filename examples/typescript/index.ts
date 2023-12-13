import { TheTVDB } from '@untidy/thetvdb';

const client = new TheTVDB('Your secret token');
const { data } = await client.countries();
console.log(data);
