<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
  defineProps<{
    to: RouteLocationRaw
    icon: string
    label: string
    size?: string
    isActive?: boolean
    newTab?: boolean
  }>(),
  {
    size: '24px',
  }
)

const linkAttrs = computed(() => ({
  'aria-label': props.label,
  ...(props.newTab && {
    target: '_blank',
    rel: 'noopener noreferrer',
  }),
}))

const isExternalLink = computed(() => {
  if (typeof props.to === 'string') {
    return props.to.startsWith('http') || props.to.startsWith('mailto:')
  }
  return false
})
</script>

<template>
  <div class="relative flex flex-col items-center group">
    <NuxtLink
      v-if="!isExternalLink"
      :to="to"
      class="relative flex items-center justify-center w-9 h-9 rounded-lg overflow-hidden group/link"
      v-bind="linkAttrs"
    >
      <div
        class="absolute top-1/2 left-1/2 w-0 h-0 bg-yellow-600 rounded-lg opacity-0 transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 group-hover/link:w-full group-hover/link:h-full group-hover/link:opacity-100 text-white"
        :class="{ 'w-full h-full opacity-100': isActive }"
      />
      <Icon :name="icon" :size class="relative z-10 text-white" />
    </NuxtLink>

    <a
      v-else
      :href="typeof to === 'string' ? to : '#'"
      class="relative flex items-center justify-center w-9 h-9 rounded-lg overflow-hidden group/link"
      v-bind="linkAttrs"
    >
      <div
        class="absolute top-1/2 left-1/2 w-0 h-0 bg-yellow-600 rounded-lg opacity-0 transition-all duration-300 ease-out transform -translate-x-1/2 -translate-y-1/2 group-hover/link:w-full group-hover/link:h-full group-hover/link:opacity-100 text-white"
        :class="{ 'w-full h-full opacity-100': isActive }"
      />
      <Icon :name="icon" :size class="relative z-10 text-white" />
    </a>

    <div
      v-if="label"
      class="absolute top-[85%] mt-1 left-1/2 -translate-x-1/2 glass-effect text-white text-xs text-nowrap px-2.5 py-1 rounded-md opacity-0 translate-y-0 pointer-events-none transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-3"
    >
      {{ label }}
    </div>
  </div>
</template>
