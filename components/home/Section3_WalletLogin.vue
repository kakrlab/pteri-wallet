<template>
  <!-- "How Authentication Works" section -->
  <section id="how-it-works" class="py-20 bg-page-mid">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <!-- Header -->
      <div data-aos="fade-up" class="text-center mb-14">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          How Authentication Works
        </h2>
        <p class="text-gray-400 text-lg">Simple for users. Powerful for developers.</p>
      </div>

      <!-- Steps flow -->
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 items-start">
        <div v-for="(step, index) in steps" :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="relative flex flex-col items-center text-center">
          <!-- Connector line (not on last) -->
          <div v-if="index < steps.length - 1" class="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent z-0"></div>

          <!-- Icon circle -->
          <div class="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 border"
            :class="step.bgClass">
            <component :is="'svg'" class="w-7 h-7" :class="step.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="step.icon"/>
            </component>
          </div>

          <!-- Step number -->
          <div class="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mb-3">
            <span class="text-white text-xs font-bold">{{ index + 1 }}</span>
          </div>

          <h3 class="text-white font-bold text-base mb-2">{{ step.title }}</h3>
          <p class="text-gray-400 text-sm leading-relaxed">{{ step.description }}</p>
        </div>
      </div>

      <!-- CTA -->
      <div data-aos="fade-up" data-aos-delay="500" class="text-center mt-14">
        <a href="https://docs.kakrlabs.com" target="_blank"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30">
          Explore Documentation
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  {
    title: '1. Request',
    description: 'App or service sends a login or action request.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1',
    bgClass: 'bg-blue-500/10 border-blue-500/30',
    iconClass: 'text-blue-400',
  },
  {
    title: '2. Notify',
    description: 'PTERI Wallet receives the request instantly.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    bgClass: 'bg-purple-500/10 border-purple-500/30',
    iconClass: 'text-purple-400',
  },
  {
    title: '3. Approve',
    description: 'You review and approve with biometrics.',
    icon: 'M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4',
    bgClass: 'bg-green-500/10 border-green-500/30',
    iconClass: 'text-green-400',
  },
  {
    title: '4. Sign',
    description: 'Wallet signs the request with your private key.',
    icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z',
    bgClass: 'bg-yellow-500/10 border-yellow-500/30',
    iconClass: 'text-yellow-400',
  },
  {
    title: '5. Verify',
    description: 'Server verifies the signature. Access is granted.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    bgClass: 'bg-cyan-500/10 border-cyan-500/30',
    iconClass: 'text-cyan-400',
  },
]
</script>
