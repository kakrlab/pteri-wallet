<template>
  <footer class="bg-footer-dark border-t border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <!-- Top section -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
        <!-- Brand column -->
        <div class="col-span-2 md:col-span-3 lg:col-span-1">
          <a href="/" class="inline-block mb-4">
            <img src="/pteri-logo.png" alt="PTERI Wallet Logo" class="h-8">
          </a>
          <p class="text-gray-500 text-sm leading-relaxed mb-4">
            The authentication layer for the AI era. Self-custody Litecoin wallet and MFA platform.
          </p>
          <!-- Social links -->
          <div class="flex gap-3">
            <a href="https://twitter.com/pteriwallet" target="_blank" class="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://github.com/kakrlabs" target="_blank" class="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Products</h3>
          <ul class="space-y-3">
            <li><a href="https://pteri.kakr.org/" target="_blank" class="footer-link">PTERI Wallet</a></li>
            <li><a href="https://docs.kakrlabs.com/" target="_blank" class="footer-link">PTERI Authentication</a></li>
            <li><a href="https://docs.kakrlabs.com/api-reference" target="_blank" class="footer-link">PTERI APIs / BaaS</a></li>
            <li><a href="https://playground.pteri.org/" target="_blank" class="footer-link">PTERI Playground</a></li>
            <li><a href="https://pteri.org/chat/pteri-intelligence" target="_blank" class="footer-link">PTERI Intelligence</a></li>
            <li><a href="https://kakr.org/iot-security" target="_blank" class="footer-link">PTERI IoT Security</a></li>
          </ul>
        </div>

        <!-- Developers -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Developers</h3>
          <ul class="space-y-3">
            <li><a href="https://docs.kakrlabs.com" target="_blank" class="footer-link">Documentation</a></li>
            <li><a href="https://playground.pteri.org/" target="_blank" class="footer-link">Playground</a></li>
            <li><a href="https://docs.kakrlabs.com/api-reference" target="_blank" class="footer-link">API Keys / Dashboard</a></li>
            <li><a href="https://docs.kakrlabs.com" target="_blank" class="footer-link">SDKs</a></li>
            <li><a href="https://kakrlabs1.statuspage.io/" target="_blank" class="footer-link">Status &amp; FAQ</a></li>
          </ul>
        </div>

        <!-- Security -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Security</h3>
          <ul class="space-y-3">
            <li><a href="https://kakr.org/trust-center" target="_blank" class="footer-link">Trust Center</a></li>
            <li><a href="https://kakr.org/data-processing-addendum" target="_blank" class="footer-link">Data Processing Addendum</a></li>
            <li><a href="https://kakr.org/acceptable-use-policy" target="_blank" class="footer-link">Acceptable Use Policy</a></li>
            <li><a href="/privacy" class="footer-link">Privacy Policy</a></li>
            <li><a href="/terms" class="footer-link">Terms of Service</a></li>
            <li><a href="https://kakr.org/cookie-policy" target="_blank" class="footer-link">Cookie Policy</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Company</h3>
          <ul class="space-y-3">
            <li><a href="https://kakr.org/about" target="_blank" class="footer-link">About</a></li>
            <li><a href="https://kakr.org/partnerships" target="_blank" class="footer-link">Partnerships</a></li>
            <li><a href="https://kakr.org/blog" target="_blank" class="footer-link">Blog</a></li>
            <li><a href="https://kakr.org/contact" target="_blank" class="footer-link">Contact / Support</a></li>
            <li><a href="https://docs.kakrlabs.com" target="_blank" class="footer-link">Help Docs</a></li>
          </ul>
        </div>

        <!-- Download -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Download</h3>
          <ul class="space-y-3">
            <li><a href="https://apps.apple.com/us/app/pteri-wallet/id6751649780" target="_blank" class="footer-link">iOS App Store</a></li>
            <li><a href="https://play.google.com/store/apps/details?id=org.kakr.pteri" target="_blank" class="footer-link">Google Play</a></li>
            <li><a href="https://wallet.pteri.org" target="_blank" class="footer-link">Web Wallet</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-gray-600 text-sm">&copy; {{ new Date().getFullYear() }} Kakr Labs Inc. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="/privacy" class="text-gray-600 hover:text-gray-400 text-sm transition-colors">Privacy Policy</a>
          <a href="/terms" class="text-gray-600 hover:text-gray-400 text-sm transition-colors">Terms</a>
          <a href="https://support.kakr.ai" target="_blank" class="text-gray-600 hover:text-gray-400 text-sm transition-colors">Support</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200;
}
</style>
