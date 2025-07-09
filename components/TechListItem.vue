<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <li class="bg-cyan-700 text-white px-4 py-1 rounded text-xs md:text-sm">
    <slot>{{ label }}</slot>
  </li>
</template>
