<script lang="ts" setup>
useHead({
  title: 'Experience | Patrik Slovic',
  meta: [
    {
      name: 'description',
      content:
        'View my professional experience in web development, including roles as a frontend developer working with Vue.js and modern web technologies.',
    },
  ],
})
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display font-bold"
      >Chapters of My <span class="text-yellow-600">Career</span></MyHeading
    >
    <ExperienceList class="mt-8 md:mt-16" />
  </div>
</template>
