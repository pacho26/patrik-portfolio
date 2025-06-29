<script lang="ts" setup>
// TODO: Add proper project name
useHead({
  title: 'Project name',
})

const route = useRoute()
const projectId = route.params.slug
</script>

<template>
  <div>
    <MyHeading :level="1" class="font-display">Projects</MyHeading>
  </div>
</template>
