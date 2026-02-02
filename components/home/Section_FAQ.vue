<template>
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 max-w-3xl">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>

      <div class="space-y-6">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-sm p-6">
          <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ faq.question }}</h3>
          <div class="text-gray-600 prose prose-sm max-w-none" v-html="faq.answer"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const faqs = [
  {
    question: "What is PTERI Wallet?",
    answer: "PTERI Wallet is a secure self-custody Litecoin wallet designed for payments, identity, and trust. It allows you to store your own keys and use them for authentication without relying on centralized servers."
  },
  {
    question: "Is PTERI a custodial wallet?",
    answer: "No. PTERI is a <strong>self-custody</strong> wallet. Your private keys are stored securely on your device, and only you have access to them. We never see your keys or funds."
  },
  {
    question: "Does PTERI support multiple blockchains?",
    answer: "Currently, PTERI is focused exclusively on <strong>Litecoin</strong> to ensure the fastest, most secure, and lowest-fee experience for payments and identity."
  },
  {
    question: "Is there a web wallet available?",
    answer: "Yes. You can access the PTERI Web Wallet at <a href='https://wallet.pteri.org' class='text-indigo-600 hover:underline' target='_blank'>wallet.pteri.org</a>."
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
    answer: "PTERI Wallet is built by <strong>Kakr Labs</strong>, a privacy-focused development team building decentralized identity and payment tools."
  }
];

// JSON-LD for SEO
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
            'text': faq.answer.replace(/<[^>]*>?/gm, '') // Strip HTML for JSON-LD
          }
        }))
      })
    }
  ]
})
</script>
