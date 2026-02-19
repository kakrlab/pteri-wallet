<template>
  <div>
    <Head>
      <Title>PTERI Wallet FAQ - Frequently Asked Questions About Self-Custody</Title>
      <Meta name="description" content="Find answers to common questions about PTERI Wallet, self-custody, Litecoin, and blockchain security." />
      <Meta property="og:title" content="PTERI Wallet FAQ - Frequently Asked Questions About Self-Custody" />
      <Meta property="og:description" content="Find answers to common questions about PTERI Wallet, self-custody, Litecoin, and blockchain security." />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://www.pteri.org/support/faq" />
      <Meta property="og:image" content="https://www.pteri.org/og-image.png" />
      <Meta property="og:image:secure_url" content="https://www.pteri.org/og-image.png" />
      <Meta property="og:image:type" content="image/png" />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" content="PTERI Wallet FAQ - Frequently Asked Questions About Self-Custody" />
      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content="PTERI Wallet FAQ - Frequently Asked Questions About Self-Custody" />
      <Meta name="twitter:description" content="Find answers to common questions about PTERI Wallet, self-custody, Litecoin, and blockchain security." />
      <Meta name="twitter:image" content="https://www.pteri.org/og-image.png" />
      <Meta name="twitter:site" content="@pteriwallet" />
    </Head>
    
    <section class="relative py-16 md:py-24 overflow-hidden bg-gray-900 text-white">
        <div class="container px-6 mx-auto">
          <!-- Header -->
          <div class="text-center mb-16">
            <span class="inline-block py-2 px-6 mb-4 font-semibold text-black bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
              You Ask? We <span class="italic">Answer</span>
            </h1>
          </div>
  
          <!-- Main FAQ Section -->
          <div class="flex flex-col lg:flex-row lg:space-x-10">
            <!-- Tabs Navigation -->
            <div class="w-full lg:w-1/4 mb-10 lg:mb-0">
              <div class="flex flex-col space-y-4 glass-effect p-6 rounded-lg shadow-lg">
                <ul class="space-y-6">
                  <li>
                    <a 
                      href="#self-custody" 
                      @click.prevent="activeTab = 'self-custody'" 
                      :class="{ 'text-purple-500 font-bold border-l-4 border-purple-500 pl-3': activeTab === 'self-custody' }"
                      class="flex items-center text-lg py-2 hover:text-purple-400 transition-all duration-300">
                      <svg class="w-3 h-3 mr-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5" :stroke="activeTab === 'self-custody' ? '#a855f7' : '#C3C6CE'" stroke-width="2"></circle>
                      </svg>
                      What is self-custody?
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#custodial" 
                      @click.prevent="activeTab = 'custodial'" 
                      :class="{ 'text-purple-500 font-bold border-l-4 border-purple-500 pl-3': activeTab === 'custodial' }"
                      class="flex items-center text-lg py-2 hover:text-purple-400 transition-all duration-300">
                      <svg class="w-3 h-3 mr-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5" :stroke="activeTab === 'custodial' ? '#a855f7' : '#C3C6CE'" stroke-width="2"></circle>
                      </svg>
                      Self-custody vs. custodial
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#walletdiff" 
                      @click.prevent="activeTab = 'walletdiff'" 
                      :class="{ 'text-purple-500 font-bold border-l-4 border-purple-500 pl-3': activeTab === 'walletdiff' }"
                      class="flex items-center text-lg py-2 hover:text-purple-400 transition-all duration-300">
                      <svg class="w-3 h-3 mr-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5" :stroke="activeTab === 'walletdiff' ? '#a855f7' : '#C3C6CE'" stroke-width="2"></circle>
                      </svg>
                      Software and hardware wallets
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#lost-keys" 
                      @click.prevent="activeTab = 'lost-keys'" 
                      :class="{ 'text-purple-500 font-bold border-l-4 border-purple-500 pl-3': activeTab === 'lost-keys' }"
                      class="flex items-center text-lg py-2 hover:text-purple-400 transition-all duration-300">
                      <svg class="w-3 h-3 mr-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5" :stroke="activeTab === 'lost-keys' ? '#a855f7' : '#C3C6CE'" stroke-width="2"></circle>
                      </svg>
                      Lost wallet keys
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#litecoin" 
                      @click.prevent="activeTab = 'litecoin'" 
                      :class="{ 'text-purple-500 font-bold border-l-4 border-purple-500 pl-3': activeTab === 'litecoin' }"
                      class="flex items-center text-lg py-2 hover:text-purple-400 transition-all duration-300">
                      <svg class="w-3 h-3 mr-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="6" r="5" :stroke="activeTab === 'litecoin' ? '#a855f7' : '#C3C6CE'" stroke-width="2"></circle>
                      </svg>
                      Why Litecoin?
                    </a>
                  </li>
                </ul>
              </div>
            </div>
  
            <!-- FAQ Content -->
            <div class="w-full lg:w-3/4">
              <!-- Glass Effect Container -->
              <div class="glass-effect p-8 rounded-lg shadow-xl transition-all duration-300">
                <!-- Self Custody Tab -->
                <div v-show="activeTab === 'self-custody'">
                  <h2 class="text-4xl font-bold text-purple-400 mb-6">What is self-custody?</h2>
                  <p class="text-lg text-gray-300 leading-relaxed">
                    A self-custody wallet is a cryptocurrency wallet where users have complete control over their private keys and funds. It is often referred to as a self-hosted or non-custodial wallet, emphasizing user responsibility for asset management.
                  </p>
                </div>
  
                <!-- Custodial Tab -->
                <div v-show="activeTab === 'custodial'">
                  <h2 class="text-4xl font-bold text-purple-400 mb-6">Self-custody vs. custodial</h2>
                  <p class="text-lg text-gray-300 leading-relaxed">
                    Self-custody wallets allow users to manage their private keys independently, while custodial wallets store keys on behalf of users, providing easier access but less control.
                  </p>
                </div>
  
                <!-- Wallet Differences Tab -->
                <div v-show="activeTab === 'walletdiff'">
                  <h2 class="text-4xl font-bold text-purple-400 mb-6">Software and hardware wallets</h2>
                  <p class="text-lg text-gray-300 leading-relaxed">
                    Software wallets run on devices and hardware wallets are offline physical devices, each offering different levels of security and convenience.
                  </p>
                </div>
  
                <!-- Lost Keys Tab -->
                <div v-show="activeTab === 'lost-keys'">
                  <h2 class="text-4xl font-bold text-purple-400 mb-6">Lost wallet keys</h2>
                  <p class="text-lg text-gray-300 leading-relaxed">
                    Losing access to wallet keys means losing access to the assets stored within. It’s crucial to securely back up and store private keys to prevent this.
                  </p>
                </div>
  
                <!-- Litecoin Tab -->
                <div v-show="activeTab === 'litecoin'">
                  <h2 class="text-4xl font-bold text-purple-400 mb-6">Why Litecoin?</h2>
                  <p class="text-lg text-gray-300 leading-relaxed">
                    Litecoin offers faster transactions, lower fees, and strong security, making it an ideal blockchain for developers and users seeking efficiency and scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeTab: "self-custody"
      };
    }
  }
  </script>
  
  <style>
  .glass-effect {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  </style>
  