import { SITE } from '~/data/wallet'

const OG_IMAGE = SITE + '/pteri-wallet-og.png'

// Per-page title, description, canonical and social tags for the wallet pages.
export function usePwSeo(title: string, description: string, path: string) {
  const url = SITE + path
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogImage: OG_IMAGE,
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: OG_IMAGE,
  })
  useHead({ link: [{ rel: 'canonical', href: url }] })
}
