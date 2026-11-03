// Shared copy and link data for the five-page PTERI Wallet site.
// Source: PTERI-Wallet-Page-Designs (pages.js, FINAL-HANDOFF.md). Keep external destinations in sync with the handoff action map.

export const links = {
  ios: 'https://apps.apple.com/us/app/pteri-wallet/id6751649780',
  android: 'https://play.google.com/store/apps/details?id=org.kakr.pteri',
  webWallet: 'https://wallet.pteri.org/',
  createWallet: 'https://wallet.pteri.org/createWallet',
  importWallet: 'https://wallet.pteri.org/importWallet',
  platform: 'https://pteri.org/',
  company: 'https://kakr.ai/company',
  companySecurity: 'https://kakr.ai/security',
  docs: 'https://docs.kakr.ai/',
  support: 'https://support.kakr.ai/',
  status: 'https://kakrlabs1.statuspage.io/',
  email: 'contact@kakr.ai',
}

export const navItems = [
  { label: 'Getting Started', to: '/get-started' },
  { label: 'Security & Recovery', to: '/security' },
  { label: 'Compatibility', to: '/compatibility' },
  { label: 'Help', to: '/help' },
]

export const SITE = 'https://pteri.kakr.org'

// Twelve published welcome-screen appearances. Labels are descriptive, not verified in-app theme names.
const themeNames: [number, string, string, string][] = [
  [1, 'Purple · light', '#6238bc', '#f7f8fa'],
  [2, 'Cyan · dark', '#00e3dd', '#0e121b'],
  [5, 'Blue · light', '#076ce5', '#fbfcfe'],
  [6, 'Blue · dark', '#287eef', '#0f121d'],
  [7, 'Blue · cream', '#258fd2', '#fdf4e3'],
  [8, 'Teal', '#279e9b', '#002d39'],
  [9, 'Lavender', '#bc8af2', '#282a3b'],
  [10, 'Slate', '#87bdca', '#303441'],
  [11, 'Cyan · midnight', '#08bdd4', '#0c1021'],
  [12, 'Lime', '#a0e500', '#262821'],
  [13, 'Sky blue', '#60b1ed', '#272932'],
  [14, 'Amber', '#d89612', '#272725'],
]

export const walletThemes = themeNames.map(([n, label, accent, background]) => ({
  label,
  accent,
  background,
  src: `/wallet/screenshots/themes/pteri-${n}.webp`,
  alt: `Published PTERI mobile welcome screen, ${label.replace(' · ', ', ')} appearance`,
}))

export const captures = {
  overview: '/wallet/screenshots/overview.png',
  signing: '/wallet/screenshots/signing.png',
  welcome: '/wallet/screenshots/welcome.png',
}

export const capabilities = [
  { num: '01', title: 'Use web or mobile.', text: 'Choose a wallet experience that connects you to supported Litecoin and PTERI workflows.', label: 'Choose your platform', to: '/compatibility' },
  { num: '02', title: 'Authenticate with your wallet.', text: 'Sign a request from a connected application. The application verifies the proof and applies its account and access rules.', label: 'Understand authentication', to: '/help#authentication' },
  { num: '03', title: 'Add a second verification step.', text: 'Use supported two-factor authentication or approval flows for sign-ins and sensitive actions.', label: 'Explore verification flows', to: '/help#authentication' },
  { num: '04', title: 'Authorize agent actions.', text: 'Use supported PTERI integrations to approve defined actions involving AI agents. Scope and permission checks remain part of the application.', label: 'Understand agent authority', to: '/help#authentication' },
  { num: '05', title: 'Access Pteri-Auth services.', text: 'Where enabled, use wallet-based sign-in and approvals in Pteri-Auth-connected services. Your account role determines what you can manage.', label: 'Explore the PTERI platform', to: links.platform },
  { num: '06', title: 'Pay peer to peer in LTC.', text: 'Send Litecoin to a supported recipient address. Review the destination, amount, and fees before approving.', label: 'Read transfer guidance', to: '/help#transfers' },
]

export type TaskKey = 'create' | 'restore' | 'return'

export const setupContent: Record<TaskKey, { pill: string; title: string; text: string; cta: string; url: string; list: [string, string][] }> = {
  create: {
    pill: 'CREATE',
    title: 'Start a new web wallet.',
    text: 'Choose a new wallet when you want a new wallet identity. Review the backup steps before relying on it.',
    cta: 'Create in Web Wallet',
    url: links.createWallet,
    list: [
      ['Use the official wallet', 'Confirm wallet.pteri.org in the address bar.'],
      ['Read the backup instructions', 'Understand what the selected release requires for recovery.'],
      ['Keep recovery access independent', 'Do not rely on this browser or device as your only recovery path.'],
    ],
  },
  restore: {
    pill: 'RESTORE',
    title: 'Bring a compatible wallet back.',
    text: 'First check the recovery format, supported address types, and relevant wallet settings. Then use the official import flow.',
    cta: 'Review compatibility first',
    url: '/compatibility',
    list: [
      ['Know the original wallet', 'Find its app name, release, and recovery format.'],
      ['Check the operation you need', 'MWEB, backup, and address support must match.'],
      ['Keep the recovery material private', 'Do not paste it into this information site or send it to support.'],
    ],
  },
  return: {
    pill: 'RETURN',
    title: 'Return to the wallet you know.',
    text: 'Use the browser or device where the wallet was previously saved. Open the supported unlock flow if it is available.',
    cta: 'Open Web Wallet',
    url: links.webWallet,
    list: [
      ['Start on the original device', 'A saved wallet does not automatically appear on another browser.'],
      ['Use the supported unlock method', 'Follow the instructions for your wallet release.'],
      ['Restoring instead?', 'Review compatibility before importing on a new device.'],
    ],
  },
}

export const taskTabs: { key: TaskKey; label: string }[] = [
  { key: 'create', label: 'Create a wallet' },
  { key: 'restore', label: 'Restore a wallet' },
  { key: 'return', label: 'Return to a wallet' },
]

// Help topics. `body` is a list of paragraphs; `link` is the closing action.
export const helpTopics: { id: string; title: string; tags: string; body: string[]; link: { label: string; to: string } }[] = [
  {
    id: 'authentication',
    title: 'Authentication, 2FA, and agent approvals',
    tags: 'authentication sign login two factor 2fa mfa agent authority portal pteri auth permissions',
    body: [
      'PTERI Wallet connects to supported identity and signing workflows. An authentication request helps establish access; a second factor provides an additional verification step; action authorization concerns permission for a particular operation.',
      'A signature alone is not automatically MFA. The selected flow must provide and enforce the required factors. For agent actions, the connected application must enforce scope, expiry, permissions, and revocation.',
      'Where wallet sign-in or approval is enabled for Pteri-Auth services, your account role still determines what you can view or manage. The wallet does not automatically grant administrator rights.',
    ],
    link: { label: 'Explore integration documentation', to: links.docs },
  },
  {
    id: 'create',
    title: 'Create and back up',
    tags: 'new start backup seed',
    body: [
      'Choose your platform, then follow the creation and backup instructions for that release. Understand the recovery requirements before relying on the wallet.',
      'A password and recovery phrase are different. Know which information is needed to unlock locally and which is needed to restore.',
    ],
    link: { label: 'Start a new wallet', to: '/get-started?task=create' },
  },
  {
    id: 'restore',
    title: 'Import and restore',
    tags: 'phrase file mnemonic format recovery',
    body: [
      'Check the original wallet, recovery format, address types, and relevant derivation settings. Verify the destination and use the official import flow only when you intend to restore.',
      'Restoration compatibility and balance synchronization are separate checks. If a balance is unavailable, do not assume it is zero.',
    ],
    link: { label: 'Check compatibility', to: '/compatibility' },
  },
  {
    id: 'return',
    title: 'Return to a saved wallet',
    tags: 'unlock password browser saved device',
    body: [
      'Start on the browser or device where you used the wallet before. Use its supported unlock method. A wallet saved elsewhere may need to be restored.',
      'Before clearing browser data or resetting the device, read the backup and restoration guidance.',
    ],
    link: { label: 'Open Web Wallet', to: links.webWallet },
  },
  {
    id: 'balance',
    title: 'Balance or synchronization',
    tags: 'missing zero network loading unavailable pending funds',
    body: [
      'Check the selected network and whether the latest network lookup completed. An unavailable lookup is different from a confirmed zero balance.',
      'Restoration may require the original wallet’s supported address types and settings. Do not repeatedly create new wallets as a recovery step.',
    ],
    link: { label: 'Check service status', to: links.status },
  },
  {
    id: 'transfers',
    title: 'Send, receive, and transaction status',
    tags: 'send receive fee confirmation address transaction transfer',
    body: [
      'Use only supported networks and address types. Before a transfer, review the destination, amount, fees, and total shown by the wallet.',
      'Signing, broadcast, and network confirmation are different stages. If submission is unclear, check the existing transaction status before attempting another transfer.',
    ],
    link: { label: 'Get transfer guidance', to: links.support },
  },
  {
    id: 'mweb',
    title: 'MWEB and platform support',
    tags: 'mweb private privacy mobile ios android web',
    body: [
      'Check MWEB support for the exact platform, release, and operation: importing, sending, receiving, backup, or export.',
      'Do not assume all transfers use the same privacy mechanism or that a feature on one wallet is available on every version.',
    ],
    link: { label: 'Review platform considerations', to: '/compatibility' },
  },
]
