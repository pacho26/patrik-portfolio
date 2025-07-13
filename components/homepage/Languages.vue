<script lang="ts" setup>
const sectionClass = 'flex items-start justify-between gap-12'
const flagClass = 'flex flex-col items-center min-w-[48px]'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div :class="sectionClass">
      <div :class="flagClass">
        <NuxtImg src="/img/flags/croatia.svg" width="32" alt="Croatian" />
        <p class="mt-1 text-xs leading-4">Croatian</p>
      </div>
      <p class="text-sm leading-4">Native</p>
    </div>
    <div :class="sectionClass">
      <div :class="flagClass">
        <NuxtImg src="/img/flags/english-language.svg" width="32" alt="English" />
        <p class="mt-1 text-xs leading-4">English</p>
      </div>
      <p class="text-sm leading-4">Advanced</p>
    </div>
    <div :class="sectionClass">
      <div :class="flagClass">
        <NuxtImg src="/img/flags/germany.svg" width="32" class="h-4 object-cover" alt="German" />
        <p class="mt-1 text-xs leading-4">German</p>
      </div>
      <p class="text-sm leading-4">Basic</p>
    </div>
    <div :class="sectionClass">
      <div :class="flagClass">
        <NuxtImg src="/img/flags/italy.svg" width="32" class="h-4 object-cover" alt="Italian" />
        <p class="mt-1 text-xs">Italian</p>
      </div>
      <p class="text-sm leading-4">Basic</p>
    </div>
  </div>
</template>
