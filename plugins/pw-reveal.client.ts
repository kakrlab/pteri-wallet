// Scroll-reveal for the PTERI Wallet pages (styles in assets/css/pteri-wallet-polish.css).
// Only below-the-fold elements are hidden, so the first screen and no-JS rendering are never blank.
const TARGETS = [
  '.pw main .section-head',
  '.pw main .path',
  '.pw main .device',
  '.pw main .screenshot-grid figure',
  '.pw main .theme-layout > *',
  '.pw main .security-pillars > div',
  '.pw main .security-bridge',
  '.pw main .flow-card',
  '.pw main .split > div',
  '.pw main .step',
  '.pw main .banner',
  '.pw main .faq details',
  '.pw main .setup-panel',
  '.pw main .help-block',
  '.pw main .quote-note',
].join(',')

export default defineNuxtPlugin((nuxtApp) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue
      e.target.classList.add('is-in')
      io.unobserve(e.target)
    }
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

  const scan = () => {
    const seen = new Map<Element, number>()
    document.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
      if (el.classList.contains('pw-reveal') || el.getBoundingClientRect().top < window.innerHeight * 0.92) return
      // Stagger siblings that sit in the same grid/list.
      const parent = el.parentElement as Element
      const i = seen.get(parent) ?? 0
      seen.set(parent, i + 1)
      el.style.setProperty('--d', `${Math.min(i, 5) * 80}ms`)
      el.classList.add('pw-reveal')
      io.observe(el)
    })
  }

  nuxtApp.hook('app:mounted', () => setTimeout(scan, 60))
  nuxtApp.hook('page:finish', () => setTimeout(scan, 60))
})
