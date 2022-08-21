/// <reference types="astro/client" />

// Use this file to type your environment variables!
// See https://docs.astro.build/en/guides/environment-variables/#intellisense-for-typescript for more information
interface ImportMetaEnv {
  readonly DATABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
