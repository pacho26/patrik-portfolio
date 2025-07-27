<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <li
    class="glass-effect-strong-blur text-yellow-500 border-yellow-500 px-2 py-0.5 rounded text-xs sm:px-4 sm:py-1"
  >
    <slot>{{ label }}</slot>
  </li>
</template>
