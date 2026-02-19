<template>
  <Head>
    <Title>PTERI System Status & Developer FAQ</Title>
    <Meta name="description" content="Check real-time uptime for PTERI APIs and find answers to common developer questions for authentication, identity, and Litecoin RPCs." />
    <Meta property="og:title" content="PTERI System Status & Developer FAQ" />
    <Meta property="og:description" content="Check real-time uptime for PTERI APIs and find answers to common developer questions for authentication, identity, and Litecoin RPCs." />
    <Meta property="og:type" content="website" />
    <Meta property="og:url" content="https://www.pteri.org/developers/status" />
    <Meta property="og:image" content="https://www.pteri.org/og-image.png" />
    <Meta property="og:image:secure_url" content="https://www.pteri.org/og-image.png" />
    <Meta property="og:image:type" content="image/png" />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="630" />
    <Meta property="og:image:alt" content="PTERI System Status & Developer FAQ" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:title" content="PTERI System Status & Developer FAQ" />
    <Meta name="twitter:description" content="Check real-time uptime for PTERI APIs and find answers to common developer questions for authentication, identity, and Litecoin RPCs." />
    <Meta name="twitter:image" content="https://www.pteri.org/og-image.png" />
    <Meta name="twitter:site" content="@pteriwallet" />
  </Head>

  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-8">System Status & FAQ</h1>
    <p class="text-xl mb-12">Check real-time uptime for PTERI APIs and find answers to common developer questions.</p>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <!-- System Status -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6">System Status</h2>
        
        <div class="space-y-4">
          <div class="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <h3 class="font-bold">Authentication API</h3>
              <p class="text-sm text-gray-600">User login and 2FA services</p>
            </div>
            <div class="flex items-center">
              <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span class="text-green-700 font-medium">Operational</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <h3 class="font-bold">Litecoin RPC</h3>
              <p class="text-sm text-gray-600">Blockchain transaction services</p>
            </div>
            <div class="flex items-center">
              <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span class="text-green-700 font-medium">Operational</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <h3 class="font-bold">Identity Services</h3>
              <p class="text-sm text-gray-600">Digital identity verification</p>
            </div>
            <div class="flex items-center">
              <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span class="text-green-700 font-medium">Operational</span>
            </div>
          </div>
          
          <div class="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <h3 class="font-bold">IoT Protocol</h3>
              <p class="text-sm text-gray-600">Device authentication services</p>
            </div>
            <div class="flex items-center">
              <span class="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              <span class="text-green-700 font-medium">Operational</span>
            </div>
          </div>
        </div>
        
        <div class="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 class="font-bold mb-2">Scheduled Maintenance</h3>
          <p class="text-gray-700">No maintenance scheduled at this time.</p>
        </div>
      </div>
      
      <!-- FAQ Section -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6">Developer FAQ</h2>
        
        <div class="space-y-6">
          <div>
            <h3 class="font-bold text-lg mb-2">How do I integrate PTERI Authentication?</h3>
            <p class="text-gray-700">Use our SDKs to implement decentralized authentication. Users approve login requests directly from their PTERI Wallet instead of entering passwords.</p>
          </div>
          
          <div>
            <h3 class="font-bold text-lg mb-2">What are the API rate limits?</h3>
            <p class="text-gray-700">Free accounts: 100 requests/minute. Paid plans offer higher limits. Contact us for enterprise requirements.</p>
          </div>
          
          <div>
            <h3 class="font-bold text-lg mb-2">How do I get API keys?</h3>
            <p class="text-gray-700">Visit the <a href="https://dashboard.kakrlabs.com" target="_blank" class="text-blue-600 hover:underline">Developer Dashboard</a> to generate and manage your API keys.</p>
          </div>
          
          <div>
            <h3 class="font-bold text-lg mb-2">Do you offer testnet access?</h3>
            <p class="text-gray-700">Yes, we provide testnet environments for all our services. Check our documentation for setup instructions.</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="bg-gray-50 p-8 rounded-lg">
      <h2 class="text-2xl font-bold mb-4">Need More Help?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="https://docs.kakrlabs.com" target="_blank" class="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
          <h3 class="font-bold mb-2">Documentation</h3>
          <p class="text-gray-700 text-sm">Complete API references and integration guides</p>
        </a>
        
        <a href="https://discord.gg/pteri" target="_blank" class="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
          <h3 class="font-bold mb-2">Community Support</h3>
          <p class="text-gray-700 text-sm">Join our Discord server for developer discussions</p>
        </a>
        
        <a href="mailto:dev-support@kakrlabs.com" class="block p-4 bg-white rounded-lg hover:shadow-md transition-shadow">
          <h3 class="font-bold mb-2">Direct Support</h3>
          <p class="text-gray-700 text-sm">Contact our development team directly</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// Add any necessary logic here
</script>