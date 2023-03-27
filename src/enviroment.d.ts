declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_TOKEN: string;
    }
  }
}

export {};
