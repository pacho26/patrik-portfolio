<script lang="ts" setup>
import { projectCardItems } from '~/assets/ts'
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display">Projects</MyHeading>
    <div v-if="projectCardItems.length" class="mt-16 flex flex-col gap-8">
      <ProjectCard v-for="project in projectCardItems" :key="project.slug" :project />
    </div>
  </div>
</template>
