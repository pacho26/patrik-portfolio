<script lang="ts" setup>
import { experienceList } from '~/assets/ts'
</script>

<template>
  <div class="flex flex-col gap-12">
    <ExperienceCard v-for="(job, index) in experienceList" :key="index" :job="job" />
  </div>
</template>
