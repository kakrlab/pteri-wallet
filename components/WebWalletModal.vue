<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" @click="close"></div>
    <div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-8 transform transition-all">
      <div class="text-center">
        <div class="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="text-3xl">🚀</span>
        </div>
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Coming Soon
        </h3>
        <p class="text-gray-600 dark:text-gray-300 mb-8">
          The PTERI Web Wallet is launching soon. Join early access or check back shortly.
        </p>
        
        <div class="space-y-3">
          <button @click="close" class="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors">
            Got it
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const isOpen = useState('webWalletModalOpen', () => false)

const close = () => {
  isOpen.value = false
}
</script>
