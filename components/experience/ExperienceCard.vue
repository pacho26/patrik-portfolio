<script lang="ts" setup>
import type { ExperienceModel } from '~/assets/ts'

const props = defineProps<{
  job: ExperienceModel
}>()

const companyLogoAlt = computed(() => `${props.job.company.name} logo`)
</script>

<template>
  <div class="max-w-[800px] flex flex-col items-start gap-1 md:flex-row md:gap-12">
    <p class="uppercase text-sm text-grey-400 text-nowrap md:leading8">{{ job.period }}</p>
    <div>
      <MyHeading :level="4" as="h2" class="font-medium leading-8">{{ job.role }}</MyHeading>
      <div class="mt-2 flex items-center gap-2">
        <NuxtImg
          :src="job.company.logo"
          :alt="companyLogoAlt"
          width="20"
          height="20"
          sizes="20px"
          loading="lazy"
        />
        <MyLink
          v-if="job.company.url"
          :href="job.company.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ job.company.name }}
        </MyLink>
      </div>

      <ul class="mt-4 ml-4 list-disc flex flex-col gap-2 text-grey-200 md:ml-0">
        <li v-for="(description, index) in job.descriptionList" :key="index" class="leading-5.5">
          {{ description }}
        </li>
      </ul>

      <TechList :items="job.technologies" class="mt-5 md:mt-4" />
    </div>
  </div>
</template>
