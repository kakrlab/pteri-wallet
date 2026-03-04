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
            <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="transition-transform hover:scale-105">
              <img src="https://kakr.ai/ios.png" alt="Download on App Store" class="h-12">
            </a>
            <a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="transition-transform hover:scale-105">
              <img src="https://kakr.ai/playstore.png" alt="Get it on Google Play" class="h-12">
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
          <a href="https://wallet.pteri.org" target="_blank" class="inline-block px-8 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition">
            Launch Web Wallet
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Web wallet is now live at wallet.pteri.org
</script>
