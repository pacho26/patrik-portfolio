export const useTouchDevice = () => {
  const isTouchDevice = ref(false)

  const detectTouch = () => {
    isTouchDevice.value = 'ontouchstart' in window || navigator.maxTouchPoints > 0
  }

  onMounted(() => {
    detectTouch()
  })

  return { isTouchDevice }
}
