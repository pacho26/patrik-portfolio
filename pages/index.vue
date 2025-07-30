<script lang="ts" setup>
import { projects, experiences } from '~/assets/ts'

useHead({
  title: 'Patrik Slovic | Frontend Developer',
  meta: [
    {
      name: 'description',
      content:
        'Patrik Slovic - Frontend Developer specializing in Vue.js. Clean, maintainable code with a passion for web development and music performance.',
    },
  ],
})
</script>

<template>
  <div>
    <ProfileCard class="block mb-10 lg:hidden" />
    <MyHeading :level="1" class="font-display font-bold"
      >Shaping the Web with <span class="text-yellow-600">Passion</span></MyHeading
    >
    <p class="mt-8 lg:mt-16 text-xl text-grey-200">
      I'm a web developer dedicated to crafting modern, interactive web applications, with a strong
      emphasis on clean, maintainable code.
    </p>

    <section
      class="mt-12 text-center space-y-6 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-8 rounded-lg"
    >
      <MyHeading :level="2" as="h2" class="font-bold">Ready to Work Together?</MyHeading>
      <p class="text-grey-200 max-w-xl mx-auto">
        I'm always interested in new opportunities and exciting projects. Let's discuss how we can
        bring your ideas to life.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <MyButton to="/contact" size="lg">Start a Conversation</MyButton>
        <MyButton to="/projects" variant="secondary" size="lg">View My Projects</MyButton>
      </div>
    </section>

    <!-- <MyButton to="/projects" variant="secondary">Learn More About Me</MyButton> -->
  </div>
</template>
