<template>
  <div class="bg-[#050a1a] min-h-screen overflow-x-hidden">
    <cytonav class="sticky top-0 z-50" />
    <slot />
    <cytofooter />
    <DownloadModal />
  </div>
</template>

<script setup>
import Cytofooter from '../components/cytofooter.vue';
import Cytonav from '../components/cytonav.vue';

const components = {
  Cytofooter,
  Cytonav,
};
</script>
