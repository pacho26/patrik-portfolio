<script lang="ts" setup>
const { isTouchDevice } = useTouchDevice()

useHead({
  title: 'Patrik | Homepage',
})

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
  <div>
    <div class="flex flex-col justify-between gap-8 sm:flex-row">
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
        <MyHeading as="h1" :level="3" class="mt-4 font-bold">Patrik Slovic</MyHeading>
        <MyHeading as="h2" :level="5" class="text-grey-100"
          >Frontend developer & Musician</MyHeading
        >

        <p class="mt-4 max-w-[680px] text-center text-grey-200">
          I'm a web developer specializing in Vue with a passion for clean, maintainable code.
          Persistent and easygoing, I enjoy adding humor to the workplace and tackling challenges.
          Outside of tech, I've spent nearly a decade performing at events as a band musician.
        </p>
      </div>
      <div class="flex flex-col gap-6">
        <HomepageBasicInfo class="bg-dark p-4 rounded" />
        <HomepageLanguages class="bg-dark p-4 rounded" />
      </div>
    </div>
    <HomepageContact class="mt-8 sm:mt-12" />
  </div>
</template>
