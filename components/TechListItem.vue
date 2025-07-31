<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <li
    class="glass-effect-strong-blur text-yellow-500 border-yellow-500 px-2 py-0.5 rounded text-xs min-h-5 sm:px-4 sm:py-1 sm:min-h-6"
  >
    <slot>{{ label }}</slot>
  </li>
</template>
