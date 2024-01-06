import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'react.auth0',
  appName: 'react-auth0',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
