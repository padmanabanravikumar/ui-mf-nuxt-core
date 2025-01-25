import AppTheme from './utils/app-theme';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: AppTheme,
        options: {
          darkModeSelector: '.dark-mode'
        }
      }
    }
  },
  routeRules: {
    '/components': {
      ssr: false
    }
  },
  alias: {
    yup: 'yup'
  },
  ssr: false,
})
