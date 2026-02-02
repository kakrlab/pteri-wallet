// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', // Set the language of the page to English
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://www.pteri.org/pterifavicon.png' },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [300, 400, 500, 600, 700],
      },
      display: 'swap',
    }],
    ['nuxt-gtag', {
      id: 'G-8YD9CV3WHL', // ✅ Your GA4 Measurement ID
      config: {
        anonymize_ip: true // Optional
      },
      debug: false // Optional: set true for development
    }]
  ],

  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Set Poppins as the default sans font
          },
        },
      },
    },
  },

  compatibilityDate: '2024-10-16',
  nitro: {
    preset: 'vercel',
  },
})