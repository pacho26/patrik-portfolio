<script lang="ts" setup>
interface InfoItem {
  icon: string
  text: string
}

const infoItems: InfoItem[] = [
  {
    icon: 'uil:map-marker',
    text: 'Zagreb, Croatia',
  },
  {
    icon: 'uil:briefcase',
    text: 'Four of Them LLC',
  },
  {
    icon: 'uil:globe',
    text: 'Remote work',
  },
]

const sectionClass = 'flex items-center justify-between gap-4'
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-for="item in infoItems" :key="item.text" :class="sectionClass">
      <div class="flex justify-center w-[48px]">
        <Icon :name="item.icon" size="24px" />
      </div>
      <p class="text-sm text-nowrap">{{ item.text }}</p>
    </div>
  </div>
</template>
