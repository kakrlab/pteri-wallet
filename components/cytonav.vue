<template>
  <div>
    <nav class="relative py-4 bg-[#050a1a] border-b border-white/10 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between">

          <!-- Logo -->
          <a href="/" class="flex items-center space-x-2" @click.prevent="scrollTo('hero')">
            <img class="h-8" src="/pteri-logo.png" alt="PTERI Logo" />
          </a>

          <!-- Desktop Navigation -->
          <ul class="hidden xl:flex items-center space-x-8">
            <li class="relative">
              <button
                class="text-sm text-gray-300 hover:text-white font-medium flex items-center gap-1"
                @click="toggleProductMenu"
              >
                Product
                <svg class="w-3 h-3 mt-0.5 transition-transform duration-200" :class="productMenuOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div v-if="productMenuOpen" class="absolute top-full mt-2 w-48 bg-[#0d1530] border border-white/10 rounded-lg shadow-xl py-2 z-50">
                <button class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5" @click="scrollTo('what-is-pteri'); productMenuOpen = false">What is PTERI</button>
                <button class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5" @click="scrollTo('why-pteri'); productMenuOpen = false">Why PTERI</button>
                <button class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5" @click="scrollTo('security'); productMenuOpen = false">Security</button>
                <button class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5" @click="scrollTo('download'); productMenuOpen = false">Download</button>
              </div>
            </li>

            <li>
              <button class="text-sm text-gray-300 hover:text-white font-medium" @click="scrollTo('mfa')">
                MFA Platform
              </button>
            </li>

            <li>
              <button class="text-sm text-gray-300 hover:text-white font-medium" @click="scrollTo('how-it-works')">
                How It Works
              </button>
            </li>

            <li class="relative group">
              <button class="text-sm text-gray-300 hover:text-white font-medium flex items-center gap-1">
                Developers
                <svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div class="absolute left-0 top-full mt-2 w-64 bg-[#0d1530] border border-white/10 rounded-xl shadow-2xl py-3 hidden group-hover:block z-50">

                <!-- On-page -->
                <div class="px-3 pb-2">
                  <p class="text-[10px] font-semibold text-gray-600 uppercase tracking-wider px-2 mb-1">Overview</p>
                  <button class="flex items-center gap-2.5 w-full text-left px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg" @click="scrollTo('developers')">
                    <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
                    Developer Platform
                  </button>
                </div>

                <div class="border-t border-white/10 mx-3 my-1"></div>

                <!-- External links -->
                <div class="px-3 pt-2">
                  <p class="text-[10px] font-semibold text-gray-600 uppercase tracking-wider px-2 mb-1">Resources</p>
                  <a href="https://docs.kakrlabs.com" target="_blank" class="flex items-center gap-2.5 px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                    <svg class="w-4 h-4 text-purple-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                    Documentation
                    <svg class="w-3 h-3 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                  <a href="https://docs.kakrlabs.com/api-reference" target="_blank" class="flex items-center gap-2.5 px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                    <svg class="w-4 h-4 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                    API Reference
                    <svg class="w-3 h-3 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                  <a href="https://playground.pteri.org/" target="_blank" class="flex items-center gap-2.5 px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                    <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Playground
                    <svg class="w-3 h-3 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                  <a href="https://dashboard.kakrlabs.com" target="_blank" class="flex items-center gap-2.5 px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                    <svg class="w-4 h-4 text-yellow-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    API Dashboard
                    <svg class="w-3 h-3 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                  <a href="https://docs.kakrlabs.com/sdks" target="_blank" class="flex items-center gap-2.5 px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                    <svg class="w-4 h-4 text-orange-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    SDKs
                    <svg class="w-3 h-3 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                  <a href="https://kakrlabs1.statuspage.io/" target="_blank" class="flex items-center gap-2.5 px-2 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg">
                    <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    Status & FAQ
                    <svg class="w-3 h-3 ml-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <button class="text-sm text-gray-300 hover:text-white font-medium" @click="scrollTo('security')">
                Security
              </button>
            </li>

            <li>
              <button class="text-sm text-gray-300 hover:text-white font-medium" @click="openModal">
                Download
              </button>
            </li>
          </ul>

          <!-- CTA Button -->
          <div class="hidden xl:flex items-center">
            <button
              @click="openModal"
              class="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
            >
              Download Wallet
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMenu"
            class="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 hover:bg-white/20 transition"
          >
            <svg v-if="!menuOpen" class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
            <svg v-else class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="xl:hidden fixed inset-0 top-[65px] z-50 bg-[#050a1a] border-t border-white/10 overflow-y-auto">
        <nav class="flex flex-col p-6 space-y-1">
          <button class="mobile-nav-link text-left" @click="scrollTo('hero'); toggleMenu()">Home</button>
          <button class="mobile-nav-link text-left" @click="scrollTo('what-is-pteri'); toggleMenu()">What is PTERI</button>
          <button class="mobile-nav-link text-left" @click="scrollTo('why-pteri'); toggleMenu()">Why PTERI</button>
          <button class="mobile-nav-link text-left" @click="scrollTo('mfa'); toggleMenu()">MFA Platform</button>
          <button class="mobile-nav-link text-left" @click="scrollTo('how-it-works'); toggleMenu()">How It Works</button>
          <button class="mobile-nav-link text-left" @click="scrollTo('security'); toggleMenu()">Security</button>
          <div>
            <button class="mobile-nav-link w-full text-left flex justify-between items-center" @click="toggleDevMenu">
              Developers
              <svg class="w-4 h-4 transition-transform duration-200" :class="devMenuOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="devMenuOpen" class="pl-4 mt-1 space-y-1">
              <button class="mobile-nav-link text-sm text-left w-full" @click="scrollTo('developers'); toggleMenu()">
                Developer Platform
              </button>
              <a href="https://docs.kakrlabs.com" target="_blank" class="mobile-nav-link text-sm flex items-center justify-between">
                Documentation
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="https://docs.kakrlabs.com/api-reference" target="_blank" class="mobile-nav-link text-sm flex items-center justify-between">
                API Reference
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="https://playground.pteri.org/" target="_blank" class="mobile-nav-link text-sm flex items-center justify-between">
                Playground
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="https://dashboard.kakrlabs.com" target="_blank" class="mobile-nav-link text-sm flex items-center justify-between">
                API Dashboard
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="https://docs.kakrlabs.com/sdks" target="_blank" class="mobile-nav-link text-sm flex items-center justify-between">
                SDKs
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="https://kakrlabs1.statuspage.io/" target="_blank" class="mobile-nav-link text-sm flex items-center justify-between">
                Status & FAQ
                <svg class="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>
          <button class="mobile-nav-link text-left" @click="scrollTo('faq'); toggleMenu()">FAQ</button>
          <button class="mobile-nav-link text-left" @click="scrollTo('download'); toggleMenu()">Download</button>
          <div class="pt-4">
            <button
              class="block w-full text-center px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition"
              @click="toggleMenu(); openModal()"
            >
              Download Wallet
            </button>
          </div>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'

const { open: openModal } = useDownloadModal()
const router = useRouter()
const route = useRoute()

const menuOpen = ref(false)
const devMenuOpen = ref(false)
const productMenuOpen = ref(false)

const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const toggleDevMenu = () => { devMenuOpen.value = !devMenuOpen.value }
const toggleProductMenu = () => { productMenuOpen.value = !productMenuOpen.value }

// Close product menu when clicking outside
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!(e.target as Element).closest('.relative')) {
      productMenuOpen.value = false
    }
  })
})

const scrollTo = (id: string) => {
  // If not on homepage, navigate there first then scroll
  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 300)
    })
    return
  }
  const el = document.getElementById(id)
  if (el) {
    // Account for sticky nav height (~65px)
    const offset = 65
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.mobile-nav-link {
  @apply block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium;
}
</style>
