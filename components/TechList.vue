<script lang="ts" setup>
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul class="flex gap-2 flex-wrap">
    <TechListItem v-for="(item, index) in items" :key="index" :label="item" />
  </ul>
</template>
