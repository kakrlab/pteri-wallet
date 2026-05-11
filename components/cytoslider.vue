<template>
  <section id="hero" class="relative overflow-hidden bg-page-dark min-h-screen flex items-center">
    <!-- Animated background glow -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-3xl"></div>
    </div>

    <!-- Star field -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="star in stars" :key="star.id" class="absolute w-0.5 h-0.5 bg-white rounded-full opacity-40"
        :style="{ top: star.top, left: star.left, animationDelay: star.animationDelay }">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 lg:py-28 w-full">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

        <!-- Left: Hero Content -->
        <div class="w-full lg:w-1/2 flex flex-col space-y-6">
          <!-- Badge -->
          <div data-aos="fade-down" data-aos-delay="0" class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full w-fit">
            <span class="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span class="text-blue-400 text-xs font-semibold tracking-wide uppercase">Litecoin Wallet · Identity · Authentication</span>
          </div>

          <!-- Headline -->
          <h1 data-aos="fade-up" data-aos-delay="100" class="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            The Authentication Layer for the
            <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> AI Era.</span>
          </h1>

          <!-- Sub-headline -->
          <p data-aos="fade-up" data-aos-delay="200" class="text-lg text-gray-400 max-w-lg leading-relaxed">
            PTERI Wallet is a self-custody Litecoin wallet and MFA platform that replaces passwords, OTPs, and tokens with cryptographic signatures.
          </p>

          <!-- Trust badges -->
          <div data-aos="fade-up" data-aos-delay="300" class="flex flex-wrap gap-4 text-sm text-gray-400">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span>Self-Custody</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span>No Data Collection</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              <span>Built for AI Era</span>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div data-aos="fade-up" data-aos-delay="400" class="flex flex-wrap gap-4 pt-2">
            <button
              @click="openModal"
              class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/30"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              Download Wallet
            </button>
            <a
              href="https://wallet.pteri.org"
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/></svg>
              Launch Web Wallet
            </a>
          </div>

          <!-- App Store Badges -->
          <div data-aos="fade-up" data-aos-delay="500" class="flex items-center gap-4 pt-2">
            <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="transition-transform hover:scale-105">
              <img src="https://kakr.ai/ios.png" alt="Download on App Store" class="h-10">
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="transition-transform hover:scale-105">
              <img src="https://kakr.ai/playstore.png" alt="Get it on Google Play" class="h-10">
            </a>
            <a href="https://wallet.pteri.org" target="_blank" class="transition-transform hover:scale-105">
              <div class="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-lg">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3"/></svg>
                <span class="text-white text-xs font-medium">Web</span>
              </div>
            </a>
          </div>
        </div>

        <!-- Right: Real screenshot carousel -->
        <div data-aos="fade-left" data-aos-delay="200" class="w-full lg:w-1/2 flex justify-center lg:justify-end overflow-visible">
          <div class="relative w-full max-w-sm lg:max-w-md">

            <!-- Phone frame wrapping the carousel -->
            <div class="relative mx-auto" style="width: 270px;">
              <!-- Outer phone shell -->
              <div class="relative rounded-[3rem] border-2 border-white/20 bg-black shadow-2xl shadow-blue-900/60 overflow-hidden"
                style="padding: 10px;">
                <!-- Inner screen area -->
                <div class="relative rounded-[2.4rem] overflow-hidden bg-black"
                  style="height: 560px;">

                  <!-- Carousel track -->
                  <div class="carousel-track flex h-full transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${current * 100}%)` }">
                    <div
                      v-for="(img, i) in screenshots"
                      :key="i"
                      class="carousel-slide flex-shrink-0 w-full h-full"
                    >
                      <img
                        :src="img.src"
                        :alt="img.alt"
                        class="w-full h-full object-cover object-top"
                        draggable="false"
                      />
                    </div>
                  </div>

                  <!-- Gradient overlay at bottom for dots -->
                  <div class="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>

                  <!-- Dot indicators -->
                  <div class="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
                    <button
                      v-for="(_, i) in screenshots"
                      :key="i"
                      @click="goTo(i)"
                      class="transition-all duration-300 rounded-full"
                      :class="current === i
                        ? 'w-5 h-1.5 bg-white'
                        : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'"
                    />
                  </div>
                </div>
              </div>

              <!-- Side nav arrows -->
              <button @click="prev"
                class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition backdrop-blur-sm z-20">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
                </svg>
              </button>
              <button @click="next"
                class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition backdrop-blur-sm z-20">
                <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <!-- Floating Login Request Card -->
            <div class="absolute -right-2 sm:-right-10 top-6 w-48 bg-card-dark border border-white/20 rounded-2xl p-3.5 shadow-2xl shadow-purple-900/30 backdrop-blur-sm z-30">
              <div class="flex items-center gap-2 mb-2">
                <div class="w-7 h-7 bg-blue-600/30 border border-blue-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white text-[11px] font-semibold">Login Request</p>
                  <p class="text-gray-400 text-[9px]">app.example.com</p>
                </div>
              </div>
              <p class="text-gray-400 text-[9px] mb-0.5">Your login is requesting access</p>
              <p class="text-gray-500 text-[9px] mb-2.5">May 15, 2024 · 12:34 AM<br>New York, USA · Chrome on macOS</p>
              <div class="flex gap-1.5">
                <button class="flex-1 py-1 bg-green-500 hover:bg-green-400 text-white text-[10px] font-semibold rounded-lg transition">Approve</button>
                <button class="flex-1 py-1 bg-white/10 hover:bg-white/20 text-gray-300 text-[10px] font-semibold rounded-lg transition">Deny</button>
              </div>
            </div>

            <!-- Floating Litecoin badge -->
            <div class="absolute -left-2 sm:-left-10 bottom-16 w-32 bg-card-dark border border-white/20 rounded-xl p-2.5 shadow-xl backdrop-blur-sm z-30">
              <div class="flex items-center gap-2">
                <div class="w-7 h-7 bg-[#345D9D]/30 border border-[#345D9D]/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span class="text-[#345D9D] font-bold text-sm">Ł</span>
                </div>
                <div>
                  <p class="text-white text-[11px] font-semibold">Litecoin</p>
                  <p class="text-green-400 text-[9px]">+2.4% today</p>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const { open: openModal } = useDownloadModal()

const screenshots = [
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-21 at 02.33.24.png', alt: 'PTERI Wallet Screen 1' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-02-27 at 01.17.18.png', alt: 'PTERI Wallet Screen 2' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.25.png', alt: 'PTERI Wallet Screen 3' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.30.png', alt: 'PTERI Wallet Screen 4' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.33.png', alt: 'PTERI Wallet Screen 5' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.40.png', alt: 'PTERI Wallet Screen 6' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-02 at 22.08.52.png', alt: 'PTERI Wallet Screen 7' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.07.png', alt: 'PTERI Wallet Screen 8' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.17.png', alt: 'PTERI Wallet Screen 9' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.24.png', alt: 'PTERI Wallet Screen 10' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.19.29.png', alt: 'PTERI Wallet Screen 11' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.10.png', alt: 'PTERI Wallet Screen 12' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.28.png', alt: 'PTERI Wallet Screen 13' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.47.png', alt: 'PTERI Wallet Screen 14' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.21.51.png', alt: 'PTERI Wallet Screen 15' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.29.04.png', alt: 'PTERI Wallet Screen 16' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.29.25.png', alt: 'PTERI Wallet Screen 17' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.30.10.png', alt: 'PTERI Wallet Screen 18' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.30.13.png', alt: 'PTERI Wallet Screen 19' },
  { src: '/new/Simulator Screenshot - iPhone 17 Pro Max - 2026-03-03 at 00.30.19.png', alt: 'PTERI Wallet Screen 20' },
]

const stars = Array.from({ length: 60 }, (_, index) => {
  const seed = index + 1
  return {
    id: seed,
    top: `${(seed * 37) % 100}%`,
    left: `${(seed * 61) % 100}%`,
    animationDelay: `${((seed * 17) % 30) / 10}s`,
  }
})

const current = ref(0)
let timer = null

const next = () => { current.value = (current.value + 1) % screenshots.length }
const prev = () => { current.value = (current.value - 1 + screenshots.length) % screenshots.length }
const goTo = (i) => { current.value = i }

const startAuto = () => { timer = setInterval(next, 3000) }
const stopAuto  = () => { clearInterval(timer) }

onMounted(startAuto)
onBeforeUnmount(stopAuto)
</script>

<style scoped>
.carousel-track {
  will-change: transform;
}
.carousel-slide {
  flex: 0 0 100%;
}
</style>
