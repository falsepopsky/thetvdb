import type Undici from 'undici';

declare global {
  // export const { fetch, FormData, Headers, Request, Response }: typeof import('undici');
  export const fetch: typeof Undici.fetch;
}

export {};
