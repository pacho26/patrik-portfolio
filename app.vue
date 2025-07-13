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
  <div class="relative min-h-screen text-grey-50 overflow-hidden main-wrapper">
    <div
      class="pointer-events-none fixed inset-0 z-10 hidden md:block"
      :style="gradientStyle"
      aria-hidden
    />

    <section class="stars-wrapper">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div class="relative z-20"></div>
    </section>

    <NuxtLayout>
      <!-- TODO: Solve Transition warning -->
      <Transition name="fade" mode="out-in">
        <NuxtPage />
      </Transition>
    </NuxtLayout>
  </div>
</template>

<style scoped>
@import url('@/assets/css/stars.css');

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.main-wrapper {
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
}
</style>
