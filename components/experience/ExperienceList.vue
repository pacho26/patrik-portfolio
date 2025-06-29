<script lang="ts" setup>
import { experiences } from '~/assets/ts'
</script>

<template>
  <div class="flex flex-col gap-12">
    <ExperienceCard v-for="(job, index) in experiences" :key="index" :job="job" />
  </div>
</template>
