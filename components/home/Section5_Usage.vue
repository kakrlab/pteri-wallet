<template>
  <section class="py-20 bg-white dark:bg-black">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
        Choose How You Use PTERI
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <!-- Mobile Wallet -->
        <div class="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center hover:shadow-lg transition">
          <div class="text-6xl mb-6">📱</div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Mobile Wallet</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Use PTERI Wallet on iOS or Android for daily use and authentication approvals.
          </p>
          <div class="flex space-x-4">
            <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
              Download for iOS
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition">
              Download for Android
            </a>
          </div>
        </div>

        <!-- Web Version -->
        <div class="flex flex-col items-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center hover:shadow-lg transition">
          <div class="text-6xl mb-6">🌐</div>
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Web Version</h3>
          <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Access your wallet securely from the browser when you need it.
          </p>
          <button @click="modalOpen = true" class="inline-block px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition">
            Web Wallet – Early Access
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const modalOpen = useState('webWalletModalOpen')
</script>
