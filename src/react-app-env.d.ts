/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_AUTH: string;
      REACT_APP_API_HOME: string;
      REACT_APP_API_MENU: string;
      REACT_APP_CLIENT_ID: string;
      REACT_APP_CLIENT_SECRET: string;
      REACT_APP_GRANT_TYPE: string;
    }
  }
}

export {};
