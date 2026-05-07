<template>
  <section class="py-16 bg-[#070d1f]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div data-aos="fade-up" class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Who Uses PTERI Wallet?</h2>
        <p class="text-gray-400 text-lg">Built for everyone who values security and privacy.</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(item, index) in audience" :key="item.title"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          class="bg-[#0d1530] border border-white/10 rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all duration-300 group">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border transition-all group-hover:scale-110"
            :class="item.bgClass">
            <svg class="w-7 h-7" :class="item.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
const audience = [
  {
    title: 'Everyday Users',
    description: 'Fast, private payments and self-custody for daily use.',
    icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
    bgClass: 'bg-blue-500/10 border-blue-500/20',
    iconClass: 'text-blue-400',
  },
  {
    title: 'Developers',
    description: 'Integrate seamless identity and auth into your apps.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    bgClass: 'bg-purple-500/10 border-purple-500/20',
    iconClass: 'text-purple-400',
  },
  {
    title: 'Apps & AI Agents',
    description: 'Trust and verification layers for automated systems.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    bgClass: 'bg-cyan-500/10 border-cyan-500/20',
    iconClass: 'text-cyan-400',
  },
  {
    title: 'Teams & Enterprise',
    description: 'Secure logins without shared passwords or OTPs.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    bgClass: 'bg-green-500/10 border-green-500/20',
    iconClass: 'text-green-400',
  },
]
</script>
