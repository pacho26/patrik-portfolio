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
    <div class="flex flex-col justify-between gap-8 sm:flex-row">
      <div class="flex flex-col items-center">
        <HomepageProfileImage />
        <MyHeading as="h1" :level="3" class="mt-4 font-bold">Patrik Slovic</MyHeading>
        <MyHeading as="h2" :level="5" class="text-grey-100 font-medium"
          >Frontend Developer & Musician</MyHeading
        >

        <p class="mt-4 max-w-[680px] text-center text-grey-200 lcp-text sm:text-lg">
          I'm a web developer specializing in Vue, with a passion for clean, maintainable code.
          Persistent and easygoing, I enjoy creating a positive atmosphere while tackling
          challenges. Outside of tech, I've spent nearly a decade performing at events as a band
          musician.
        </p>
      </div>
      <div class="flex flex-col gap-6">
        <HomepageBasicInfo class="bg-dark p-4 rounded" />
        <HomepageLanguages class="bg-dark p-4 rounded" />
      </div>
    </div>
    <HomepageContact class="mt-8 sm:mt-12" />
  </div>
</template>
