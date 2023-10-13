// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

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
            @import "@/assets/scss/_variables.scss";
            @import "@/assets/scss/_mixins.scss";
            @import 'node_modules/include-media/dist/_include-media.scss';
          `
        }
      }
    }
  },

  modules: ['@nuxtjs/google-fonts'],

  googleFonts: {
    families: {
      'DM+Sans': [400, 900]
    }
  }
})
