<script lang="ts" setup>
import type { NuxtLinkProps } from '#app'

type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    size?: ButtonSize
    variant?: ButtonVariant
    to?: NuxtLinkProps['to']
    buttonClass?: string
  }>(),
  {
    size: 'md',
    variant: 'primary',
  }
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-2 py-1 text-xs'
    case 'md':
      return 'px-4 py-2 text-sm'
    case 'lg':
      return 'px-6 py-3 text-base'
    default:
      return ''
  }
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-cyan-400 text-white hover:bg-cyan-500'
    case 'secondary':
      return 'bg-transparent text-cyan-500 hover:bg-cyan-500 hover:text-white'
    default:
      return ''
  }
})
</script>

<template>
  <div>
    <NuxtLink
      v-if="to"
      :to="to"
      class="border-1 border-cyan-500 rounded cursor-pointer transition-all font-bold tracking-widest"
      :class="[sizeClass, variantClass, buttonClass]"
    >
      <slot />
    </NuxtLink>

    <button
      v-else
      type="button"
      class="border-1 border-cyan-500 rounded cursor-pointer transition-all font-bold tracking-widest"
      :class="[sizeClass, variantClass, buttonClass]"
    >
      <slot />
    </button>
  </div>
</template>
