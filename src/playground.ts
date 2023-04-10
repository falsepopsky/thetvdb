import dotenv from 'dotenv';
import { TheTVDBExtended } from './index.js';

dotenv.config({ path: '../.env' });

const TOKEN = process.env.TVDB_API_TOKEN;
const clientExtended = new TheTVDBExtended(TOKEN);

const { result } = await clientExtended.getLanguages();

console.table(result);
