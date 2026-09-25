export const projects = [
  {
    id: 'secuscan',
    title: 'SecuScan — Web Vulnerability Scanner',
    badge: 'Live in Production',
    featured: true,
    category: 'Cybersecurity SaaS',
    tagline: 'Automated vulnerability detection, security header verification, and OWASP audit engine.',
    description:
      'Enterprise-grade automated web security audit platform. Scans target domains for missing security headers, authentication loopholes, cross-site scripting risks, exposed endpoints, and SSL misconfigurations with instant severity-graded reporting.',
    detail:
      'Engineered with a high-concurrency FastAPI/Python backend, PostgreSQL vulnerability database, and a responsive React frontend dashboard.',
    outcome:
      'Active SaaS platform with tiered scanning (Free, Pro, Enterprise), automated PDF executive report exports, and sub-30-second scan execution.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Vercel'],
    liveUrl: 'https://secuscan-orpin.vercel.app/',
    siteLabel: 'secuscan-orpin.vercel.app',
    poster: '/screenshots/secuscan/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Instant Scan Input & Target Validation',
        caption:
          'Single-click vulnerability scanner. Enter any production domain or API endpoint to initiate a deep, non-destructive security inspection.',
        image: '/screenshots/secuscan/slide-1.webp',
        highlight: 'Sub-30s Scan Execution · Non-destructive Inspection',
      },
      {
        id: 2,
        title: '02. Scan Engine & Architectural Analysis',
        caption:
          'Multi-threaded vulnerability engine tests for SSL/TLS posture, HTTP security headers (HSTS, CSP, X-Frame-Options), and cookie flag weaknesses.',
        image: '/screenshots/secuscan/slide-2.webp',
        highlight: 'OWASP Top 10 Coverage · Automated Header Checks',
      },
      {
        id: 3,
        title: '03. Full Security Checks & Risk Categorisation',
        caption:
          'Deep audit categorises threats into Critical, High, Medium, and Low severity with step-by-step remediation instructions for engineering teams.',
        image: '/screenshots/secuscan/slide-3.webp',
        highlight: 'Colour-coded Severity · Developer Remediation Guides',
      },
      {
        id: 4,
        title: '04. Tiered Plans & Executive Audit Reports',
        caption:
          'Enterprise subscription tiers with automated continuous scans, team seat management, and downloadable compliance-ready PDF security reports.',
        image: '/screenshots/secuscan/slide-4.webp',
        highlight: 'PDF Report Export · Continuous Monitoring Tiers',
      },
      {
        id: 5,
        title: '05. Centralised Audit Management',
        caption:
          'Secure dashboard overview showing historical scan trajectories, vulnerability resolution trackers, and verified safety certifications.',
        image: '/screenshots/secuscan/slide-5.webp',
        highlight: 'Continuous Security Posture · Real-time Status',
      },
    ],
  },
  {
    id: 'luxehair',
    title: 'Luxe Hair Co — Luxury E-Commerce Platform',
    badge: 'Live in Production',
    featured: true,
    category: 'E-Commerce & Retail Tech',
    tagline: 'High-converting luxury retail storefront with dynamic Naira pricing and WhatsApp checkout.',
    description:
      'Full-featured luxury e-commerce platform built for high-end virgin hair bundles, HD lace frontals, and custom wigs. Features an immersive boutique aesthetic, responsive product galleries, interactive bag drawer, and seamless WhatsApp order processing.',
    detail:
      'Built with modern React, bespoke CSS architecture, dynamic currency handling (₦), and automated order routing.',
    outcome:
      'Production storefront deployed with complete catalog search, real-time cart state management, and direct-to-concierge WhatsApp sales integration.',
    stack: ['React', 'JavaScript', 'Vanilla CSS', 'Node.js', 'Vercel'],
    liveUrl: 'https://luxehair-tau.vercel.app/',
    siteLabel: 'luxehair-tau.vercel.app',
    poster: '/screenshots/luxehair/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Haute Coiffure Luxury Storefront',
        caption:
          'Editorial brand presentation engineered to establish instant luxury positioning, high consumer trust, and compelling conversion incentives.',
        image: '/screenshots/luxehair/slide-1.webp',
        highlight: 'Editorial Luxury UX · High-Conversion Hero Banner',
      },
      {
        id: 2,
        title: '02. Complete Catalog & Live Pricing Grid',
        caption:
          'Interactive product directory featuring raw virgin hair bundles, closures, and custom frontals with live ₦ pricing and instant stock status.',
        image: '/screenshots/luxehair/slide-2.webp',
        highlight: 'Dynamic Naira (₦) Currency · Real-time Stock Display',
      },
      {
        id: 3,
        title: '03. Curated Collections & Premium Categories',
        caption:
          'Multi-collection categorization allowing customers to filter between Vietnamese straight, Cambodian curls, and HD lace closures seamlessly.',
        image: '/screenshots/luxehair/slide-3.webp',
        highlight: 'Frictionless Category Navigation · Visual Hierarchy',
      },
      {
        id: 4,
        title: '04. Detailed Product Specifications & Texture Guide',
        caption:
          'Comprehensive product views showing multiple high-res angles, inch/length selectors, donor hair origin information, and verified client reviews.',
        image: '/screenshots/luxehair/slide-4.webp',
        highlight: 'Inch Length Pickers · Verified Customer Reviews',
      },
      {
        id: 5,
        title: '05. Interactive Cart & Concierge WhatsApp Checkout',
        caption:
          'Slide-out shopping drawer with live subtotal calculation and one-click order handover to dedicated WhatsApp concierge for fast sales completion.',
        image: '/screenshots/luxehair/slide-5.webp',
        highlight: 'Instant Cart State · 1-Click WhatsApp Order Routing',
      },
    ],
  },
  {
    id: 'carbreezy',
    title: 'CarBreezy — Automotive Marketplace',
    badge: 'Live Platform',
    featured: true,
    category: 'Marketplace Platform',
    tagline: 'Vehicle marketplace with smart inventory filtration, spec sheets, and photo galleries.',
    description:
      'Digital automotive marketplace connecting verified vehicle dealerships with buyers. Features multi-criteria filtering by make, model, year, transmission, and budget, complete with photo carousels and technical vehicle inspection sheets.',
    detail:
      'High-performance React/Vite web application with optimized image CDN delivery and sub-100ms client search queries.',
    outcome:
      'Shipped full marketplace platform with complete inventory search, dealer inquiry system, and vehicle gallery engine.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS3', 'Vercel'],
    liveUrl: 'https://carbreezy-react.vercel.app/',
    siteLabel: 'carbreezy-react.vercel.app',
    poster: '/screenshots/carbreezy/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Showroom Hero & Live Inventory Telemetry',
        caption:
          'Rotating flagship carousel pairing each marque with headline performance specs, backed by live analogue stat dials and a running inventory ticker.',
        image: '/screenshots/carbreezy/slide-1.webp',
        highlight: 'Auto-rotating Hero Carousel · Live Stock Ticker',
      },
      {
        id: 2,
        title: '02. New Vehicle Inventory & Spec Grid',
        caption:
          'New-condition listings rendered as a responsive spec grid — year, body style, mileage, and Naira pricing surfaced on every card with condition badges and ratings.',
        image: '/screenshots/carbreezy/slide-2.webp',
        highlight: 'Responsive Spec Cards · Dynamic Naira (₦) Pricing',
      },
      {
        id: 3,
        title: '03. Certified Pre-Owned Catalogue',
        caption:
          'Separately routed used-inventory catalogue with the same card architecture, letting buyers compare inspected pre-owned stock against new units directly.',
        image: '/screenshots/carbreezy/slide-3.webp',
        highlight: 'Condition-segmented Routing · Inspection Ratings',
      },
      {
        id: 4,
        title: '04. Shop by Brand — Radio Tuner Selector',
        caption:
          'Signature browse experience: a radio-dial brand selector that “tunes” across fifteen marques and re-filters the showroom in place, with a mechanical flip-counter match readout.',
        image: '/screenshots/carbreezy/slide-4.webp',
        highlight: 'Bespoke Tuner UI · Instant Client-side Re-filtering',
      },
      {
        id: 5,
        title: '05. Current Offers & Promotional Engine',
        caption:
          'Seasonal pricing and bundled service plans presented as tear-off coupon cards with discount seals, expiry dating, and deep links into the matching vehicle.',
        image: '/screenshots/carbreezy/slide-5.webp',
        highlight: 'Coupon-styled Offer Cards · Deep-linked Inventory',
      },
    ],
  },
  {
    id: 'junicash',
    title: 'JuniCash — Personal Finance & Digital Wallet',
    badge: 'Full-Stack Fintech',
    featured: true,
    category: 'Fintech & Wallet',
    tagline: 'Full-stack personal finance app with multi-wallet management, OTP auth, and transfers.',
    description:
      'Fintech application for budgeting, digital wallet balance management, and peer-to-peer internal transfers. Incorporates bank-grade cryptographic password hashing, email OTP authentication, and transaction ledgering.',
    detail:
      'Built with Node.js, Express, MongoDB, and React, with transactional email delivery via Resend API.',
    outcome:
      'Shipped end-to-end full-stack fintech app with secure session handling and real-time transaction history tracking.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Resend', 'JWT'],
    liveUrl: 'https://junicash.vercel.app',
    siteLabel: 'junicash.vercel.app',
    poster: '/screenshots/junicash/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Product Positioning & Store Distribution',
        caption:
          'Consumer-facing landing experience with dual app-store distribution, aggregate store ratings, adoption metrics, and a persistent compliance trust bar.',
        image: '/screenshots/junicash/slide-1.webp',
        highlight: 'Dual Store Distribution · Compliance Trust Bar',
      },
      {
        id: 2,
        title: '02. Product Suite & Segment Switching',
        caption:
          'Six-module product grid — transfers, borrowing, savings, premium, cards, and investments — behind a Personal/Business segmented control that swaps the whole offer set.',
        image: '/screenshots/junicash/slide-2.webp',
        highlight: 'Segmented Personal/Business View · Modular Product Grid',
      },
      {
        id: 3,
        title: '03. Premium Subscription Tier',
        caption:
          'Paid membership tier presented as a dark-panel value stack covering cashback accrual, uplifted savings rates, and partner brand discounts.',
        image: '/screenshots/junicash/slide-3.webp',
        highlight: 'Recurring Subscription Tier · Cashback Accrual',
      },
      {
        id: 4,
        title: '04. Competitive Comparison & Conversion',
        caption:
          'Head-to-head feature matrix benchmarking the wallet against incumbent banking on fees, onboarding time, and interest, closing into the account-opening call to action.',
        image: '/screenshots/junicash/slide-4.webp',
        highlight: 'Comparison Matrix · Conversion-focused CTA',
      },
      {
        id: 5,
        title: '05. Account Creation & Credential Handling',
        caption:
          'Validated multi-field registration flow with required-field enforcement, masked password entry and confirmation, and reveal toggles ahead of email OTP verification.',
        image: '/screenshots/junicash/slide-5.webp',
        highlight: 'Field-level Validation · Masked Credential Entry',
      },
    ],
  },
  {
    id: 'skku-bank',
    title: 'skku-bank — Biometric Banking Authentication',
    badge: 'Security Prototype',
    category: 'Fintech Security',
    description:
      'Next-generation banking platform integrating client-side biometric facial recognition and OTP authentication for high-security transaction authorization.',
    detail: 'Face recognition neural models running client-side with face-api.js and Next.js / Prisma backend.',
    outcome: 'Biometric + OTP banking login shipped live — security-first authentication prototype.',
    stack: ['Next.js', 'Prisma', 'face-api.js', 'TailwindCSS'],
    liveUrl: 'https://skku-bank.vercel.app',
    siteLabel: 'skku-bank.vercel.app',
  },
  {
    id: 'tema-car-wash',
    title: 'Tema Car Wash — Smart Job & Service Tracker',
    badge: 'Operations Web App',
    category: 'Workflow Management',
    description:
      'Field service and job tracking system connecting service staff with scheduled vehicle wash bookings, optimized for mobile low-bandwidth devices.',
    detail: 'Ultra-lightweight React architecture engineered to run smoothly on budget Android hardware.',
    outcome: 'Live operations platform deployed with zero layout shift and minimal data payload consumption.',
    stack: ['React', 'Node.js', 'REST API'],
    liveUrl: 'https://tema-car-wash.vercel.app',
    siteLabel: 'tema-car-wash.vercel.app',
  },
  {
    id: 'apartment-listing',
    title: 'Apartment Listing — Ultra-Fast Real Estate Hub',
    badge: 'Zero-Framework',
    category: 'Real Estate Platform',
    description:
      'Real estate directory for rental and purchase properties built purely in vanilla HTML/CSS/JavaScript with sub-100ms initial paint.',
    detail: 'Zero runtime dependencies, ultra-lean DOM architecture, and accessible filter components.',
    outcome: 'Sub-100ms first contentful paint, fully deployed and responsive across all screen sizes.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    liveUrl: 'https://apartment-ls-ready.vercel.app',
    siteLabel: 'apartment-ls-ready.vercel.app',
  },
]
