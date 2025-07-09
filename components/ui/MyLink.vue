<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to: RouteLocationRaw
  label?: string
  noHoverUnderline?: boolean
  newTab?: boolean
}>()

const linkAttrs = computed(() => {
  if (props.newTab) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }
  return {}
})
</script>

<template>
  <NuxtLink :to="to" v-bind="linkAttrs">
    <div
      class="relative py-1 uppercase font-bold tracking-widest text-sm after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:bg-cyan-300 after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full"
      :class="{ 'after:h-[3px]': !noHoverUnderline }"
    >
      <slot>{{ label }}</slot>
    </div>
  </NuxtLink>
</template>
