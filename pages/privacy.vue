<template>
  <div class="min-h-screen bg-page-dark">
    <!-- Hero header -->
    <div class="border-b border-white/10 bg-page-mid">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
          <span class="text-blue-400 text-xs font-semibold tracking-wide uppercase">Legal</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p class="text-gray-400 text-lg">PTERI Wallet is designed with a "Privacy First" philosophy. Your data belongs to you — not us.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div class="space-y-4">

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold flex-shrink-0">1</span>
            No Data Collection
          </h2>
          <p class="text-gray-400 leading-relaxed">
            We do not collect, store, or process any personal information. When you use PTERI Wallet, you are interacting directly with the Litecoin blockchain. We do not have servers that store your transaction history, balances, or keys.
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold flex-shrink-0">2</span>
            Zero Trackers
          </h2>
          <p class="text-gray-400 leading-relaxed">
            Our website and mobile applications do not use third-party analytics trackers, advertising pixels, or cookie-based profiling tools. We do not track your behavior or usage patterns.
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold flex-shrink-0">3</span>
            Self-Custody
          </h2>
          <p class="text-gray-400 leading-relaxed">
            You are the sole custodian of your private keys. Your keys are generated locally on your device and are encrypted using your device's secure enclave (where available). We never have access to your keys or your funds.
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold flex-shrink-0">4</span>
            Network Communication
          </h2>
          <p class="text-gray-400 leading-relaxed">
            The wallet communicates with public Litecoin nodes to broadcast transactions and fetch balances. This communication is standard network traffic and does not include personally identifiable information (PII).
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold flex-shrink-0">5</span>
            Contact
          </h2>
          <p class="text-gray-400 leading-relaxed">
            If you have questions about our privacy practices, please contact us at
            <a href="mailto:privacy@kakr.org" class="text-blue-400 hover:text-blue-300 transition-colors">privacy@kakr.org</a>.
          </p>
        </div>

      </div>

      <!-- Footer note -->
      <div class="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-gray-600 text-sm">Last updated: {{ new Date().getFullYear() }}</p>
        <div class="flex gap-4">
          <NuxtLink to="/terms" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">Terms of Use →</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  link: [{ rel: 'canonical', href: 'https://pteri.kakr.org/about/privacy-policy' }],
  title: 'Privacy Policy | PTERI Wallet',
  meta: [
    { name: 'description', content: 'PTERI Wallet Privacy Policy. No data collection, zero trackers, and complete self-custody of your identity and funds.' },
    { property: 'og:title', content: 'Privacy Policy | PTERI Wallet' },
    { property: 'og:description', content: 'PTERI Wallet Privacy Policy. No data collection, zero trackers, and complete self-custody of your identity and funds.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pteri.kakr.org/about/privacy-policy' },
    { property: 'og:image', content: 'https://pteri.kakr.org/pteri-wallet-og.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Privacy Policy | PTERI Wallet' },
    { name: 'twitter:description', content: 'PTERI Wallet Privacy Policy. No data collection, zero trackers, and complete self-custody of your identity and funds.' },
    { name: 'twitter:image', content: 'https://pteri.kakr.org/pteri-wallet-og.png' },
    { name: 'twitter:site', content: '@pteriwallet' }
  ]
})
</script>
