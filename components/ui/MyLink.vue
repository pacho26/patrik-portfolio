<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

defineProps<{
  to: RouteLocationRaw
  label?: string
}>()
</script>

<template>
  <NuxtLink :to="to">
    <div
      class="relative py-1 uppercase font-bold tracking-widest text-sm after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-mint-400 after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full"
    >
      <slot>{{ label }}</slot>
    </div>
  </NuxtLink>
</template>
