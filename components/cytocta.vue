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
      <div class="flex flex-col sm:flex-row justify-center gap-4 items-center">
        <!-- Primary Download Button -->
        <a
          href="https://play.google.com/store/apps/details?id=org.kakr.pteri"
          target="_blank"
          class="transition-transform hover:scale-105"
        >
          <img src="https://kakr.ai/playstore.png" alt="Get it on Google Play" class="h-14">
        </a>

        <a
          href="https://apps.apple.com/us/app/pteri-wallet/id6751649780"
          target="_blank"
          class="transition-transform hover:scale-105"
        >
          <img src="https://kakr.ai/ios.png" alt="Download on App Store" class="h-14">
        </a>
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