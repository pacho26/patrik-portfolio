<script lang="ts" setup>
import type { ProjectModel } from '~/assets/ts'

const project = ref<ProjectModel>()

const route = useRoute()
const { getProjectBySlug } = useProject()

const projectIdParam = route.params.slug as string

if (projectIdParam) {
  project.value = getProjectBySlug(projectIdParam)
}

useHead({
  title: `${project.value?.name} | Patrik Slovic`,
  meta: [
    {
      name: 'description',
      content: `Details about ${project.value?.name} - a web development project by Patrik Slovic.`,
    },
  ],
})
</script>

<template>
  <ProjectDetails v-if="project" :project="project" />
</template>
