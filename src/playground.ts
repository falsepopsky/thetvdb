import { config } from 'dotenv';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TheTVDB, TheTVDBExtended } from './index.js';

const ROOT_DIR = resolve(fileURLToPath(import.meta.url), '../..');
const ENVFILE = join(ROOT_DIR, '.env');

config({ path: ENVFILE });

const TOKEN = process.env.TVDB_API_TOKEN;
const client = new TheTVDB(TOKEN);
const clientExtended = new TheTVDBExtended(TOKEN);

const langs = await clientExtended.getLanguages();
console.log(langs);

const movie = await client.getMovie({ id: '12586' });
console.log(movie);
