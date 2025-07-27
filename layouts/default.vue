<script lang="ts" setup>
const route = useRoute()

const isHomepage = computed(() => route.path === '/')
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
          <HomepageProfileCard class="w-full" />
        </div>

        <main class="relative">
          <slot />
        </main>
      </div>

      <!-- TODO: Add go to top button? -->
      <!-- <MyButton variant="secondary" class="fixed right-8 bottom-8 z-10">Resume</MyButton> -->
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
