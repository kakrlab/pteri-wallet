<template>
  <div>
    <section class="py-16 bg-white text-gray-900 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
          <!-- Products -->
          <div>
            <h3 class="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-4">PRODUCTS</h3>
            <ul class="space-y-3">
              <li><a href="https://pteri.kakr.org/" target="_blank" class="text-gray-600 hover:text-purple-500">PTERI Wallet</a></li>
              <li><a href="https://docs.kakrlabs.com/" target="_blank" class="text-gray-600 hover:text-purple-500">PTERI Authentication</a></li>
              <li><a href="https://docs.kakrlabs.com/api-reference" target="_blank" class="text-gray-600 hover:text-purple-500">PTERI APIs / BaaS</a></li>
              <li><a href="https://playground.pteri.org/" target="_blank" class="text-gray-600 hover:text-purple-500">PTERI Playground</a></li>
              <li><a href="https://pteri.org/chat/pteri-intelligence" target="_blank" class="text-gray-600 hover:text-purple-500">PTERI Intelligence</a></li>
              <li><a href="https://kakr.org/iot-security" target="_blank" class="text-gray-600 hover:text-purple-500">PTERI IoT Security</a></li>
            </ul>
          </div>

          <!-- Developers -->
          <div>
            <h3 class="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-4">DEVELOPERS</h3>
            <ul class="space-y-3">
              <li><a href="https://docs.kakrlabs.com" target="_blank" class="text-gray-600 hover:text-purple-500">Documentation</a></li>
              <li><a href="https://playground.pteri.org/" target="_blank" class="text-gray-600 hover:text-purple-500">Playground</a></li>
              <li><a href="https://docs.kakrlabs.com/api-reference" target="_blank" class="text-gray-600 hover:text-purple-500">API Keys / Dashboard</a></li>
              <li><a href="https://docs.kakrlabs.com" target="_blank" class="text-gray-600 hover:text-purple-500">SDKs</a></li>
              <li><a href="https://kakrlabs1.statuspage.io/" target="_blank" class="text-gray-600 hover:text-purple-500">Status & FAQ</a></li>
            </ul>
          </div>

          <!-- Security -->
          <div>
            <h3 class="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-4">SECURITY</h3>
            <ul class="space-y-3">
              <li><a href="https://kakr.org/trust-center" target="_blank" class="text-gray-600 hover:text-purple-500">Trust Center</a></li>
              <li><a href="https://kakr.org/data-processing-addendum" target="_blank" class="text-gray-600 hover:text-purple-500">Data Processing Addendum (DPA)</a></li>
              <li><a href="https://kakr.org/acceptable-use-policy" target="_blank" class="text-gray-600 hover:text-purple-500">Acceptable Use Policy</a></li>
              <li><a href="/privacy" class="text-gray-600 hover:text-purple-500">Privacy Policy</a></li>
              <li><a href="/terms" class="text-gray-600 hover:text-purple-500">Terms of Service</a></li>
              <li><a href="https://kakr.org/cookie-policy" target="_blank" class="text-gray-600 hover:text-purple-500">Cookie Policy</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div>
            <h3 class="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-4">COMPANY</h3>
            <ul class="space-y-3">
              <li><a href="https://kakr.org/about" target="_blank" class="text-gray-600 hover:text-purple-500">About</a></li>
              <li><a href="https://kakr.org/partnerships" target="_blank" class="text-gray-600 hover:text-purple-500">Partnerships</a></li>
              <li><a href="https://kakr.org/blog" target="_blank" class="text-gray-600 hover:text-purple-500">Blog</a></li>
              <li><a href="https://kakr.org/contact" target="_blank" class="text-gray-600 hover:text-purple-500">Contact / Support</a></li>
              <li><a href="https://docs.kakrlabs.com" target="_blank" class="text-gray-600 hover:text-purple-500">Help Docs</a></li>
            </ul>
          </div>

          <!-- Download -->
          <div>
            <h3 class="text-sm font-semibold text-purple-600 tracking-wider uppercase mb-4">DOWNLOAD</h3>
            <ul class="space-y-3">
              <li><a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="text-gray-600 hover:text-purple-500">iOS App Store</a></li>
              <li><a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="text-gray-600 hover:text-purple-500">Google Play</a></li>
              <li><a href="https://wallet.pteri.org" class="text-gray-600 hover:text-purple-500">Web Wallet</a></li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-16 pt-8 border-t border-gray-200 text-center">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="mb-4 md:mb-0">
              <a href="/" class="text-2xl font-bold text-purple-600">
                <img src="/pteri-logo.png" alt="Pteri Wallet Logo" class="h-10 inline-block mr-2">
              </a>
            </div>
            <div class="text-center md:text-right">
              <p class="text-sm text-gray-600">&copy; {{ new Date().getFullYear() }} Kakr Labs Inc. All Rights Reserved.</p>
              <p class="text-sm text-gray-600 mt-1">Litecoin-powered. Zero-custody. Privacy-first.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
a {
  transition: color 0.3s;
}
</style>