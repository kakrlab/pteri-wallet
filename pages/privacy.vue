<template>
  <div class="py-24 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        
        <div class="prose prose-indigo max-w-none text-gray-600">
          <p class="lead text-lg mb-6">
            PTERI Wallet is designed with a "Privacy First" philosophy. We believe that your financial data and identity belong to you, not us.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. No Data Collection</h3>
          <p>
            We do not collect, store, or process any personal information. When you use PTERI Wallet, you are interacting directly with the Litecoin blockchain. We do not have servers that store your transaction history, balances, or keys.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Zero Trackers</h3>
          <p>
            Our website and mobile applications do not use third-party analytics trackers, advertising pixels, or cookie-based profiling tools. We do not track your behavior or usage patterns.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Self-Custody</h3>
          <p>
            You are the sole custodian of your private keys. Your keys are generated locally on your device and are encrypted using your device's secure enclave (where available). We never have access to your keys or your funds.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Network Communication</h3>
          <p>
            The wallet communicates with public Litecoin nodes to broadcast transactions and fetch balances. This communication is standard network traffic and does not include personally identifiable information (PII).
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. Contact</h3>
          <p>
            If you have questions about our privacy practices, please contact us at <a href="mailto:privacy@kakr.org">privacy@kakr.org</a>.
          </p>

          <div class="mt-12 pt-8 border-t border-gray-100 text-sm md:text-base">
            <p>Last updated: {{ new Date().getFullYear() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Privacy Policy | PTERI Wallet',
  meta: [
    { name: 'description', content: 'PTERI Wallet Privacy Policy. No data collection, zero trackers, and complete self-custody of your identity and funds.' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'Privacy Policy | PTERI Wallet' },
    { property: 'og:description', content: 'PTERI Wallet Privacy Policy. No data collection, zero trackers, and complete self-custody of your identity and funds.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pteri.kakr.org/privacy' },
    { property: 'og:image', content: 'https://pteri.kakr.org/og-image.png' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Privacy Policy | PTERI Wallet' },
    { name: 'twitter:description', content: 'PTERI Wallet Privacy Policy. No data collection, zero trackers, and complete self-custody of your identity and funds.' },
    { name: 'twitter:image', content: 'https://pteri.kakr.org/og-image.png' },
    { name: 'twitter:site', content: '@pteriwallet' }
  ]
})
</script>
