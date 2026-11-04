// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/global.css', '~/assets/css/pteri-wallet.css', '~/assets/css/pteri-wallet-polish.css'],
  app: {
    baseURL: '/',
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/wallet/pteri-logo.png' },
        { rel: 'apple-touch-icon', href: '/wallet/pteri-logo.png' },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-BMJ6F1C4GG',
          async: true,
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-BMJ6F1C4GG');`,
        },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Defaults (overridden per page by usePwSeo)
        { name: 'description', content: 'Choose your PTERI Wallet experience, plan a compatible restore, and explore wallet and supported signing guidance.' },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },
        { name: 'theme-color', content: '#5b3fd6' },
        { name: 'application-name', content: 'PTERI Wallet' },
        { property: 'og:site_name', content: 'PTERI Wallet' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: 'PTERI Wallet — Litecoin and supported signing experiences' },
        { property: 'og:description', content: 'Choose your PTERI Wallet experience, plan a compatible restore, and explore wallet and supported signing guidance.' },
        { property: 'og:url', content: 'https://pteri.kakr.org' },
        { property: 'og:image', content: 'https://pteri.kakr.org/pteri-wallet-og.png' },
        { property: 'og:image:secure_url', content: 'https://pteri.kakr.org/pteri-wallet-og.png' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'PTERI Wallet: a security wallet for the AI era, shown with the wallet dashboard and message-signing screens' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@pteriwallet' },
        { name: 'twitter:title', content: 'PTERI Wallet — Litecoin and supported signing experiences' },
        { name: 'twitter:description', content: 'Choose your PTERI Wallet experience, plan a compatible restore, and explore wallet and supported signing guidance.' },
        { name: 'twitter:image', content: 'https://pteri.kakr.org/pteri-wallet-og.png' },
        { name: 'twitter:image:alt', content: 'PTERI Wallet: a security wallet for the AI era' },
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: [300, 400, 500, 600, 700],
        Inter: [400, 500, 600, 700, 800],
      },
      display: 'swap',
    }],
  ],

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    exposeConfig: false,
  },

  compatibilityDate: '2024-10-16',
  nitro: {
    preset: 'static',
    output: {
      dir: 'dist',
      publicDir: 'dist',
    },
    prerender: {
      crawlLinks: true,
      routes: ['/', '/get-started', '/security', '/compatibility', '/help', '/about/privacy-policy', '/about/terms-of-service']
    }
  },
})
