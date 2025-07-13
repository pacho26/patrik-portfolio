<script lang="ts" setup>
import type { ProjectModel } from '~/assets/ts'

defineProps<{
  project: ProjectModel
}>()
</script>

<template>
  <div>
    <div class="flex gap-4">
      <MyHeading :level="1" class="font-display font-medium">{{ project.name }}</MyHeading>
      <p class="text-sm font-medium text-grey-400">{{ project.year }}</p>
    </div>

    <p class="mt-8">{{ project.longDescription }}</p>
    <TechList :items="project.technologies" class="mt-4 lg:mt-6" />

    <div class="mt-8 sm:mt-12">
      <MyHeading :level="4" as="h2" class="font-display">Links</MyHeading>
      <div class="mt-4 flex flex-col gap-2">
        <div class="flex items-center gap-3" v-for="link in project.links" :key="link.url">
          <Icon :name="`uil:${link.icon}`" size="20px" />
          <MyLink :to="link.url" new-tab>
            <p>{{ link.label }}</p>
          </MyLink>
        </div>
      </div>
    </div>

    <div class="mt-8 sm:mt-12">
      <MyHeading :level="4" as="h2" class="font-display">Gallery</MyHeading>
      <div class="flex flex-col gap-4 mt-4">
        <div
          v-for="image in project.images"
          :key="image.src"
          class="relative rounded overflow-hidden"
        >
          <NuxtImg :src="image.src" :alt="image.title" class="w-full" />
          <p class="absolute bottom-0 p-2 px-4 w-full text-sm bg-cyan-900/50 hidden sm:block">
            {{ image.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
