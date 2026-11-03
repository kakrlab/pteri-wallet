<template>
  <main id="main-content" tabindex="-1">
    <PwPageIntro crumb="Help" eyebrow="WALLET HELP">
      <template #title>Find your next step.<br><em>Keep your secrets private.</em></template>
      Choose a task or search the guidance on this page. Use instructions for the platform and version you are running.
    </PwPageIntro>

    <div class="container bottom-space">
      <label for="help-search" class="micro">Search these seven wallet help topics</label>
      <div><input id="help-search" v-model="query" class="searchbox" type="search" placeholder="Try “restore”, “balance”, or “browser”" autocomplete="off"></div>
      <span class="result-count" aria-live="polite">{{ results.length }} {{ results.length === 1 ? 'topic' : 'topics' }}</span>
    </div>

    <section class="section container guide-index">
      <nav class="guide-nav" aria-label="Wallet help topics">
        <NuxtLink v-for="t in helpTopics" :key="t.id" :to="`/help#${t.id}`">{{ t.title }}</NuxtLink>
      </nav>
      <div>
        <div>
          <section v-for="t in results" :id="t.id" :key="t.id" class="help-block">
            <h2>{{ t.title }}</h2>
            <p v-for="para in t.body" :key="para">{{ para }}</p>
            <PwLink class="subtle-link" :to="t.link.to">{{ t.link.label }}</PwLink>
          </section>
        </div>
        <div v-if="!results.length" class="no-results">No matching topic here. Try a different word or contact the Support Center below.</div>
      </div>
    </section>

    <section id="contact" class="section container">
      <div class="banner">
        <div>
          <h2>Still need a hand?</h2>
          <p>Include your platform, app version or browser, the step that failed, and redacted error text. Never include recovery phrases, private keys, passwords, or backup files.</p>
        </div>
        <PwButton :to="links.support">Open Support Center</PwButton>
      </div>
      <p class="micro" style="margin-top:18px">Email fallback: <a :href="`mailto:${links.email}?subject=PTERI%20Wallet%20support`">{{ links.email }}</a>. Do not include wallet secrets.</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import { helpTopics, links } from '~/data/wallet'

definePageMeta({ layout: 'wallet' })

usePwSeo(
  'Wallet Help | PTERI Wallet',
  'Find PTERI Wallet guidance for setup, restoration, saved-wallet access, balances, transfers, MWEB, and safe support requests.',
  '/help',
)

// Search runs locally over the topics on this page. Query text is never sent to analytics.
const query = ref('')
const results = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return helpTopics
  return helpTopics.filter(t => `${t.title} ${t.tags} ${t.body.join(' ')}`.toLowerCase().includes(q))
})
</script>
