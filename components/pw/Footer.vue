<template>
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-brand">
        <PwBrand />
        <p>A wallet and signing experience in the PTERI product family, built by KAKR Labs.</p>
        <a :href="links.company">About KAKR Labs ↗</a>
      </div>
      <div>
        <strong>Your wallet</strong>
        <NuxtLink to="/get-started">Get started</NuxtLink>
        <NuxtLink to="/compatibility">Choose your platform</NuxtLink>
        <a :href="links.webWallet">Open Web Wallet ↗</a>
      </div>
      <div>
        <strong>Guidance</strong>
        <NuxtLink to="/security">Security &amp; recovery</NuxtLink>
        <NuxtLink to="/help">Wallet help</NuxtLink>
        <a :href="links.support">Support Center ↗</a>
        <a :href="links.status">Service status ↗</a>
      </div>
      <div>
        <strong>Explore PTERI</strong>
        <a :href="links.platform">PTERI Platform ↗</a>
        <a :href="links.docs">Developer documentation ↗</a>
        <a :href="links.companySecurity">Company security overview ↗</a>
        <NuxtLink to="/about/privacy-policy">Wallet Privacy Policy</NuxtLink>
        <NuxtLink to="/about/terms-of-service">Wallet Terms of Service</NuxtLink>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} Kakr Labs Inc. · PTERI Wallet</span>
      <span>Wallet information &amp; guidance · A PTERI experience</span>
    </div>
    <p class="trademark-credit">Apple, the Apple logo, iPhone, and iPad are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play and the Google Play logo are trademarks of Google LLC.</p>
  </footer>
</template>

<script setup lang="ts">
import { links } from '~/data/wallet'
</script>
