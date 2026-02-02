<template>
  <section
    class="pt-16 pb-20 bg-gray-100 transition-all duration-300 overflow-hidden"
  >
    <div class="container mx-auto max-w-[1000px] px-4">
      <h2
        data-aos="fade-up"
        data-aos-duration="1000"
        class="mb-10 text-4xl md:text-5xl xl:text-6xl font-bold text-center text-black"
      >
        Explore Pteri
      </h2>

      <!-- New Grid Layout -->
      <div class="flex flex-col md:flex-row justify-center items-stretch space-y-8 md:space-y-0 md:space-x-6">
        <!-- Litecoin Card -->
        <div
          class="flex-1 p-6 bg-blue-500 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="flex flex-col items-center">
            <img
              src="/litecoin-img.png"
              class="w-28 mb-5"
              alt="litecoin-logo"
            />
            <h3 class="mb-3 text-xl font-bold text-center text-white">
              Litecoin
            </h3>
            <p class="text-white mb-4 text-center">
              Check Litecoin Transactions and Wallet Data
            </p>
          </div>
          <ul class="list-disc pl-5 text-white">
            <li>Access and verify transactions</li>
            <li>Track wallet data</li>
            <li>User-friendly interface</li>
          </ul>
        </div>

        <!-- Omnilite Card -->
        <!--
        <div
          class="flex-1 p-6 bg-blue-700 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="flex flex-col items-center">
            <img
              src="/omnilite-logo.svg"
              class="w-20 mb-5"
              alt="omnilite-logo"
            />
            <h3 class="mb-3 text-xl font-bold text-center text-white">
              Omnilite
            </h3>
            <p class="text-white mb-4 text-center">
              Explore OmniLite NFTs and DApps
            </p>
          </div>
          <ul class="list-disc pl-5 text-white">
            <li>Manage NFTs</li>
            <li>Stay updated on NFTs</li>
            <li>Explore DApps</li>
            <li>Control your assets</li>
          </ul>
        </div>
        -->

        <!-- MWEB Card -->
        <div
          class="flex-1 p-6 bg-green-800 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="flex flex-col items-center">
            <img
              src="/mweb.png"
              class="w-28 mb-5"
              alt="mweb-logo"
            />
            <h3 class="mb-3 text-xl font-bold text-center text-white">
              MWEB
            </h3>
            <p class="text-white mb-4 text-center">
              Monitor Litecoin MWEB Transactions and Confirmations
            </p>
          </div>
          <ul class="list-disc pl-5 text-white">
            <li>Track transactions</li>
            <li>Get real-time confirmations</li>
            <li>Detailed insights</li>
            <li>Essential information at hand</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
}

.flex-1 {
  min-width: 250px;
}

ul li {
  margin-bottom: 8px;
}
</style>