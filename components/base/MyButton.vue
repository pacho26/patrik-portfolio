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
    block?: boolean
  }>(),
  {
    size: 'md',
    variant: 'primary',
  }
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1 text-xs'
    case 'md':
      return 'px-6 py-2 text-sm'
    case 'lg':
      return 'px-8 py-3 text-base'
    default:
      return ''
  }
})

const variantClass = computed(() => {
  switch (props.variant) {
    case 'primary':
      return 'bg-yellow-700 border-yellow-700 text-white hover:bg-yellow-800 hover:border-yellow-800'
    case 'secondary':
      return 'bg-dark text-yellow-600 border-yellow-600 hover:bg-yellow-700 hover:border-yellow-700 hover:text-white'
    default:
      return ''
  }
})
</script>

<template>
  <div :class="{ 'w-full text-center': block }">
    <NuxtLink
      v-if="to"
      :to="to"
      class="block border-1 rounded cursor-pointer transition-all duration-300 font-medium tracking-widest"
      :class="[sizeClass, variantClass, buttonClass]"
    >
      <slot />
    </NuxtLink>

    <button
      v-else
      type="button"
      class="border-1 rounded cursor-pointer transition-all duration-300 font-medium tracking-widest"
      :class="[sizeClass, variantClass, buttonClass]"
    >
      <slot />
    </button>
  </div>
</template>
