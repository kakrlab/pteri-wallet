<template>
  <main id="main-content" tabindex="-1">
    <PwPageIntro crumb="Compatibility" eyebrow="PLATFORMS & COMPATIBILITY">
      <template #title>The right wallet<br>for your next step.</template>
      Choose a device, check the current release, and confirm the requirements for the operation you need.
    </PwPageIntro>

    <section class="container bottom-space"><PwDownloads /></section>

    <section class="signature-section">
      <div class="section container split">
        <div>
          <div class="eyebrow">RESTORING AN EXISTING WALLET?</div>
          <h2>Check the match<br>before you import.</h2>
          <p>A familiar phrase format alone does not establish full compatibility. The wallet settings and operations you need matter too.</p>
          <div class="actions"><PwButton to="/help#restore">Read the restoration guide</PwButton></div>
        </div>
        <div class="flow-card">
          <h3>Have these details ready.</h3>
          <ul class="compact-list">
            <li>Original wallet application<span>App name and release</span></li>
            <li>Recovery format<span>Phrase or supported file format</span></li>
            <li>Network and address types<span>Including wallet derivation settings</span></li>
            <li>MWEB requirements<span>Operation-specific support</span></li>
            <li>Backup and export needs<span>Check the selected release</span></li>
          </ul>
          <p class="micro">Share the format and app details, never the phrase or file itself.</p>
        </div>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <div class="eyebrow">WHAT SHOULD YOU COMPARE?</div>
          <h2>Check the features that matter to you.</h2>
        </div>
        <p>Use current release information. Availability on one platform does not establish support on another.</p>
      </div>
      <div class="security-grid">
        <div class="path"><h3>Wallet tasks</h3><p>Creating, restoring, receiving, sending, backing up, and exporting. Check supported networks, address types, and formats.</p></div>
        <div class="path"><h3>Signing and access</h3><p>Unlocking, request review, and application approval. Check the supported device and connected integration.</p></div>
      </div>
      <div class="live-note">Not sure whether a specific operation is supported? Ask about your platform, release, and intended task before importing or relying on a feature.</div>
    </section>

    <section class="section container">
      <div class="banner">
        <div>
          <h2>Get a clear answer before you restore.</h2>
          <p>Tell support the original app, version, and recovery format. Keep the recovery material itself private.</p>
        </div>
        <PwButton :to="links.support">Ask about compatibility</PwButton>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { links } from '~/data/wallet'

definePageMeta({ layout: 'wallet' })

usePwSeo(
  'Compatibility | PTERI Wallet',
  'Compare platform choices and the formats, address types, and operations to check before creating or restoring a PTERI Wallet.',
  '/compatibility',
)
</script>
