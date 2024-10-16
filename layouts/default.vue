<template>
  <div class="bg-white dark:bg-black">
    <cytonav class="sticky top-0 bg-white dark:bg-black dark:text-purple-300 z-20"/>
    <slot />
    <cytofooter/>
  </div>
</template>

<script setup>


// Import your components
import Cytofooter from '../components/cytofooter.vue';
import Cytonav from '../components/cytonav.vue';


// Destructure the color mode functionality
const { preference } = useColorMode();

// Pass components to the page
const components = {
  Cytofooter,
  Cytonav,
};
</script>

<style>

</style>