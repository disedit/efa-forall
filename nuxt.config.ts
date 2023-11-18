// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'theme-color', content: '#E9D5CA' },
      ],

      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'mask-icon', color: '#652B80', href: '/safari-pinned-tab.svg' },
      ]
    }
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

  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-og-image',
    '@vueuse/nuxt'
  ],

  googleFonts: {
    families: {
      'DM+Sans': [400, 900]
    }
  },

  experimental: {
    defaults: {
      useAsyncData: {
        deep: false
      }
    }
  },

  ogImage: {
    fonts: [
      'DM+Sans:900'
    ],
  }
})
