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
  <div>
    <Carousel
      v-bind="galleryConfig"
      v-model="currentSlide"
      class="carousel-horizontal rounded overflow-hidden"
    >
      <Slide v-for="(image, idx) in images" :key="image.src">
        <div class="relative aspect-[16/9] w-full">
          <!-- TODO: Make project images a bit smaller because of smaller view -->
          <NuxtImg
            :src="image.src"
            sizes="90vw lg:976px"
            quality="85"
            :alt="image.title"
            class="w-full h-full object-cover pointer-events-none select-none"
            :fetchpriority="idx === 0 ? 'high' : 'auto'"
          />
        </div>
      </Slide>
      <template #addons>
        <Navigation v-if="isMounted" class="transition-all duration-300" />
      </template>
    </Carousel>
    <p class="mt-2 text-center text-grey-200 text-sm sm:text-base">{{ currentImageTitle }}</p>
  </div>
</template>
