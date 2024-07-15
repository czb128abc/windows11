import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    configProvider: {},
    // dark: true,
    // theme: {
    //   "token": {
    //     "colorBgBase": "#12141b",
    //     "borderRadius": 4,
    //     "colorPrimary": "#4cc2ff",
    //     "colorInfo": "#4cc2ff",
    //     "colorTextBase": "#ffffff"
    //   }
    // }
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  history: {
    type: 'hash',
  },
  routes: [
    { path: '/', redirect: '/appPage' },
    { path: '/appPage', component: 'appPage' },
  ],
  icons: {},
  access: {},
  valtio: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'windows11',
  },
  npmClient: 'pnpm',
  // tailwindcss:{},
  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
});
