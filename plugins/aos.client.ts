import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        AOS.init({
          duration: 700,
          easing: 'ease-out-cubic',
          once: true,
          offset: 60,
          delay: 0,
        })
      })
    }, 150)
  })
})
