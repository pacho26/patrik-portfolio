<script lang="ts" setup>
import type { ImageModel } from '~/assets/ts'

defineProps<{
  images: ImageModel[]
}>()

const currentSlide = ref(0)

const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const galleryConfig = {
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: false,
  touchDrag: false,
  height: 320,
}

// TODO: Find out other config props
const thumbnailsConfig = {
  height: 160,
  itemsToShow: 3,
  touchDrag: false,
  gap: 10,
}
</script>

<template>
  <Carousel v-bind="galleryConfig" v-model="currentSlide" class="!h-[549px]">
    <Slide v-for="image in images" :key="image.src" class="rounded overflow-hidden">
      <NuxtImg
        src="/img/projects/akordia/akordia-homepage.webp"
        sizes="100vw sm:50vw lg:976px"
        quality="85"
        alt="Akordia homepage screenshot"
        fetchpriority="high"
      />
    </Slide>
  </Carousel>

  <Carousel v-bind="thumbnailsConfig" v-model="currentSlide" class="mt-2.5 !h-[179px]">
    <Slide v-for="image in images" :key="image.src">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="[
            isActive ? 'opacity-100' : 'opacity-60',
            'thumbnail rounded overflow-hidden h-full w-full cursor-pointer transition-all',
          ]"
          @click="slideTo(currentIndex)"
        >
          <NuxtImg
            :src="image.src"
            :alt="image.title"
            fetchpriority="low"
            class="object-cover w-full h-full"
          />
        </div>
      </template>
    </Slide>

    <template #addons>
      <Navigation class="opacity-30 hover:opacity-100 transition-all" />
    </template>
  </Carousel>
</template>

<style>
.carousel {
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}
</style>
