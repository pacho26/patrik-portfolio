<script lang="ts" setup>
const sectionClass = 'flex items-center justify-between gap-4'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div :class="sectionClass">
      <Icon name="uil:map-marker" size="24px" />
      <p class="text-sm">Zagreb, Croatia</p>
    </div>

    <div :class="sectionClass">
      <Icon name="uil:briefcase" size="24px" />
      <p class="text-sm">Four of Them LLC</p>
    </div>

    <div :class="sectionClass">
      <Icon name="uil:globe" size="24px" />
      <p class="text-sm">Remote work</p>
    </div>
  </div>
</template>
