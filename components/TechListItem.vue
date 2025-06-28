<script lang="ts" setup>
defineProps<{
  label: string
}>()
</script>

<template>
  <li class="bg-mint-800 text-mint-200 px-4 py-1 rounded text-xs md:text-sm">
    <slot>{{ label }}</slot>
  </li>
</template>
