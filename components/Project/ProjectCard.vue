<script lang="ts" setup>
import type { ProjectModel } from '~/assets/ts'

const props = defineProps<{
  project: ProjectModel
}>()

const imgAlt = computed(() => `${props.project.name} preview`)
</script>

<template>
  <NuxtLink
    :to="{ name: 'projects-slug', params: { slug: project.slug } }"
    class="block relative overflow-hidden border-1 border-grey-800 rounded cursor-pointer transition-all md:border-none md:grayscale-[0.7] hover:grayscale-0 focus:grayscale-0"
  >
    <div class="flex flex-col gap-4 relative bg-dark md:bg-transparent md:flex-row lg:gap-8">
      <NuxtImg
        :src="project.previewImg"
        :alt="imgAlt"
        sizes="100vw sm:50vw lg:500px"
        class="object-cover max-w-100vw h-[200px] md:h-[300px] lg:min-w-[500px]"
      />
      <div class="relative mx-4 mb-4 lg:w-full lg:m-0">
        <MyHeading :level="4" as="h2" class="font-medium max-w-[75%] md:max-w-[85%]">{{
          project.name
        }}</MyHeading>
        <p class="mt-2 text-grey-300 text-sm md:mt-4 md:text-base">
          {{ project.shortDescription }}
        </p>
        <TechList :items="project.technologies" class="mt-4 lg:mt-6" />
        <p class="absolute right-0 top-0 text-grey-400 text-sm md:hidden">{{ project.year }}</p>
      </div>
      <p class="absolute right-0 top-0 text-grey-400 font-medium hidden md:block">
        {{ project.year }}
      </p>
    </div>
  </NuxtLink>
</template>
