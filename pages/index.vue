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
  <div class="flex flex-col items-center">
    <div
      class="relative w-[200px] h-[200px] cursor-pointer rounded-full perspective-1000"
      @click="rotation.toggle"
      @mouseenter="rotation.onMouseEnter"
      @mouseleave="rotation.onMouseLeave"
      :class="{ group: !isTouchDevice }"
    >
      <div
        class="relative w-full h-full rounded-full transition-transform duration-700 transform-3d border-4"
        :class="{
          'rotate-y-180': isRotated,
          'group-hover:rotate-y-180': !isTouchDevice,
        }"
      >
        <NuxtImg
          src="img/profile-illustration.png"
          alt="Profile animated"
          width="192"
          height="192"
          class="rounded-full absolute w-full inset-0 backface-hidden"
        />
        <NuxtImg
          src="img/profile-real.jpg"
          alt="Profile real"
          width="192"
          height="192"
          class="rounded-full absolute w-full inset-0 backface-hidden rotate-y-180"
        />
      </div>
    </div>
    <MyHeading as="h1" :level="3" class="mt-4 font-medium">Patrik Slovic</MyHeading>
    <MyHeading as="h2" :level="5">Frontend developer & Musician</MyHeading>
  </div>
</template>
