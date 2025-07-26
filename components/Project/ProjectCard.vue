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
    class="flex flex-col sm:flex-row overflow-hidden rounded cursor-pointer group sm:min-h-[220px] md:min-h-[266.66px] glass-effect"
  >
    <NuxtImg
      :src="project.previewImg"
      :alt="imgAlt"
      sizes="90vw sm:330px md:400px"
      preset="project"
      fit="cover"
      :fetchpriority="index < 2 ? 'high' : 'auto'"
      class="aspect-3/2 object-cover w-full h-auto transition-all duration-300 sm:w-[330px] md:w-[400px] lg:grayscale-100 lg:group-hover:grayscale-0 lg:group-focus:grayscale-0"
    />

    <div class="p-4 md:p-8 sm:min-h-[220px] md:min-h-[266.66px]">
      <div class="flex gap-4 justify-between items-baseline">
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
