// Minimal ambient declarations to satisfy TypeScript in the server package
// These are intentionally small — for full typings rely on the published @types packages.

declare module "pg" {
  export class Pool {
    constructor(config?: any);
    query(text: string, params?: any[]): Promise<any>;
    connect(): Promise<any>;
    end(): Promise<void>;
  }
  export default Pool;
}

declare module "dotenv" {
  export function config(options?: any): { parsed?: Record<string, string> } | undefined;
  const dotenv: { config: typeof config };
  export default dotenv;
}

declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL?: string;
    [key: string]: string | undefined;
  }
  interface Process {
    env: ProcessEnv;
  }
}

declare const process: NodeJS.Process;
