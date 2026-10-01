export const projects = [
  {
    id: 'secuscan',
    title: 'SecuScan — Web Vulnerability Scanner',
    clientName: 'SecuScan',
    editorialHeadline: 'Most business systems launch with hidden vulnerabilities. Now one automated engine audits every attack surface in 30 seconds.',
    architectQuote: 'Engineered Python FastAPI microservices with OWASP compliance and Docker-isolated scanners for real-time threat telemetry.',
    badge: 'Live in Production',
    featured: true,
    category: 'Cybersecurity SaaS',
    tagline: 'Automated OWASP scans, security header checks, and fix instructions.',
    description:
      'Scans a site for missing security headers, auth gaps, XSS, exposed endpoints and SSL problems, then grades each finding by severity.',
    detail:
      'FastAPI and Python backend, PostgreSQL, React dashboard.',
    outcome:
      'Live SaaS. Three tiers, PDF reports, scans under 30 seconds.',
    stack: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'Docker', 'Vercel'],
    liveUrl: 'https://secuscan-orpin.vercel.app/',
    siteLabel: 'secuscan-orpin.vercel.app',
    poster: '/screenshots/secuscan/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Scan any domain',
        caption:
          'Paste a domain or API endpoint. The scan only reads — it never changes the target.',
        image: '/screenshots/secuscan/slide-1.webp',
        highlight: 'Under 30s · Read-only',
      },
      {
        id: 2,
        title: '02. What it tests',
        caption:
          'SSL/TLS setup, security headers (HSTS, CSP, X-Frame-Options) and cookie flags.',
        image: '/screenshots/secuscan/slide-2.webp',
        highlight: 'OWASP Top 10 · Header checks',
      },
      {
        id: 3,
        title: '03. Findings, ranked',
        caption:
          'Critical, high, medium or low — each with the steps to fix it.',
        image: '/screenshots/secuscan/slide-3.webp',
        highlight: 'Colour-coded · Fix steps',
      },
      {
        id: 4,
        title: '04. Plans and reports',
        caption:
          'Repeat scans, team seats, and a PDF report you can hand to a client.',
        image: '/screenshots/secuscan/slide-4.webp',
        highlight: 'PDF export · Repeat scans',
      },
      {
        id: 5,
        title: '05. One dashboard',
        caption:
          'Past scans, what is still open, and what is now fixed.',
        image: '/screenshots/secuscan/slide-5.webp',
        highlight: 'History · Live status',
      },
    ],
  },
  {
    id: 'luxehair',
    title: 'Luxe Hair Co — Luxury E-Commerce Platform',
    clientName: 'Luxe Hair Co',
    editorialHeadline: 'High-end retail brands lose buyers to sluggish manual DM orders. Now one luxury storefront unites live Naira catalogues with instant WhatsApp checkout.',
    architectQuote: 'Custom lightweight React architecture with zero framework bloat, sub-second product filtering, and automated cart-to-WhatsApp dispatch.',
    badge: 'Live in Production',
    featured: true,
    category: 'E-Commerce & Retail Tech',
    tagline: 'Luxury storefront with Naira pricing and WhatsApp checkout.',
    description:
      'E-commerce store for virgin hair bundles, HD lace frontals and custom wigs, with a product gallery, cart drawer and WhatsApp ordering.',
    detail:
      'React, hand-written CSS, Naira pricing, automated order routing.',
    outcome:
      'Live store with catalogue search, a working cart, and orders that land in WhatsApp.',
    stack: ['React', 'JavaScript', 'Vanilla CSS', 'Node.js', 'Vercel'],
    liveUrl: 'https://luxehair-tau.vercel.app/',
    siteLabel: 'luxehair-tau.vercel.app',
    poster: '/screenshots/luxehair/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Storefront',
        caption:
          'Editorial layout, built to look expensive and earn trust fast.',
        image: '/screenshots/luxehair/slide-1.webp',
        highlight: 'Editorial layout · Hero banner',
      },
      {
        id: 2,
        title: '02. Catalogue and prices',
        caption:
          'Bundles, closures and frontals with live ₦ prices and stock status.',
        image: '/screenshots/luxehair/slide-2.webp',
        highlight: 'Naira pricing · Live stock',
      },
      {
        id: 3,
        title: '03. Collections',
        caption:
          'Filter between Vietnamese straight, Cambodian curls and HD lace closures.',
        image: '/screenshots/luxehair/slide-3.webp',
        highlight: 'Easy filtering',
      },
      {
        id: 4,
        title: '04. Product detail',
        caption:
          'Several angles, a length picker, hair origin, and customer reviews.',
        image: '/screenshots/luxehair/slide-4.webp',
        highlight: 'Length picker · Reviews',
      },
      {
        id: 5,
        title: '05. Cart and checkout',
        caption:
          'Slide-out cart with a running subtotal, then one tap to order on WhatsApp.',
        image: '/screenshots/luxehair/slide-5.webp',
        highlight: 'Live subtotal · 1-tap ordering',
      },
    ],
  },
  {
    id: 'carbreezy',
    title: 'CarBreezy — Automotive Marketplace',
    badge: 'Live Platform',
    featured: true,
    category: 'Marketplace Platform',
    tagline: 'Vehicle marketplace with filters, spec sheets and photo galleries.',
    description:
      'Marketplace linking dealerships to buyers. Filter by make, model, year, transmission and budget, with photo carousels and inspection sheets.',
    detail:
      'React and Vite, images on a CDN, search under 100ms.',
    outcome:
      'Live marketplace with inventory search, dealer enquiries and galleries.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS3', 'Vercel'],
    liveUrl: 'https://carbreezy-react.vercel.app/',
    siteLabel: 'carbreezy-react.vercel.app',
    poster: '/screenshots/carbreezy/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Showroom',
        caption:
          'A rotating carousel pairs each marque with its headline specs, over a live stock ticker.',
        image: '/screenshots/carbreezy/slide-1.webp',
        highlight: 'Carousel · Stock ticker',
      },
      {
        id: 2,
        title: '02. New stock',
        caption:
          'Every card shows year, body style, mileage and Naira price.',
        image: '/screenshots/carbreezy/slide-2.webp',
        highlight: 'Spec cards · Naira pricing',
      },
      {
        id: 3,
        title: '03. Used stock',
        caption:
          'A separate catalogue on the same cards, so buyers can compare used against new.',
        image: '/screenshots/carbreezy/slide-3.webp',
        highlight: 'Separate routes · Inspection ratings',
      },
      {
        id: 4,
        title: '04. Shop by brand',
        caption:
          'A radio dial tunes across fifteen brands and re-filters the showroom in place.',
        image: '/screenshots/carbreezy/slide-4.webp',
        highlight: 'Tuner dial · Instant filtering',
      },
      {
        id: 5,
        title: '05. Offers',
        caption:
          'Seasonal deals as tear-off coupons, each linking to the car it applies to.',
        image: '/screenshots/carbreezy/slide-5.webp',
        highlight: 'Coupon cards · Linked stock',
      },
    ],
  },
  {
    id: 'junicash',
    title: 'JuniCash — Personal Finance & Digital Wallet',
    badge: 'Full-Stack Fintech',
    featured: true,
    category: 'Fintech & Wallet',
    tagline: 'Personal finance wallet with email OTP sign-in and internal transfers.',
    description:
      'Budgeting, wallet balances and peer-to-peer transfers, with email OTP sign-in and a transaction ledger.',
    detail:
      'React front end, Node.js and Express API, MongoDB, email via Resend.',
    outcome:
      'Live full-stack app with OTP sign-in and transaction history.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Resend', 'JWT'],
    liveUrl: 'https://junicash.vercel.app',
    siteLabel: 'junicash.vercel.app',
    poster: '/screenshots/junicash/slide-1.webp',
    slides: [
      {
        id: 1,
        title: '01. Landing page',
        caption:
          'App store links, adoption numbers, and a compliance trust bar.',
        image: '/screenshots/junicash/slide-1.webp',
        highlight: 'App store links · Trust bar',
      },
      {
        id: 2,
        title: '02. Product grid',
        caption:
          'Six modules: transfers, borrowing, savings, premium, cards and investments.',
        image: '/screenshots/junicash/slide-2.webp',
        highlight: 'Six modules',
      },
      {
        id: 3,
        title: '03. Premium tier',
        caption:
          'Paid tier panel: cashback, higher savings rates, partner discounts.',
        image: '/screenshots/junicash/slide-3.webp',
        highlight: 'Paid tier · Cashback',
      },
      {
        id: 4,
        title: '04. Comparison table',
        caption:
          'In-app comparison against traditional banking on fees, onboarding and interest.',
        image: '/screenshots/junicash/slide-4.webp',
        highlight: 'Comparison table · Sign-up CTA',
      },
      {
        id: 5,
        title: '05. Sign-up',
        caption:
          'Validated registration form with masked password entry, ahead of email OTP.',
        image: '/screenshots/junicash/slide-5.webp',
        highlight: 'Field validation · Email OTP',
      },
    ],
  },
  {
    id: 'skku-bank',
    title: 'skku-bank — Biometric Banking Authentication',
    badge: 'Security Prototype',
    category: 'Fintech Security',
    description:
      'Banking login that checks your face in the browser, then an OTP, before it authorises a transaction.',
    detail: 'face-api.js in the browser, Next.js and Prisma behind it.',
    outcome: 'Live prototype. Face and OTP login, both working.',
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
      'Job tracker that puts wash bookings in front of the staff doing them, built for weak mobile signal.',
    detail: 'Light enough to run on a budget Android phone.',
    outcome: 'Live, with no layout shift and very little data used.',
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
      'Property listings for rent and sale, in plain HTML, CSS and JavaScript. First paint under 100ms.',
    detail: 'No dependencies, a small DOM, and filters that work with a keyboard.',
    outcome: 'First paint under 100ms, live, and works at every screen size.',
    stack: ['JavaScript', 'HTML5', 'CSS3', 'Vercel'],
    liveUrl: 'https://apartment-ls-ready.vercel.app',
    siteLabel: 'apartment-ls-ready.vercel.app',
  },
]
