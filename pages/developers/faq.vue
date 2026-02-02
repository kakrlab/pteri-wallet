<template>
  <Head>
    <Title>PTERI Developer FAQ — Common Questions & Answers</Title>
    <Meta name="description" content="Find answers to frequently asked questions about integrating PTERI Wallet authentication, Litecoin APIs, and developer tools." />
    <Meta name="og:title" content="PTERI Developer FAQ — Common Questions & Answers" />
    <Meta name="og:description" content="Find answers to frequently asked questions about integrating PTERI Wallet authentication, Litecoin APIs, and developer tools." />
    <Meta name="twitter:title" content="PTERI Developer FAQ — Common Questions & Answers" />
    <Meta name="twitter:description" content="Find answers to frequently asked questions about integrating PTERI Wallet authentication, Litecoin APIs, and developer tools." />
  </Head>

  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">Developer FAQ</h1>
    <p class="text-xl mb-12">Find answers to frequently asked questions about integrating PTERI Wallet authentication, Litecoin APIs, and developer tools.</p>
    
    <div class="bg-white p-8 rounded-lg shadow-lg">
      <div class="space-y-8">
        <!-- FAQ Item 1 -->
        <div>
          <h2 class="text-xl font-bold mb-3">How do I integrate PTERI Wallet authentication into my application?</h2>
          <p class="text-gray-700">Use our Authentication SDK to implement decentralized login. Users will approve login requests directly from their PTERI Wallet. Check our <a href="https://docs.kakrlabs.com/authentication" target="_blank" class="text-blue-600 hover:underline">documentation</a> for detailed integration steps.</p>
        </div>
        
        <!-- FAQ Item 2 -->
        <div>
          <h2 class="text-xl font-bold mb-3">What are the API rate limits for PTERI services?</h2>
          <p class="text-gray-700">Free accounts have a limit of 100 requests per minute. Paid plans offer higher limits based on your subscription tier. Enterprise customers can request custom rate limits. Visit the <a href="https://dashboard.kakrlabs.com" target="_blank" class="text-blue-600 hover:underline">Developer Dashboard</a> for more information.</p>
        </div>
        
        <!-- FAQ Item 3 -->
        <div>
          <h2 class="text-xl font-bold mb-3">Do you offer testnet access for development?</h2>
          <p class="text-gray-700">Yes, we provide testnet environments for all our services. You can access testnet versions of our APIs to develop and test your applications without using real assets. See our <a href="https://docs.kakrlabs.com/testing" target="_blank" class="text-blue-600 hover:underline">Testing Guide</a> for setup instructions.</p>
        </div>
        
        <!-- FAQ Item 4 -->
        <div>
          <h2 class="text-xl font-bold mb-3">How do I get API keys for accessing PTERI services?</h2>
          <p class="text-gray-700">Register for an account on our <a href="https://dashboard.kakrlabs.com" target="_blank" class="text-blue-600 hover:underline">Developer Dashboard</a>. Once registered, you can generate and manage API keys for all our services from the dashboard interface.</p>
        </div>
        
        <!-- FAQ Item 5 -->
        <div>
          <h2 class="text-xl font-bold mb-3">Which programming languages are supported by your SDKs?</h2>
          <p class="text-gray-700">We currently provide SDKs for JavaScript (Node.js and browser), Python, Dart (Flutter), and Swift (iOS). We're actively working on expanding to other platforms. Check our <a href="https://docs.kakrlabs.com/sdk" target="_blank" class="text-blue-600 hover:underline">SDK Documentation</a> for the latest information.</p>
        </div>
        
        <!-- FAQ Item 6 -->
        <div>
          <h2 class="text-xl font-bold mb-3">How can I report bugs or request new features?</h2>
          <p class="text-gray-700">You can report bugs or request features through our <a href="https://github.com/kakrlabs/pteri-sdk/issues" target="_blank" class="text-blue-600 hover:underline">GitHub Issues</a> page. For security-related concerns, please contact us directly at security@kakrlabs.com.</p>
        </div>
        
        <!-- FAQ Item 7 -->
        <div>
          <h2 class="text-xl font-bold mb-3">Is there a sandbox environment for testing transactions?</h2>
          <p class="text-gray-700">Yes, our Playground environment allows you to simulate transactions and test various scenarios without affecting the mainnet. You can access it at <a href="https://playground.pteri.kakr.org" target="_blank" class="text-blue-600 hover:underline">Playground</a>.</p>
        </div>
        
        <!-- FAQ Item 8 -->
        <div>
          <h2 class="text-xl font-bold mb-3">What support options are available for developers?</h2>
          <p class="text-gray-700">We offer several support channels:
          <ul class="list-disc pl-6 mt-2 space-y-1 text-gray-700">
            <li>Community support through our <a href="https://discord.gg/pteri" target="_blank" class="text-blue-600 hover:underline">Discord server</a></li>
            <li>Email support for paid plan subscribers</li>
            <li>Priority support for enterprise customers</li>
            <li>Comprehensive documentation and API references</li>
          </ul>
          </p>
        </div>
      </div>
    </div>
    
    <div class="mt-12 text-center">
      <a href="https://docs.kakrlabs.com" target="_blank" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors mr-4">
        Browse Documentation
      </a>
      <a href="https://dashboard.kakrlabs.com" target="_blank" class="inline-block bg-gray-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-gray-700 transition-colors">
        Developer Dashboard
      </a>
    </div>
  </div>
</template>

<script setup>
// Add any necessary logic here
</script>