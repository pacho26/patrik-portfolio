<script lang="ts" setup>
import { projects } from '~/assets/ts'

useHead({
  title: 'Projects | Patrik Slovic',
  meta: [
    {
      name: 'description',
      content:
        'Explore my portfolio of web development projects, featuring clean code and modern web applications.',
    },
  ],
})
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display !font-bold"
      >Check out my <span class="text-yellow-500">Projects</span></MyHeading
    >
    <div v-if="projects.length" class="mt-8 flex flex-col gap-8 sm:mt-16">
      <ProjectCard
        v-for="(project, index) in projects"
        :index="index"
        :key="project.slug"
        :project
      />
    </div>
  </div>
</template>
