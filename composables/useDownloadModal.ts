const isOpen = ref(false)

export const useDownloadModal = () => {
  const open  = () => { isOpen.value = true }
  const close = () => { isOpen.value = false }
  return { isOpen, open, close }
}
