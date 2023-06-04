// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path';

export default defineNuxtConfig({
  app: {
    baseURL: '/torre-challenge/',
  },
  alias: {
    '@': resolve(__dirname, '/'),
  },
  css: ['~/assets/main.scss'],
  typescript: {
    shim: false,
  },
  modules: ['@invictus.codes/nuxt-vuetify'],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
    },
    moduleOptions: {
      /* nuxt-vuetify module options */
      treeshaking: true,
      useIconCDN: true,
      /* vite-plugin-vuetify options */
      styles: true,
      autoImport: true,
    },
  },
});
