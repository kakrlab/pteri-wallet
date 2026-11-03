import { SITE } from '~/data/wallet'

// Per-page title, description and canonical for the five wallet pages.
export function usePwSeo(title: string, description: string, path: string) {
  const url = SITE + path
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    twitterTitle: title,
    twitterDescription: description,
  })
  useHead({ link: [{ rel: 'canonical', href: url }] })
}
