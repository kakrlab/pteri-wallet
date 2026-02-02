<template>
  <div>
    <!-- Navbar Section -->
    <nav class="relative py-6 bg-black z-50">
      <div class="container px-4 mx-auto">
        <div class="flex items-center relative">
          <!-- Logo -->
          <NuxtLink class="flex space-x-3 inline-block text-lg font-bold px-2" to="/">
            <img
              class="h-12"
              src="/pteri-logo.png"
              alt="PTERI Wallet Logo"
              width="auto"
            />
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <div class="xl:hidden ml-auto">
            <button
              @click="toggleMenu"
              class="navbar-burger flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
            >
              <svg
                width="24"
                height="24"
                viewbox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <!-- Desktop Navigation -->
          <ul
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden xl:flex lg:w-auto lg:space-x-12"
          >
            <!-- Wallet Menu -->
            <li>
              <NuxtLink
                to="/"
                class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium"
              >
                Wallet
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/features"
                class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium"
              >
                Features
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/web"
                class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium"
              >
                Web
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/download"
                class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium"
              >
                Download
              </NuxtLink>
            </li>
            
            <!-- Security Menu -->
            <li>
              <NuxtLink
                to="/security"
                class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium"
              >
                Security
              </NuxtLink>
            </li>
            
            <!-- Authentication Menu (External Links) -->
            <li>
              <a
                href="https://kakr.org/authentication"
                target="_blank"
                class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium"
              >
                Authentication
              </a>
            </li>
            
            <!-- Developers Menu -->
            <li class="relative group">
              <button class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium">
                Developers
              </button>
              <!-- Dropdown for Developers -->
              <ul class="absolute left-0 mt-2 w-48 bg-black rounded-md shadow-lg py-2 hidden group-hover:block z-50">
                <li>
                  <NuxtLink
                    to="/developers/playground"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    @click="closeMenu"
                  >
                    Playground
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/developers/status"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    @click="closeMenu"
                  >
                    Status & FAQ
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="/developers/sdk"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    @click="closeMenu"
                  >
                    SDKs
                  </NuxtLink>
                </li>
                <li>
                  <a
                    href="https://docs.kakrlabs.com"
                    target="_blank"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="https://dashboard.kakrlabs.com"
                    target="_blank"
                    class="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                  >
                    API Dashboard
                  </a>
                </li>
              </ul>
            </li>
            
            <!-- Company Menu (External Links) -->
            <li>
              <a
                href="https://kakr.org/about"
                target="_blank"
                class="nav-link inline-block text-sm text-white hover:text-yellow-300 font-medium"
              >
                Company
              </a>
            </li>
          </ul>

          <!-- Right Actions -->
          <div class="hidden sm:flex ml-auto space-x-4">
            <!-- Language & Download -->
          
            <NuxtLink
              to="/download"
              class="relative group inline-block py-3 px-6 text-md font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg shadow-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              style="padding: 12px 24px; line-height: 1.5;"
            >
              <span class="relative">Download</span>
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="menuOpen" class="fixed inset-0 z-50 flex flex-col bg-black text-white">
        <button @click="toggleMenu" class="navbar-close ml-auto p-4">
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav class="flex flex-col space-y-4 p-4">
          <!-- Wallet Menu -->
          <NuxtLink
            to="/"
            class="nav-link"
            @click="toggleMenu"
          >
            Wallet
          </NuxtLink>
          <NuxtLink
            to="/features"
            class="nav-link"
            @click="toggleMenu"
          >
            Features
          </NuxtLink>
          <NuxtLink
            to="/web"
            class="nav-link"
            @click="toggleMenu"
          >
            Web
          </NuxtLink>
          <NuxtLink
            to="/download"
            class="nav-link"
            @click="toggleMenu"
          >
            Download
          </NuxtLink>
          
          <!-- Security Menu -->
          <NuxtLink
            to="/security"
            class="nav-link"
            @click="toggleMenu"
          >
            Security
          </NuxtLink>
          
          <!-- Authentication Menu (External Links) -->
          <a
            href="https://kakr.org/authentication"
            target="_blank"
            class="nav-link"
          >
            Authentication
          </a>
          
          <!-- Developers Menu -->
          <div class="flex flex-col space-y-2">
            <button class="nav-link text-left" @click="toggleDevMenu">
              Developers
            </button>
            <div v-if="devMenuOpen" class="flex flex-col pl-4 space-y-2">
              <NuxtLink
                to="/developers/playground"
                class="nav-link text-sm"
                @click="toggleMenu"
              >
                Playground
              </NuxtLink>
              <NuxtLink
                to="/developers/status"
                class="nav-link text-sm"
                @click="toggleMenu"
              >
                Status & FAQ
              </NuxtLink>
              <NuxtLink
                to="/developers/sdk"
                class="nav-link text-sm"
                @click="toggleMenu"
              >
                SDKs
              </NuxtLink>
              <a
                href="https://docs.kakrlabs.com"
                target="_blank"
                class="nav-link text-sm"
              >
                Documentation
              </a>
              <a
                href="https://dashboard.kakrlabs.com"
                target="_blank"
                class="nav-link text-sm"
              >
                API Dashboard
              </a>
            </div>
          </div>
          
          <!-- Company Menu (External Links) -->
          <a
            href="https://kakr.org/about"
            target="_blank"
            class="nav-link"
          >
            Company
          </a>
        </nav>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
// Mobile menu toggle
const menuOpen = ref(false);
const devMenuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const closeMenu = () => {
  menuOpen.value = false;
};

const toggleDevMenu = () => {
  devMenuOpen.value = !devMenuOpen.value;
};
</script>

<style scoped>
.nav-link {
  display: inline-block;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #fbbf24; /* Tailwind's yellow-300 */
}
</style>
