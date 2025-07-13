<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const props = defineProps<{
  to: RouteLocationRaw
  label?: string
  noHoverUnderline?: boolean
  newTab?: boolean
  customClass?: string
}>()

const linkAttrs = computed(() => {
  if (props.newTab) {
    return {
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }
  return {}
})

const isExternalLink = computed(() => {
  if (typeof props.to === 'string') {
    return props.to.startsWith('http') || props.to.startsWith('mailto:')
  }
  return false
})

const containerClass = `relative py-1 uppercase font-bold tracking-widest text-sm after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:bg-cyan-300 after:transition-[width] after:duration-200 after:ease-in-out hover:after:w-full`
</script>

<template>
  <NuxtLink v-if="!isExternalLink" :to="to" v-bind="linkAttrs">
    <div :class="[{ 'after:h-[3px]': !noHoverUnderline }, containerClass, customClass]">
      <slot>{{ label }}</slot>
    </div>
  </NuxtLink>

  <a v-else :href="typeof to === 'string' ? to : '#'" v-bind="linkAttrs">
    <div :class="[{ 'after:h-[3px]': !noHoverUnderline }, containerClass, customClass]">
      <slot>{{ label }}</slot>
    </div>
  </a>
</template>
