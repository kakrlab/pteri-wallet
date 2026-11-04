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
        <div class="relative z-10 w-full max-w-sm bg-card-dark border border-white/10 rounded-2xl shadow-2xl shadow-blue-900/40 overflow-hidden">

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
          <div class="px-6 pt-8 pb-5 text-center">
            <h2 class="text-xl font-bold text-white mb-1">Download PTERI Wallet</h2>
            <p class="text-gray-400 text-sm">Available on iOS, Android, and Web.</p>
          </div>

          <!-- Download options -->
          <div class="px-6 pb-6 flex flex-col gap-3">

            <!-- App Store -->
            <a
              href="https://apps.apple.com/us/app/pteri-wallet/id6751649780"
              target="_blank"
              rel="noopener"
              @click="close"
              class="flex items-center gap-4 px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl transition-all duration-200 group"
            >
              <svg class="w-6 h-6 text-white flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div class="flex-1">
                <p class="text-white font-semibold text-sm">App Store</p>
                <p class="text-gray-500 text-xs">iPhone & iPad</p>
              </div>
              <svg class="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- Google Play -->
            <a
              href="https://play.google.com/store/apps/details?id=org.kakr.pteri"
              target="_blank"
              rel="noopener"
              @click="close"
              class="flex items-center gap-4 px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl transition-all duration-200 group"
            >
              <img src="/icons8-playstore-96.png" alt="Google Play" class="w-6 h-6 object-contain flex-shrink-0" />
              <div class="flex-1">
                <p class="text-white font-semibold text-sm">Google Play</p>
                <p class="text-gray-500 text-xs">Android devices</p>
              </div>
              <svg class="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

            <!-- Web Wallet -->
            <a
              href="https://wallet.pteri.org"
              target="_blank"
              rel="noopener"
              @click="close"
              class="flex items-center gap-4 px-4 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/25 rounded-xl transition-all duration-200 group"
            >
              <svg class="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"/>
              </svg>
              <div class="flex-1">
                <p class="text-white font-semibold text-sm">Web Wallet</p>
                <p class="text-gray-500 text-xs">No install needed</p>
              </div>
              <svg class="w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>

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
