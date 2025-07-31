<script lang="ts" setup>
const educationItems = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Zagreb University of Applied Sciences',
    year: '2019 - 2022',
    logo: '/img/education/tvz.webp',
  },
  {
    degree: 'Mathematics Gymnasium Diploma',
    institution: 'Tin Ujević High School, Kutina',
    year: '2015 - 2019',
    logo: '/img/education/tin-ujevic.webp',
  },
]
</script>

<template>
  <section class="flex flex-col gap-6">
    <div v-for="item in educationItems" :key="item.degree">
      <div class="flex justify-between gap-8">
        <div>
          <h3 class="font-bold text-sm">{{ item.degree }}</h3>
          <p class="font-medium text-sm text-gray-600 dark:text-gray-400">{{ item.institution }}</p>
        </div>
        <div class="flex justify-center w-10 h-10">
          <NuxtImg :src="item.logo" :alt="item.institution" width="40" height="40" />
        </div>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-500">{{ item.year }}</p>
    </div>
  </section>
</template>
