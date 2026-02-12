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
           <!-- Placeholder for illustration or mockup -->
           <div class="bg-indigo-800 bg-opacity-40 backdrop-filter backdrop-blur-lg rounded-2xl p-8 border border-indigo-700 shadow-2xl">
             <div class="space-y-4">
                <div class="flex justify-between items-center text-sm text-indigo-300 mb-4">
                  <span>Login Request</span>
                  <span>Just now</span>
                </div>
                <div class="bg-indigo-900 rounded-lg p-4">
                  <p class="font-medium text-white mb-1">Confirm login to Dashboard</p>
                  <p class="text-xs text-indigo-300">IP: 192.168.1.1 • San Francisco, US</p>
                </div>
                <div class="flex space-x-3 pt-2">
                  <button class="flex-1 bg-red-500 bg-opacity-20 text-red-300 py-2 rounded-lg font-medium text-sm hover:bg-opacity-30 transition">Deny</button>
                  <button class="flex-1 bg-green-500 text-white py-2 rounded-lg font-medium text-sm hover:bg-green-600 transition shadow-lg shadow-green-500/30">Approve</button>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Web wallet is now live at wallet.pteri.org
</script>
