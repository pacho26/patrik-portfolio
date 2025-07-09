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
  title: `Patrik | Project: ${project.value?.name}`,
})
</script>

<template>
  <ProjectDetails v-if="project" :project="project" />
</template>
