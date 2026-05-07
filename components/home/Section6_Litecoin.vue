<template>
  <section class="py-16 bg-[#050a1a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div data-aos="zoom-in" class="bg-[#0d1530] border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden">
        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#345D9D]/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <!-- Litecoin logo -->
          <div data-aos="fade-right" class="flex-shrink-0">
            <div class="w-24 h-24 bg-[#345D9D]/20 border border-[#345D9D]/40 rounded-full flex items-center justify-center">
              <span class="text-[#345D9D] font-black text-5xl">Ł</span>
            </div>
          </div>

          <!-- Content -->
          <div data-aos="fade-left" class="flex-1 text-center lg:text-left">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Built on Litecoin</h2>
            <p class="text-gray-400 text-lg mb-6 max-w-2xl">
              PTERI Wallet is powered by Litecoin — the proven, fast, and low-fee blockchain that gives PTERI a stable, trustworthy foundation.
            </p>
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span v-for="tag in tags" :key="tag"
                class="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-[#345D9D]/50 hover:text-white transition-colors">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tags = ['Proven & Reliable', 'Secure Proof-of-Work', 'Fast & Low-Fee', 'Globally Accessible', 'MWEB Privacy', 'Designed to Last']
</script>
