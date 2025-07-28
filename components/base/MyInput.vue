<script lang="ts" setup>
interface Props {
  modelValue: string
  label: string
  placeholder?: string
  error?: string
  rows?: number
  id?: string
  textarea?: boolean
}

withDefaults(defineProps<Props>(), {
  rows: 5,
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const inputClass = computed(() => [
  'w-full rounded  transition-all duration-300',
  'bg-black/33 backdrop-blur-lg text-white placeholder-grey-400',
  'focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent',
  'px-4 py-3 text-base',
])

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div>
    <label v-if="label" :for="label" class="block text-sm font-medium text-grey-200 mb-2">
      {{ label }}
    </label>

    <textarea
      v-if="textarea"
      :id="label"
      :value="modelValue"
      :placeholder="placeholder"
      :rows="rows"
      class="resize-none"
      :class="[inputClass]"
      @input="handleInput"
    ></textarea>

    <input
      v-else
      :id="label"
      :value="modelValue"
      :placeholder="placeholder"
      :class="[inputClass]"
      @input="handleInput"
    />

    <p v-if="error" class="mt-1 text-sm text-red-400">
      {{ error }}
    </p>
  </div>
</template>
