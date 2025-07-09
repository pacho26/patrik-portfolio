<script lang="ts" setup>
import type { IconType } from '~/assets/ts'

const props = defineProps<{
  icon?: IconType
}>()

const iconSrc = computed(() => {
  switch (props.icon) {
    case 'github':
      return '/img/logos/github-logo.svg'
    case 'link':
    default:
      return '/img/icons/link.svg'
  }
})
</script>

<template>
  <NuxtImg :src="iconSrc" :alt="icon" aria-hidden="true" class="w-5 h-5" />
</template>
