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
    class="relative flex flex-col sm:flex-row overflow-hidden rounded-lg cursor-pointer group sm:min-h-[220px] md:min-h-[200px] glass-effect"
  >
    <NuxtImg
      :src="project.previewImg"
      :alt="imgAlt"
      sizes="90vw sm:300px"
      preset="project"
      fit="cover"
      :fetchpriority="index < 2 ? 'high' : 'auto'"
      class="aspect-3/2 object-cover w-full h-auto transition-all duration-300 sm:w-[300px] lg:grayscale-100 lg:group-hover:grayscale-0 lg:group-focus:grayscale-0"
    />
    <div
      class="absolute hidden lg:block sm:w-[300px] aspect-3/2 bg-yellow-600/5 group-hover:opacity-0 transition-all duration-300"
    ></div>

    <div class="p-4 md:p-8 sm:min-h-[220px] md:min-h-[200px]">
      <div class="flex gap-4 justify-between items-baseline">
        <MyHeading :level="5" as="h2" class="!text-2xl font-medium max-w-[75%] md:max-w-[85%]">{{
          project.name
        }}</MyHeading>
        <p class="text-grey-400 text-sm">{{ project.year }}</p>
      </div>
      <p class="mt-1 text-grey-200 text-xs md:text-sm md:mt-2">
        {{ project.shortDescription }}
      </p>
      <TechList :items="project.technologies" class="mt-3 md:mt-4" />
    </div>
  </NuxtLink>
</template>
