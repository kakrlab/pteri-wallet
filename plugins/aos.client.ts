import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('app:mounted', () => {
    window.setTimeout(() => {
      window.requestAnimationFrame(() => {
        AOS.init({
          duration: 800,
          easing: 'ease-out-cubic',
          once: true,
          offset: 80,
          delay: 0,
          anchorPlacement: 'top-bottom',
        })
      })
    }, 150)
  })
})
