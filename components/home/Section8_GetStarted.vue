<template>
  <!-- Download & Get Started section -->
  <section id="download" class="py-20 bg-[#050a1a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div data-aos="fade-up" class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Download &amp; Get Started
        </h2>
        <p class="text-gray-400 text-lg">Your identity. Your wallet. Your control.</p>
      </div>

      <!-- Download cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <!-- iOS -->
        <div data-aos="fade-up" data-aos-delay="0" class="bg-[#0d1530] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-blue-500/40 transition-all duration-300 group">
          <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
            <svg class="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-xl mb-2">iOS Wallet</h3>
          <p class="text-gray-400 text-sm mb-6">For iPhone and iPad.</p>
          <button @click="openModal"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200 text-sm w-full justify-center">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Download on App Store
          </button>
        </div>

        <!-- Android -->
        <div data-aos="fade-up" data-aos-delay="100" class="bg-[#0d1530] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center hover:border-green-500/40 transition-all duration-300 group">
          <div class="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-all">
            <svg class="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.523 15.341l1.505-2.607a.5.5 0 00-.866-.5l-1.524 2.638A9.013 9.013 0 0112 14a9.013 9.013 0 01-4.638 1.872l-1.524-2.638a.5.5 0 00-.866.5l1.505 2.607A9.04 9.04 0 003 22h18a9.04 9.04 0 00-3.477-6.659zM8.5 19a1 1 0 110-2 1 1 0 010 2zm7 0a1 1 0 110-2 1 1 0 010 2zM7.392 6.5l-1.5-2.598a.5.5 0 01.866-.5l1.52 2.633A9.04 9.04 0 0112 5a9.04 9.04 0 013.722.035l1.52-2.633a.5.5 0 01.866.5L16.608 5.5A9.04 9.04 0 0121 13H3a9.04 9.04 0 014.392-6.5z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-xl mb-2">Android Wallet</h3>
          <p class="text-gray-400 text-sm mb-6">For Android devices.</p>
          <button @click="openModal"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200 text-sm w-full justify-center">
            <svg class="w-4 h-4 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 15.341l1.505-2.607a.5.5 0 00-.866-.5l-1.524 2.638A9.013 9.013 0 0112 14a9.013 9.013 0 01-4.638 1.872l-1.524-2.638a.5.5 0 00-.866.5l1.505 2.607A9.04 9.04 0 013 22h18a9.04 9.04 0 00-3.477-6.659z"/></svg>
            Get it on Google Play
          </button>
        </div>

        <!-- Web Wallet -->
        <div data-aos="fade-up" data-aos-delay="200" class="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 flex flex-col items-center text-center hover:border-blue-400/50 transition-all duration-300 group">
          <div class="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-blue-500/30 transition-all">
            <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-xl mb-2">Web Wallet</h3>
          <p class="text-gray-400 text-sm mb-6">Access your wallet directly from your browser.</p>
          <a href="https://wallet.pteri.org" target="_blank"
            class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 text-sm w-full justify-center shadow-lg shadow-blue-600/30">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"/></svg>
            Launch Web Wallet
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { open: openModal } = useDownloadModal()
</script>
