import type Undici from 'undici';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TVDB_API_TOKEN: string;
    }
  }
  export const fetch: typeof Undici.fetch;
}

export {};
