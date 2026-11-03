<template>
  <div class="container page-top">
    <div class="breadcrumb"><NuxtLink to="/">PTERI Wallet</NuxtLink> &nbsp;/&nbsp; {{ crumb }}</div>
    <div class="page-intro">
      <div class="eyebrow">{{ eyebrow }}</div>
      <h1><slot name="title" /></h1>
      <p class="lede"><slot /></p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ crumb: string; eyebrow: string }>()
</script>
