<template>
  <div>
    <cytoslider />
    <HomeSection1WhatIsPteri />
    <HomeSection2WhyDifferent />
    <SectionSecurityTrust />
    <HomeSection3WalletLogin />
    <!-- Keeping original security section as it has different visual style/content -->
    <HomeSection4Security />
    <HomeSection5Usage />
    <SectionWhoItsFor />
    <HomeSection6Litecoin />
    <HomeSection7Developers />
    <SectionFAQ />
    <SectionHelpCTA />
    <HomeSection8GetStarted />
  </div>
</template>

<script setup>
import Cytoslider from '~/components/cytoslider.vue'
import HomeSection1WhatIsPteri from '~/components/home/Section1_WhatIsPteri.vue'
import HomeSection2WhyDifferent from '~/components/home/Section2_WhyDifferent.vue'
import HomeSection3WalletLogin from '~/components/home/Section3_WalletLogin.vue'
import HomeSection4Security from '~/components/home/Section4_Security.vue'
import HomeSection5Usage from '~/components/home/Section5_Usage.vue'
import HomeSection6Litecoin from '~/components/home/Section6_Litecoin.vue'
import HomeSection7Developers from '~/components/home/Section7_Developers.vue'
import HomeSection8GetStarted from '~/components/home/Section8_GetStarted.vue'

// New Components
import SectionSecurityTrust from '~/components/home/Section_SecurityTrust.vue'
import SectionWhoItsFor from '~/components/home/Section_WhoItsFor.vue'
import SectionFAQ from '~/components/home/Section_FAQ.vue'
import SectionHelpCTA from '~/components/home/Section_HelpCTA.vue'

useSeoMeta({
  title: 'PTERI Wallet – Secure Self-Custody Litecoin Wallet + Web Wallet | Kakr Labs',
  description: 'PTERI Wallet is a secure self-custody Litecoin wallet for identity, trust, payments, privacy, and blockchain-based authentication. Web + iOS + Android.',
  ogTitle: 'PTERI Wallet – Secure Self-Custody Litecoin Wallet + Web Wallet',
  ogDescription: 'PTERI Wallet is a secure self-custody Litecoin wallet for identity, trust, payments, privacy, and blockchain-based authentication. Web + iOS + Android.',
  ogUrl: 'https://pteri.kakr.org',
  ogImage: 'https://pteri.kakr.org/pteri-wallet-og.jpg',
  ogImageWidth: '1200',
  ogImageHeight: '630',
  ogImageType: 'image/jpeg',
  ogImageAlt: 'PTERI Wallet - Secure Self-Custody Litecoin Wallet',
  ogType: 'website',
  ogSiteName: 'PTERI Wallet',
  twitterCard: 'summary_large_image',
  twitterTitle: 'PTERI Wallet – Secure Self-Custody Litecoin Wallet',
  twitterDescription: 'Secure self-custody Litecoin wallet for identity, trust, and payments.',
  twitterImage: 'https://pteri.kakr.org/pteri-wallet-og.jpg',
})

useHead({
  link: [{ rel: 'canonical', href: 'https://pteri.kakr.org' }]
})
</script>