<template>
    <div>
        <section class="relative py-6 md:py-24 overflow-hidden">
            <!-- <img class="absolute top-0 right-0 mt-10 -mr-20 sm:-mr-0" src="saturn-assets/images/faq/star-right.svg" alt=""> -->
            <div class="relative container px-4 mx-auto">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-10">
                        <span class="inline-block py-2 px-5 mb-2 font-semibold text-gray-900 bg-purple-100 rounded-full"
                            data-v-inspector="pages/index.vue:10:11">FREQUENTLY
                            ASK QUESTION</span>
                        <h1 class="font-heading text-5xl xs:text-6xl md:text-7xl font-bold dark:text-white">
                            <span>You ask? We </span>
                            <span class="font-serif italic">Answer</span>
                        </h1>
                    </div>
                    <div class="flex flex-wrap -mx-4 -mb-8">
                        <div class="w-full lg:w-1/4 px-4 mb-15 lg:mb-0">
                            <div
                                class="flex flex-wrap -mx-2 lg:flex-col lg:max-w-sm border-b lg:border-b-0 lg:border-r border-gray-100">
                                <div class="w-full md:w-1/2 lg:w-full px-2 mb-15">
                                    <!-- <h4 class="text-xl font-semibold text-gray-900 mb-9">what is self custody ?</h4> -->
                                    <ul class="mb-4">
                                        <li class="mb-6">
                                            <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal"
                                                href="#self-custody" @click.prevent="activeTab = 'self-custody'"
                                                :class="{ active: activeTab === 'self-custody' }">
                                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2">
                                                    </circle>
                                                </svg>
                                                <span class="ml-3">What is self-custody?</span>
                                            </a>
                                        </li>
                                        <li class="mb-6">
                                            <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal "
                                                href="#custodial" @click.prevent="activeTab = 'custodial'"
                                                :class="{ active: activeTab === 'custodial' }">
                                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2">
                                                    </circle>
                                                </svg>
                                                <span class="ml-3">How is self custody different from non
                                                    custodial</span>
                                            </a>
                                        </li>
                                        <li class="mb-6">
                                            <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal "
                                                href="#walletdiff" @click.prevent="activeTab = 'walletdiff'"
                                                :class="{ active: activeTab === 'walletdiff' }">
                                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2">
                                                    </circle>
                                                </svg>
                                                <span class="ml-3">What is the difference between software wallets,
                                                    hardware and browser extensions ?</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal "
                                                href="#lost-keys" @click.prevent="activeTab = 'lost-keys'"
                                                :class="{ active: activeTab === 'lost-keys' }">
                                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2">
                                                    </circle>
                                                </svg>
                                                <span class="ml-3">Do we loose access to our wallet if I loose our keys
                                                    ?</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal "
                                                href="#litecoin" @click.prevent="activeTab = 'litecoin'"
                                                :class="{ active: activeTab === 'litecoin' }">
                                                <svg width="12" height="12" viewbox="0 0 12 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2">
                                                    </circle>
                                                </svg>
                                                <span class="ml-3">Why Litecoin?</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <!-- <div class="w-full md:w-1/2 lg:w-full px-2 mb-15">
              <h4 class="text-xl font-semibold text-gray-900 mb-9">Understanding</h4>
              <ul>
                <li class="mb-6">
                  <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal " href="#">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2"></circle></svg>
                    <span class="ml-3">Properties</span>
                  </a>
                </li>
                <li class="mb-6">
                  <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal " href="#">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2"></circle></svg>
                    <span class="ml-3">How to set Design Style</span>
                  </a>
                </li>
                <li class="mb-6">
                  <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal " href="#">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2"></circle></svg>
                    <span class="ml-3">How to use Mock up</span>
                  </a>
                </li>
                <li>
                  <a class="flex items-center text-lg text-gray-900 dark:text-white font-normal " href="#">
                    <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="5" stroke="#C3C6CE" stroke-width="2"></circle></svg>
                    <span class="ml-3">Preview</span>
                  </a>
                </li>
              </ul>
            </div> -->
                            </div>
                        </div>
                        <div class="w-full lg:w-3/4 px-4 text-start item-start" id="self-custody"
                            v-show="activeTab === 'self-custody'">
                            <div class="max-w-xl xl:max-w-3xl lg:mr-0 w-full">
                                <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-15 pb-6">What is self custody ?</h2>
                                <p class="text-xl text-gray-800 dark:text-white mb-12 w-full">
                                    <span>A self-custody wallet, also known as a self-hosted wallet or non-custodial
                                        wallet, is a type of cryptocurrency wallet where the user has full control and
                                        responsibility over their private keys and funds. In other words, the user is in
                                        complete control of their cryptocurrency assets without relying on a third party
                                        to hold or manage them.</span>
                                </p>
                            </div>
                        </div>
                        <div class="w-full lg:w-3/4 px-4" id="custodial" v-show="activeTab === 'custodial'">
                            <div class="max-w-xl xl:max-w-3xl lg:mr-0 w-full">
                                <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-15 pb-6">How is self custody
                                    different from non custodial?</h2>
                                <p class="text-xl text-gray-800 dark:text-white mb-12 w-full">

                                    Self-custody and custodial wallets represent two different approaches to
                                    storing and managing cryptocurrencies, each with its own set of characteristics
                                    and implications. </p>
                                

                            </div>
                        </div>
                        <div class="w-full lg:w-2/3 px-4" id="walletdiff" v-show="activeTab === 'walletdiff'">
                            <div class="max-w-xl xl:max-w-3xl  lg:mr-0 w-full">
                                <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-15 pb-6">What is the difference between
                                    software wallets, hardware and browser extensions ?</h2>
                                <h5 class="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Here's how they differ:</h5>
                                <ul class="text-xl text-gray-800 dark:text-white leading-relaxed mb-12">
                                    <li>1. Software Wallets: <br>
                                        Software wallets, also known as hot wallets, are cryptocurrency wallets that run
                                        as software applications on desktop computers, mobile devices, or online
                                        platforms. They are typically accessible via desktop or mobile apps or through
                                        web interfaces. <br>
                                        Key Features: <br>
                                        Accessibility: Software wallets are convenient and easy to access, as they can
                                        be installed on various devices or accessed through web browsers. <br>
                                        Versatility: They support a wide range of cryptocurrencies and are often
                                        compatible with multiple operating systems. <br>
                                        User Control: Users have control over their private keys and can manage their
                                        funds independently.</li>
                                    <li>2. Hardware Wallets <br>
                                        Hardware wallets are physical devices specifically designed for securely storing
                                        cryptocurrency private keys offline. They are considered cold wallets and are
                                        typically USB or Bluetooth-enabled devices. <br>
                                        Key Features: <br>
                                        Security: Hardware wallets offer the highest level of security because private
                                        keys are stored offline, making them less susceptible to hacking or malware
                                        attacks. <br>
                                        Offline Storage: Private keys are generated and stored securely within the
                                        hardware wallet device, minimizing the risk of exposure to online threats. <br>
                                        User-Friendly: Many hardware wallets come with user-friendly interfaces and
                                        features designed to simplify the process of managing cryptocurrency funds.</li>
                                    <li>3. Browser Extensions: <br>
                                        Self-custody wallet: Self-custody wallets do not rely on third-party serBrowser
                                        extensions, also known as web wallets or browser wallets, are cryptocurrency
                                        wallets that operate as extensions installed in web browsers. They provide
                                        convenient access to cryptocurrency services directly within the browser. <br>
                                        Key Features: <br>
                                        Integration: Browser extensions seamlessly integrate with web browsers, allowing
                                        users to interact with decentralized applications (DApps) and perform
                                        cryptocurrency transactions directly from their browser. <br>
                                        Convenience: They offer a convenient way to access cryptocurrency services
                                        without the need for separate applications or devices. <br>
                                        Limited Control: Browser extensions may offer less control over private keys
                                        compared to software or hardware wallets, as they typically manage keys within
                                        the browser environment.
                                    </li>

                                </ul>

                            </div>
                        </div>
                        <div class="w-full lg:w-2/3 px-4" id="lost-keys" v-show="activeTab === 'lost-keys'">
                            <div class="max-w-xl xl:max-w-3xl  lg:mr-0 w-full">
                                <h2 class="text-3xl font-semibold text-gray-900 dark:text-white mb-15 pb-6">what is self custody ?</h2>
                                <p class="text-xl text-gray-800 dark:text-white mb-12">
                                    <span>Yes, if you lose access to your wallet's private keys, you can potentially
                                        lose access to your cryptocurrency funds. </span>
                                </p>
                            </div>
                        </div>
                        <div class="w-full lg:w-2/3 px-4" id="litecoin" v-show="activeTab === 'litecoin'">
                            <div class="max-w-xl xl:max-w-3xl  lg:mr-0 w-full">
                                <h2 class="text-3xl font-semibold dark:text-white text-gray-900 mb-15 pb-6">why Litecoin ?</h2>
                                <h5 class="text-xl font-semibold text-gray-800 dark:text-white mb-6">Litecoin blockchain offers several advantages
                                    such as faster transaction confirmation time,scalability,lower transaction fees,active development and community and security, which contribute to its popularity and adoption among
                                    cryptocurrency users.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeTab: "self-custody",
            showModal: false,
        };
    },
    methods: {
        updateshowModal() {
            this.showModal = false;
        }
    }
}
</script>

<style>
.active {
    /* color: red; */
    font-weight: 800;
}
</style>