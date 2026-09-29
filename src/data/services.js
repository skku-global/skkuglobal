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
  LuServer,
  LuShieldAlert,
  LuShieldCheck,
  LuShoppingBag,
  LuSmartphone,
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
      text: 'Sub-100ms API Latency · 99.9% Production SLA',
    },
    techStack: ['React 19', 'Next.js', 'FastAPI', 'Node.js', 'PostgreSQL', 'Docker'],
    summary:
      'High-performance web applications, API architectures, and conversion-optimized platforms built for scale.',
    includes: [
      'Full-stack custom web applications (React, Next.js, FastAPI, Node.js)',
      'Database architecture & resilient schema design (PostgreSQL, Prisma, MongoDB)',
      'Responsive, mobile-first interfaces with sub-second page load times',
      'Production cloud deployment, automated CI/CD pipelines, and SLA monitoring',
    ],
    forWhom:
      'Founders, funded startups, and enterprise teams needing robust, scalable codebases rather than slow off-the-shelf templates.',
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
      text: 'Sub-30s Automated Scan · OWASP Top 10 Coverage',
    },
    techStack: ['Multi-Threaded AST', 'OWASP Inspection', 'Header Hardening', 'CVE Mapping', 'Remediation PDF'],
    summary:
      'Automated penetration testing and vulnerability analysis to eliminate security loopholes before malicious actors exploit them.',
    includes: [
      'SecuScan multi-threaded vulnerability scan and security header verification',
      'Authentication, session hijacking, and OTP flow vulnerability testing',
      'OWASP Top 10 compliance inspection and API parameter tampering checks',
      'Executive-ready PDF vulnerability remediation report with engineering fix instructions',
    ],
    forWhom:
      'Fintech platforms, SaaS providers, e-commerce stores, and businesses managing customer payments or sensitive account credentials.',
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
      'Full-featured luxury and commercial online storefronts engineered with real-time carts, multi-currency support, and payment routing.',
    includes: [
      'Custom storefronts with interactive catalog filters and dynamic inventory states',
      'Multi-currency processing (₦, $, £, €) and automated checkout drawers',
      'Direct-to-WhatsApp concierge checkout integration for high-trust closing',
      'Fast CDN image optimization and mobile-first shopping UX',
    ],
    forWhom:
      'Luxury retail brands, merchant founders, and direct-to-consumer businesses seeking higher checkout conversion rates.',
  },
  {
    id: 'digital-security',
    status: 'live',
    isLocked: false,
    category: 'security',
    categoryLabel: 'Infrastructure Hardening',
    title: 'Enterprise Digital Defense & Infrastructure',
    badge: '360° Protection',
    badgeType: 'violet',
    icon: LuLock,
    slaMetric: {
      icon: LuKey,
      text: 'Zero-Trust Protocol · SPF / DKIM / DMARC Sealed',
    },
    techStack: ['Cloudflare Zero-Trust', 'DMARC Enforcement', 'Hardware 2FA', 'KMS Isolation', 'Audit Logging'],
    summary:
      'Comprehensive protection across your domain identity, cloud assets, administrative accounts, and business communications.',
    includes: [
      'Business email authentication (SPF, DKIM, DMARC) and domain spoofing defense',
      'Administrative account hardening, multi-factor hardware keys, and password management',
      'Cloud storage and server credential isolation',
      'Bundled "Build-and-Secure" architecture for new enterprise product launches',
    ],
    forWhom:
      'Corporate executives, fast-scaling startups, and businesses requiring full protection across their entire digital footprint.',
  },

  /* ════════ UPCOMING SOFTWARE ENGINEERING HORIZONS (LOCKED · COMING SOON) ════════ */
  {
    id: 'mobile-apps',
    status: 'coming-soon',
    isLocked: true,
    category: 'mobile-ai',
    categoryLabel: 'Native Mobile Systems',
    title: 'iOS & Android Native Mobile Engineering',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuSmartphone,
    slaMetric: {
      icon: LuZap,
      text: '60–120fps Native UX · Apple App Store & Google Play Direct Deployment',
    },
    techStack: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Expo', 'Push Gateways', 'Encrypted Keychain'],
    summary:
      'High-performance iOS and Android applications with offline-first synchronization, native biometric authentication, and smooth 120fps interfaces.',
    includes: [
      'End-to-end native iOS (Swift) and Android (Kotlin) or cross-platform (React Native/Flutter) mobile apps',
      'Offline-first client data caching and encrypted SQLite/Realm storage synchronization',
      'Biometric authentication (Face ID, Touch ID, Android Biometrics) & secure hardware keychain integration',
      'App Store & Google Play distribution, automated OTA updates, and compliance verification',
    ],
    forWhom:
      'Fast-scaling SaaS platforms, fintech startups, and consumer retail businesses expanding beyond web into dedicated mobile apps.',
    inquirySubject: 'Early Inquiry — Native Mobile App Engineering',
  },
  {
    id: 'ai-ml',
    status: 'coming-soon',
    isLocked: true,
    category: 'mobile-ai',
    categoryLabel: 'Applied Artificial Intelligence',
    title: 'Enterprise AI & Autonomous Agents',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuCpu,
    slaMetric: {
      icon: LuActivity,
      text: 'Sub-500ms Vector Semantic Search · Private Data Enclaves',
    },
    techStack: ['PyTorch', 'OpenAI API', 'LangChain', 'pgvector', 'FastAPI', 'RAG Pipelines', 'Llama 3'],
    summary:
      'Custom retrieval-augmented generation (RAG) knowledge systems, autonomous workflow agents, and private LLM fine-tuning for enterprises.',
    includes: [
      'Private enterprise knowledge search (RAG) over proprietary internal documentation and contracts',
      'Autonomous task execution agents for automated customer operations and compliance checks',
      'Vector database architecture (pgvector, Pinecone, Qdrant) with semantic clustering and fast retrieval',
      'Zero-data-retention LLM privacy guardrails ensuring sensitive business data remains confidential',
    ],
    forWhom:
      'Enterprises seeking to automate repetitive operational bottlenecks, deploy intelligent proprietary assistants, and extract instant insights from vast databases.',
    inquirySubject: 'Early Inquiry — Enterprise AI & Autonomous Agents',
  },
  {
    id: 'cloud-devops',
    status: 'coming-soon',
    isLocked: true,
    category: 'dev',
    categoryLabel: 'Cloud Infrastructure & SRE',
    title: 'Cloud DevOps & Kubernetes Orchestration',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuCloud,
    slaMetric: {
      icon: LuServer,
      text: '99.99% Multi-Region Uptime · Zero-Downtime Rolling Deploys',
    },
    techStack: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'GCP', 'Prometheus', 'Grafana', 'GitHub Actions'],
    summary:
      'Enterprise infrastructure as code, auto-scaling Kubernetes clusters, and automated continuous delivery pipelines built for zero downtime.',
    includes: [
      'Automated Infrastructure as Code (Terraform, Ansible) across AWS, Google Cloud, and DigitalOcean',
      'Kubernetes cluster deployment, auto-scaling pods, and ingress traffic balancing',
      'Zero-downtime rolling deployments with automated health checks and instant rollback triggers',
      'Real-time telemetry and alerting meshes via Prometheus, Grafana, and Datadog',
    ],
    forWhom:
      'Growing platforms experiencing high traffic spikes, migrating away from fragile single servers, or needing bank-grade infrastructure redundancy.',
    inquirySubject: 'Early Inquiry — Cloud DevOps & Kubernetes Orchestration',
  },
  {
    id: 'web3-contracts',
    status: 'coming-soon',
    isLocked: true,
    category: 'security',
    categoryLabel: 'Decentralized Protocols',
    title: 'Smart Contract Architecture & Verification',
    badge: 'Coming Soon',
    badgeType: 'locked',
    icon: LuLayers,
    slaMetric: {
      icon: LuKey,
      text: 'Gas-Optimized Bytecode · Re-entrancy & Logic Audited',
    },
    techStack: ['Solidity', 'Foundry', 'Hardhat', 'EVM', 'Viem', 'OpenZeppelin', 'Slither'],
    summary:
      'Secure cryptographic state logic, decentralized token systems, and formal smart contract verification engineered to prevent capital drain exploits.',
    includes: [
      'Custom EVM smart contracts (ERC-20, ERC-721, multi-sig escrow, and custom protocol logic)',
      'Static and dynamic vulnerability testing against re-entrancy, integer overflow, and flash-loan vectors',
      'Gas optimization profiling reducing on-chain execution costs by up to 40%',
      'Full regression test suites with 100% branch and edge-case execution coverage',
    ],
    forWhom:
      'Fintech protocols, tokenized asset ventures, and decentralized applications requiring bulletproof, immutable smart contract logic.',
    inquirySubject: 'Early Inquiry — Smart Contract Architecture & Verification',
  },
]
