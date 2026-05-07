<template>
  <!-- Security Trust section (dark themed) -->
  <section class="py-20 bg-[#070d1f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div data-aos="fade-up" class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Security by Design</h2>
        <p class="text-gray-400 text-lg max-w-2xl mx-auto">PTERI Wallet is built with security as the default — not an afterthought.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(item, index) in securityItems" :key="item.title"
          data-aos="fade-up"
          :data-aos-delay="index * 80"
          class="bg-[#0d1530] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group">
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 border transition-all group-hover:scale-110"
            :class="item.bgClass">
            <svg class="w-6 h-6" :class="item.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon"/>
            </svg>
          </div>
          <h3 class="text-white font-bold text-base mb-2">{{ item.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const securityItems = [
  {
    title: 'Device-Side Key Storage',
    description: 'Private keys are generated and stored exclusively on your device. They never leave.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    bgClass: 'bg-blue-500/10 border-blue-500/20',
    iconClass: 'text-blue-400',
  },
  {
    title: 'Secure Enclave Protection',
    description: 'Hardware-level security using your device\'s secure enclave or trusted execution environment.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    bgClass: 'bg-purple-500/10 border-purple-500/20',
    iconClass: 'text-purple-400',
  },
  {
    title: 'Encrypted Local Data',
    description: 'All wallet data is encrypted at rest using industry-standard AES-256 encryption.',
    icon: 'M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z',
    bgClass: 'bg-green-500/10 border-green-500/20',
    iconClass: 'text-green-400',
  },
  {
    title: 'No Cloud-Stored Secrets',
    description: 'Zero server-side storage of keys, seeds, or sensitive data. Truly non-custodial.',
    icon: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
    bgClass: 'bg-red-500/10 border-red-500/20',
    iconClass: 'text-red-400',
  },
  {
    title: 'No Analytics or Tracking',
    description: 'We collect zero user data. No telemetry, no analytics, no behavioral tracking.',
    icon: 'M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21',
    bgClass: 'bg-orange-500/10 border-orange-500/20',
    iconClass: 'text-orange-400',
  },
  {
    title: 'Biometric Authentication',
    description: 'Face ID, Touch ID, or device biometrics protect every transaction and approval.',
    icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
    bgClass: 'bg-cyan-500/10 border-cyan-500/20',
    iconClass: 'text-cyan-400',
  },
]
</script>
