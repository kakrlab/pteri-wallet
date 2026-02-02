<template>
  <div class="bg-white">
    <cytonav class="sticky top-0 bg-white z-20"/>
    <slot />
    <cytofooter/>
    <WebWalletModal />
  </div>
</template>

<script setup>


// Import your components
import Cytofooter from '../components/cytofooter.vue';
import Cytonav from '../components/cytonav.vue';


// Pass components to the page
const components = {
  Cytofooter,
  Cytonav,
};
</script>

<style>

</style>