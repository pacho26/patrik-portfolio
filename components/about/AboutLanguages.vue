<script lang="ts" setup>
interface LanguageItem {
  flag: string
  name: string
  level: string
}

const languageItems: LanguageItem[] = [
  {
    flag: '/img/flags/croatia.webp',
    name: 'Croatian',
    level: 'Native',
  },
  {
    flag: '/img/flags/english-language.svg',
    name: 'English',
    level: 'Advanced',
  },
  {
    flag: '/img/flags/germany.svg',
    name: 'German',
    level: 'Basic',
  },
  {
    flag: '/img/flags/italy.svg',
    name: 'Italian',
    level: 'Basic',
  },
]

const sectionClass = 'flex items-center justify-between gap-12'
const flagClass = 'flex flex-col items-center min-w-12'
</script>

<template>
  <section class="flex flex-col gap-4">
    <div v-for="item in languageItems" :key="item.name" :class="sectionClass">
      <div :class="flagClass">
        <NuxtImg
          :src="item.flag"
          width="32"
          class="h-4 object-cover"
          :alt="`${item.name} flag`"
          sizes="32px"
          loading="lazy"
        />
        <p class="mt-1 text-xs leading-4">{{ item.name }}</p>
      </div>
      <p class="text-sm leading-4">{{ item.level }}</p>
    </div>
  </section>
</template>
