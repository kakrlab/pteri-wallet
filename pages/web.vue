<template>
  <Head>
    <Title>PTERI Wallet Web — Access Your Litecoin Wallet Securely Online</Title>
    <Meta name="description" content="Use PTERI Wallet from your browser with secure, self-custody access. No passwords. No custodial risk. Full identity and authentication support." />
    <Meta name="og:title" content="PTERI Wallet Web — Access Your Litecoin Wallet Securely Online" />
    <Meta name="og:description" content="Use PTERI Wallet from your browser with secure, self-custody access. No passwords. No custodial risk. Full identity and authentication support." />
    <Meta name="twitter:title" content="PTERI Wallet Web — Access Your Litecoin Wallet Securely Online" />
    <Meta name="twitter:description" content="Use PTERI Wallet from your browser with secure, self-custody access. No passwords. No custodial risk. Full identity and authentication support." />
  </Head>

  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">PTERI Wallet Web Version</h1>
    <p class="text-xl mb-12">Use PTERI Wallet from your browser with secure, self-custody access. No passwords. No custodial risk. Full identity and authentication support.</p>
    
    <div class="bg-white p-8 rounded-lg shadow-lg mb-12">
      <h2 class="text-2xl font-bold mb-4">Access Your Wallet Anywhere</h2>
      <p class="text-gray-700 mb-6">The web version of PTERI Wallet gives you full access to your Litecoin assets from any device with a browser. Enjoy the same security and privacy features as our mobile apps.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h3 class="text-xl font-bold mb-3">Key Benefits</h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>No installation required</li>
            <li>Access from any device</li>
            <li>Same security as mobile apps</li>
            <li>Fully compatible with MWEB privacy</li>
            <li>Biometric authentication support</li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-3">Security Features</h3>
          <ul class="list-disc pl-6 space-y-2 text-gray-700">
            <li>End-to-end encryption</li>
            <li>Zero-knowledge architecture</li>
            <li>Device-bound private keys</li>
            <li>Multi-factor authentication</li>
            <li>Automatic session timeout</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="text-center">
      <button @click="modalOpen = true" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors">
        Web Wallet – Early Access
      </button>
      <p class="mt-4 text-gray-600">Requires a modern browser with WebAssembly support</p>
    </div>
  </div>
</template>

<script setup>
const modalOpen = useState('webWalletModalOpen')
</script>