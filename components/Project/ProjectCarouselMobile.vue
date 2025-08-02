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
  <div class="flex flex-col items-center relative pt-4 h-[534px] sm:h-[635px]">
    <Carousel
      v-bind="galleryConfig"
      v-model="currentSlide"
      class="carousel-mobile rounded max-w-[222px] sm:max-w-[262px]"
    >
      <Slide v-for="(image, index) in images" :key="image.src">
        <NuxtImg
          :src="image.src"
          sizes="222px sm:262px"
          quality="85"
          :alt="image.title"
          class="w-[222px] sm:w-full h-full object-cover pointer-events-none select-none"
          :fetchpriority="index === 0 ? 'high' : 'auto'"
        />
      </Slide>
      <template #addons>
        <Navigation v-if="isMounted" class="transition-all duration-300" />
      </template>
    </Carousel>
    <NuxtImg
      src="/img/mobile-transparent.png"
      quality="85"
      fetchpriority="high"
      sizes="254px sm:300px"
      alt=""
      aria-hidden
      class="absolute w-[254px] h-auto top-0.5 sm:top-0 sm:w-[300px] z-10 select-none pointer-events-none"
    />
    <p class="absolute bottom-0 text-center text-grey-200 text-sm sm:text-base">
      {{ currentImageTitle }}
    </p>
  </div>
</template>
