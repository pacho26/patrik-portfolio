<script lang="ts" setup>
type ProjectCard = {
  title: string
  description: string
  technologies: string[]
  year: number
  imgSrc: string
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
    class="block relative overflow-hidden border-1 border-grey-800 rounded cursor-pointer transition-all md:grayscale-[0.7] hover:grayscale-0 md:hover:scale-101 hover:z-12 focus:grayscale-0 md:focus:scale-101 focus:z-12 md:border-none"
  >
    <div class="flex flex-col gap-4 relative bg-dark md:bg-transparent md:flex-row lg:gap-8">
      <NuxtImg
        :src="project.imgSrc"
        :alt="imgAlt"
        sizes="100vw sm:50vw lg:500px"
        class="max-w-100vw lg:max-w-[500px]"
      />
      <div class="relative mx-4 mb-4 lg:w-full lg:m-0">
        <MyHeading :level="4" as="h2" class="font-medium max-w-[75%] md:max-w-[85%]">{{ project.title }}</MyHeading>
        <p class="mt-2 text-grey-300 text-sm md:mt-4 md:text-base">{{ project.description }}</p>
        <TechList :items="project.technologies" class="mt-4 lg:mt-6" />
        <p class="absolute right-0 top-1 text-grey-400 md:hidden">{{ project.year }}</p>
      </div>
      <p class="absolute right-0 top-1 text-grey-400 hidden md:block">{{ project.year }}</p>
    </div>
  </NuxtLink>
</template>
