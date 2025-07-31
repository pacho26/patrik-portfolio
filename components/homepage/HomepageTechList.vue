<script lang="ts" setup>
const techList = [
  {
    name: 'Vue',
    logo: '/img/tech/vue.svg',
    url: 'https://vuejs.org/',
  },
  {
    name: 'Nuxt',
    logo: '/img/tech/nuxt.svg',
    url: 'https://nuxt.com/',
  },
  {
    name: 'Pinia',
    logo: '/img/tech/pinia.svg',
    url: 'https://pinia.vuejs.org/',
  },
  {
    name: 'TypeScript',
    logo: '/img/tech/typescript.svg',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'Tailwind',
    logo: '/img/tech/tailwind.svg',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'Storybook',
    logo: '/img/tech/storybook.svg',
    url: 'https://storybook.js.org/',
  },
]
</script>

<template>
  <div class="grid grid-cols-3 md:grid-cols-6 gap-6">
    <div
      v-for="tech in techList"
      :key="tech.name"
      class="bg-gradient-to-br backdrop-blur-[1px] from-yellow-500/10 to-orange-500/10 rounded-lg border border-yellow-600/10 hover:border-yellow-600/40 transition-all duration-300 hover:scale-102"
    >
      <NuxtLink
        :href="tech.url"
        target="_blank"
        rel="noopener noreferrer"
        class="flex flex-col items-center justify-center text-center aspect-square"
      >
        <div class="w-10 h-10 flex items-center justify-center">
          <NuxtImg
            :src="tech.logo"
            :alt="`${tech.name} logo`"
            class="w-full h-full object-contain pointer-events-none select-none"
          />
        </div>
        <div>
          <p class="mt-3 text-sm font-medium text-yellow-600">
            {{ tech.name }}
          </p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
