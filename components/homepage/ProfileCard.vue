<script lang="ts" setup>
useHead({
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
  <div class="glass-effect p-8 flex flex-col items-center rounded-lg">
    <HomepageProfileImage />
    <MyHeading as="h2" :level="4" class="mt-4 font-bold">Patrik Slovic</MyHeading>
    <p class="text-grey-200 mt-1">Frontend Developer & Musician</p>
    <p class="text-grey-200 mt-1">Zagreb, Croatia</p>
    <div class="mt-4 flex gap-2">
      <MyIconLink to="https://www.linkedin.com/in/patrik-slovic/" icon="uil:linkedin"></MyIconLink>
      <MyIconLink to="https://github.com/pacho26" icon="uil:github"></MyIconLink>
      <MyIconLink to="mailto:patrikslovic@gmail.com" icon="uil:envelope"></MyIconLink>
    </div>
    <MyButton to="contact" class="mt-16">Let's talk</MyButton>
  </div>
</template>
