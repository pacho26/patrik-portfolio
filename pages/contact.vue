<script lang="ts" setup>
useHead({
  title: 'Contact | Patrik Slovic',
  meta: [
    {
      name: 'description',
      content:
        'Get in touch with Patrik Slovic for collaborations, project inquiries, or just to say hello. Let’s build something amazing together.',
    },
  ],
})
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display font-bold"
      >Let’s Create Something <span class="text-yellow-500">Amazing</span></MyHeading
    >

    <ContactForm class="mt-8 md:mt-16" />
  </div>
</template>
