<script lang="ts" setup>
type Company = {
  name: string
  logo: string
  url: string
}

type ExperienceCard = {
  company: Company
  role: string
  location: string
  descriptionList: string[]
  technologies: string[]
  period: string
}

const props = defineProps<{
  job: ExperienceCard
}>()

const companyLogoAlt = computed(() => `${props.job.company} logo`)
</script>

<template>
  <div class="max-w-[800px] flex items-start gap-12">
    <p class="uppercase text-sm text-grey-500 leading-[32px] text-nowrap">{{ job.period }}</p>
    <div>
      <MyHeading :level="4" as="h2" class="leading-[32px]">{{ job.role }}</MyHeading>
      <div class="mt-2 flex items-center gap-2">
        <NuxtImg :src="job.company.logo" width="20" />
        <MyLink
          v-if="job.company.url"
          :to="job.company.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ job.company.name }}
        </MyLink>
      </div>

      <ul class="mt-4 list-disc flex flex-col gap-2 text-grey-300">
        <li v-for="(description, index) in job.descriptionList" :key="index" class="leading-[22px]">
          {{ description }}
        </li>
      </ul>

      <TechList :items="job.technologies" class="mt-4" />
    </div>
  </div>
</template>
