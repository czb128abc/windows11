import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
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
