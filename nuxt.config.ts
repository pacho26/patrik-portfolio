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
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@vesp/nuxt-fontawesome'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: ['400', '500', '700'] },
      { name: 'Funnel Display', provider: 'google', weights: ['400', '500', '700'] },
    ],
  },
  components: ['~/components', { path: '~/components/ui', pathPrefix: false }],
  fontawesome: {
    icons: {
      solid: ['house'],
    },
  },
})
