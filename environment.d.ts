declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: "development" | "production" | "test";
      readonly PROJECTS_URL: string;
      readonly TECHNOLOGIES_URL: string;
    }
  }
}

export {};
