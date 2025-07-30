<script lang="ts" setup>
useHead({
  title: 'About | Patrik Slovic',
  meta: [
    {
      name: 'description',
      // TODO: Provide meta description content
      content: 'ADD CONTENT HERE',
    },
  ],
})
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display font-bold"
      >Here’s A Bit More About <span class="text-yellow-600">Me</span></MyHeading
    >
    <div class="mt-8 sm:mt-16 w-full">
      <AboutEducation class="glass-effect p-4 rounded-lg" />
      <AboutLanguages class="glass-effect p-4 rounded-lg" />
    </div>
  </div>
</template>
