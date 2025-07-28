<script lang="ts" setup>
import type { NuxtLinkProps } from '#app'

type ButtonSize = 'sm' | 'md' | 'lg'
type ButtonVariant = 'primary' | 'secondary'

const props = withDefaults(
  defineProps<{
    size?: ButtonSize
    variant?: ButtonVariant
    to?: NuxtLinkProps['to']
    block?: boolean
    loading?: boolean
  }>(),
  {
    size: 'md',
    variant: 'primary',
  }
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-1.5 text-xs'
    case 'md':
      return 'px-5 py-2.5 text-sm'
    case 'lg':
      return 'px-7 py-3.5 text-base'
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

const buttonClasses = computed(() => [sizeClass.value, variantClass.value])
</script>

<template>
  <NuxtLink
    v-if="to && !loading"
    :to="to"
    class="block border-1 rounded cursor-pointer transition-all duration-300 font-medium tracking-widest text-center"
    :class="buttonClasses"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    type="button"
    :disabled="loading"
    class="relative border-1 rounded cursor-pointer transition-all duration-300 font-medium tracking-widest text-center"
    :class="buttonClasses"
  >
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <svg
        class="animate-spin"
        :class="{
          'w-3 h-3': size === 'sm',
          'w-4 h-4': size === 'md',
          'w-5 h-5': size === 'lg',
        }"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
    <div :class="[{ 'opacity-0': loading }]">
      <slot />
    </div>
  </button>
</template>
