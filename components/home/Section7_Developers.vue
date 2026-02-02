<template>
  <section class="py-20 bg-gray-900 text-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <div class="md:w-1/2">
          <h2 class="text-3xl md:text-5xl font-bold mb-6">
            For Developers
          </h2>
          <p class="text-xl text-gray-400 mb-8">
            If you’re building apps that use PTERI Wallet for login or signing:
          </p>
          
          <ul class="space-y-4 mb-8">
            <li class="flex items-center space-x-3">
              <span class="text-indigo-500">➜</span>
              <span>Access developer documentation</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-indigo-500">➜</span>
              <span>Test flows in the Playground</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-indigo-500">➜</span>
              <span>Generate API keys</span>
            </li>
            <li class="flex items-center space-x-3">
              <span class="text-indigo-500">➜</span>
              <span>Integrate authentication easily</span>
            </li>
          </ul>

          <a href="https://docs.kakrlabs.com" target="_blank" class="inline-flex items-center text-indigo-400 font-bold hover:text-indigo-300 transition">
            Developer Documentation
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
        
        <div class="md:w-1/2 bg-gray-800 rounded-lg p-6 font-mono text-sm shadow-xl border border-gray-700">
          <!-- Code snippet or API example -->
          <div class="flex space-x-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-red-500"></div>
            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p class="text-gray-400">// Initialize Pteri Authentication</p>
          <p class="text-blue-400">const<span class="text-white"> pteri = </span><span class="text-yellow-300">new</span> <span class="text-green-400">PteriAuth</span><span class="text-white">({</span></p>
          <p class="pl-4 text-white">apiKey: <span class="text-orange-300">'pk_test_123...'</span>,</p>
          <p class="pl-4 text-white">callbackUrl: <span class="text-orange-300">'https://app.com/callback'</span></p>
          <p class="text-white">});</p>
          <br>
          <p class="text-gray-400">// Request Login</p>
          <p class="text-blue-400">await<span class="text-white"> pteri.</span><span class="text-yellow-300">requestLogin</span><span class="text-white">();</span></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>
