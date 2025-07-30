<script lang="ts" setup>
const REMINDER_TIMEOUT = 8000
const SHAKE_DURATION = 600

const { isTouchDevice } = useTouchDevice()

const hasFlippedBefore = ref(false)
const isFlipped = ref(false)
const isShaking = ref(false)

const markAsFlipped = () => {
  hasFlippedBefore.value = true
}

const shakeImage = () => {
  isShaking.value = true
  setTimeout(() => {
    isShaking.value = false
  }, SHAKE_DURATION)
}

const rotation = {
  toggle() {
    isFlipped.value = !isFlipped.value
    markAsFlipped()
  },

  onMouseEnter() {
    if (isTouchDevice.value) return
    isFlipped.value = true
    markAsFlipped()
  },

  onMouseLeave() {
    if (isTouchDevice.value) return
    isFlipped.value = false
  },

  onClick: markAsFlipped,
}

onMounted(() => {
  setTimeout(() => {
    if (!hasFlippedBefore.value) {
      shakeImage()
    }
  }, REMINDER_TIMEOUT)
})
</script>

<template>
  <div
    class="relative w-[200px] h-[200px] cursor-pointer rounded-full perspective-1000 profile-image-container select-none"
    @click="rotation.onClick"
    @touchstart.passive="rotation.toggle"
    @mouseenter="rotation.onMouseEnter"
    @mouseleave="rotation.onMouseLeave"
    :class="{
      group: !isTouchDevice,
      'animate-shake': isShaking,
    }"
  >
    <div
      class="relative w-full h-full rounded-full duration-700 transform-3d border-4 profile-image"
      :class="{
        'rotate-y-180': isFlipped,
        'group-hover:rotate-y-180': !isTouchDevice,
      }"
    >
      <NuxtImg
        src="img/profile-illustration.webp"
        alt="Profile image - animated"
        width="192"
        height="192"
        sizes="200px"
        preset="profile"
        class="rounded-full absolute w-full inset-0 backface-hidden"
        priority
        loading="eager"
        fetchpriority="high"
      />
      <NuxtImg
        src="img/profile-real.webp"
        alt="Profile image - real life"
        width="192"
        height="192"
        sizes="200px"
        preset="profile"
        class="rounded-full absolute w-full inset-0 backface-hidden rotate-y-180"
        loading="lazy"
        fetchpriority="low"
      />
    </div>
  </div>
</template>
