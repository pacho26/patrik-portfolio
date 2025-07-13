export default defineNuxtPlugin(() => {
  if (import.meta.client) {
    const loadStarsCSS = () => {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '/css/stars.css'
      link.setAttribute('fetchpriority', 'low')
      document.head.appendChild(link)
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadStarsCSS)
    } else {
      setTimeout(loadStarsCSS, 50)
    }
  }
})
