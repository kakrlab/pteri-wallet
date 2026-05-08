/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  safelist: [
    'bg-page-dark',
    'bg-page-mid',
    'bg-card-dark',
    'bg-screen-dark',
    'bg-footer-dark',
    'bg-nav-dark',
    // Arbitrary values used in components
    { pattern: /bg-\[#/ },
    { pattern: /text-\[#/ },
    { pattern: /border-\[#/ },
    { pattern: /from-\[#/ },
    { pattern: /to-\[#/ },
    { pattern: /shadow-\[#/ },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'page-dark': '#050a1a',
        'page-mid': '#070d1f',
        'card-dark': '#0d1530',
        'screen-dark': '#0a0f20',
        'footer-dark': '#030712',
      },
    },
  },
  plugins: [],
}
