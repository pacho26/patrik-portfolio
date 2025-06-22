<script lang="ts" setup>
// TODO: Extract this to a separate file
const projects = [
  {
    title: 'Project One',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    year: 2023,
    technologies: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind CSS'],
    imageSrc: 'https://i.ibb.co/B5nBpvR2/kalen-emsley-Bkci-8qcdv-Q-unsplash-1.jpg',
    slug: 'project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a description of project two.',
    year: 2022,
    technologies: ['React', 'Next.js', 'JavaScript'],
    imageSrc: 'https://i.ibb.co/LqMNvYK/pietro-de-grandi-T7-K4a-EPo-GGk-unsplash.jpg',
    slug: 'project-two',
  },
]
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display">Projects</MyHeading>
    <div class="mt-16 flex flex-col gap-8">
      <ProjectCard v-for="project in projects" :key="project.slug" :project />
    </div>
  </div>
</template>
