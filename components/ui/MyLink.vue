<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
  label?: string
  noHoverUnderline?: boolean
}>()
</script>

<template>
  <NuxtLink :to="to">
    <div
      class="relative py-1 uppercase font-bold tracking-widest text-sm after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:bg-cyan-300 after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full"
      :class="{'after:h-[3px]': !noHoverUnderline}"
    >
      <slot>{{ label }}</slot>
    </div>
  </NuxtLink>
</template>
