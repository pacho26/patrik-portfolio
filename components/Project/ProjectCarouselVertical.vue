<script lang="ts" setup>
import type { ImageModel } from '~/assets/ts'

const props = defineProps<{
  images: ImageModel[]
}>()

const currentSlide = ref(0)

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

const galleryConfig = computed(() => ({
  itemsToShow: 1,
  touchDrag: true,
}))

const currentImageTitle = computed(() => props.images.at(currentSlide.value)?.title)
</script>

<template>
  <div class="flex flex-col items-center relative pt-4">
    <Carousel
      v-bind="galleryConfig"
      v-model="currentSlide"
      class="carousel-vertical rounded max-w-[240px] sm:max-w-[300px] bg-dark"
    >
      <Slide v-for="(image, idx) in images" :key="image.src">
        <NuxtImg
          :src="image.src"
          sizes="90vw sm:300px"
          quality="85"
          :alt="image.title"
          class="w-full h-full object-cover pointer-events-none select-none"
          :fetchpriority="idx === 0 ? 'high' : 'auto'"
        />
      </Slide>
      <template #addons>
        <Navigation v-if="isMounted" class="transition-all" />
      </template>
    </Carousel>
    <!-- <NuxtImg
      src="/img/mobile-transparent.png"
      quality="85"
      fetchpriority="high"
      alt=""
      aria-hidden
      class="absolute w-[254px] h-auto -top-0.5 sm:w-[346px] sm:-top-1.5 z-10 select-none pointer-events-none"
    /> -->
    <p class="mt-8 text-center text-grey-200 text-sm sm:text-base">{{ currentImageTitle }}</p>
  </div>
</template>
