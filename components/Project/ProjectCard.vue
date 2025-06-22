<script lang="ts" setup>
type ProjectCard = {
  title: string
  description: string
  technologies: string[]
  year: number
  imageSrc: string
  slug: string
}

const props = defineProps<{
  project: ProjectCard
}>()

const imgAlt = computed(() => `${props.project.title} image`)
</script>

<template>
  <NuxtLink
    :to="{ name: 'projects-slug', params: { slug: project.slug } }"
    class="block relative cursor-pointer transition-all grayscale-[0.7] hover:grayscale-0 hover:scale-101 hover:z-12 focus:grayscale-0 focus:scale-101 focus:z-12"
  >
    <div class="flex gap-8 relative">
      <NuxtImg :src="project.imageSrc" :alt="imgAlt" width="500" class="max-w-[500px]" />
      <div>
        <MyHeading :level="4" as="h2" class="sm:max-w-[90%]">{{ project.title }}</MyHeading>
        <p class="mt-4 text-grey-300">{{ project.description }}</p>
        <TechList :items="project.technologies" />
      </div>
      <p class="absolute right-0 top-0 text-grey-400">{{ project.year }}</p>
    </div>
  </NuxtLink>
</template>
