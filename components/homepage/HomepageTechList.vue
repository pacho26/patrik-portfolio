<script lang="ts" setup>
const techList = [
  {
    name: 'Vue',
    logo: '/img/tech/vue.svg',
  },
  {
    name: 'Nuxt',
    logo: '/img/tech/nuxt.svg',
  },
  {
    name: 'Pinia',
    logo: '/img/tech/pinia.svg',
  },
  {
    name: 'TypeScript',
    logo: '/img/tech/typescript.svg',
  },
  {
    name: 'Tailwind',
    logo: '/img/tech/tailwind.svg',
  },
  {
    name: 'Storybook',
    logo: '/img/tech/storybook.svg',
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
      <div class="flex flex-col items-center justify-center text-center aspect-square">
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
      </div>
    </div>
  </div>
</template>
