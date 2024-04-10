// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  $development: {
    hub: {
      remote: true,
    },
  },
  hub: {
    blob: true,
  },

  experimental: {
    viewTransition: true,
  },

  modules: [
    '@nuxthub/core',
    '@nuxt/fonts',
    '@nuxt/ui',
    '@vueuse/nuxt',
    'nuxt-auth-utils',
  ],

  ui: {
    icons: ['simple-icons'],
  },

  devtools: { enabled: true },
})
