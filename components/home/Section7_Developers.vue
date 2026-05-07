<template>
  <!-- Developer Platform & MFA Infrastructure section -->
  <section class="py-20 bg-[#070d1f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <!-- Left: Description -->
        <div data-aos="fade-right">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span class="text-blue-400 text-xs font-semibold tracking-wide uppercase">Developer Platform</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Developer Platform<br>& MFA Infrastructure
          </h2>
          <p class="text-gray-400 text-lg mb-8 leading-relaxed">
            Integrate PTERI into your apps and deliver the world's finest MFA experience.
          </p>

          <ul class="space-y-3 mb-8">
            <li v-for="feature in devFeatures" :key="feature" class="flex items-center gap-3">
              <div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-300 text-sm">{{ feature }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-4">
            <a href="https://docs.kakrlabs.com" target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 text-sm">
              Explore Docs
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="https://playground.pteri.org/" target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200 text-sm">
              Try Playground
            </a>
          </div>
        </div>

        <!-- Right: Code snippet + side features -->
        <div data-aos="fade-left" class="flex flex-col gap-6">
          <!-- Code block -->
          <div class="bg-[#0a0f20] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <!-- Tab bar -->
            <div class="flex items-center gap-1 px-4 py-3 bg-[#0d1530] border-b border-white/10">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div class="flex gap-1 ml-4">
                <button class="px-3 py-1 text-xs text-white bg-white/10 rounded-md">Node.js</button>
                <button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-300 rounded-md">Python</button>
                <button class="px-3 py-1 text-xs text-gray-500 hover:text-gray-300 rounded-md">cURL</button>
              </div>
            </div>
            <!-- Code -->
            <div class="p-5 font-mono text-sm leading-relaxed overflow-x-auto">
              <p class="text-gray-500">// Import PTERI client</p>
              <p><span class="text-blue-400">import</span> <span class="text-white">&#123; PteriClient &#125;</span> <span class="text-blue-400">from</span> <span class="text-green-400">'@pteri-sdk'</span></p>
              <br>
              <p class="text-gray-500">// Create authentication challenge</p>
              <p><span class="text-blue-400">const</span> <span class="text-white">pteri</span> <span class="text-blue-400">=</span> <span class="text-blue-400">new</span> <span class="text-yellow-300">PteriClient</span><span class="text-white">(</span><span class="text-green-400">'YOUR_API_KEY'</span><span class="text-white">)</span></p>
              <p><span class="text-blue-400">const</span> <span class="text-white">challenge</span> <span class="text-blue-400">=</span> <span class="text-blue-400">await</span> <span class="text-white">pteri</span><span class="text-gray-400">.</span><span class="text-yellow-300">createChallenge</span><span class="text-white">(&#123;</span></p>
              <p class="pl-4"><span class="text-cyan-300">userId</span><span class="text-white">:</span> <span class="text-green-400">'user_123'</span><span class="text-white">,</span></p>
              <p class="pl-4"><span class="text-cyan-300">appId</span><span class="text-white">:</span> <span class="text-green-400">'app_abc'</span><span class="text-white">,</span></p>
              <p><span class="text-white">&#125;)</span></p>
              <br>
              <p class="text-gray-500">// User signs the challenge in PTERI Wallet</p>
              <p><span class="text-blue-400">const</span> <span class="text-white">signature</span> <span class="text-blue-400">=</span> <span class="text-blue-400">await</span> <span class="text-white">pteri</span><span class="text-gray-400">.</span><span class="text-yellow-300">getSignature</span><span class="text-white">(challenge)</span></p>
              <br>
              <p class="text-gray-500">// Verify signature</p>
              <p><span class="text-blue-400">const</span> <span class="text-white">result</span> <span class="text-blue-400">=</span> <span class="text-blue-400">await</span> <span class="text-white">pteri</span><span class="text-gray-400">.</span><span class="text-yellow-300">verify</span><span class="text-white">(&#123;</span></p>
              <p class="pl-4"><span class="text-cyan-300">challengeId</span><span class="text-white">:</span> <span class="text-white">challenge</span><span class="text-gray-400">.</span><span class="text-white">id,</span></p>
              <p class="pl-4"><span class="text-cyan-300">signature</span><span class="text-white">:</span> <span class="text-white">signature</span></p>
              <p><span class="text-white">&#125;)</span></p>
            </div>
          </div>

          <!-- Side feature cards -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(feat, index) in sideFeatures" :key="feat.title"
              data-aos="fade-up"
              :data-aos-delay="index * 80"
              class="bg-[#0d1530] border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" :class="feat.bgClass">
                <svg class="w-4 h-4" :class="feat.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon"/>
                </svg>
              </div>
              <h4 class="text-white font-semibold text-sm mb-1">{{ feat.title }}</h4>
              <p class="text-gray-400 text-xs leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const devFeatures = [
  'Easy SDKs & Libraries (Node.js, Python, iOS, Android)',
  'RESTful APIs with Real-time Webhooks',
  'Authentication Playground',
  'Dashboard & Analytics',
  'Scalable MFA for Millions of Users',
  'Enterprise Support & SLA',
]

const sideFeatures = [
  {
    title: 'Easy Integration',
    description: 'Get started in minutes.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    bgClass: 'bg-blue-500/10',
    iconClass: 'text-blue-400',
  },
  {
    title: 'Real-time Webhooks',
    description: 'Instant auth updates.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    bgClass: 'bg-purple-500/10',
    iconClass: 'text-purple-400',
  },
  {
    title: 'Developer Playground',
    description: 'Test & build securely.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    bgClass: 'bg-green-500/10',
    iconClass: 'text-green-400',
  },
  {
    title: 'Enterprise Ready',
    description: 'Built for scale & reliability.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    bgClass: 'bg-orange-500/10',
    iconClass: 'text-orange-400',
  },
]
</script>
