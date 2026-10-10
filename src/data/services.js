/**
 * The service catalogue.
 *
 * Lives in data/ rather than inside Services.jsx because two places need it:
 * the services page that renders the cards, and the navbar spotlight index,
 * which builds its entries from this array. The old spotlight hardcoded six
 * suggestions and had drifted out of date; deriving it from here means a new
 * capability becomes searchable the moment it is added.
 *
 * `id` doubles as the card's DOM anchor (/services#security-audits) and as the
 * ?service= value the support form reads to prefill an enquiry.
 */
import {
  LuActivity,
  LuCloud,
  LuCode,
  LuCpu,
  LuCreditCard,
  LuKey,
  LuLayers,
  LuLock,
  LuPalette,
  LuServer,
  LuShieldAlert,
  LuShieldCheck,
  LuShoppingBag,
  LuSmartphone,
  LuVideo,
  LuZap,
} from 'react-icons/lu'

export const services = [
  /* ════════ LIVE CAPABILITIES ════════ */
  {
    id: 'web-dev',
    status: 'live',
    isLocked: false,
    category: 'dev',
    categoryLabel: 'Full-Stack Architecture',
    title: 'Custom Web & SaaS Engineering',
    badge: 'Core Competency',
    badgeType: 'emerald',
    icon: LuCode,
    slaMetric: {
      icon: LuZap,
      text: 'Sub-100ms API responses',
    },
    techStack: ['React 19', 'Next.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker'],
    summary:
      'Web apps and APIs built to stay fast as they grow.',
    includes: [
      'Custom web apps in React, Next.js, FastAPI or Node.js',
      'Database design in PostgreSQL, Prisma or MongoDB',
      'Mobile-first pages that load in under a second',
      'Cloud deployment, CI/CD, and uptime monitoring',
    ],
    forWhom:
      'Founders and teams who need real code, not a template.',
  },
  {
    id: 'security-audits',
    status: 'live',
    isLocked: false,
    category: 'security',
    categoryLabel: 'Cybersecurity Engine',
    title: 'SecuScan Web Vulnerability Audits',
    badge: 'Proprietary Engine',
    badgeType: 'cyan',
    icon: LuShieldCheck,
    slaMetric: {
      icon: LuShieldAlert,
      text: 'Scans under 30s · OWASP Top 10',
    },
    techStack: ['Multi-Threaded AST', 'OWASP Inspection', 'Header Hardening', 'CVE Mapping', 'Remediation PDF'],
    summary:
      'We find the holes in your site before someone else does.',
    includes: [
      'Automated penetration testing with SecuScan, plus header checks',
      'Login, session and OTP flow testing',
      'OWASP Top 10 and API tampering checks',
      'A PDF report that names each fix',
    ],
    forWhom:
      'Anyone handling payments, logins or customer data.',
  },
  {
    id: 'ecommerce',
    status: 'live',
    isLocked: false,
    category: 'dev',
    categoryLabel: 'Retail & Commerce',
    title: 'E-Commerce & Retail Systems',
    badge: 'High Conversion',
    badgeType: 'amber',
    icon: LuShoppingBag,
    slaMetric: {
      icon: LuCreditCard,
      text: 'Multi-Currency (₦, $, £, €) · Real-Time Carts',
    },
    techStack: ['Dynamic Carts', 'Paystack / Stripe', 'WhatsApp Concierge', 'Edge Caching', 'Inventory Sync'],
    summary:
      'Online stores with live carts, several currencies, and payments that work.',
    includes: [
      'Custom storefronts with catalogue filters and live stock',
      'Payments in ₦, $, £ and €, with a cart drawer',
      'WhatsApp checkout, so orders reach you directly',
      'Fast images and a phone-first shopping flow',
    ],
    forWhom:
      'Retail brands and sellers who want more completed checkouts.',
  },
  {
    id: 'digital-security',
    status: 'live',
    isLocked: false,
    category: 'security',
    categoryLabel: 'Infrastructure Hardening',
    title: 'Digital Defense & Infrastructure',
    badge: '360° Protection',
    badgeType: 'violet',
    icon: LuLock,
    slaMetric: {
      icon: LuKey,
      text: 'SPF / DKIM / DMARC · Zero-trust access',
    },
    techStack: ['Cloudflare Zero-Trust', 'DMARC Enforcement', 'Hardware 2FA', 'KMS Isolation', 'Audit Logging'],
    summary:
      'Locks down your domain, your cloud, and your admin accounts.',
    includes: [
      'Email authentication (SPF, DKIM, DMARC) so nobody can fake your domain',
      'Admin account hardening, hardware keys, password management',
      'Separated cloud and server credentials',
      'A build-and-secure bundle for new launches',
    ],
    forWhom:
      'Businesses that need everything covered, not just the website.',
  },

  {
    id: 'flyers-video',
    status: 'live',
    isLocked: false,
    category: 'dev',
    categoryLabel: 'Brand & Creative',
    title: 'Flyers & Ad Videos',
    badge: 'Creative',
    badgeType: 'amber',
    icon: LuPalette,
    slaMetric: {
      icon: LuVideo,
      text: 'Flyers, short ads and social video',
    },
    techStack: ['Flyer Design', 'Social Graphics', 'Ad Videos', 'Brand Kits'],
    summary:
      'Flyers and short ad videos that make your brand look as good as your website.',
    includes: [
      'Flyers and social media graphics for your brand',
      'Short ad videos for Instagram, TikTok and WhatsApp status',
      'Consistent colours, fonts and logo across every piece',
      'Files delivered in the sizes each platform needs',
    ],
    forWhom:
      'Businesses that need ads and promos that look professional.',
  },

  /* ════════ UPCOMING SOFTWARE ENGINEERING HORIZONS (LOCKED · COMING SOON) ════════ */
  {
    id: 'mobile-apps',
    status: 'coming-soon',
    isLocked: true,
    category: 'mobile-ai',
    categoryLabel: 'Native Mobile Systems',
    title: 'Mobile Apps — iOS & Android',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuSmartphone,
    slaMetric: {
      icon: LuZap,
      text: '120fps native UI · App Store & Play',
    },
    techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Expo', 'Push Gateways', 'Encrypted Keychain'],
    summary:
      'iOS and Android apps that work offline and unlock with a fingerprint.',
    includes: [
      'Native Swift and Kotlin, or React Native and Flutter',
      'Works offline, with encrypted local storage that syncs later',
      'Face ID, Touch ID and Android biometrics',
      'App Store and Play releases, plus over-the-air updates',
    ],
    forWhom:
      'Teams moving from a website to a real app.',
    inquirySubject: 'Early Inquiry — Native Mobile App Engineering',
  },
  {
    id: 'ai-ml',
    status: 'coming-soon',
    isLocked: true,
    category: 'mobile-ai',
    categoryLabel: 'Applied Artificial Intelligence',
    title: 'AI & Automation',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuCpu,
    slaMetric: {
      icon: LuActivity,
      text: 'Semantic search · Your data stays private',
    },
    techStack: ['PyTorch', 'OpenAI API', 'LangChain', 'pgvector', 'FastAPI', 'RAG Pipelines', 'Llama 3'],
    summary:
      'Search your own documents in plain language, and hand off repetitive work to an agent.',
    includes: [
      'Ask questions of your own documents and contracts',
      'Agents that handle routine customer and compliance tasks',
      'Vector search with pgvector, Pinecone or Qdrant',
      'No data retention, so your business data stays yours',
    ],
    forWhom:
      'Teams drowning in repetitive work or in their own documents.',
    inquirySubject: 'Early Inquiry — Enterprise AI & Autonomous Agents',
  },
  {
    id: 'cloud-devops',
    status: 'coming-soon',
    isLocked: true,
    category: 'dev',
    categoryLabel: 'Cloud Infrastructure & SRE',
    title: 'Cloud DevOps & Kubernetes',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuCloud,
    slaMetric: {
      icon: LuServer,
      text: 'Multi-region · Rolling deploys',
    },
    techStack: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP', 'Prometheus', 'Grafana', 'GitHub Actions'],
    summary:
      'Infrastructure as code, clusters that scale themselves, and deploys with no downtime.',
    includes: [
      'Terraform and Ansible on AWS, Google Cloud or DigitalOcean',
      'Kubernetes clusters that scale and balance traffic',
      'Rolling deploys with health checks and instant rollback',
      'Monitoring and alerts via Prometheus, Grafana or Datadog',
    ],
    forWhom:
      'Platforms outgrowing a single server.',
    inquirySubject: 'Early Inquiry — Cloud DevOps & Kubernetes Orchestration',
  },
  {
    id: 'web3-contracts',
    status: 'coming-soon',
    isLocked: true,
    category: 'security',
    categoryLabel: 'Decentralized Protocols',
    title: 'Smart Contracts',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuLayers,
    slaMetric: {
      icon: LuKey,
      text: 'Gas-optimised · Re-entrancy audited',
    },
    techStack: ['Solidity', 'Foundry', 'Hardhat', 'EVM', 'Viem', 'OpenZeppelin', 'Slither'],
    summary:
      'Contracts written and audited so funds cannot be drained.',
    includes: [
      'EVM contracts — ERC-20, ERC-721, multi-sig escrow',
      'Testing against re-entrancy, overflow and flash-loan attacks',
      'Gas profiling to cut on-chain costs',
      'Regression tests covering every branch',
    ],
    forWhom:
      'Protocols and token ventures that cannot afford a bug.',
    inquirySubject: 'Early Inquiry — Smart Contract Architecture & Verification',
  },
]
