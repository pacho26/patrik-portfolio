<script lang="ts" setup>
import type { ImageModel } from '~/assets/ts'

defineProps<{
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
</script>

<template>
  <Carousel v-bind="galleryConfig" v-model="currentSlide" class="rounded overflow-hidden">
    <Slide v-for="(image, idx) in images" :key="image.src">
      <div class="aspect-[16/9] w-full">
        <NuxtImg
          :src="image.src"
          sizes="100vw sm:50vw lg:976px"
          quality="85"
          :alt="image.title"
          class="w-full h-full object-cover"
          :fetchpriority="idx === 0 ? 'high' : 'medium'"
        />
      </div>
    </Slide>
    <template #addons>
      <Navigation
        v-if="isMounted"
        class="opacity-70 md:opacity-40 hover:opacity-100 transition-all"
      />
    </template>
  </Carousel>
</template>
