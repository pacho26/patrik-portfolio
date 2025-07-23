<script lang="ts" setup>
import { projects, type ProjectModel } from '~/assets/ts'
import ProjectCarouselHorizontal from './ProjectCarouselHorizontal.vue';

const props = defineProps<{
  project: ProjectModel
}>()

const hasVerticalImages = computed(() => props.project.imagesOrientation === 'vertical')
</script>

<template>
  <div>
    <div class="flex gap-4">
      <MyHeading :level="1" class="font-display font-medium">{{ project.name }}</MyHeading>
      <p class="font-medium text-grey-400">{{ project.year }}</p>
    </div>

    <p class="mt-8 text-grey-200">{{ project.longDescription }}</p>
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
      <ProjectCarouselVertical v-if="hasVerticalImages" :images="project.images" />
      <ProjectCarouselHorizontal v-else :images="project.images" />
    </div>
  </div>
</template>
