<script lang="ts" setup>
import { projects, type ProjectModel } from '~/assets/ts'
import ProjectCarouselHorizontal from './ProjectCarouselHorizontal.vue'

const props = defineProps<{
  project: ProjectModel
}>()

const hasVerticalImages = computed(() => props.project.imagesOrientation === 'vertical')
</script>

<template>
  <div>
    <NuxtLink to="/projects" class="flex items-center gap-1 w-fit group">
      <Icon
        name="uil:angle-left"
        size="24px"
        class="group-hover:text-yellow-600 transition-all duration-300"
      />
      <p class="group-hover:translate-x-0.5 transition-all duration-300">All Projects</p>
    </NuxtLink>
    <div class="mt-4 flex items-baseline gap-4">
      <MyHeading :level="1" class="font-display font-medium">{{ project.name }}</MyHeading>
      <p class="font-medium text-grey-400">{{ project.year }}</p>
    </div>

    <p class="mt-8 text-grey-200" v-html="project.longDescription" />
    <TechList :items="project.technologies" class="mt-4 lg:mt-6" />

    <div class="mt-8 sm:mt-12">
      <MyHeading :level="4" as="h2" class="font-display font-medium">Links</MyHeading>
      <div class="mt-4 flex flex-col gap-2">
        <div class="flex items-center gap-3" v-for="link in project.links" :key="link.url">
          <Icon :name="`uil:${link.icon}`" size="20px" />
          <MyLink :href="link.url" new-tab>
            <p>{{ link.label }}</p>
          </MyLink>
        </div>
      </div>
    </div>

    <div class="mt-8 sm:mt-12">
      <MyHeading :level="4" as="h3" class="mb-4 font-display font-medium">Gallery</MyHeading>
      <ProjectCarouselVertical v-if="hasVerticalImages" :images="project.images" />
      <ProjectCarouselHorizontal v-else :images="project.images" />
    </div>
  </div>
</template>
