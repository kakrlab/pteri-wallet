<template>
  <Head>
    <Title>PTERI SDKs — JavaScript, Python, Dart & Swift Integration</Title>
    <Meta name="description" content="Install PTERI SDKs and start integrating authentication, identity, Litecoin RPC, and IoT security in minutes." />
    <Meta property="og:title" content="PTERI SDKs — JavaScript, Python, Dart & Swift Integration" />
    <Meta property="og:description" content="Install PTERI SDKs and start integrating authentication, identity, Litecoin RPC, and IoT security in minutes." />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" content="https://www.pteri.org/developers/sdk" />
    <Meta property="og:image" content="https://www.pteri.org/og-image.png" />
    <Meta property="og:image:secure_url" content="https://www.pteri.org/og-image.png" />
    <Meta property="og:image:type" content="image/png" />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="630" />
    <Meta property="og:image:alt" content="PTERI SDKs — JavaScript, Python, Dart & Swift Integration" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content="PTERI SDKs — JavaScript, Python, Dart & Swift Integration" />
    <Meta name="twitter:description" content="Install PTERI SDKs and start integrating authentication, identity, Litecoin RPC, and IoT security in minutes." />
    <Meta name="twitter:image" content="https://www.pteri.org/og-image.png" />
    <Meta name="twitter:site" content="@pteriwallet" />
  </Head>

  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">PTERI Software Development Kits</h1>
    <p class="text-xl mb-12">Install PTERI SDKs and start integrating authentication, identity, Litecoin RPC, and IoT security in minutes.</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- SDK Overview -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Supported Platforms</h2>
        
        <div class="space-y-6">
          <div class="border-l-4 border-blue-500 pl-4 py-2">
            <h3 class="text-xl font-bold mb-2">JavaScript/Web</h3>
            <p class="text-gray-700 mb-3">For browser-based applications and Node.js servers</p>
            <pre class="bg-gray-100 p-3 rounded text-sm">npm install @pteri/sdk</pre>
          </div>
          
          <div class="border-l-4 border-green-500 pl-4 py-2">
            <h3 class="text-xl font-bold mb-2">Python</h3>
            <p class="text-gray-700 mb-3">For backend services and data processing</p>
            <pre class="bg-gray-100 p-3 rounded text-sm">pip install pteri-sdk</pre>
          </div>
          
          <div class="border-l-4 border-purple-500 pl-4 py-2">
            <h3 class="text-xl font-bold mb-2">Dart/Flutter</h3>
            <p class="text-gray-700 mb-3">For cross-platform mobile applications</p>
            <pre class="bg-gray-100 p-3 rounded text-sm">dart pub add pteri_sdk</pre>
          </div>
          
          <div class="border-l-4 border-yellow-500 pl-4 py-2">
            <h3 class="text-xl font-bold mb-2">Swift/iOS</h3>
            <p class="text-gray-700 mb-3">For native iOS applications</p>
            <pre class="bg-gray-100 p-3 rounded text-sm">pod 'PTERISDK'</pre>
          </div>
        </div>
      </div>
      
      <!-- Quick Start Guide -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Quick Start Example</h2>
        
        <div class="mb-6">
          <h3 class="text-lg font-bold mb-3">Authentication Integration</h3>
          <pre class="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
import { PTERIAuth } from '@pteri/sdk';

const auth = new PTERIAuth({
  clientId: 'your-client-id',
  redirectUri: 'your-redirect-uri'
});

// Initiate login flow
document.getElementById('login-btn').addEventListener('click', () => {
  auth.login();
});

// Handle authentication response
auth.handleCallback();</pre>
        </div>
        
        <div>
          <h3 class="text-lg font-bold mb-3">Litecoin Transaction</h3>
          <pre class="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
import { LitecoinRPC } from '@pteri/sdk';

const litecoin = new LitecoinRPC({
  apiKey: 'your-api-key'
});

// Send transaction
litecoin.sendTransaction({
  to: 'recipient-address',
  amount: 0.1,
  fee: 0.001
}).then(txId => {
  console.log('Transaction sent:', txId);
});</pre>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-6">SDK Features</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="text-center">
          <div class="text-blue-600 text-3xl mb-3">🔐</div>
          <h3 class="font-bold mb-2">Authentication</h3>
          <p class="text-gray-700 text-sm">Decentralized login with wallet approvals</p>
        </div>
        
        <div class="text-center">
          <div class="text-green-600 text-3xl mb-3">💸</div>
          <h3 class="font-bold mb-2">Litecoin RPC</h3>
          <p class="text-gray-700 text-sm">Send, receive, and monitor transactions</p>
        </div>
        
        <div class="text-center">
          <div class="text-purple-600 text-3xl mb-3">🆔</div>
          <h3 class="font-bold mb-2">Identity</h3>
          <p class="text-gray-700 text-sm">Verify and sign digital identities</p>
        </div>
        
        <div class="text-center">
          <div class="text-yellow-600 text-3xl mb-3">📡</div>
          <h3 class="font-bold mb-2">IoT Security</h3>
          <p class="text-gray-700 text-sm">Secure device authentication protocols</p>
        </div>
      </div>
    </div>
    
    <div class="text-center mt-12">
      <a href="https://docs.kakrlabs.com/sdk" target="_blank" class="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-colors">
        View Full Documentation
      </a>
    </div>
  </div>
</template>

<script setup>
// Add any necessary logic here
</script>