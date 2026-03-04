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
    <HomeSection8GetStarted />
    <SectionFAQ />
    <SectionHelpCTA />
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

useHead({
  title: 'PTERI Wallet – Secure Self-Custody Litecoin Wallet + Web Wallet | Kakr Labs',
  meta: [
    { name: 'description', content: 'PTERI Wallet is a secure self-custody Litecoin wallet for identity, trust, payments, privacy, and blockchain-based authentication. Web + iOS + Android.' },
    // Open Graph
    { property: 'og:title', content: 'PTERI Wallet – Secure Self-Custody Litecoin Wallet + Web Wallet' },
    { property: 'og:description', content: 'PTERI Wallet is a secure self-custody Litecoin wallet for identity, trust, payments, privacy, and blockchain-based authentication. Web + iOS + Android.' },
    { property: 'og:url', content: 'https://pteri.kakr.org' },
    { property: 'og:image', content: 'https://pteri.kakr.org/pteri-wallet-og.jpg' },
    { property: 'og:image:secure_url', content: 'https://pteri.kakr.org/pteri-wallet-og.jpg' },
    { property: 'og:image:type', content: 'image/jpeg' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { property: 'og:image:alt', content: 'PTERI Wallet - Secure Self-Custody Litecoin Wallet' },
    // Twitter Card
    { name: 'twitter:title', content: 'PTERI Wallet – Secure Self-Custody Litecoin Wallet' },
    { name: 'twitter:description', content: 'Secure self-custody Litecoin wallet for identity, trust, and payments.' },
    { name: 'twitter:image', content: 'https://pteri.kakr.org/pteri-wallet-og.jpg' },
  ],
  link: [
    { rel: 'canonical', href: 'https://pteri.kakr.org' }
  ]
})
</script>