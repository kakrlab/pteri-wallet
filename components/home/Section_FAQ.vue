<template>
  <section id="faq" class="py-20 bg-page-mid">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
      <div data-aos="fade-up" class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
        <p class="text-gray-400">Everything you need to know about PTERI Wallet.</p>
      </div>

      <div class="space-y-3">
        <div v-for="(faq, index) in faqs" :key="index"
          data-aos="fade-up"
          :data-aos-delay="index * 60"
          class="bg-card-dark border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/30 transition-colors">
          <button
            class="w-full flex items-center justify-between px-6 py-4 text-left"
            @click="toggle(index)"
          >
            <span class="text-white font-semibold text-sm pr-4">{{ faq.question }}</span>
            <svg
              class="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div v-if="openIndex === index" class="px-6 pb-5">
            <div class="text-gray-400 text-sm leading-relaxed" v-html="faq.answer"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const openIndex = ref(null)

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: "What is PTERI Wallet?",
    answer: "PTERI Wallet is a secure self-custody Litecoin wallet designed for payments, identity, and trust. It allows you to store your own keys and use them for authentication without relying on centralized servers."
  },
  {
    question: "Is PTERI a custodial wallet?",
    answer: "No. PTERI is a <strong class='text-white'>self-custody</strong> wallet. Your private keys are stored securely on your device, and only you have access to them. We never see your keys or funds."
  },
  {
    question: "Does PTERI support multiple blockchains?",
    answer: "Currently, PTERI is focused exclusively on <strong class='text-white'>Litecoin</strong> to ensure the fastest, most secure, and lowest-fee experience for payments and identity."
  },
  {
    question: "Is there a web wallet available?",
    answer: "Yes. You can access the PTERI Web Wallet at <a href='https://wallet.pteri.org' class='text-blue-400 hover:underline' target='_blank'>wallet.pteri.org</a>."
  },
  {
    question: "Does PTERI collect user data?",
    answer: "No. PTERI is built with privacy by design. We use zero trackers and collect no personal user data."
  },
  {
    question: "Can PTERI be used for authentication / 2FA?",
    answer: "Yes. PTERI supports blockchain-based authentication, allowing you to log in to supported apps and websites by signing a request with your wallet instead of using a password."
  },
  {
    question: "Who builds PTERI Wallet?",
    answer: "PTERI Wallet is built by <strong class='text-white'>Kakr Labs</strong>, a privacy-focused development team building decentralized identity and payment tools."
  }
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer.replace(/<[^>]*>?/gm, '')
          }
        }))
      })
    }
  ]
})
</script>
