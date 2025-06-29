<script lang="ts" setup>
import { projects } from '~/assets/ts'

useHead({
  title: 'Patrik | Projects',
})
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display !
    font-bold">Projects</MyHeading>
    <div v-if="projects.length" class="mt-8 flex flex-col gap-8 lg:gap-12 lg:mt-16">
      <ProjectCard v-for="project in projects" :key="project.slug" :project />
    </div>
  </div>
</template>
