<script lang="ts" setup>
const { isTouchDevice } = useTouchDevice()

const isRotated = ref(false)

const rotation = {
  toggle() {
    if (isTouchDevice.value) {
      isRotated.value = !isRotated.value
    }
  },

  onMouseEnter() {
    if (!isTouchDevice.value) {
      isRotated.value = true
    }
  },

  onMouseLeave() {
    if (!isTouchDevice.value) {
      isRotated.value = false
    }
  },
}
</script>

<template>
  <div
    class="relative w-[200px] h-[200px] cursor-pointer rounded-full perspective-1000 profile-image-container"
    @click="rotation.toggle"
    @mouseenter="rotation.onMouseEnter"
    @mouseleave="rotation.onMouseLeave"
    :class="{ group: !isTouchDevice }"
  >
    <div
      class="relative w-full h-full rounded-full transition-transform duration-700 transform-3d border-4 profile-image"
      :class="{
        'rotate-y-180': isRotated,
        'group-hover:rotate-y-180': !isTouchDevice,
      }"
    >
      <NuxtImg
        src="img/profile-illustration.webp"
        alt="Profile - animated"
        width="192"
        height="192"
        class="rounded-full absolute w-full inset-0 backface-hidden"
        priority
        loading="eager"
        fetchpriority="high"
      />
      <NuxtImg
        src="img/profile-real.webp"
        alt="Profile - real life"
        width="192"
        height="192"
        class="rounded-full absolute w-full inset-0 backface-hidden rotate-y-180"
        priority
        loading="eager"
        fetchpriority="high"
      />
    </div>
  </div>
</template>
