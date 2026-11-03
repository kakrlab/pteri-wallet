<template>
  <main id="main-content" tabindex="-1">
    <section class="container hero">
      <div>
        <div class="eyebrow">IDENTITY · PAYMENTS · AI AUTHORITY</div>
        <h1>A security wallet<br>for the <em>AI era.</em></h1>
        <p class="lede">Bring Litecoin payments, authentication, and supported AI-agent approvals into one wallet experience. Sign in, add verification, and decide which actions you authorize.</p>
        <div class="actions">
          <PwButton to="/#download" primary>Choose your app</PwButton>
          <PwButton :to="links.webWallet">Open Web Wallet</PwButton>
        </div>
        <NuxtLink class="subtle-link" to="/get-started">New here? Start with the basics</NuxtLink>
      </div>
      <div class="hero-apps">
        <div class="orbit" />
        <img class="app-capture front" :src="captures.overview" alt="Published PTERI wallet overview with a zero Litecoin balance" width="1320" height="2868">
        <img class="app-capture rear" :src="captures.signing" alt="Published iOS simulator screen showing message signing" width="1320" height="2868">
        <span class="app-caption">Published iOS simulator screens · Features vary by release</span>
      </div>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <div class="eyebrow">SEE THE WALLET</div>
          <h2>A real interface.<br>A clearer next step.</h2>
        </div>
        <p>Explore the app screens already published by PTERI. Choose the platform and release for the features you need.</p>
      </div>
      <div class="screenshot-grid">
        <figure>
          <div class="capture-surface"><img :src="captures.overview" alt="PTERI mobile wallet overview with a zero Litecoin balance and wallet actions" loading="lazy" width="1320" height="2868"></div>
          <figcaption><strong>Your Litecoin, in view.</strong><p>Wallet overview and available action controls.</p></figcaption>
        </figure>
        <figure>
          <div class="capture-surface"><img :src="captures.signing" alt="PTERI mobile message-signing screen with an empty message field" loading="lazy" width="1320" height="2868"></div>
          <figcaption><strong>A place to sign.</strong><p>The message-signing interface shown in the existing app gallery.</p></figcaption>
        </figure>
        <figure>
          <div class="capture-surface"><img :src="captures.welcome" alt="PTERI mobile welcome screen offering creation or import" loading="lazy" width="1320" height="2868"></div>
          <figcaption><strong>A choice of starting points.</strong><p>Create a wallet or restore a compatible one.</p></figcaption>
        </figure>
      </div>
      <p class="quote-note">Existing published iOS simulator captures, not a certification of the current release or of Android/web feature parity.</p>
    </section>

    <section id="style" class="section container">
      <div class="section-head">
        <div>
          <div class="eyebrow">MAKE IT YOURS</div>
          <h2>Your style.<br>Your choice. Your colors.</h2>
        </div>
        <p>Pick a look that feels like you. Explore light, dark, and colorful appearances from the published wallet gallery.</p>
      </div>
      <div class="theme-layout">
        <div class="theme-controls">
          <h3>A wallet with room for personality.</h3>
          <p>Prefer a clean light screen, a dark canvas, or a little more color? Explore the appearances shown in our published gallery.</p>
          <div class="theme-choices" role="group" aria-label="Preview a wallet appearance">
            <button v-for="(t, i) in walletThemes" :key="t.src" class="theme-choice" type="button" :aria-pressed="i === themeIndex" @click="themeIndex = i">
              <span class="theme-swatch" :style="{ background: t.accent }" aria-hidden="true" /><span>{{ t.label }}</span>
            </button>
          </div>
          <div id="theme-label" class="theme-label" aria-live="polite">Previewing: {{ theme.label }}</div>
          <p class="micro">This changes the gallery preview only. Confirm current theme names and availability in your selected app release.</p>
          <div class="actions"><PwButton to="/#download" primary>Choose your app</PwButton></div>
        </div>
        <figure class="theme-preview" :style="{ '--look-bg': theme.background }">
          <img :src="theme.src" :alt="theme.alt" width="589" height="1280">
          <figcaption>Real published mobile screen · Appearance preview</figcaption>
        </figure>
      </div>
    </section>

    <section class="security-story">
      <div class="section container">
        <div class="section-head">
          <div>
            <div class="eyebrow">SECURITY WITH A CLEAR PURPOSE</div>
            <h2>Protect access.<br>Make authority explicit.</h2>
          </div>
          <p>Your identity, your payments, and your agents carry different responsibilities. Make each decision intentional.</p>
        </div>
        <div class="security-pillars">
          <div><span>01 / ACCESS</span><h3>Know who is asking.</h3><p>Use supported authentication and additional verification steps to establish access to connected services.</p></div>
          <div><span>02 / ACTION</span><h3>Understand what you approve.</h3><p>Review the requesting application and the relevant action details before signing or approving.</p></div>
          <div><span>03 / AI AUTHORITY</span><h3>Give agents defined authority.</h3><p>Approve supported agent requests within the permissions and limits enforced by the connected application.</p></div>
        </div>
        <div class="security-bridge">
          <p>PTERI Wallet is your interface for supported wallet and signing workflows. The connected service still enforces permissions and its final decision.</p>
          <NuxtLink class="subtle-link" to="/security">Understand security and recovery</NuxtLink>
        </div>
      </div>
    </section>

    <section id="capabilities" class="section container">
      <div class="section-head">
        <div>
          <div class="eyebrow">WHAT YOUR WALLET DOES</div>
          <h2>Payments, identity,<br>and authority in one experience.</h2>
        </div>
        <p>Choose the task you need. Features depend on your wallet release and the connected application.</p>
      </div>
      <div class="path-grid">
        <PwLink v-for="c in capabilities" :key="c.num" :to="c.to" class="path">
          <span class="num">{{ c.num }}</span>
          <h3>{{ c.title }}</h3>
          <p>{{ c.text }}</p>
          <span class="subtle-link">{{ c.label }}</span>
        </PwLink>
      </div>
      <p class="quote-note">Authentication, second-factor verification, and action authorization are distinct functions. Use the flow supported by the service you connect.</p>
    </section>

    <section class="section container">
      <div class="section-head">
        <div>
          <div class="eyebrow">A SIMPLE START</div>
          <h2>What brings you here?</h2>
        </div>
        <p>Start with your task. No need to learn the whole platform first.</p>
      </div>
      <div class="path-grid">
        <NuxtLink class="path" to="/get-started?task=create"><span class="num">01</span><h3>I’m creating a wallet.</h3><p>Choose a platform and understand the backup steps before you begin.</p><span class="subtle-link">Start a new wallet</span></NuxtLink>
        <NuxtLink class="path" to="/get-started?task=restore"><span class="num">02</span><h3>I’m restoring access.</h3><p>Check your wallet format and choose a compatible restoration path.</p><span class="subtle-link">Plan your restore</span></NuxtLink>
        <NuxtLink class="path" to="/get-started?task=return"><span class="num">03</span><h3>I’m coming back.</h3><p>Open the wallet on the browser or device you used before.</p><span class="subtle-link">Return to your wallet</span></NuxtLink>
      </div>
    </section>

    <section class="signature-section">
      <div class="section container split">
        <div>
          <div class="eyebrow">BEYOND THE BALANCE</div>
          <h2>See the request.<br>Then decide.</h2>
          <p>The wallet also connects to supported PTERI signing workflows. Check what an application is asking before you approve. The application still makes its own policy decision.</p>
          <div class="actions"><PwButton :to="links.platform">Explore the PTERI platform</PwButton></div>
          <p class="quote-note">Signing and approval availability depend on the wallet release and the connected integration.</p>
        </div>
        <div class="flow-card">
          <div class="flow-row"><span>01</span><div><strong>Recognize the application</strong><small>Check who is requesting your approval.</small></div></div>
          <div class="flow-row"><span>02</span><div><strong>Understand the action</strong><small>Read the scope and relevant request details.</small></div></div>
          <div class="flow-row"><span>03</span><div><strong>Make an intentional choice</strong><small>Approve only a request you understand.</small></div></div>
          <p class="quote-note">Illustrative approval sequence; not a claim that every app is supported.</p>
        </div>
      </div>
    </section>

    <section id="download" class="section container">
      <div class="section-head">
        <div>
          <div class="eyebrow">YOUR DEVICE. YOUR CHOICE.</div>
          <h2>Find your wallet experience.</h2>
        </div>
        <p>Web and mobile have different requirements. Choose the release that supports what you need.</p>
      </div>
      <PwDownloads />
      <div class="actions"><NuxtLink class="subtle-link" to="/compatibility">Check compatibility before restoring</NuxtLink></div>
    </section>

    <section class="section container">
      <div class="banner">
        <div>
          <h2>A little preparation goes a long way.</h2>
          <p>Understand how to unlock and restore your wallet before you rely on it. Recovery depends on the required material and a compatible wallet.</p>
        </div>
        <PwButton to="/security">Read the recovery guide</PwButton>
      </div>
    </section>

    <section class="section container">
      <div class="section-head"><div><div class="eyebrow">A FEW USEFUL ANSWERS</div><h2>Before you begin.</h2></div></div>
      <div class="faq">
        <details><summary>Which PTERI website should I use?</summary><p>Use this site for wallet guidance and downloads, wallet.pteri.org for the browser wallet, and pteri.org for the broader PTERI platform.</p></details>
        <details><summary>Are the web and mobile versions identical?</summary><p>Do not assume the same features are available everywhere. Check the current release and platform requirements for the operation you need.</p></details>
        <details><summary>Can I restore any Litecoin wallet?</summary><p>Restoration depends on the supported recovery format, address types, and relevant wallet settings. Check compatibility before importing.</p></details>
        <details><summary>Can support recover my wallet for me?</summary><p>Support can explain the supported process. Recovery depends on the required material and compatibility; it is not guaranteed. Do not send recovery phrases or private keys to support.</p></details>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { captures, capabilities, links, walletThemes } from '~/data/wallet'

definePageMeta({ layout: 'wallet' })

usePwSeo(
  'PTERI Wallet — Litecoin and supported signing experiences',
  'Choose your PTERI Wallet experience, plan a compatible restore, and explore wallet and supported signing guidance.',
  '/',
)

const themeIndex = ref(0)
const theme = computed(() => walletThemes[themeIndex.value])
</script>
