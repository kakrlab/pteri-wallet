// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: 'https://www.pteri.org/pterifavicon.png' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Default OG tags (can be overridden per page)
        { property: 'og:site_name', content: 'PTERI Wallet' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'PTERI Wallet – Secure Self-Custody Litecoin Wallet' },
        { property: 'og:description', content: 'PTERI Wallet is a secure self-custody Litecoin wallet for identity, trust, payments, privacy, and blockchain-based authentication.' },
        { property: 'og:url', content: 'https://pteri.kakr.org' },
        { property: 'og:image', content: 'https://pteri.kakr.org/pteri-wallet-og.jpg' },
        { property: 'og:image:secure_url', content: 'https://pteri.kakr.org/pteri-wallet-og.jpg' },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'PTERI Wallet - Secure Self-Custody Litecoin Wallet' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@pteriwallet' },
        { name: 'twitter:image', content: 'https://pteri.kakr.org/pteri-wallet-og.jpg' },
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
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },
})