<script lang="ts" setup>
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul class="mt-8 flex gap-x-2 gap-y-2 flex-wrap">
    <TechListItem v-for="(item, index) in items" :key="index" :label="item" />
  </ul>
</template>
