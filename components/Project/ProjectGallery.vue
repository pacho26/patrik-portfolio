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
  touchDrag: true,
  gap: 8,
}))
</script>

<template>
  <div>
    <Carousel v-bind="galleryConfig" v-model="currentSlide">
      <Slide v-for="image in images" :key="image.src" class="rounded overflow-hidden">
        <div class="aspect-[16/9] w-full">
          <NuxtImg
            :src="image.src"
            sizes="100vw sm:50vw lg:976px"
            quality="85"
            :alt="image.title"
            class="w-full h-full object-cover"
            fetchpriority="high"
          />
        </div>
      </Slide>
    </Carousel>

    <div class="h-[80px] md:h-[160px] mt-2.5">
      <Carousel v-if="isMounted" v-bind="thumbnailsConfig" v-model="currentSlide">
        <Slide v-for="image in images" :key="image.src" class="rounded overflow-hidden bg-dark">
          <template #default="{ currentIndex, isActive }">
            <div
              :class="[
                isActive ? 'opacity-100' : 'opacity-30',
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
          <Navigation class="opacity-70 md:opacity-30 hover:opacity-100 transition-all" />
        </template>
      </Carousel>
      <div v-else class="h-full">
        <div class="flex gap-2 h-full md:hidden">
          <div
            v-for="n in 2"
            :key="'sm-' + n"
            class="rounded bg-grey-100 animate-pulse w-full h-full"
          ></div>
        </div>
        <div class="hidden md:flex gap-2 h-full">
          <div
            v-for="n in 3"
            :key="'md-' + n"
            class="rounded bg-grey-100 animate-pulse w-full h-full"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>
