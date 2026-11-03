<template>
  <main id="main-content" tabindex="-1">
    <PwPageIntro crumb="Security & Recovery" eyebrow="SECURITY & RECOVERY">
      <template #title>Know your wallet.<br><em>Prepare for recovery.</em></template>
      Understand everyday access, recovery requirements, and what to review before approving an operation.
    </PwPageIntro>

    <section class="container bottom-space">
      <div class="security-grid">
        <div class="path"><span class="num">01</span><h3>Everyday access</h3><p>Use the unlocking method supported by your release. Protect the device and browser where you use the wallet.</p><NuxtLink class="subtle-link" to="/help#return">Returning to a wallet</NuxtLink></div>
        <div class="path"><span class="num">02</span><h3>Recovery access</h3><p>Keep the required recovery material available independently of this device. Confirm the restoration format before switching wallets.</p><NuxtLink class="subtle-link" to="/compatibility">Check restoration compatibility</NuxtLink></div>
      </div>
    </section>

    <section class="signature-section">
      <div class="section container split">
        <div>
          <div class="eyebrow">READ BEFORE YOU ACT</div>
          <h2>Some moments deserve<br>an extra check.</h2>
          <p>Move through setup, restoration, and approval with the instructions for your selected wallet release.</p>
        </div>
        <div class="steps">
          <div class="step"><span class="num">01</span><div><h3>Changing your device or browser?</h3><p>Read the backup guidance before clearing local data or resetting a device. A password alone may not restore access.</p></div></div>
          <div class="step"><span class="num">02</span><div><h3>Reviewing a transfer?</h3><p>Check the network, destination, amount, and fees. Signing, submission, and network confirmation are separate stages.</p></div></div>
          <div class="step"><span class="num">03</span><div><h3>Approving an application request?</h3><p>Check the requesting application and the action details. Do not approve a request you do not understand.</p></div></div>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="banner">
        <div>
          <h2>Recovery material is not a support attachment.</h2>
          <p>Never send recovery phrases, private keys, passwords, or wallet backups to support. Describe the problem using redacted details.</p>
        </div>
        <PwButton to="/help#contact">How to ask for help</PwButton>
      </div>
    </section>

    <section class="section container">
      <div class="section-head"><div><div class="eyebrow">KNOW THE BOUNDARIES</div><h2>Clear answers. No blanket promises.</h2></div></div>
      <div class="faq">
        <details><summary>Can KAKR Labs guarantee recovery?</summary><p>No. Recovery depends on the wallet’s recovery mechanism, compatible software, and the information you retained. Support can help explain the supported process.</p></details>
        <details><summary>Does browser storage work like mobile storage?</summary><p>Do not assume the same storage or unlocking behavior across platforms. Read the information for your exact release before clearing data or changing devices.</p></details>
        <details><summary>Does every transfer use MWEB?</summary><p>Do not assume that MWEB is available for every wallet operation or address. Check the current release and the privacy boundaries of the transfer path.</p></details>
        <details><summary>Where should I look for technical security details?</summary><p>Use the current documentation and company security overview. Confirm the signing, storage, and data-processing boundary for the specific workflow you intend to use.</p></details>
      </div>
      <div class="actions" style="margin-top:25px">
        <PwButton to="/compatibility" primary>Check compatibility</PwButton>
        <PwButton :to="links.companySecurity">Company security overview</PwButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { links } from '~/data/wallet'

definePageMeta({ layout: 'wallet' })

usePwSeo(
  'Security & Recovery | PTERI Wallet',
  'Understand everyday wallet access, recovery preparation, and what to review before approving a transfer or application request.',
  '/security',
)
</script>
