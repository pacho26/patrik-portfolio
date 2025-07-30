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
    <MyHeading :level="1" class="font-display font-bold">About</MyHeading>
    <div class="mt-8 sm:mt-16">
      <!--  I'm a web developer specializing in Vue, with a passion for clean, maintainable code.
          Persistent and easygoing, I enjoy creating a positive atmosphere while tackling
          challenges. Outside of tech, I've spent nearly a decade performing at various events as a
          musician. -->
      <AboutLanguages class="glass-effect p-4 rounded-lg" />
    </div>
  </div>
</template>
