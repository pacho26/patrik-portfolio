<script lang="ts" setup>
type InputType = 'text' | 'email' | 'textarea'
type InputSize = 'sm' | 'md' | 'lg'

interface Props {
  modelValue: string
  type?: InputType
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  size?: InputSize
  rows?: number
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  size: 'md',
  required: false,
  disabled: false,
  rows: 5,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputId = computed(() => props.id || `input-${Math.random().toString(36).substr(2, 9)}`)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'px-3 py-2 text-sm'
    case 'md':
      return 'px-4 py-3 text-base'
    case 'lg':
      return 'px-6 py-4 text-lg'
    default:
      return 'px-4 py-3 text-base'
  }
})

const inputClass = computed(() => [
  'w-full rounded-lg border transition-all duration-300',
  'bg-dark-glass/50 backdrop-blur-sm text-white placeholder-grey-400',
  'focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent',
  sizeClass.value,
  props.error ? 'border-red-500 focus:ring-red-500' : 'border-grey-600 hover:border-grey-500',
  props.disabled && 'opacity-50 cursor-not-allowed',
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div>
    <label v-if="label" :for="inputId" class="block text-sm font-medium text-grey-200 mb-2">
      {{ label }}
      <span v-if="required" class="text-red-400">*</span>
    </label>

    <input
      v-if="type !== 'textarea'"
      :id="inputId"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :class="inputClass"
      @input="handleInput"
    />

    <textarea
      v-else
      :id="inputId"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :class="[inputClass, 'resize-none']"
      @input="handleInput"
    ></textarea>

    <p v-if="error" class="mt-1 text-sm text-red-400">
      {{ error }}
    </p>
  </div>
</template>
