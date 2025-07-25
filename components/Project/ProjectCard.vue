<script lang="ts" setup>
import type { ProjectModel } from '~/assets/ts'

const props = defineProps<{
  project: ProjectModel
  index: number
}>()

const imgAlt = computed(() => `${props.project.name} preview`)
</script>

<template>
  <NuxtLink
    :to="{ name: 'projects-slug', params: { slug: project.slug } }"
    class="block overflow-hidden border-1 border-grey-800 rounded cursor-pointer transition-all bg-dark"
  >
    <NuxtImg
      :src="project.previewImg"
      :alt="imgAlt"
      sizes="90vw md:40vw lg:305px"
      preset="project"
      :fetchpriority="index === 0 ? 'high' : 'auto'"
      class="object-cover aspect-3/2 w-full h-auto"
    />
    <div class="p-4">
      <div class="flex gap-4 justify-between">
        <MyHeading :level="5" as="h2" class="font-medium max-w-[75%] md:max-w-[85%]">{{
          project.name
        }}</MyHeading>
        <p class="text-grey-400 text-sm">{{ project.year }}</p>
      </div>
      <p class="mt-1 text-grey-200 text-xs sm:text-sm sm:mt-2">
        {{ project.shortDescription }}
      </p>
      <TechList :items="project.technologies" class="mt-3 sm:mt-4" />
    </div>
  </NuxtLink>
</template>
