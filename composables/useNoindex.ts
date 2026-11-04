// Legacy pages that are not part of the five-page wallet site: keep them reachable but out of search results.
export function useNoindex() {
  useHead({ meta: [{ name: 'robots', content: 'noindex, follow' }] })
}
