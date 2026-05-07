<template>
  <!-- "Why PTERI MFA?" + "Built for the AI Era" section -->
  <section class="py-20 bg-[#050a1a]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        <!-- Left: Why PTERI MFA? -->
        <div data-aos="fade-right">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Why PTERI MFA?</h2>
          <ul class="space-y-4">
            <li v-for="(item, index) in mfaReasons" :key="item.title"
              data-aos="fade-right"
              :data-aos-delay="index * 80"
              class="flex items-start gap-3">
              <div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg class="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div>
                <span class="text-white font-semibold text-sm">{{ item.title }}</span>
                <span class="text-gray-400 text-sm"> — {{ item.description }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Right: Built for the AI Era -->
        <div data-aos="fade-left" class="relative">
          <!-- Background glow -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-3xl blur-xl"></div>
          <div class="relative bg-[#0d1530] border border-white/10 rounded-3xl p-8 overflow-hidden">
            <!-- Decorative orb -->
            <div class="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 rounded-full blur-2xl"></div>
            <div class="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>

            <h2 class="text-2xl font-bold text-white mb-6 relative z-10">Built for the AI Era</h2>
            <div class="space-y-5 relative z-10">
              <div v-for="(item, index) in aiFeatures" :key="item.title"
                data-aos="fade-up"
                :data-aos-delay="index * 100"
                class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" :class="item.bgClass">
                  <svg class="w-5 h-5" :class="item.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-white font-semibold text-sm mb-1">{{ item.title }}</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const mfaReasons = [
  { title: 'Phishing Resistant', description: 'No passwords or OTPs to steal.' },
  { title: 'No SIM Swap Risk', description: 'Eliminates SMS-based attacks.' },
  { title: 'Decentralized & Private', description: 'Your identity stays in your control.' },
  { title: 'Works Everywhere', description: 'Web, mobile, APIs, and AI agents.' },
  { title: 'Enterprise Ready', description: 'Scalable MFA infrastructure.' },
]

const aiFeatures = [
  {
    title: 'Human Identity',
    description: 'Strong MFA for users without passwords.',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    bgClass: 'bg-blue-500/10 border border-blue-500/20',
    iconClass: 'text-blue-400',
  },
  {
    title: 'App & API Security',
    description: 'Protect your applications with cryptographic proofs.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    bgClass: 'bg-purple-500/10 border border-purple-500/20',
    iconClass: 'text-purple-400',
  },
  {
    title: 'AI Agent Identity',
    description: 'Give AI agents verifiable identities and limits.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    bgClass: 'bg-cyan-500/10 border border-cyan-500/20',
    iconClass: 'text-cyan-400',
  },
  {
    title: 'Trusted Transactions',
    description: 'Every action is signed, verified, and auditable.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgClass: 'bg-green-500/10 border border-green-500/20',
    iconClass: 'text-green-400',
  },
]
</script>
