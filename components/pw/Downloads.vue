<template>
  <div class="download">
    <div class="device">
      <span class="label">iPhone &amp; iPad</span>
      <h3>PTERI Wallet for<br>iPhone and iPad.</h3>
      <p>Keep your wallet close. Check the App Store listing for compatible devices and current features.</p>
      <a class="store-badge" :href="links.ios" aria-label="Download PTERI Wallet on the App Store"><img class="apple-badge" src="/wallet/badges/download-on-the-app-store.svg" alt="Download on the App Store" width="144" height="48"></a>
      <span class="micro">Availability and features depend on the release.</span>
    </div>
    <div class="device">
      <span class="label">ANDROID</span>
      <h3>PTERI Wallet for<br>Android.</h3>
      <p>Bring your wallet to your Android device. See the current release and device requirements on Google Play.</p>
      <!-- LAUNCH BLOCKER: unmodified public guideline sample. Replace with the production export obtained under the app owner's Google artwork terms; keep the clear space. -->
      <a class="store-badge" :href="links.android" aria-label="Get PTERI Wallet on Google Play"><img class="google-badge" src="/wallet/badges/google-play-official-reference.png" alt="Get it on Google Play" width="178" height="116"></a>
      <span class="micro">Check the app and publisher before installing.</span>
    </div>
    <div class="device">
      <span class="label">BROWSER</span>
      <h3>Your wallet,<br>on the web.</h3>
      <p>Open the Web Wallet in a supported browser. Review backup and restoration guidance before you begin.</p>
      <div class="web-download"><PwButton :to="links.webWallet" primary>Open Web Wallet</PwButton></div>
      <NuxtLink class="subtle-link" to="/get-started">Read the setup guide</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { links } from '~/data/wallet'
</script>
