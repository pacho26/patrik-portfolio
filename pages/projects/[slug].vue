<script lang="ts" setup>
import type { ProjectModel } from '~/assets/ts'
import { projects } from '~/assets/ts'
import { getSmartAdjacent } from '~/utils'

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

const adjacentProjects = computed(() => {
  const currentProjectIndex = projects.findIndex(p => p.slug === project.value?.slug)
  return getSmartAdjacent(projects, currentProjectIndex)
})
</script>

<template>
  <div>
    <ProjectDetails v-if="project" :project="project" />

    <div class="mt-20 sm:mt-25">
      <MyHeading :level="4" as="h4" class="font-display font-medium">More Projects</MyHeading>
      <div class="mt-6 flex flex-col gap-8">
        <ProjectCard
          v-for="(project, index) in adjacentProjects"
          :index="index"
          :key="project.slug"
          :project
        />
      </div>
    </div>
  </div>
</template>
