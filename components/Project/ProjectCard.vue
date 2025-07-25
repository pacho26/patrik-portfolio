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
    class="flex flex-col sm:flex-row overflow-hidden rounded cursor-pointer group bg-dark border-1 border-grey-800 sm:border-none sm:bg-transparent"
  >
    <NuxtImg
      :src="project.previewImg"
      :alt="imgAlt"
      sizes="90vw sm:350px md:400px"
      preset="project"
      :fetchpriority="index === 0 ? 'high' : 'auto'"
      class="object-cover aspect-3/2 h-auto transition-all lg:w-[400px] lg:grayscale-100 lg:group-hover:grayscale-0"
    />
    <div class="p-4 md:p-8">
      <div class="flex gap-4 justify-between">
        <MyHeading :level="4" as="h2" class="font-medium max-w-[75%] md:max-w-[85%]">{{
          project.name
        }}</MyHeading>
        <p class="text-grey-400 text-sm">{{ project.year }}</p>
      </div>
      <p class="mt-1 text-grey-200 text-xs md:text-sm md:mt-2 lg:text-base">
        {{ project.shortDescription }}
      </p>
      <TechList :items="project.technologies" class="mt-3 md:mt-4" />
    </div>
  </NuxtLink>
</template>
