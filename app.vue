<script lang="ts" setup>
const mouseX = ref(0)
const mouseY = ref(0)

const updatePosition = (e: MouseEvent) => {
  mouseX.value = e.clientX
  mouseY.value = e.clientY
}

const gradientStyle = computed(() => ({
  background: `radial-gradient(500px at ${mouseX.value}px ${mouseY.value}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
}))

onMounted(() => {
  window.addEventListener('mousemove', updatePosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updatePosition)
})
</script>

<template>
  <div class="relative bg-dark min-h-screen text-grey-50 overflow-hidden">
    <div class="pointer-events-none fixed inset-0 z-10" :style="gradientStyle" aria-hidden="true" />

    <div class="relative z-20">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
