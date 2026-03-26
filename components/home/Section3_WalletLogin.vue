<template>
  <section class="py-20 bg-indigo-900 text-white overflow-hidden relative">
    <!-- Abstract background elements -->
    <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-800 rounded-full opacity-50 blur-3xl"></div>
    <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-900 rounded-full opacity-50 blur-3xl"></div>

    <div class="container mx-auto px-4 relative z-10">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="lg:w-1/2">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Wallet as Your <br>
            <span class="text-indigo-300">Login Key</span>
          </h2>
          <p class="text-xl text-indigo-100 mb-8 max-w-lg">
            PTERI Wallet acts as your authentication device. Instead of passwords or codes, use your wallet to verify your identity.
          </p>
          
          <ul class="space-y-6 mb-10">
            <li class="flex items-center space-x-4">
              <div class="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-xl font-bold">1</div>
              <span class="text-lg">A login request is sent</span>
            </li>
            <li class="flex items-center space-x-4">
              <div class="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-xl font-bold">2</div>
              <span class="text-lg">You approve it in your wallet</span>
            </li>
            <li class="flex items-center space-x-4">
              <div class="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-xl font-bold">3</div>
              <span class="text-lg">Your device signs the request</span>
            </li>
            <li class="flex items-center space-x-4">
              <div class="w-10 h-10 rounded-full bg-indigo-700 flex items-center justify-center text-xl font-bold">4</div>
              <span class="text-lg">Access is granted</span>
            </li>
          </ul>

          <p class="text-indigo-200 text-sm font-semibold mb-6 uppercase tracking-wider">
            This is decentralized 2FA, built on Litecoin.
          </p>

          <div class="flex flex-wrap gap-4">
            <a href="https://wallet.pteri.org" target="_blank" class="inline-block px-6 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow hover:bg-indigo-400 transition">
              Launch Web Wallet
            </a>
            <a href="https://docs.kakrlabs.com" target="_blank" class="inline-flex items-center text-white font-bold hover:text-indigo-300 transition group px-4 py-3">
              Learn About PTERI Authentication
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div class="lg:w-1/2 relative">
          <div class="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-indigo-700 shadow-2xl">
            <p class="text-indigo-300 text-sm font-semibold uppercase tracking-widest mb-6">PTERI Auth vs Traditional Login</p>
            <div class="space-y-4">
              <div v-for="row in comparison" :key="row.label" class="grid grid-cols-3 gap-2 items-center text-sm">
                <span class="text-indigo-200 font-medium">{{ row.label }}</span>
                <div class="flex items-center gap-2 bg-indigo-900 rounded-lg px-3 py-2">
                  <span class="text-green-400 text-base">✓</span>
                  <span class="text-white">{{ row.pteri }}</span>
                </div>
                <div class="flex items-center gap-2 bg-indigo-950 rounded-lg px-3 py-2">
                  <span class="text-red-400 text-base">✗</span>
                  <span class="text-indigo-300">{{ row.traditional }}</span>
                </div>
              </div>
            </div>
            <div class="mt-6 grid grid-cols-3 gap-2 text-xs text-center">
              <span></span>
              <span class="text-indigo-300 font-semibold">PTERI Wallet</span>
              <span class="text-indigo-500">Password / OTP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const comparison = [
  { label: 'Password needed',   pteri: 'Never',        traditional: 'Always' },
  { label: 'Phishing risk',     pteri: 'None',         traditional: 'High' },
  { label: 'Data stored',       pteri: 'On-device',    traditional: 'On server' },
  { label: 'Identity proof',    pteri: 'Cryptographic', traditional: 'Shared secret' },
  { label: 'Works offline',     pteri: 'Yes',          traditional: 'No' },
]
</script>
