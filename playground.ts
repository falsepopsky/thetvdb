import { config } from 'dotenv';
import { TheTVDB } from './packages/api/src/index.js';

// Load .env file
config();

const client = new TheTVDB(process.env.TVDB_API_TOKEN);
const { data } = await client.serieEpisodes({ id: '75978', seasonType: 'default' });
console.log(data);
