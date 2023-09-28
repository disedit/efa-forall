// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      wpApiEndpoint: 'https://content.forall2024.eu/wp-json',
      manifestoPage: 22
    }
  },

  css: ['~/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/scss/_variables.scss" as *;
            @import 'node_modules/include-media/dist/_include-media.scss';
          `
        }
      }
    }
  }
})
