<script lang="ts" setup>
const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <div class="min-h-screen">
    <div class="max-w-[1024px] m-auto pt-5 px-5 pb-20 md:pt-8">
      <Header />
      
      <div class="mt-12 md:mt-20 flex flex-col items-start lg:flex-row gap-10 lg:gap-20 z-30">
        <div
          class="flex flex-col justify-between gap-8 sm:flex-row w-full lg:w-[301px] lg:min-w-[301px] lg:sticky lg:top-8 lg:self-start"
          :class="{ 'hidden sm:block': !isHomepage }"
        >
          <HomepageProfileCard v-if="isHomepage" />
          <!-- For non-homepage, you might want a simplified profile card -->
          <div v-else class="bg-dark p-4 rounded">
            <!-- Simplified profile info for other pages -->
          </div>
        </div>

        <main class="relative flex-1 min-w-0">
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
