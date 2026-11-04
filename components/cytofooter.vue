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
            <a href="https://x.com/kakrco" target="_blank" class="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/kakrlabs/" target="_blank" class="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="https://www.youtube.com/@kakrdev" target="_blank" class="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg flex items-center justify-center transition-colors">
              <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Products</h3>
          <ul class="space-y-3">
            <li><a href="/" class="footer-link">PTERI Wallet</a></li>
            <li><a href="/#how-it-works" class="footer-link">PTERI Authentication</a></li>
            <li><a href="/#mfa" class="footer-link">MFA Platform</a></li>
            <li><a href="/#download" class="footer-link">Download</a></li>
            <li><a href="https://pteri.org/chat/pteri-intelligence" target="_blank" class="footer-link">PTERI Intelligence</a></li>
          </ul>
        </div>

        <!-- Developers -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Developers</h3>
          <ul class="space-y-3">
            <li><a href="https://docs.kakrlabs.com" target="_blank" class="footer-link">Documentation</a></li>
            <li><a href="/#developers" class="footer-link">Developer Platform</a></li>
            <li><a href="https://docs.kakrlabs.com/6.-api-reference/6.2-api-reference-enterprise" target="_blank" class="footer-link">API Reference</a></li>
            <li><a href="https://docs.kakrlabs.com/7.-sdks-and-integration-guides/litecoin-liaas-api-api-clients#official-sdks" target="_blank" class="footer-link">SDKs</a></li>
            <li><a href="https://kakrlabs1.statuspage.io/" target="_blank" class="footer-link">Status &amp; FAQ</a></li>
          </ul>
        </div>

        <!-- Security -->
        <div>
          <h3 class="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-4">Security</h3>
          <ul class="space-y-3">
            <li><a href="/#security" class="footer-link">Security by Design</a></li>
            <li><a href="/#why-pteri" class="footer-link">Why PTERI</a></li>
            <li><a href="/#faq" class="footer-link">FAQ</a></li>
            <li><a href="/privacy" class="footer-link">Privacy Policy</a></li>
            <li><a href="/terms" class="footer-link">Terms of Service</a></li>
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
