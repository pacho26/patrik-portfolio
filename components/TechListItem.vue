<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <li class="bg-cyan-700 text-white px-2 py-0.5 rounded text-xs sm:px-4 sm:py-1">
    <slot>{{ label }}</slot>
  </li>
</template>
