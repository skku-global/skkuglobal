export const projects = [
  {
    title: 'CarBreezy',
    badge: 'Live',
    // `featured` promotes this one to a full-width card carrying the demo reel.
    featured: true,
    description:
      'Car marketplace platform with a full listings system, detailed vehicle galleries, and multi-criteria filtering.',
    detail: 'React/Vite front to back, deployed on Vercel.',
    stack: ['React', 'Vite', 'JavaScript', 'CSS'],
    liveUrl: 'https://carbreezy-react.vercel.app/',
    githubUrl: 'https://github.com/skku-global/carbreezy',
    demo: {
      // `?v=` is a cache buster, not decoration. This reel was recut from a new
      // recording while keeping its filename, and a browser holding partly
      // buffered bytes of the *old* file at this URL refuses to play the new one
      // rather than refetching it. Bump the number on any future recut.
      poster: '/demo/carbreezy-poster.jpg?v=2',
      // The encoded file's own dimensions — the frame reserves its height from
      // these, so each reel keeps its own shape.
      width: 1280,
      height: 646,
      // Shown in the reel's browser chrome, and linked — so the frame itself is
      // evidence the build is deployed rather than just decoration.
      siteUrl: 'https://carbreezy-react.vercel.app/',
      siteLabel: 'carbreezy-react.vercel.app',
      // The default: one long opening take — hero carousel into the inventory
      // grid into a vehicle spec sheet — then filtering, the brand tuner, the
      // offers, and the gallery. Cut silent so it can start on its own.
      loop: {
        src: '/demo/carbreezy-loop.mp4?v=2',
        type: 'video/mp4',
        duration: '24s',
      },
      // No `full` here: the source recording is only 66s, so a walkthrough would
      // barely outrun the loop — and the ~10s it spends on a form filled with
      // keyboard mash is the part a client should least see. The loop stands
      // alone, the same way JuniCash's does.
    },
  },
  {
    title: 'JuniCash',
    badge: 'Live',
    featured: true,
    description:
      'Full-stack personal finance app — wallet management, internal transfers, budget tracking, and a complete dark mode.',
    detail: 'Secure auth with bcrypt hashing and email OTP verification.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Resend'],
    liveUrl: 'https://junicash.vercel.app',
    githubUrl: 'https://github.com/skku-global/Junicash',
    demo: {
      poster: '/demo/junicash-poster.jpg',
      width: 1280,
      height: 716,
      siteUrl: 'https://junicash.vercel.app',
      siteLabel: 'junicash.vercel.app',
      // Five beats — sign up, verify by OTP, virtual card, send money, and the
      // transfer landing — cut silent so it can start on its own.
      loop: {
        src: '/demo/junicash-loop.mp4',
        type: 'video/mp4',
        duration: '25s',
      },
      // No `full` here on purpose: the raw recording spends most of its length
      // in a real inbox and on a dashboard the screen capture cropped, so there
      // is no longer cut worth showing. The loop stands alone.
    },
  },
  {
    title: 'skku-bank',
    badge: 'Live',
    description:
      'Banking platform with biometric face login and OTP authentication for secure account management.',
    detail: 'Face recognition auth running client-side with face-api.js.',
    stack: ['Next.js', 'Prisma', 'face-api.js'],
    liveUrl: 'https://skku-bank.vercel.app',
    githubUrl: 'https://github.com/skku-global/skku-bank',
  },
  {
    title: 'Tema Car Wash',
    badge: 'Live',
    description:
      'Smart job tracking platform connecting car wash workers with job opportunities.',
    detail: 'Built for low-bandwidth use on entry-level Android devices.',
    stack: ['React', 'Node.js'],
    liveUrl: 'https://tema-car-wash.vercel.app',
    githubUrl: 'https://github.com/skku-global/Tema-Car-Wash',
  },
  {
    title: 'Apartment Listing',
    badge: 'Live',
    description:
      'Property listing platform for rent and sale with search and filter functionality.',
    detail: 'Vanilla JS — no framework, fast first paint.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    liveUrl: 'https://apartment-ls-ready.vercel.app',
    githubUrl: 'https://github.com/skku-global/apartment-ls-ready',
  },
]
