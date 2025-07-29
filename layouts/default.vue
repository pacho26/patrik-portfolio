<script lang="ts" setup>
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
          class="hidden static sm:sticky sm:top-10 lg:flex flex-col sm:flex-row justify-between gap-8 w-full lg:w-[301px] min-w-[301px]"
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
          class="fixed right-5 bottom-5 lg:right-8 lg:bottom-8 rounded-full w-12 h-12 z-20 flex items-center justify-center"
          @click="scrollToTop"
        >
          <Icon name="uil:arrow-up" size="28px" class="relative z-10 text-white translate-y-0.5" />
        </MyButton>
      </Transition>
    </div>

    <footer class="footer-wrapper mt-10 sm:mt-12 flex justify-center py-3">
      <div class="flex items-center justify-center gap-1.5">
        <p class="flex items-center gap-2">
          Made by<span class="font-bold text-yellow-600">Patrik Slovic</span>
        </p>
        <p>|</p>
        <MyLink href="https://github.com/pacho26/patrik-portfolio" new-tab>Source code</MyLink>
      </div>
    </footer>
  </div>
</template>
