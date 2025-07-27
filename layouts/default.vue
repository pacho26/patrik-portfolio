<script lang="ts" setup>
const route = useRoute()

const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <div class="max-w-[1140px] m-auto pt-5 px-5 pb-20 md:pt-8">
    <Header />
    <div class="mt-12 md:mt-20 flex flex-col items-start lg:flex-row gap-10 lg:gap-20 z-30">
      <div
        class="flex flex-col justify-between gap-8 sm:flex-row w-full lg:w-[301px] min-w-[301px] static sm:sticky sm:top-10"
        :class="{ 'hidden sm:block': !isHomepage }"
      >
        <HomepageProfileCard />
      </div>

      <main class="relative">
        <slot />
      </main>
    </div>

    <MyButton variant="secondary" class="fixed right-8 bottom-8 z-10">Resume</MyButton>
  </div>
</template>
