import { config } from 'dotenv';
import { TheTVDB } from './packages/api/src/index.js';

config(); // Load .env file

const client = new TheTVDB(process.env.TVDB_API_TOKEN);
const movie = await client.getCompanies('94');
console.log(movie);

/*
const clientExtended = new TheTVDBExtended(process.env.TVDB_API_TOKEN);
const langs = await clientExtended.getLanguages();
console.log(langs);
*/
