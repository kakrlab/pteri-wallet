```html
<template>
  <section id="hero" class="relative overflow-hidden py-16 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
      <!-- Left Column: Hero Content -->
      <div class="w-full lg:w-1/2 flex flex-col space-y-6 text-gray-900 items-start">
        <!-- Main Heading -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-2">
          Your Secure Litecoin Wallet — Built for Identity & Authentication
        </h1>

        <!-- Sub-heading -->
        <p class="text-lg md:text-xl text-gray-600">
          PTERI Wallet is a self-custody Litecoin wallet designed for security, privacy, and decentralized authentication.
        </p>
        <p class="text-md text-gray-500 font-semibold mb-2">
          No passwords. No custodians. No data collection.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 mt-4 items-center">
          <a
            href="https://play.google.com/store/apps/details?id=org.kakr.pteri"
            target="_blank"
            class="transition-transform hover:scale-105"
          >
            <img src="https://kakr.ai/playstore.png" alt="Get it on Google Play" class="h-12">
          </a>
          
          <!-- iOS Button -->
          <a
            href="https://apps.apple.com/us/app/pteri-wallet/id6751649780"
            target="_blank"
            class="transition-transform hover:scale-105"
          >
            <img src="https://kakr.ai/ios.png" alt="Download on App Store" class="h-12">
          </a>

          <!-- Web Version Button -->
          <a
            href="https://wallet.pteri.org"
            target="_blank"
            class="inline-block px-6 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition"
          >
            Launch Web Wallet
          </a>
        </div>

        <!-- Small Subtext -->
        <div class="mt-6 text-sm text-gray-500 font-medium">
          Zero-custody • Biometric security • MWEB privacy • Powered by Litecoin
        </div>
      </div>
      <!-- Right Column: Carousel Slider -->
      <div class="w-full lg:w-1/2">
        <div class="carousel-container w-full max-w-md mx-auto">
          <div class="carousel">
            <div
              v-for="(img, i) in images"
              :key="i"
              class="carousel-slide"
            >
              <img :src="img.src" :alt="img.alt" class="carousel-image" />
            </div>
          </div>
          <div class="flex justify-center mt-4 space-x-2">
            <span
              v-for="(_, i) in images"
              :key="i"
              class="w-3 h-3 rounded-full transition-all duration-300"
              :class="currentIndex === i ? 'bg-indigo-500 scale-110' : 'bg-gray-300'"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Carousel images
const images = ref([
  { src: '/img/ios/ios-1.png', alt: 'Mockup 1' },
  { src: '/img/ios/ios-2.png', alt: 'Receive Screen' },
  { src: '/img/ios/ios-3.png', alt: 'Send Screen' },
  { src: '/img/ios/ios-4.png', alt: 'Mockup 4' },
  { src: '/img/ios/ios-5.png', alt: 'Mockup 5' },
  { src: '/img/ios/ios-6.png', alt: 'Mockup 6' },
  { src: '/img/ios/ios-7.png', alt: 'Mockup 7' },
  { src: '/img/ios/ios-8.png', alt: 'Mockup 8' },
]);

const currentIndex = ref(0);
let slideInterval = null;

// Move carousel
const showSlide = (i) => {
  const carousel = document.querySelector('.carousel');
  const w = document.querySelector('.carousel-slide')?.offsetWidth || 0;
  if (carousel) carousel.style.transform = `translateX(-${i * w}px)`;
};

// Auto slide
const autoSlide = () => {
  slideInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
    showSlide(currentIndex.value);
  }, 3000);
};

// Greetings animation
const greetings = [
  { text: "Hey",      color: "from-cyan-500 to-blue-500" },
  { text: "Hola",     color: "from-yellow-400 to-red-500" },
  { text: "Salut",    color: "from-green-400 to-teal-500" },
  { text: "Hallo",    color: "from-orange-500 to-pink-500" },
  { text: "Ciao",     color: "from-purple-400 to-indigo-600" },
  { text: "नमस्ते",   color: "from-red-400 to-yellow-600" },
  { text: "こんにちは", color: "from-pink-500 to-purple-500" },
];
const currentGreeting = ref(greetings[0].text);
const greetingColor   = ref(`bg-gradient-to-r ${greetings[0].color}`);
let greetInterval = null;

const startGreeting = () => {
  let idx = 0;
  greetInterval = setInterval(() => {
    idx = (idx + 1) % greetings.length;
    currentGreeting.value = greetings[idx].text;
    greetingColor.value   = `bg-gradient-to-r ${greetings[idx].color}`;
  }, 2000);
};

onMounted(() => {
  // Carousel
  showSlide(0);
  autoSlide();
  window.addEventListener('resize', () => showSlide(currentIndex.value));
  // Greeting
  startGreeting();
});

onBeforeUnmount(() => {
  clearInterval(slideInterval);
  clearInterval(greetInterval);
});
</script>

<style scoped>
/* Glassy Carousel */
.carousel-container {
  position: relative;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-image {
  width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
  border-radius: 0.5rem;
  margin: 0 auto;
}

/* CTA Buttons */
.btn-primary {
  @apply px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition;
}
.btn-outline {
  @apply px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition;
}

/* Gradient Text Animation */
@keyframes gradientAnimation {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.cyto-text-gradient {
  background: linear-gradient(90deg, #667eea, #764ba2);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradientAnimation 5s ease-in-out infinite;
}

/* Greeting fade-in */
.animated-greeting {
  opacity: 1;
}
.animated-greeting span:first-child {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: fadeIn 1s ease both;
}
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.95); }
  to   { opacity: 1; transform: scale(1); }
}

/* Responsive tweaks */
@media (max-width: 768px) {
  h1 { font-size: 2.25rem; }
  p  { font-size: 1rem;    }
}
</style>