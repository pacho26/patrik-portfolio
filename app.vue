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
// TODO: Icons disappear on mobile occasionally (both responsive mobile on desktop and actual mobile device)
// TODO: Change favicon
</script>

<template>
  <div class="relative min-h-screen text-grey-50 main-wrapper">
    <div
      class="pointer-events-none fixed inset-0 hidden md:block"
      :style="gradientStyle"
      aria-hidden
    />

    <section class="stars-wrapper fixed">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div class="relative z-20"></div>
    </section>

    <NuxtLayout>
      <NuxtPage key="page" />
    </NuxtLayout>
  </div>
</template>
