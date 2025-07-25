<script lang="ts" setup>
import { projects } from '~/assets/ts'

useHead({
  title: 'Projects | Patrik Slovic',
  meta: [
    {
      name: 'description',
      content:
        'Explore my portfolio of web development projects built with Vue.js, showcasing clean code and modern web applications.',
    },
  ],
})
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display !font-bold">Projects</MyHeading>
    <div
      v-if="projects.length"
      class="mt-8 flex flex-col gap-8 sm:mt-16"
    >
      <ProjectCard
        v-for="(project, index) in projects"
        :index="index"
        :key="project.slug"
        :project
      />
    </div>
  </div>
</template>
