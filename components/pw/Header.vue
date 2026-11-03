<template>
  <div>
    <a class="skip" href="#main-content" @click.prevent="skipToMain">Skip to content</a>
    <header class="site-header">
      <PwBrand />
      <nav class="mainnav" aria-label="Wallet navigation">
        <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" :aria-current="isCurrent(item.to) ? 'page' : undefined">{{ item.label }}</NuxtLink>
      </nav>
      <div class="header-actions">
        <a class="platform" :href="links.platform">PTERI Platform ↗</a>
        <PwButton :to="links.webWallet" primary small>Open Web Wallet</PwButton>
        <button class="menu-toggle" type="button" :aria-expanded="open" aria-controls="mobile-menu" @click="open = !open">Menu</button>
      </div>
    </header>
    <nav v-show="open" id="mobile-menu" class="mobile-menu" aria-label="Mobile wallet navigation">
      <NuxtLink to="/">Wallet Home</NuxtLink>
      <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to">{{ item.label }}</NuxtLink>
      <a :href="links.platform">PTERI Platform ↗</a>
      <PwButton :to="links.webWallet" primary>Open Web Wallet</PwButton>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { links, navItems } from '~/data/wallet'

const route = useRoute()
const open = ref(false)
const isCurrent = (to: string) => route.path.replace(/\/$/, '') === to
watch(() => route.fullPath, () => { open.value = false })

function skipToMain() {
  const main = document.getElementById('main-content')
  main?.scrollIntoView({ block: 'start' })
  main?.focus({ preventScroll: true })
}
</script>
