<template>
  <div
    class="relative py-16 transition-colors duration-300 bg-cover bg-center bg-white text-gray-800"
  >
    <!-- Background Watermark using an img element with opacity -->
    <div class="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
      <img src="/litecoin-logo.png" alt="Litecoin Logo Watermark" class="object-contain w-full h-full">
    </div>

    <!-- Content Container -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Crypto Payments Market Share -->
        <div class="text-center">
          <h3 class="counter text-5xl font-bold mb-3 text-gradient" data-target="65" data-suffix="%">
            0%
          </h3>
          <p class="text-lg">of Crypto Payments Market</p>
        </div>

        <!-- Active Addresses -->
        <div class="text-center">
          <h3 class="counter text-5xl font-bold mb-3 text-gradient" data-target="333" data-suffix="M+">
            0M+
          </h3>
          <p class="text-lg">Active Addresses</p>
        </div>

        <!-- Network Uptime -->
        <div class="text-center">
          <h3 class="counter text-5xl font-bold mb-3 text-gradient" data-target="100" data-suffix="%">
            0%
          </h3>
          <p class="text-lg">Uptime</p>
        </div>

        <!-- Average Network Fee -->
        <div class="text-center">
          <h3 class="counter text-5xl font-bold mb-3 text-gradient" data-target="0.04" data-prefix="$">
            $0.00
          </h3>
          <p class="text-lg">Average Network Fee</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const animateCounters = () => {
  const counters = document.querySelectorAll('.counter');
  const speed = 200;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseFloat(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const prefix = counter.getAttribute('data-prefix') || '';
      let count = parseFloat(counter.innerText.replace(/[^0-9.]/g, ''));

      const increment = Math.ceil((target / speed) * 100) / 100;

      if (count < target) {
        counter.innerText = `${prefix}${(count + increment).toFixed(2)}${suffix}`;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = `${prefix}${target}${suffix}`;
      }
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.disconnect();
      }
    });

    observer.observe(counter);
  });
};

onMounted(() => {
  animateCounters();
});
</script>

<style scoped>
.counter {
  transition: color 0.3s ease-in-out;
}

.text-gradient {
  background-image: linear-gradient(to right, #06b6d4, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>