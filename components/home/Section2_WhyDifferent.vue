<template>
  <!-- "Passwords. OTPs. Tokens. All Broken." section -->
  <section class="py-20 bg-[#070d1f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div data-aos="fade-up" class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Passwords. OTPs. Tokens. All Broken.
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          Legacy authentication is insecure, outdated, and wasn't built for today's threats.
        </p>
      </div>

      <!-- Comparison grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Passwords -->
        <div data-aos="fade-up" data-aos-delay="0" class="bg-[#0d1530] border border-red-500/20 rounded-2xl p-6 hover:border-red-500/40 transition-colors">
          <div class="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-lg mb-3">Passwords</h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Easy to guess
            </li>
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Reused everywhere
            </li>
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Stolen in breaches
            </li>
          </ul>
        </div>

        <!-- OTPs / SMS -->
        <div data-aos="fade-up" data-aos-delay="100" class="bg-[#0d1530] border border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 transition-colors">
          <div class="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-lg mb-3">OTPs / SMS</h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Phishing & SIM swap
            </li>
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Intercepted in transit
            </li>
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Poor user experience
            </li>
          </ul>
        </div>

        <!-- API Tokens -->
        <div data-aos="fade-up" data-aos-delay="200" class="bg-[#0d1530] border border-yellow-500/20 rounded-2xl p-6 hover:border-yellow-500/40 transition-colors">
          <div class="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-lg mb-3">API Tokens</h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Hard to manage
            </li>
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              Leak in logs & repos
            </li>
            <li class="flex items-start gap-2 text-gray-400 text-sm">
              <span class="text-red-400 mt-0.5 flex-shrink-0">✗</span>
              No user context
            </li>
          </ul>
        </div>

        <!-- PTERI -->
        <div data-aos="fade-up" data-aos-delay="300" class="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/40 rounded-2xl p-6 hover:border-blue-400/60 transition-colors relative overflow-hidden">
          <div class="absolute top-3 right-3 px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 rounded-full">
            <span class="text-blue-400 text-[10px] font-semibold">SOLUTION</span>
          </div>
          <div class="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-xl flex items-center justify-center mb-4">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-lg mb-3">PTERI</h3>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-gray-300 text-sm">
              <span class="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              Cryptographic signatures
            </li>
            <li class="flex items-start gap-2 text-gray-300 text-sm">
              <span class="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              Phishing resistant
            </li>
            <li class="flex items-start gap-2 text-gray-300 text-sm">
              <span class="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              Decentralized & private
            </li>
            <li class="flex items-start gap-2 text-gray-300 text-sm">
              <span class="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              Built for AI and the future
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
