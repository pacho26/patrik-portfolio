import { ref, onMounted, onUnmounted, computed } from 'vue'

const breakpoints = {
  sm: 640,
  md: 768,
}

export const useBreakpoints = () => {
  const width = ref(typeof window !== 'undefined' ? window.innerWidth : 0)

  const smUp = computed(() => width.value >= breakpoints.sm)
  const smDown = computed(() => width.value < breakpoints.sm)
  const mdUp = computed(() => width.value >= breakpoints.md)
  const mdDown = computed(() => width.value < breakpoints.md)

  const onResize = () => {
    width.value = window.innerWidth
  }

  onMounted(() => {
    width.value = window.innerWidth
    window.addEventListener('resize', onResize)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onResize)
  })

  return {
    smUp,
    smDown,
    mdUp,
    mdDown,
  }
}
