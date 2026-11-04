<template>
  <!-- Developer Platform & MFA Infrastructure section -->
  <section id="developers" class="py-20 bg-page-mid">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <!-- Left: Description -->
        <div data-aos="fade-right">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <span class="text-blue-400 text-xs font-semibold tracking-wide uppercase">Developer Platform</span>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            Developer Platform<br>& MFA Infrastructure
          </h2>
          <p class="text-gray-400 text-lg mb-8 leading-relaxed">
            Integrate PTERI into your apps and deliver the world's finest MFA experience.
          </p>

          <ul class="space-y-3 mb-8">
            <li v-for="feature in devFeatures" :key="feature" class="flex items-center gap-3">
              <div class="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center flex-shrink-0">
                <svg class="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              <span class="text-gray-300 text-sm">{{ feature }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-4">
            <a href="https://docs.kakrlabs.com" target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-200 text-sm">
              Explore Docs
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="https://playground.pteri.org/" target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-all duration-200 text-sm">
              Try Playground
            </a>
          </div>
        </div>

        <!-- Right: Code snippet + side features -->
        <div data-aos="fade-left" class="flex flex-col gap-6">
          <!-- Code block -->
          <div class="bg-screen-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            <!-- Tab bar -->
            <div class="flex items-center gap-1 px-4 py-3 bg-card-dark border-b border-white/10">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500/70"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/70"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/70"></div>
              </div>
              <div class="flex gap-1 ml-4">
                <button
                  v-for="tab in tabs" :key="tab"
                  @click="activeTab = tab"
                  class="px-3 py-1 text-xs rounded-md transition-colors duration-150"
                  :class="activeTab === tab
                    ? 'text-white bg-white/10'
                    : 'text-gray-500 hover:text-gray-300'"
                >{{ tab }}</button>
              </div>
            </div>
            <!-- Code -->
            <div class="p-5 font-mono text-sm leading-relaxed overflow-x-auto min-h-[280px]">

              <!-- Node.js -->
              <template v-if="activeTab === 'Node.js'">
                <p class="text-gray-500">// npm install liaas-js</p>
                <p><span class="text-blue-400">var</span> <span class="text-white">LiaaS</span> <span class="text-blue-400">=</span> <span class="text-yellow-300">require</span><span class="text-white">(</span><span class="text-green-400">'liaas-js'</span><span class="text-white">)</span></p>
                <br>
                <p class="text-gray-500">// Initialize with your node URL or API key</p>
                <p><span class="text-blue-400">var</span> <span class="text-white">api</span> <span class="text-blue-400">=</span> <span class="text-blue-400">new</span> <span class="text-yellow-300">LiaaS</span><span class="text-gray-400">.</span><span class="text-yellow-300">AddressApi</span><span class="text-white">()</span></p>
                <br>
                <p class="text-gray-500">// Get address balance</p>
                <p><span class="text-white">api</span><span class="text-gray-400">.</span><span class="text-yellow-300">apiAddressAddressBalanceGet</span><span class="text-white">(&#123;</span></p>
                <p class="pl-4"><span class="text-cyan-300">nodeUrlOrApiAccessKey</span><span class="text-white">:</span> <span class="text-green-400">'YOUR_API_KEY'</span><span class="text-white">,</span></p>
                <p class="pl-4"><span class="text-cyan-300">address</span><span class="text-white">:</span> <span class="text-green-400">'ltc1...address'</span></p>
                <p><span class="text-white">&#125;, (err, data) =&gt; &#123;</span></p>
                <p class="pl-4"><span class="text-white">console</span><span class="text-gray-400">.</span><span class="text-yellow-300">log</span><span class="text-white">(data</span><span class="text-gray-400">.</span><span class="text-white">confirmed, data</span><span class="text-gray-400">.</span><span class="text-white">unconfirmed)</span></p>
                <p><span class="text-white">&#125;)</span></p>
                <br>
                <p class="text-gray-500">// Sign a message</p>
                <p><span class="text-blue-400">var</span> <span class="text-white">addrApi</span> <span class="text-blue-400">=</span> <span class="text-blue-400">new</span> <span class="text-yellow-300">LiaaS</span><span class="text-gray-400">.</span><span class="text-yellow-300">AddressApi</span><span class="text-white">()</span></p>
                <p><span class="text-white">addrApi</span><span class="text-gray-400">.</span><span class="text-yellow-300">apiAddressSignMessagePost</span><span class="text-white">(&#123;</span></p>
                <p class="pl-4"><span class="text-cyan-300">nodeUrlOrApiAccessKey</span><span class="text-white">:</span> <span class="text-green-400">'YOUR_API_KEY'</span><span class="text-white">,</span></p>
                <p class="pl-4"><span class="text-cyan-300">address</span><span class="text-white">:</span> <span class="text-green-400">'ltc1...address'</span><span class="text-white">,</span></p>
                <p class="pl-4"><span class="text-cyan-300">message</span><span class="text-white">:</span> <span class="text-green-400">'Hello LiaaS'</span></p>
                <p><span class="text-white">&#125;, (err, data) =&gt; console</span><span class="text-gray-400">.</span><span class="text-yellow-300">log</span><span class="text-white">(data))</span></p>
              </template>

              <!-- Python -->
              <template v-else-if="activeTab === 'Python'">
                <p class="text-gray-500"># pip install liaas</p>
                <p><span class="text-blue-400">import</span> <span class="text-white">openapi_client</span></p>
                <p><span class="text-blue-400">from</span> <span class="text-white">openapi_client</span><span class="text-gray-400">.</span><span class="text-white">rest</span> <span class="text-blue-400">import</span> <span class="text-yellow-300">ApiException</span></p>
                <br>
                <p class="text-gray-500"># Configure with your node URL or API key</p>
                <p><span class="text-white">configuration</span> <span class="text-blue-400">=</span> <span class="text-yellow-300">openapi_client</span><span class="text-gray-400">.</span><span class="text-yellow-300">Configuration</span><span class="text-white">(</span></p>
                <p class="pl-4"><span class="text-cyan-300">host</span><span class="text-white">=</span><span class="text-green-400">"https://liaasnode.com"</span></p>
                <p><span class="text-white">)</span></p>
                <br>
                <p><span class="text-blue-400">with</span> <span class="text-yellow-300">openapi_client</span><span class="text-gray-400">.</span><span class="text-yellow-300">ApiClient</span><span class="text-white">(configuration)</span> <span class="text-blue-400">as</span> <span class="text-white">api_client:</span></p>
                <p class="pl-4"><span class="text-white">api</span> <span class="text-blue-400">=</span> <span class="text-yellow-300">openapi_client</span><span class="text-gray-400">.</span><span class="text-yellow-300">AddressApi</span><span class="text-white">(api_client)</span></p>
                <p class="pl-4"><span class="text-gray-500"># Get address balance</span></p>
                <p class="pl-4"><span class="text-white">api</span><span class="text-gray-400">.</span><span class="text-yellow-300">api_address_address_balance_get</span><span class="text-white">(</span></p>
                <p class="pl-8"><span class="text-cyan-300">node_url_or_api_access_key</span><span class="text-white">=</span><span class="text-green-400">'YOUR_API_KEY'</span><span class="text-white">,</span></p>
                <p class="pl-8"><span class="text-cyan-300">address</span><span class="text-white">=</span><span class="text-green-400">'ltc1...address'</span></p>
                <p class="pl-4"><span class="text-white">)</span></p>
                <p class="pl-4"><span class="text-gray-500"># Sign a message</span></p>
                <p class="pl-4"><span class="text-white">api</span><span class="text-gray-400">.</span><span class="text-yellow-300">api_address_sign_message_post</span><span class="text-white">(</span></p>
                <p class="pl-8"><span class="text-cyan-300">node_url_or_api_access_key</span><span class="text-white">=</span><span class="text-green-400">'YOUR_API_KEY'</span><span class="text-white">,</span></p>
                <p class="pl-8"><span class="text-cyan-300">message</span><span class="text-white">=</span><span class="text-green-400">'Hello LiaaS'</span></p>
                <p class="pl-4"><span class="text-white">)</span></p>
              </template>

              <!-- cURL -->
              <template v-else-if="activeTab === 'cURL'">
                <p class="text-gray-500"># Get address balance</p>
                <p><span class="text-yellow-300">curl</span> <span class="text-white">-X GET</span> <span class="text-green-400">\</span></p>
                <p class="pl-4"><span class="text-green-400">'https://liaasnode.com/api/Address/address-balance'</span> <span class="text-green-400">\</span></p>
                <p class="pl-4"><span class="text-white">-H</span> <span class="text-green-400">'nodeUrlOrApiAccessKey: YOUR_API_KEY'</span> <span class="text-green-400">\</span></p>
                <p class="pl-4"><span class="text-white">-G</span> <span class="text-white">--data-urlencode</span> <span class="text-green-400">'address=ltc1...address'</span></p>
                <br>
                <p class="text-gray-500"># Sign a message with address private key</p>
                <p><span class="text-yellow-300">curl</span> <span class="text-white">-X POST</span> <span class="text-green-400">\</span></p>
                <p class="pl-4"><span class="text-green-400">'https://liaasnode.com/api/Address/sign-message'</span> <span class="text-green-400">\</span></p>
                <p class="pl-4"><span class="text-white">-H</span> <span class="text-green-400">'Content-Type: application/json'</span> <span class="text-green-400">\</span></p>
                <p class="pl-4"><span class="text-white">-d</span> <span class="text-green-400">'&#123;</span></p>
                <p class="pl-6"><span class="text-green-400">"nodeUrlOrApiAccessKey": "YOUR_API_KEY",</span></p>
                <p class="pl-6"><span class="text-green-400">"address": "ltc1...address",</span></p>
                <p class="pl-6"><span class="text-green-400">"message": "Hello LiaaS"</span></p>
                <p class="pl-4"><span class="text-green-400">&#125;'</span></p>
              </template>

              <!-- Go -->
              <template v-else-if="activeTab === 'Go'">
                <p class="text-gray-500">// go get github.com/kakrlabs/liaas-go</p>
                <p><span class="text-blue-400">import</span> <span class="text-white">(</span></p>
                <p class="pl-4"><span class="text-green-400">"context"</span></p>
                <p class="pl-4"><span class="text-green-400">liaas "github.com/kakrlabs/liaas-go"</span></p>
                <p><span class="text-white">)</span></p>
                <br>
                <p class="text-gray-500">// Configure client</p>
                <p><span class="text-white">cfg</span> <span class="text-blue-400">:=</span> <span class="text-yellow-300">liaas</span><span class="text-gray-400">.</span><span class="text-yellow-300">NewConfiguration</span><span class="text-white">()</span></p>
                <p><span class="text-white">cfg</span><span class="text-gray-400">.</span><span class="text-white">Host</span> <span class="text-blue-400">=</span> <span class="text-green-400">"liaasnode.com"</span></p>
                <p><span class="text-white">client</span> <span class="text-blue-400">:=</span> <span class="text-yellow-300">liaas</span><span class="text-gray-400">.</span><span class="text-yellow-300">NewAPIClient</span><span class="text-white">(cfg)</span></p>
                <br>
                <p class="text-gray-500">// Get address balance</p>
                <p><span class="text-white">resp, _, err</span> <span class="text-blue-400">:=</span> <span class="text-white">client</span><span class="text-gray-400">.</span><span class="text-yellow-300">AddressApi</span><span class="text-gray-400">.</span></p>
                <p class="pl-4"><span class="text-yellow-300">ApiAddressAddressBalanceGet</span><span class="text-white">(</span><span class="text-yellow-300">context</span><span class="text-gray-400">.</span><span class="text-yellow-300">Background</span><span class="text-white">())</span><span class="text-gray-400">.</span></p>
                <p class="pl-4"><span class="text-yellow-300">NodeUrlOrApiAccessKey</span><span class="text-white">(</span><span class="text-green-400">"YOUR_API_KEY"</span><span class="text-white">)</span><span class="text-gray-400">.</span></p>
                <p class="pl-4"><span class="text-yellow-300">Address</span><span class="text-white">(</span><span class="text-green-400">"ltc1...address"</span><span class="text-white">)</span><span class="text-gray-400">.</span></p>
                <p class="pl-4"><span class="text-yellow-300">Execute</span><span class="text-white">()</span></p>
                <br>
                <p><span class="text-blue-400">if</span> <span class="text-white">err != nil &#123; log</span><span class="text-gray-400">.</span><span class="text-yellow-300">Fatal</span><span class="text-white">(err) &#125;</span></p>
                <p><span class="text-white">fmt</span><span class="text-gray-400">.</span><span class="text-yellow-300">Println</span><span class="text-white">(resp</span><span class="text-gray-400">.</span><span class="text-white">Data</span><span class="text-gray-400">.</span><span class="text-white">Confirmed)</span></p>
              </template>

              <!-- Rust -->
              <template v-else-if="activeTab === 'Rust'">
                <p class="text-gray-500">// cargo add liaas</p>
                <p><span class="text-blue-400">use</span> <span class="text-white">liaas_sdk</span><span class="text-gray-400">::</span><span class="text-white">&#123;</span><span class="text-yellow-300">Configuration</span><span class="text-white">,</span> <span class="text-yellow-300">AddressApi</span><span class="text-white">&#125;;</span></p>
                <br>
                <p class="text-gray-500">// Configure client</p>
                <p><span class="text-blue-400">let</span> <span class="text-blue-400">mut</span> <span class="text-white">cfg</span> <span class="text-blue-400">=</span> <span class="text-yellow-300">Configuration</span><span class="text-gray-400">::</span><span class="text-yellow-300">new</span><span class="text-white">();</span></p>
                <p><span class="text-white">cfg</span><span class="text-gray-400">.</span><span class="text-white">base_path</span> <span class="text-blue-400">=</span> <span class="text-green-400">"https://liaasnode.com"</span><span class="text-gray-400">.</span><span class="text-yellow-300">to_string</span><span class="text-white">();</span></p>
                <br>
                <p class="text-gray-500">// Get address balance</p>
                <p><span class="text-blue-400">let</span> <span class="text-white">result</span> <span class="text-blue-400">=</span> <span class="text-yellow-300">AddressApi</span><span class="text-gray-400">::</span><span class="text-yellow-300">api_address_address_balance_get</span><span class="text-white">(</span></p>
                <p class="pl-4"><span class="text-white">&amp;cfg,</span></p>
                <p class="pl-4"><span class="text-yellow-300">Some</span><span class="text-white">(</span><span class="text-green-400">"YOUR_API_KEY"</span><span class="text-white">),</span></p>
                <p class="pl-4"><span class="text-yellow-300">Some</span><span class="text-white">(</span><span class="text-green-400">"ltc1...address"</span><span class="text-white">),</span></p>
                <p><span class="text-white">)</span><span class="text-gray-400">.</span><span class="text-yellow-300">await</span><span class="text-white">?;</span></p>
                <br>
                <p class="text-gray-500">// Sign a message</p>
                <p><span class="text-blue-400">let</span> <span class="text-white">sig</span> <span class="text-blue-400">=</span> <span class="text-yellow-300">AddressApi</span><span class="text-gray-400">::</span><span class="text-yellow-300">api_address_sign_message_post</span><span class="text-white">(</span></p>
                <p class="pl-4"><span class="text-white">&amp;cfg, sign_dto</span></p>
                <p><span class="text-white">)</span><span class="text-gray-400">.</span><span class="text-yellow-300">await</span><span class="text-white">?;</span></p>
                <p><span class="text-white">println</span><span class="text-yellow-300">!</span><span class="text-white">(</span><span class="text-green-400">"Signature: &#123;&#125;"</span><span class="text-white">, sig</span><span class="text-gray-400">.</span><span class="text-white">data);</span></p>
              </template>

              <!-- Java -->
              <template v-else-if="activeTab === 'Java'">
                <p class="text-gray-500">// gradle add liaas</p>
                <p><span class="text-blue-400">import</span> <span class="text-white">org.openapitools.client.ApiClient;</span></p>
                <p><span class="text-blue-400">import</span> <span class="text-white">org.openapitools.client.api.AddressApi;</span></p>
                <p><span class="text-blue-400">import</span> <span class="text-white">org.openapitools.client.api.WalletApi;</span></p>
                <br>
                <p class="text-gray-500">// Configure client</p>
                <p><span class="text-yellow-300">ApiClient</span> <span class="text-white">client</span> <span class="text-blue-400">=</span> <span class="text-blue-400">new</span> <span class="text-yellow-300">ApiClient</span><span class="text-white">();</span></p>
                <p><span class="text-white">client</span><span class="text-gray-400">.</span><span class="text-yellow-300">setBasePath</span><span class="text-white">(</span><span class="text-green-400">"https://liaasnode.com"</span><span class="text-white">);</span></p>
                <br>
                <p class="text-gray-500">// Get address balance</p>
                <p><span class="text-yellow-300">AddressApi</span> <span class="text-white">api</span> <span class="text-blue-400">=</span> <span class="text-blue-400">new</span> <span class="text-yellow-300">AddressApi</span><span class="text-white">(client);</span></p>
                <p><span class="text-white">api</span><span class="text-gray-400">.</span><span class="text-yellow-300">apiAddressAddressBalanceGet</span><span class="text-white">(</span></p>
                <p class="pl-4"><span class="text-green-400">"YOUR_API_KEY"</span><span class="text-white">,</span></p>
                <p class="pl-4"><span class="text-green-400">"ltc1...address"</span></p>
                <p><span class="text-white">);</span></p>
                <br>
                <p class="text-gray-500">// Sign a message using wallet</p>
                <p><span class="text-yellow-300">WalletApi</span> <span class="text-white">walletApi</span> <span class="text-blue-400">=</span> <span class="text-blue-400">new</span> <span class="text-yellow-300">WalletApi</span><span class="text-white">(client);</span></p>
                <p><span class="text-white">walletApi</span><span class="text-gray-400">.</span><span class="text-yellow-300">apiWalletSignWalletMessagePost</span><span class="text-white">(</span></p>
                <p class="pl-4"><span class="text-blue-400">new</span> <span class="text-yellow-300">SignMessageUsingWalletdto</span><span class="text-white">()</span></p>
                <p class="pl-6"><span class="text-gray-400">.</span><span class="text-yellow-300">nodeUrlOrApiAccessKey</span><span class="text-white">(</span><span class="text-green-400">"YOUR_API_KEY"</span><span class="text-white">)</span></p>
                <p class="pl-6"><span class="text-gray-400">.</span><span class="text-yellow-300">message</span><span class="text-white">(</span><span class="text-green-400">"Hello LiaaS"</span><span class="text-white">)</span></p>
                <p><span class="text-white">);</span></p>
              </template>

            </div>
          </div>

          <!-- Side feature cards -->
          <div class="grid grid-cols-2 gap-4">
            <div v-for="(feat, index) in sideFeatures" :key="feat.title"
              data-aos="fade-up"
              :data-aos-delay="index * 80"
              class="bg-card-dark border border-white/10 rounded-xl p-4 hover:border-blue-500/30 transition-colors">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center mb-3" :class="feat.bgClass">
                <svg class="w-4 h-4" :class="feat.iconClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="feat.icon"/>
                </svg>
              </div>
              <h4 class="text-white font-semibold text-sm mb-1">{{ feat.title }}</h4>
              <p class="text-gray-400 text-xs leading-relaxed">{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tabs = ['Node.js', 'Python', 'cURL', 'Go', 'Rust', 'Java']
const activeTab = ref('Node.js')

const devFeatures = [
  'Easy SDKs & Libraries (Node.js, Python, iOS, Android)',
  'RESTful APIs with Real-time Webhooks',
  'Authentication Playground',
  'Dashboard & Analytics',
  'Scalable MFA for Millions of Users',
  'Enterprise Support & SLA',
]

const sideFeatures = [
  {
    title: 'Easy Integration',
    description: 'Get started in minutes.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    bgClass: 'bg-blue-500/10',
    iconClass: 'text-blue-400',
  },
  {
    title: 'Real-time Webhooks',
    description: 'Instant auth updates.',
    icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9',
    bgClass: 'bg-purple-500/10',
    iconClass: 'text-purple-400',
  },
  {
    title: 'Developer Playground',
    description: 'Test & build securely.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    bgClass: 'bg-green-500/10',
    iconClass: 'text-green-400',
  },
  {
    title: 'Enterprise Ready',
    description: 'Built for scale & reliability.',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    bgClass: 'bg-orange-500/10',
    iconClass: 'text-orange-400',
  },
]
</script>
