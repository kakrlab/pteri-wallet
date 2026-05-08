<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-[999] flex items-center justify-center p-4"
        @click.self="close"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="close" />

        <!-- Modal panel -->
        <div class="relative z-10 w-full max-w-lg bg-card-dark border border-white/10 rounded-3xl shadow-2xl shadow-blue-900/40 overflow-hidden">

          <!-- Top glow accent -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-full" />

          <!-- Close button -->
          <button
            @click="close"
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-all z-10"
            aria-label="Close"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <!-- Header -->
          <div class="px-8 pt-8 pb-6 text-center">
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4">
              <svg class="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold text-white mb-2">Download PTERI Wallet</h2>
            <p class="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
              Self-custody Litecoin wallet with MFA, biometric security, and MWEB privacy. Available on iOS and Android.
            </p>
          </div>

          <!-- Download options -->
          <div class="px-8 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">

            <!-- App Store -->
            <a
              href="https://apps.apple.com/us/app/pteri-wallet/id6751649780"
              target="_blank"
              rel="noopener"
              @click="close"
              class="group flex flex-col items-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/40 rounded-2xl transition-all duration-200"
            >
              <img src="https://kakr.ai/ios.png" alt="Download on the App Store" class="h-12 object-contain transition-transform duration-200 group-hover:scale-105" />
              <div class="text-center">
                <p class="text-gray-400 text-xs mb-0.5">Download on the</p>
                <p class="text-white font-bold text-base">App Store</p>
                <p class="text-gray-500 text-xs mt-1">iOS 14.0 or later</p>
              </div>
              <div class="flex items-center gap-1 text-blue-400 text-xs font-medium group-hover:gap-2 transition-all">
                Open App Store
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </a>

            <!-- Google Play -->
            <a
              href="https://play.google.com/store/apps/details?id=org.kakr.pteri"
              target="_blank"
              rel="noopener"
              @click="close"
              class="group flex flex-col items-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-500/40 rounded-2xl transition-all duration-200"
            >
              <img src="https://kakr.ai/playstore.png" alt="Get it on Google Play" class="h-12 object-contain transition-transform duration-200 group-hover:scale-105" />
              <div class="text-center">
                <p class="text-gray-400 text-xs mb-0.5">Get it on</p>
                <p class="text-white font-bold text-base">Google Play</p>
                <p class="text-gray-500 text-xs mt-1">Android 7.0 or later</p>
              </div>
              <div class="flex items-center gap-1 text-green-400 text-xs font-medium group-hover:gap-2 transition-all">
                Open Play Store
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </div>
            </a>
          </div>

          <!-- Web wallet row -->
          <div class="px-8 pb-8">
            <a
              href="https://wallet.pteri.org"
              target="_blank"
              rel="noopener"
              @click="close"
              class="group flex items-center justify-between w-full px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/40 rounded-xl transition-all duration-200"
            >
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-purple-500/10 border border-purple-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white font-semibold text-sm">Web Wallet</p>
                  <p class="text-gray-500 text-xs">Use directly in your browser — no install needed</p>
                </div>
              </div>
              <svg class="w-4 h-4 text-gray-500 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </a>
          </div>

          <!-- Requirements footer -->
          <div class="border-t border-white/10 px-8 py-4 flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <span class="flex items-center gap-1.5 text-gray-500 text-xs">
              <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Self-Custody
            </span>
            <span class="flex items-center gap-1.5 text-gray-500 text-xs">
              <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              No Data Collection
            </span>
            <span class="flex items-center gap-1.5 text-gray-500 text-xs">
              <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Biometric Security
            </span>
            <span class="flex items-center gap-1.5 text-gray-500 text-xs">
              <svg class="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Free to Download
            </span>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
const { isOpen, close } = useDownloadModal()

// Close on Escape key
onMounted(() => {
  const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
  window.addEventListener('keydown', handler)
  onBeforeUnmount(() => window.removeEventListener('keydown', handler))
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
.modal-leave-to .relative {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}
</style>
