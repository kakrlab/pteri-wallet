<template>
  <div class="py-24 bg-gray-50 min-h-screen">
    <div class="container mx-auto px-4 max-w-4xl">
      <div class="bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Terms of Use</h1>
        
        <div class="prose prose-indigo max-w-none text-gray-600">
          <p class="lead text-lg mb-6">
            By using PTERI Wallet, you agree to these Terms of Use. Please read them carefully.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">1. No Financial Advice</h3>
          <p>
            PTERI Wallet is a software tool. Kakr Labs does not provide financial, investment, or legal advice. You are solely responsible for your decisions and actions while using the wallet.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">2. Self-Custody Responsibilities</h3>
          <p>
            You are responsible for securing your own private keys and recovery phrases. If you lose your keys, Kakr Labs <strong>cannot</strong> recover your funds or account. You acknowledge that you understand the risks involved in self-custody.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">3. Software "As Is"</h3>
          <p>
            The software is provided "as is", without warranty of any kind, express or implied. To the maximum extent permitted by law, Kakr Labs disclaims all warranties, including merchantability and fitness for a particular purpose.
          </p>

          <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">4. Compliance with Laws</h3>
          <p>
            You agree to use PTERI Wallet in compliance with all applicable local, state, and federal laws and regulations.
          </p>

           <h3 class="text-xl font-bold text-gray-900 mt-8 mb-4">5. Limitation of Liability</h3>
          <p>
            In no event shall Kakr Labs be liable for any damages arising out of the use or inability to use the software, even if advised of the possibility of such damages.
          </p>

          <div class="mt-12 pt-8 border-t border-gray-100 text-sm md:text-base">
            <p>Last updated: {{ new Date().getFullYear() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Terms of Use | PTERI Wallet',
  meta: [
    { name: 'description', content: 'Terms of Use for PTERI Wallet. Understanding your responsibilities for self-custody and usage.' },
    { name: 'robots', content: 'index, follow' }
  ]
})
</script>
