import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'description',
          content:
            'Patrik Slovic - Frontend developer specializing in Vue.js development with clean, maintainable code.',
        },
      ],
      link: [
        {
          rel: 'preload',
          href: '/css/stars.css',
          as: 'style',
          fetchpriority: 'low',
        },
      ],
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@vesp/nuxt-fontawesome', 'vue3-carousel-nuxt'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    format: ['webp', 'avif'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    presets: {
      profile: {
        modifiers: {
          format: 'webp',
          quality: 85,
          width: 192,
          height: 192,
        },
      },
      project: {
        modifiers: {
          format: 'webp',
          quality: 80,
        },
      },
    },
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: ['400', '500', '700'], display: 'swap' },
      {
        name: 'Funnel Display',
        provider: 'google',
        weights: ['400', '500', '700'],
        display: 'swap',
      },
    ],
  },
  components: ['~/components', { path: '~/components/ui', pathPrefix: false }],
})