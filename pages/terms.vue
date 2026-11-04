<template>
  <div class="min-h-screen bg-page-dark">
    <!-- Hero header -->
    <div class="border-b border-white/10 bg-page-mid">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
          <span class="text-blue-400 text-xs font-semibold tracking-wide uppercase">Legal</span>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">Terms of Use</h1>
        <p class="text-gray-400 text-lg">By using PTERI Wallet, you agree to these Terms of Use. Please read them carefully.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-16">
      <div class="space-y-4">

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">1</span>
            No Financial Advice
          </h2>
          <p class="text-gray-400 leading-relaxed">
            PTERI Wallet is a software tool. Kakr Labs does not provide financial, investment, or legal advice. You are solely responsible for your decisions and actions while using the wallet.
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">2</span>
            Self-Custody Responsibilities
          </h2>
          <p class="text-gray-400 leading-relaxed">
            You are responsible for securing your own private keys and recovery phrases. If you lose your keys, Kakr Labs <span class="text-white font-semibold">cannot</span> recover your funds or account. You acknowledge that you understand the risks involved in self-custody.
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">3</span>
            Software "As Is"
          </h2>
          <p class="text-gray-400 leading-relaxed">
            The software is provided "as is", without warranty of any kind, express or implied. To the maximum extent permitted by law, Kakr Labs disclaims all warranties, including merchantability and fitness for a particular purpose.
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">4</span>
            Compliance with Laws
          </h2>
          <p class="text-gray-400 leading-relaxed">
            You agree to use PTERI Wallet in compliance with all applicable local, state, and federal laws and regulations.
          </p>
        </div>

        <div class="bg-card-dark border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-colors">
          <h2 class="text-lg font-bold text-white mb-3 flex items-center gap-3">
            <span class="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold flex-shrink-0">5</span>
            Limitation of Liability
          </h2>
          <p class="text-gray-400 leading-relaxed">
            In no event shall Kakr Labs be liable for any damages arising out of the use or inability to use the software, even if advised of the possibility of such damages.
          </p>
        </div>

      </div>

      <!-- Footer note -->
      <div class="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p class="text-gray-600 text-sm">Last updated: {{ new Date().getFullYear() }}</p>
        <div class="flex gap-4">
          <NuxtLink to="/privacy" class="text-blue-400 hover:text-blue-300 text-sm transition-colors">Privacy Policy →</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  link: [{ rel: 'canonical', href: 'https://pteri.kakr.org/about/terms-of-service' }],
  title: 'Terms of Use | PTERI Wallet',
  meta: [
    { name: 'description', content: 'Terms of Use for PTERI Wallet. Understanding your responsibilities for self-custody and usage.' },
    { property: 'og:title', content: 'Terms of Use | PTERI Wallet' },
    { property: 'og:description', content: 'Terms of Use for PTERI Wallet. Understanding your responsibilities for self-custody and usage.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://pteri.kakr.org/about/terms-of-service' },
    { property: 'og:image', content: 'https://pteri.kakr.org/pteri-wallet-og.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Terms of Use | PTERI Wallet' },
    { name: 'twitter:description', content: 'Terms of Use for PTERI Wallet. Understanding your responsibilities for self-custody and usage.' },
    { name: 'twitter:image', content: 'https://pteri.kakr.org/pteri-wallet-og.png' },
    { name: 'twitter:site', content: '@pteriwallet' }
  ]
})
</script>
