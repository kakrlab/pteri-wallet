<template>
  <div
    class="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 p-10 lg:px-20 rounded-lg mb-6 bg-white text-gray-800"
  >
    <!-- Text Section -->
    <div class="space-y-6 lg:max-w-2xl text-center lg:text-left">
      <h2 class="text-3xl lg:text-5xl font-bold leading-tight">
        Building on Litecoin
      </h2>
      <p class="text-lg lg:text-xl font-medium">
        We know that working together as a community is better for everyone. Our platform enables blockchain developers to build their apps and wallets natively and connect with millions of users, without having to worry about the low-level implementation details, transaction speed, and scaling.
      </p>
      <NuxtLink
        class="relative group inline-block py-3 px-6 text-base font-semibold text-purple-500 bg-white rounded-md overflow-hidden transition duration-300 hover:text-white hover:bg-purple-600"
        to="#"
      >
        <div
          class="absolute top-0 left-0 w-full h-full bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition duration-500"
        ></div>
        <span class="relative z-10">Check out our developer's portal</span>
      </NuxtLink>
    </div>

    <!-- Image Section -->
    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
      <img
        src="https://trustwallet.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmobile-application.85aab932.gif&w=828&q=75"
        alt="Litecoin Development"
        class="rounded-md shadow-lg shadow-indigo-500/50 max-w-full h-auto"
      />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.nuxt-link {
  @apply relative group inline-block py-3 px-6 text-base font-semibold text-purple-500 bg-white rounded-md overflow-hidden transition duration-300 hover:text-white hover:bg-purple-600;
}
</style>