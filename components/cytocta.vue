<template>
  <section class="py-16 bg-gradient-to-r from-purple-600 to-indigo-500">
    <div class="max-w-4xl mx-auto px-6 text-center text-white">
      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
        Ready to take control of your crypto?
      </h2>
      <p class="text-lg sm:text-xl mb-8 opacity-90">
        Manage and store Litecoin—all in one secure wallet.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <!-- Primary Download Button -->
        <a
          href="https://play.google.com/store/apps/details?id=org.kakr.pteri"
          target="_blank"
          class="inline-flex items-center justify-center bg-white text-purple-700 hover:bg-gray-100 font-semibold rounded-lg px-6 py-3 shadow-lg transition"
        >

          <span>Get on Google Play</span>
        </a>

        <!-- Secondary Learn More Button -->
      
      </div>
    </div>
  </section>
</template>

<script setup>
// No JavaScript needed here
</script>

<style scoped>
/* Ensure the gradient stays vibrant in both modes */
section {
  /* fallback color */
  background-color: #6b21a8;
}

/* On very small screens, collapse buttons vertically with full width */
@media (max-width: 640px) {
  .inline-flex,
  .inline-block {
    width: 100%;
    justify-content: center;
  }
}
</style>