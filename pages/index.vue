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
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/img/profile-illustration.webp?w=192&h=192&f=webp',
      fetchpriority: 'high',
    },
    {
      rel: 'preload',
      as: 'image',
      href: '/img/profile-real.webp?w=192&h=192&f=webp',
      fetchpriority: 'low',
    },
  ],
})
</script>

<template>
  <div>
    <div class="max-w-[680px]">
      <p class="text-grey-200 lcp-text sm:text-lg leading-relaxed">
        I'm a web developer specializing in Vue, with a passion for clean, maintainable code.
        Persistent and easygoing, I enjoy creating a positive atmosphere while tackling
        challenges. Outside of tech, I've spent nearly a decade performing at various events as a
        musician.
      </p>
    </div>
    <HomepageContact class="mt-8 sm:mt-12" />
  </div>
</template>
