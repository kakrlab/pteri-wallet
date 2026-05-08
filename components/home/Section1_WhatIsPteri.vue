<template>
  <!-- "What is PTERI Wallet?" section -->
  <section id="what-is-pteri" class="py-20 bg-page-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div data-aos="fade-up" class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          What is PTERI Wallet?
        </h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">
          More than a wallet. It's your identity layer and the world's finest MFA infrastructure.
        </p>
      </div>

      <!-- Feature cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        <!-- Self-Custody Wallet -->
        <div data-aos="fade-up" data-aos-delay="0" class="bg-card-dark border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300 group">
          <div class="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
            <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-base mb-2">Self-Custody Wallet</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Store and manage your Litecoin with full ownership and complete control.</p>
        </div>

        <!-- MFA & Login Approvals -->
        <div data-aos="fade-up" data-aos-delay="100" class="bg-card-dark border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 group">
          <div class="w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
            <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-base mb-2">MFA & Login Approvals</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Replace passwords, OTPs, and tokens with cryptographic signatures.</p>
        </div>

        <!-- Privacy with MWEB -->
        <div data-aos="fade-up" data-aos-delay="200" class="bg-card-dark border border-white/10 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 group">
          <div class="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
            <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-base mb-2">Privacy with MWEB</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Protect your financial and transaction privacy using MWEB extension blocks.</p>
        </div>

        <!-- Identity Layer -->
        <div data-aos="fade-up" data-aos-delay="300" class="bg-card-dark border border-white/10 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 group">
          <div class="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
            <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-base mb-2">Identity Layer</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Your wallet becomes your identity across apps, services, and AI agents.</p>
        </div>

        <!-- AI & Future Ready -->
        <div data-aos="fade-up" data-aos-delay="400" class="bg-card-dark border border-white/10 rounded-2xl p-6 hover:border-indigo-500/40 transition-all duration-300 group">
          <div class="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
            <svg class="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-base mb-2">AI & Future Ready</h3>
          <p class="text-gray-400 text-sm leading-relaxed">Built for the future of trust, verifying humans, apps, and AI agents.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
