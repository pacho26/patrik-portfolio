<script lang="ts" setup>
import { computed } from 'vue'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

const props = withDefaults(
  defineProps<{
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
    level?: HeadingLevel
    label?: string
  }>(),
  {
    as: 'h1',
    level: 3,
    label: '',
  }
)

const textSizeClass = computed(() => {
  switch (props.level) {
    case 1:
      return 'text-5xl md:text-7xl'
    case 2:
      return 'text-4xl md:text-6xl'
    case 3:
      return 'text-3xl md:text-5xl'
    case 4:
      return 'text-2xl md:text-4xl'
    case 5:
      return 'text-lg md:text-2xl'
    case 6:
    default:
      return 'text-md md:text-lg'
  }
})

const leadingClass = computed(() => {
  switch (props.level) {
    case 1:
      return 'leading-[1.1] md:leading-[1.15]'
    case 2:
      return 'leading-[1.15] md:leading-[1.2]'
    case 3:
      return 'leading-[1.2] md:leading-[1.25]'
    case 4:
      return 'leading-[1.25] md:leading-[1.3]'
    case 5:
      return 'leading-[1.3] md:leading-[1.35]'
    case 6:
    default:
      return 'leading-[1.35] md:leading-[1.4]'
  }
})
</script>

<template>
  <component :is="as" class="font-display text-white" :class="[textSizeClass, leadingClass]">
    <slot>{{ label }}</slot>
  </component>
</template>
