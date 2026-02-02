<template>
    <div>
        <section class="overflow-hidden py-24">
            <div class="container mx-auto px-4">
                <div class="space-y-5 border bg-purple-200 border-purple-100 shadow shadow-md shadow-purple-300 p-10 rounded-lg lg:px-20">
                    <h1 class="text-3xl lg:text-5xl font-bold max-w-xl lg:max-w-3xl">Pteri Wallet <br> Privacy Policy</h1>
                    <p class="text-lg font-medium">Effective Date: January 22, 2025</p>
                </div>
                <div class="py-12 lg:px-10 space-y-3">
                    <!-- Section 1 -->
                    <div class="w-full py-6">
                        <p class="text-lg font-normal text-justify text-gray-700">
                            Pteri Wallet, created and managed by Kakr Labs, is a self-custodial solution designed to ensure your keys mean your coins. This Privacy Policy explains how Pteri Wallet handles user privacy and data, emphasizing user sovereignty and transparency.
                        </p>
                    </div>
                    <div class="w-full h-px bg-gray-200 mb-12"></div>

                    <!-- Section 2: Self-Custody Wallet -->
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-xl lg:text-2xl font-bold mb-6">1. Self-Custody Wallet</h2>
                            <p class="text-gray-700 font-normal text-justify text-lg mb-6">
                                Pteri Wallet is a self-custodial wallet, meaning users are entirely responsible for their private keys, seed phrases, and funds. Pteri Wallet does not store, access, or manage any wallet data, private keys, or seed phrases. Users must securely back up their seed phrases, as Kakr Labs cannot assist in recovery if they are lost.
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-px bg-gray-200 mb-12"></div>

                    <!-- Section 3: Data Collection and Storage -->
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-xl lg:text-2xl font-bold mb-6">2. Data Collection and Storage</h2>
                            <ul class="list-disc pl-5 text-gray-700 font-normal text-lg space-y-3">
                                <li>Pteri Wallet does not store seed phrases, private keys, or wallet credentials.</li>
                                <li>Pteri Wallet does not track blockchain transactions or collect identifiable personal data.</li>
                                <li>All blockchain interactions are conducted directly on decentralized networks, ensuring pseudonymous and public transactions.</li>
                            </ul>
                        </div>
                    </div>
                    <div class="w-full h-px bg-gray-200 mb-12"></div>

                    <!-- Section 4: Limited Data Usage -->
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-xl lg:text-2xl font-bold mb-6">3. Limited Data Usage</h2>
                            <p class="text-gray-700 font-normal text-justify text-lg mb-6">
                                To improve app experience, Pteri Wallet may collect limited, non-identifiable data such as app performance metrics and aggregated usage statistics. This information is used solely to enhance functionality and ensure a smooth user experience. Users can opt out of analytics collection within the app settings.
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-px bg-gray-200 mb-12"></div>

                    <!-- Section 5: User Responsibility -->
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-xl lg:text-2xl font-bold mb-6">4. User Responsibility</h2>
                            <p class="text-gray-700 font-normal text-justify text-lg mb-6">
                                As a self-custody wallet, users are responsible for safeguarding private keys and seed phrases, securing devices, and ensuring safe backup practices. Kakr Labs cannot retrieve lost keys, seed phrases, or funds under any circumstances.
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-px bg-gray-200 mb-12"></div>

                    <!-- Section 6: Blockchain Transparency -->
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-xl lg:text-2xl font-bold mb-6">5. Blockchain Transparency</h2>
                            <p class="text-gray-700 font-normal text-justify text-lg mb-6">
                                All blockchain transactions are public and immutable. While Pteri Wallet does not store or track this data, activity on the blockchain can be viewed by anyone using a blockchain explorer. For enhanced confidentiality, users are encouraged to use privacy features like Mimblewimble Extension Blocks (MWEB).
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-px bg-gray-200 mb-12"></div>

                    <!-- Section 7: Policy Updates -->
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-xl lg:text-2xl font-bold mb-6">6. Policy Updates</h2>
                            <p class="text-gray-700 font-normal text-justify text-lg mb-6">
                                Kakr Labs may update this Privacy Policy to reflect changes in legal requirements or product updates. Significant changes will be notified via in-app notifications or on our official website.
                            </p>
                        </div>
                    </div>
                    <div class="w-full h-px bg-gray-200 mb-12"></div>

                    <!-- Section 8: Contact Us -->
                    <div class="w-full flex items-center justify-between">
                        <div>
                            <h2 class="text-xl lg:text-2xl font-bold mb-6">7. Contact Us</h2>
                            <p class="text-gray-700 font-normal text-justify text-lg mb-6">
                                For questions or concerns, reach out via our official support portal: <a href="https://support.kakrlabs.com" class="text-purple-500 underline">support.kakrlabs.com</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <cytocta />
        </section>
    </div>
</template>

<script>
import cytocta from './cytocta.vue';
export default {
    components: { cytocta },
};
</script>

<style>

ul.list-disc {
    list-style-type: disc;
    padding-left: 1.5rem;
}

ul.list-disc li {
    margin-bottom: 0.5rem;
}
</style>