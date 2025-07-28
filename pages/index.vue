<script lang="ts" setup>
useHead({
  title: 'Patrik Slovic | Frontend Developer',
  meta: [
    {
      name: 'description',
      content:
        'Patrik Slovic - Frontend developer specializing in Vue.js. Clean, maintainable code with a passion for web development and music performance.',
    },
  ],
})
</script>

<template>
  <div>
    <ProfileCard class="block lg:hidden" />
    <MyHeading :level="1" class="mt-10 font-display font-bold"
      >Shaping the Web with <span class="text-yellow-600">Passion</span></MyHeading
    >
  </div>
</template>
