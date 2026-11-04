<template>
  <section class="py-16 bg-page-dark">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div data-aos="zoom-in" class="relative bg-gradient-to-br from-[#0d1535] to-[#0a0f2e] border border-blue-500/20 rounded-3xl overflow-hidden">

        <!-- Background glow effects -->
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 right-0 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl"></div>
          <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-600/10 rounded-full blur-2xl"></div>
          <!-- Wave/particle shimmer -->
          <div class="absolute right-0 bottom-0 w-2/3 h-full opacity-40"
            style="background: radial-gradient(ellipse at 85% 70%, rgba(99,102,241,0.25) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)"></div>
          <div class="absolute right-0 top-0 w-1/2 h-full opacity-20"
            style="background: radial-gradient(ellipse at 90% 30%, rgba(168,85,247,0.3) 0%, transparent 60%)"></div>
        </div>

        <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 p-8 md:p-12 lg:p-14 items-center">

          <!-- Left: Content -->
          <div data-aos="fade-right" data-aos-delay="100">
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 rounded-md mb-6">
              <svg class="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <span class="text-white text-[10px] font-semibold tracking-widest uppercase">Explore the Kakr.ai Ecosystem</span>
            </div>

            <!-- Headline -->
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Discover more<br>beyond <span class="text-purple-400">the wallet.</span>
            </h2>

            <!-- Description -->
            <p class="text-gray-400 text-base leading-relaxed mb-4 max-w-md">
              PTERI Wallet is part of the broader Kakr.ai ecosystem. Explore our APIs, developer tools, and security products built for identity, authentication, privacy, and the AI era.
            </p>

            <p class="flex items-center gap-2 text-gray-500 text-sm mb-7">
              <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              Learn more about Kakr.ai and explore the full platform.
            </p>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-medium hover:border-blue-500/40 transition-colors cursor-default">
                <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                APIs & SDKs
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-medium hover:border-purple-500/40 transition-colors cursor-default">
                <svg class="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                Developer tools
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-medium hover:border-green-500/40 transition-colors cursor-default">
                <svg class="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                Security infrastructure
              </span>
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-gray-300 text-xs font-medium hover:border-cyan-500/40 transition-colors cursor-default">
                <svg class="w-3.5 h-3.5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                More products
              </span>
            </div>

            <!-- CTA -->
            <a href="https://kakr.ai" target="_blank" rel="noopener"
              class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30 text-sm">
              Visit kakr.ai
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </a>
          </div>

          <!-- Right: Visual -->
          <div data-aos="fade-left" data-aos-delay="200" class="flex items-center justify-center">
            <div class="relative w-72 h-72 md:w-80 md:h-80">

              <!-- Center glow -->
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-48 h-48 rounded-full bg-blue-600/20 blur-2xl"></div>
              </div>
              <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div class="w-32 h-32 rounded-full bg-purple-600/20 blur-xl"></div>
              </div>

              <!-- Outer ring with glow -->
              <div class="absolute inset-0 rounded-full border border-blue-500/40 animate-spin" style="animation-duration: 20s; box-shadow: 0 0 20px rgba(59,130,246,0.15), inset 0 0 20px rgba(59,130,246,0.05);"></div>
              <!-- Middle ring -->
              <div class="absolute inset-6 rounded-full border border-purple-500/30 animate-spin" style="animation-duration: 15s; animation-direction: reverse; box-shadow: 0 0 15px rgba(168,85,247,0.1);"></div>

              <!-- Glowing dots on outer ring -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_3px_rgba(96,165,250,0.8)]" style="margin-top: -4px;"></div>
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_3px_rgba(96,165,250,0.8)]" style="margin-bottom: -4px;"></div>
              <div class="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_3px_rgba(192,132,252,0.8)]" style="margin-left: -4px;"></div>
              <div class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_3px_rgba(192,132,252,0.8)]" style="margin-right: -4px;"></div>

              <!-- Orbit icons -->
              <!-- Top: code -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0a0f2e] border border-blue-500/60 rounded-full flex items-center justify-center" style="box-shadow: 0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(59,130,246,0.2);">
                <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
              <!-- Left: cube -->
              <div class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0a0f2e] border border-purple-500/60 rounded-full flex items-center justify-center" style="box-shadow: 0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(168,85,247,0.2);">
                <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
              </div>
              <!-- Right: shield -->
              <div class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0a0f2e] border border-green-500/60 rounded-full flex items-center justify-center" style="box-shadow: 0 0 20px rgba(34,197,94,0.5), 0 0 40px rgba(34,197,94,0.2);">
                <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <!-- Bottom: brain/AI -->
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-14 h-14 bg-[#0a0f2e] border border-cyan-500/60 rounded-full flex items-center justify-center" style="box-shadow: 0 0 20px rgba(6,182,212,0.5), 0 0 40px rgba(6,182,212,0.2);">
                <svg class="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>

              <!-- Center logo -->
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <img src="https://kakr.ai/kakrlabs-logo.png" alt="Kakr.ai" class="w-28 h-28 object-contain mb-3" />
                <span class="text-white font-bold text-xl tracking-widest">KAKR.AI</span>
              </div>



            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>
