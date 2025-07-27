export const getSmartAdjacent = <T>(array: T[], index: number): T[] => {
  const length = array.length

  if (length < 2) return []

  if (index === 0) {
    return [array[1], array[2]].filter(Boolean)
  }

  if (index === length - 1) {
    return [array[length - 2], array[0]]
  }

  return [array[index - 1], array[index + 1]]
}
