import dotenv from 'dotenv';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { TheTVDBExtended } from './index.js';

const ROOT_DIR = resolve(fileURLToPath(import.meta.url), '../..');
const ENVFILE = join(ROOT_DIR, '.env');

dotenv.config({ path: ENVFILE });

const TOKEN = process.env.TVDB_API_TOKEN;
const clientExtended = new TheTVDBExtended(TOKEN);

const { result } = await clientExtended.getLanguages();

console.log(result);
