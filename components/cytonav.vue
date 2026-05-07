<template>
  <div>
    <nav class="relative py-4 bg-[#050a1a] border-b border-white/10 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <NuxtLink class="flex items-center space-x-2" to="/">
            <img class="h-8" src="/pteri-logo.png" alt="PTERI Logo" />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <ul class="hidden xl:flex items-center space-x-8">
            <li>
              <button class="nav-link text-sm text-gray-300 hover:text-white font-medium flex items-center gap-1" @click="toggleProductMenu">
                Product
                <svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div v-if="productMenuOpen" class="absolute mt-2 w-48 bg-[#0d1530] border border-white/10 rounded-lg shadow-xl py-2 z-50">
                <NuxtLink to="/features" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5" @click="productMenuOpen = false">Features</NuxtLink>
                <NuxtLink to="/web" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5" @click="productMenuOpen = false">Web Wallet</NuxtLink>
                <button class="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5" @click="productMenuOpen = false; openModal()">Download</button>
              </div>
            </li>
            <li>
              <a href="https://kakr.org/authentication" target="_blank" class="text-sm text-gray-300 hover:text-white font-medium">MFA Platform</a>
            </li>
            <li>
              <NuxtLink to="/#how-it-works" class="text-sm text-gray-300 hover:text-white font-medium">How It Works</NuxtLink>
            </li>
            <li class="relative group">
              <button class="text-sm text-gray-300 hover:text-white font-medium flex items-center gap-1">
                Developers
                <svg class="w-3 h-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="absolute left-0 mt-2 w-52 bg-[#0d1530] border border-white/10 rounded-lg shadow-xl py-2 hidden group-hover:block z-50">
                <a href="https://docs.kakrlabs.com" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">Documentation</a>
                <NuxtLink to="/developers/playground" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">Playground</NuxtLink>
                <NuxtLink to="/developers/sdk" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">SDKs</NuxtLink>
                <a href="https://dashboard.kakrlabs.com" target="_blank" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">API Dashboard</a>
                <NuxtLink to="/developers/status" class="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5">Status</NuxtLink>
              </div>
            </li>
            <li>
              <NuxtLink to="/security" class="text-sm text-gray-300 hover:text-white font-medium">Security</NuxtLink>
            </li>
            <li>
              <button class="text-sm text-gray-300 hover:text-white font-medium" @click="openModal">Download</button>
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
          <NuxtLink to="/" class="mobile-nav-link" @click="toggleMenu">Home</NuxtLink>
          <NuxtLink to="/features" class="mobile-nav-link" @click="toggleMenu">Features</NuxtLink>
          <NuxtLink to="/web" class="mobile-nav-link" @click="toggleMenu">Web Wallet</NuxtLink>
          <a href="https://kakr.org/authentication" target="_blank" class="mobile-nav-link">MFA Platform</a>
          <NuxtLink to="/security" class="mobile-nav-link" @click="toggleMenu">Security</NuxtLink>
          <div>
            <button class="mobile-nav-link w-full text-left flex justify-between items-center" @click="toggleDevMenu">
              Developers
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <div v-if="devMenuOpen" class="pl-4 mt-1 space-y-1">
              <a href="https://docs.kakrlabs.com" target="_blank" class="mobile-nav-link text-sm">Documentation</a>
              <NuxtLink to="/developers/playground" class="mobile-nav-link text-sm" @click="toggleMenu">Playground</NuxtLink>
              <NuxtLink to="/developers/sdk" class="mobile-nav-link text-sm" @click="toggleMenu">SDKs</NuxtLink>
              <a href="https://dashboard.kakrlabs.com" target="_blank" class="mobile-nav-link text-sm">API Dashboard</a>
            </div>
          </div>
          <button class="mobile-nav-link text-left" @click="toggleMenu; openModal()">Download</button>
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
const { open: openModal } = useDownloadModal()

const menuOpen = ref(false)
const devMenuOpen = ref(false)
const productMenuOpen = ref(false)

const toggleMenu = () => { menuOpen.value = !menuOpen.value }
const toggleDevMenu = () => { devMenuOpen.value = !devMenuOpen.value }
const toggleProductMenu = () => { productMenuOpen.value = !productMenuOpen.value }
</script>

<style scoped>
.mobile-nav-link {
  @apply block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors font-medium;
}
</style>
