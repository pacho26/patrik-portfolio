import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon', '@nuxt/fonts', '@vesp/nuxt-fontawesome'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: {
    // TODO: Remove unnecessary font weights
    families: [
      { name: 'Inter', provider: 'google', weights: ['400', '500', '700'] },
      { name: 'Funnel Display', provider: 'google', weights: ['400', '500', '700'] },
    ],
  },
  components: ['~/components', { path: '~/components/ui', pathPrefix: false }],
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/pa3k/',
    },
  },
  fontawesome: {
    icons: {
      solid: ['house'],
    },
  },
})
