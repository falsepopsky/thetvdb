declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TVDB_API_TOKEN: string;
    }
  }
}

export {};
