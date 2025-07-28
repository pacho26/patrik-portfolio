<script lang="ts" setup>
const route = useRoute()

const isHomepage = computed(() => route.path === '/')

const isScrollButtonVisible = ref(false)

const setScrollVisibility = () => {
  isScrollButtonVisible.value = window.scrollY > 1
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', setScrollVisibility)
})
onUnmounted(() => {
  window.removeEventListener('scroll', setScrollVisibility)
})
</script>

<template>
  <div>
    <div class="max-w-[1140px] m-auto pt-5 px-5 pb-20 md:pt-8 min-h-[calc(100vh-102px)]">
      <Header />
      <div class="mt-12 md:mt-20 flex flex-col items-start lg:flex-row gap-10 lg:gap-20 z-30">
        <div
          class="flex flex-col justify-between gap-8 sm:flex-row w-full lg:w-[301px] min-w-[301px] static sm:sticky sm:top-10"
          :class="{ 'hidden lg:block': !isHomepage }"
        >
          <ProfileCard class="w-full" />
        </div>

        <main class="relative">
          <slot />
        </main>
      </div>

      <Transition name="scroll-button">
        <MyButton
          v-show="isScrollButtonVisible"
          class="fixed right-5 bottom-5 lg:right-8 lg:bottom-8 rounded-full w-8 h-[42px] z-20 flex items-center justify-center"
          @click="scrollToTop"
        >
          <Icon name="uil:arrow-up" size="28px" class="relative z-10 text-white translate-y-0.5" />
        </MyButton>
      </Transition>
    </div>

    <footer class="footer-wrapper mt-10 sm:mt-12 flex justify-center py-3">
      <p class="flex items-center gap-2">
        Made with
        <span>
          <Icon name="mdi:heart" size="24px" class="text-yellow-600 translate-y-0.25" />
        </span>
        by <span class="font-bold">Patrik Slovic</span>
      </p>
    </footer>
  </div>
</template>
