<script lang="ts" setup>
import type { ImageModel } from '~/assets/ts'

defineProps<{
  images: ImageModel[]
}>()

const { mdDown } = useBreakpoints()

const currentSlide = ref(0)
const slideTo = (nextSlide: number) => (currentSlide.value = nextSlide)

const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

// TODO: Check config props once again
const galleryConfig = computed(() => ({
  itemsToShow: 1,
  wrapAround: true,
  slideEffect: 'fade',
  mouseDrag: false,
  touchDrag: false,
}))

// TODO: Check config props once again
const thumbnailsConfig = computed(() => ({
  height: !isMounted.value ? 160 : mdDown.value ? 80 : 160,
  itemsToShow: !isMounted.value ? 3 : mdDown.value ? 2 : 3,
  touchDrag: false,
  gap: 8,
}))
</script>

<template>
  <Carousel v-bind="galleryConfig" v-model="currentSlide">
    <Slide v-for="image in images" :key="image.src" class="rounded overflow-hidden aspect-[16/9]">
      <NuxtImg
        src="/img/projects/akordia/akordia-homepage.webp"
        sizes="100vw sm:50vw lg:976px"
        quality="85"
        alt="Akordia homepage screenshot"
        class="w-full h-full object-contain"
        fetchpriority="high"
      />
    </Slide>
  </Carousel>

  <Carousel v-bind="thumbnailsConfig" v-model="currentSlide" class="mt-2.5">
    <Slide v-for="image in images" :key="image.src" class="rounded overflow-hidden">
      <template #default="{ currentIndex, isActive }">
        <div
          :class="[
            isActive ? 'opacity-100' : 'opacity-60',
            'rounded overflow-hidden h-full w-full cursor-pointer transition-all',
          ]"
          @click="slideTo(currentIndex)"
        >
          <NuxtImg
            :src="image.src"
            :alt="image.title"
            width="600"
            height="400"
            fetchpriority="low"
            class="w-full h-full object-cover"
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
