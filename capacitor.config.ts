import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myweb.app',
  appName: 'deplink-issue',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
