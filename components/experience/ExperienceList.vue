<script lang="ts" setup>
const experienceList = [
  {
    company: {
      name: 'Four of Them LLC',
      logo: 'https://i.ibb.co/tM5PmJKT/4ot-logo.png',
      url: 'https://4ofthem.eu/',
    },
    role: 'Frontend Engineer',
    location: 'Zaprešić, Croatia',
    descriptionList: [
      'Developed an existing high-traffic e-commerce platform from scratch with the aim to modernize its stack and improve performance',
      'Built admin-side components from scratch used to configure the features of the platform mentioned earlier',
      'Maintained and implemented new features for a software development kit designed for standalone web components used in client integrations',
      'Continuous code reviews, focusing on knowledge sharing, maintaining code quality, and supporting team members',
    ],
    technologies: ['JavaScript', 'Vue', 'Node.js'],
    period: 'May 2023 — Present',
  },
  {
    company: {
      name: 'Three of them Ltd.',
      logo: 'https://i.ibb.co/jvk8X4qL/Group-1.png',
      url: 'https://www.3ofthem.eu/',
    },
    role: 'Junior Frontend Developer',
    location: 'Zaprešić, Croatia',
    descriptionList: [
      'Maintained and implemented new features for high-traffic e-commerce platform',
      'Worked on a Vaccine Reservation System, crucial during the COVID-19 pandemic',
      'Built a component library alongside Storybook for testing and documenting components, ensuring both visual and functional accuracy',
      'Built an API library using TypeScript for use across projects',
    ],
    technologies: ['HTML', 'CSS', 'React'],
    period: 'Dec 2021 — Sep 2022',
  },
]
</script>

<template>
  <div class="flex flex-col gap-12">
    <ExperienceCard v-for="(job, index) in experienceList" :key="index" :job="job" />
  </div>
</template>
