<template>
  <section class="py-24 bg-gradient-to-br from-indigo-900 to-purple-800 text-white text-center">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl md:text-6xl font-bold mb-8">
        Get Started
      </h2>
      <p class="text-2xl text-indigo-200 mb-12">
        Take control of your Litecoin — and your identity.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="px-8 py-4 bg-white text-indigo-900 font-bold rounded-lg shadow-lg hover:bg-gray-100 transform hover:-translate-y-1 transition text-lg">
          Download App
        </a>
        <button @click="modalOpen = true" class="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-indigo-900 transform hover:-translate-y-1 transition text-lg">
          Web Wallet – Early Access
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const modalOpen = useState('webWalletModalOpen')
</script>
