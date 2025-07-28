<script lang="ts" setup>
interface Props {
  type: 'success' | 'error'
  message: string
  show: boolean
  autoDismiss?: boolean
  dismissDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoDismiss: true,
  dismissDelay: 5000,
})

const emit = defineEmits<{
  close: []
}>()

const isVisible = ref(false)

watch(
  () => props.show,
  newValue => {
    if (newValue) {
      isVisible.value = true
      if (props.autoDismiss) {
        setTimeout(() => {
          emit('close')
        }, props.dismissDelay)
      }
    } else {
      isVisible.value = false
    }
  }
)

const handleClose = () => {
  emit('close')
}

const notificationClasses = computed(() => {
  const baseClasses =
    'fixed top-5 left-5 right-5 sm:top-8 sm:right-8 sm:left-auto z-50 p-4 rounded shadow-lg w-[calc(100vw-40px)] sm:w-auto sm:max-w-sm transition-all duration-300'

  if (props.type === 'success') {
    return `${baseClasses} bg-green-100 text-green-800`
  } else {
    return `${baseClasses} bg-red-100 text-red-800`
  }
})
</script>

<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform -translate-y-full sm:-translate-y-0 sm:translate-x-full opacity-0"
    enter-to-class="transform translate-y-0 sm:translate-x-0 opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform translate-y-0 sm:translate-x-0 opacity-100"
    leave-to-class="transform -translate-y-full sm:-translate-y-0 sm:translate-x-full opacity-0"
  >
    <div v-if="isVisible" :class="notificationClasses" class="flex items-start gap-4">
      <div class="flex items-center gap-3">
        <div v-if="type === 'success'" class="bg-green-800 rounded-full h-6">
          <Icon name="uil:check" size="24px" class="relative z-10 text-green-100" />
        </div>
        <Icon
          v-else-if="type === 'error'"
          name="mdi:alert-circle"
          size="24px"
          class="relative z-10"
        />

        <div class="flex-1">
          <p class="text-sm font-medium">{{ message }}</p>
        </div>
      </div>

      <button @click="handleClose" class="cursor-pointer">
        <Icon name="mdi:close" size="20px" class="relative z-10" />
      </button>
    </div>
  </Transition>
</template>
