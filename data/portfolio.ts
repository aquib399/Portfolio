import {
  Project,
  Education,
  Experience,
  SocialLink,
  SkillCategory,
  PersonalMedia
} from "../types/portfolio";

export const PERSONAL_INFO = {
  name: "AQUIB ALAM",
  firstName: "AQUIB",
  lastName: "ALAM",
  role: "Software Engineer",
  subRole: "CREATIVE ENGINEER & ARCHITECT",
  location: "KOLKATA, INDIA",
  locationCode: "Kolkata",
  status: "AVAILABLE FOR NEW ROLES & COLLABORATIONS",
  email: "aquibalam399@gmail.com",
  shortBio:
    "Kolkata-based Full Stack Software Engineer obsessed with clean code, resilient architectures, and visceral, memorable user experiences. Balancing delivery speed with modular, scalable design.",
  detailedBio: [
    "I believe in a user-centered design and engineering approach—ensuring every product is tailored to solve real problems with absolute clarity and precision.",
    "Early in my career, I experienced the friction of fast-paced shipping that sacrificed code clarity: large hard-to-navigate files, quick patches, and mounting tech debt. That friction transformed my philosophy.",
    "Today, I engineer codebases with deliberate intent: modular components, immutable data flows, high-performance rendering, and comprehensive type safety that scales effortlessly from day one."
  ],
  quote:
    "BALANCING RAPID DELIVERY SPEED WITH SUSTAINABLE ARCHITECTURE. CLEAN CODE, FASTER ITERATIONS, TACTILE CRAFTSMANSHIP.",
  metadataTags: [
    "[FULL STACK CRAFTSMANSHIP]",
    "[PERFORMANCE ARCHITECT]",
    "[TYPE-SAFE ECOSYSTEMS]",
    "[TACTILE USER EXPERIENCE]"
  ]
};

export const PERSONAL_MEDIA: PersonalMedia[] = [
  {
    id: "media-portrait-main",
    orientation: "portrait",
    url: "/site/08-ipad-mockup-outro-contact.png",
    title: "Editorial Portrait (Duotone)",
    caption: "Aquib Alam — Visual & Systems Engineering",
    alt: "Portrait of Aquib Alam wearing sunglasses in vintage red risograph finish"
  },
  {
    id: "media-landscape-workstation",
    orientation: "landscape",
    url: "/site/05-laptop-mockup-hero.png",
    title: "Digital Workspace",
    caption: "Next-gen interfaces built on modern web standards",
    alt: "MacBook Pro displaying creative portfolio interface"
  },
  {
    id: "media-portrait-b-w",
    orientation: "portrait",
    url: "/site/02-overview-booklet-mockup.png",
    title: "Tactile Editorial Zine",
    caption: "Printmaking sensibilities translated to the DOM",
    alt: "Printed booklet mockup with overview table of contents and portrait"
  },
  {
    id: "media-landscape-moodboard",
    orientation: "landscape",
    url: "/site/01-overview-moodboard.jpg",
    title: "Systems & Aesthetics Moodboard",
    caption:
      "The intersection of Brutalism, Linocut Art, and Modern TypeScript",
    alt: "Comprehensive portfolio design board featuring all layout modules"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-a",
    slug: "hyperflow-engine",
    letterBadge: "A",
    title: "HYPERFLOW ENGINE",
    subtitle: "DISTRIBUTED REAL-TIME ANALYTICS & CANVAS",
    category: "FULL STACK / DISTRIBUTED SYSTEMS",
    year: "2025",
    summary:
      "High-throughput real-time event aggregation engine with interactive collaborative canvas, sub-millisecond pipeline processing, and instant visualization.",
    description:
      "Built to handle demanding real-time workloads without sacrificing UI fluidity. HyperFlow leverages WebSocket pipelines, Redis caching clusters, and optimized React 19 concurrent render trees to stream hundreds of metrics per second with zero lag.",
    tags: ["Distributed Systems", "WebSockets", "Real-time", "Canvas"],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Tailwind CSS",
      "Docker"
    ],
    liveUrl: "https://hyperflow-demo.example.com",
    githubUrl: "https://github.com/aquib399",
    featured: true,
    media: [
      {
        id: "pa-media-1",
        type: "image",
        orientation: "landscape",
        url: "/site/04-showcase-grid-about-skills-portfolio-project-a.png",
        alt: "HyperFlow Engine Master Grid View",
        caption:
          "Landscape Architecture Overview: 4-Quadrant system view and real-time dashboard layout",
        aspectRatio: "16/9"
      },
      {
        id: "pa-media-2",
        type: "image",
        orientation: "portrait",
        url: "/site/03-creative-portfolio-hero.png",
        alt: "HyperFlow Mobile Stream Visualizer",
        caption:
          "Portrait Interface: Deep-dive node inspect pane with tactile visual telemetry",
        aspectRatio: "4/5"
      },
      {
        id: "pa-media-3",
        type: "video",
        orientation: "landscape",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        thumbnailUrl: "/site/05-laptop-mockup-hero.png",
        alt: "HyperFlow Interactive Walkthrough Video",
        caption:
          "Interactive Walkthrough: Multi-tenant event processing demonstration",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    id: "project-b",
    slug: "lumina-commerce",
    letterBadge: "B",
    title: "LUMINA OS COMMERCE",
    subtitle: "HEADLESS ARCHITECTURE WITH ZERO-LATENCY CHECKOUT",
    category: "FULL STACK / E-COMMERCE",
    year: "2024",
    summary:
      "Next-generation headless commerce platform with dynamic inventory synchronization, biometric checkout flows, and Stripe webhook orchestration.",
    description:
      "Engineered an enterprise-grade shopping and checkout experience featuring edge caching, transactional idempotency, and automated inventory reconciliation across multi-warehouse locations.",
    tags: ["E-Commerce", "Fintech", "Stripe", "Edge Runtime"],
    techStack: [
      "React",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Stripe API",
      "Tailwind CSS",
      "AWS S3"
    ],
    liveUrl: "https://lumina-demo.example.com",
    githubUrl: "https://github.com/aquib399",
    featured: true,
    media: [
      {
        id: "pb-media-1",
        type: "image",
        orientation: "landscape",
        url: "/site/06-project-b-surreal-eye.png",
        alt: "Lumina Commerce Visual Identity and Surreal Eye Graphic",
        caption:
          "Landscape Display: Project B core visual poster with linocut eye motif",
        aspectRatio: "16/9"
      },
      {
        id: "pb-media-2",
        type: "image",
        orientation: "portrait",
        url: "/site/08-ipad-mockup-outro-contact.png",
        alt: "Lumina Mobile Checkout Flow",
        caption:
          "Portrait Display: Streamlined mobile payment sheet with one-click verification",
        aspectRatio: "4/5"
      },
      {
        id: "pb-media-3",
        type: "video",
        orientation: "landscape",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        thumbnailUrl: "/site/06-project-b-surreal-eye.png",
        alt: "Lumina Commerce Workflow Video",
        caption:
          "Live Checkout Session: Instant payment confirmation and inventory decrement",
        aspectRatio: "16/9"
      }
    ]
  },
  {
    id: "project-c",
    slug: "zenith-workspace",
    letterBadge: "C",
    title: "ZENITH WORKSPACE",
    subtitle: "COLLABORATIVE DEVELOPER WORKSPACE & CANVAS",
    category: "FULL STACK / DEV TOOLS",
    year: "2024",
    summary:
      "Minimalist, distraction-free markdown studio with local-first sync, cryptographic revision history, and contextual AI agent integrations.",
    description:
      "Created a tactile, brutalist workspace designed for software engineers and writers. Incorporates CRDT-based offline sync, ultra-fast search indexing using vector embeddings, and zero tracking.",
    tags: ["Local-First", "CRDTs", "DevTools", "AI Agents"],
    techStack: [
      "TypeScript",
      "Next.js",
      "MongoDB",
      "Drizzle ORM",
      "Tailwind CSS",
      "Docker"
    ],
    liveUrl: "https://zenith-demo.example.com",
    githubUrl: "https://github.com/aquib399",
    featured: true,
    media: [
      {
        id: "pc-media-1",
        type: "image",
        orientation: "landscape",
        url: "/site/07-project-c-woodcut-textures.png",
        alt: "Zenith Workspace Linocut Textures and Organic Contours",
        caption:
          "Landscape View: Japanese woodblock & cellular topographic textures motif",
        aspectRatio: "16/9"
      },
      {
        id: "pc-media-2",
        type: "image",
        orientation: "portrait",
        url: "/site/02-overview-booklet-mockup.png",
        alt: "Zenith Studio Mobile Note Reader",
        caption:
          "Portrait View: Compact typography view optimized for handheld reading",
        aspectRatio: "4/5"
      },
      {
        id: "pc-media-3",
        type: "video",
        orientation: "landscape",
        url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        thumbnailUrl: "/site/07-project-c-woodcut-textures.png",
        alt: "Zenith Workspace Video Preview",
        caption:
          "Interactive Demo: Real-time peer-to-peer sync and split-pane markdown parsing",
        aspectRatio: "16/9"
      }
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    title: "FRONTEND & INTERACTION",
    subtitle: "HIGH-PERFORMANCE USER INTERFACES",
    stackedTitle: ["PHOTO", "GRA", "PHY"], // retro aesthetic homage
    skills: [
      {
        name: "TypeScript",
        level: "Expert",
        description: "Strict typing, generics, infer patterns"
      },
      {
        name: "React 19 & Next.js 16",
        level: "Expert",
        description: "Server components, streaming, actions"
      },
      {
        name: "Tailwind CSS v4",
        level: "Expert",
        description: "Utility-first modern responsive systems"
      },
      {
        name: "Framer Motion",
        level: "Advanced",
        description: "Physics springs, layout transitions, keyframes"
      },
      {
        name: "State (Zustand / Redux / Jotai)",
        level: "Advanced",
        description: "Predictable modular store architectures"
      },
      {
        name: "TanStack Query",
        level: "Advanced",
        description: "Cache invalidation, optimistic updates"
      },
      {
        name: "shadcn/ui & Radix",
        level: "Expert",
        description: "Accessible, unstyled primitive composition"
      }
    ]
  },
  {
    id: "backend",
    title: "BACKEND & DATA SYSTEMS",
    subtitle: "ROBUST, RESILIENT ARCHITECTURES",
    stackedTitle: ["ILLUSTRA", "TION"],
    skills: [
      {
        name: "Node.js & Express.js",
        level: "Expert",
        description: "Event loop tuning, async pipelines, REST APIs"
      },
      {
        name: "PostgreSQL & MongoDB",
        level: "Advanced",
        description: "Relational modeling, indexing, aggregation"
      },
      {
        name: "Redis Cache & Pub/Sub",
        level: "Advanced",
        description: "In-memory stores, rate limiting, queuing"
      },
      {
        name: "Prisma & Drizzle ORM",
        level: "Expert",
        description: "Schema migrations, type-safe query builders"
      },
      {
        name: "Auth & Session Security",
        level: "Advanced",
        description: "Lucia-Auth, Better-Auth, Next-Auth, OAuth"
      },
      {
        name: "Stripe Payments",
        level: "Advanced",
        description: "Webhooks, idempotent charges, subscription logic"
      }
    ]
  },
  {
    id: "devops",
    title: "DEVOPS, SYSTEMS & TOOLS",
    subtitle: "AUTOMATION & SCALE",
    stackedTitle: ["GRAPHIC", "DESIGN"],
    skills: [
      {
        name: "Docker & Containers",
        level: "Advanced",
        description: "Multi-stage builds, compose networks"
      },
      {
        name: "Git & GitHub Workflows",
        level: "Expert",
        description: "CI/CD actions, branch hygiene, monorepos"
      },
      {
        name: "AWS & Vercel Edge",
        level: "Intermediate",
        description: "S3, CloudFront, serverless deployment"
      },
      {
        name: "Jest & Unit Testing",
        level: "Advanced",
        description: "Integration specs, mock assertions, regressions"
      },
      {
        name: "Postman & API Design",
        level: "Expert",
        description: "OpenAPI specs, automated collection runs"
      },
      {
        name: "Languages (C / C++ / Python)",
        level: "Familiar",
        description: "Foundational algorithms, scripts"
      }
    ]
  }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    id: "edu-btech",
    institution: "WEST BENGAL UNIVERSITY OF TECHNOLOGY",
    degree: "BACHELOR OF TECHNOLOGY",
    field: "COMPUTER SCIENCE & ENGINEERING",
    period: "2020 — 2024",
    location: "KOLKATA, INDIA",
    badge: "B.TECH CSE",
    achievements: [
      "Comprehensive study of Data Structures, Algorithms, Distributed Systems, and Database Management",
      "Engineered open-source full stack web systems and led collegiate developer initiatives",
      "Graduated with honors in Computer Science fundamentals and software engineering"
    ]
  },
  {
    id: "edu-hs",
    institution: "KOLKATA SENIOR SECONDARY ACADEMY",
    degree: "HIGHER SECONDARY (CLASS XII)",
    field: "PURE SCIENCES (PHYSICS, CHEMISTRY, MATHEMATICS)",
    period: "2018 — 2020",
    location: "KOLKATA, INDIA",
    badge: "SCIENCE & MATH",
    achievements: [
      "Advanced Mathematics, Physics, and Computer Science specializations",
      "Algorithmic problem-solving competitions and Olympiad preparation"
    ]
  }
];

export const EXPERIENCE_HISTORY: Experience[] = [
  {
    id: "exp-fullstack-lead",
    company: "CREATIVE TECH LABS",
    role: "FULL STACK ENGINEER",
    period: "2024 — PRESENT",
    location: "REMOTE / HYBRID",
    type: "Full-time",
    badge: "CURRENT ROLE",
    description:
      "Spearheading front-end and back-end web architecture for client-facing digital products, real-time analytics platforms, and design-system integrations.",
    highlights: [
      "Reduced core web vitals latency by 42% through aggressive server component caching and dynamic bundle splitting in Next.js",
      "Constructed distributed microservices and RESTful backends processing tens of thousands of daily requests",
      "Maintained 99.9% uptime across PostgreSQL and Redis infrastructure with automated health monitoring"
    ],
    skillsUsed: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker"
    ]
  },
  {
    id: "exp-frontend-dev",
    company: "INNOVATION DIGITAL STUDIO",
    role: "FRONTEND DEVELOPER",
    period: "2023 — 2024",
    location: "KOLKATA, INDIA",
    type: "Full-time",
    badge: "FRONTEND SPECIALIST",
    description:
      "Collaborated closely with UI/UX designers to translate Figma design systems into interactive, responsive, and accessible web experiences.",
    highlights: [
      "Built a reusable modular component library in TypeScript utilized across 8 production applications",
      "Integrated Stripe billing pipelines and automated transactional webhook systems with zero transaction drops",
      "Mentored junior engineers on clean code practices, testing habits, and Git branch workflows"
    ],
    skillsUsed: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "REST APIs",
      "Stripe"
    ]
  },
  {
    id: "exp-freelance",
    company: "INDEPENDENT CLIENT CONSULTING",
    role: "FULL STACK DEVELOPER & ARCHITECT",
    period: "2022 — 2023",
    location: "KOLKATA, INDIA",
    type: "Freelance",
    badge: "CONSULTANT",
    description:
      "Delivered end-to-end bespoke software solutions for early-stage startups and creative founders worldwide.",
    highlights: [
      "Shipped 6 end-to-end web applications from concept to production deployment with continuous CI/CD",
      "Constructed custom authentication systems, database schemas, and intuitive dashboard analytics"
    ],
    skillsUsed: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Prisma",
      "Tailwind CSS",
      "Vercel"
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "social-github",
    platform: "github",
    label: "GITHUB",
    url: "https://github.com/aquib399",
    handle: "@aquib399"
  },
  {
    id: "social-linkedin",
    platform: "linkedin",
    label: "LINKEDIN",
    url: "https://linkedin.com/in/aquib-alam",
    handle: "in/aquib399"
  },
  {
    id: "social-email",
    platform: "email",
    label: "EMAIL",
    url: "mailto:aquibalam399@gmail.com",
    handle: "aquibalam399@gmail.com"
  },
  {
    id: "social-twitter",
    platform: "twitter",
    label: "X / TWITTER",
    url: "https://twitter.com/aquib399",
    handle: "@aquib399"
  },
  {
    id: "social-resume",
    platform: "resume",
    label: "Résumé",
    url: "#contact",
    handle: "DOWNLOAD CV"
  }
];

export const NAVIGATION_SECTIONS = [
  {
    number: "01",
    id: "about",
    title: "ABOUT ME",
    label: "THE PHILOSOPHY & STORY"
  },
  {
    number: "02",
    id: "skills",
    title: "SKILLS",
    label: "FULL STACK CAPABILITIES"
  },
  {
    number: "03",
    id: "education",
    title: "EDUCATION",
    label: "ACADEMIC FOUNDATION"
  },
  {
    number: "04",
    id: "experience",
    title: "EXPERIENCE",
    label: "CAREER TIMELINE"
  },
  {
    number: "05",
    id: "portfolio",
    title: "PORTFOLIO",
    label: "FEATURED CASE STUDIES"
  },
  {
    number: "06",
    id: "contact",
    title: "CONTACT",
    label: "DIRECT INQUIRIES & SOCIALS"
  }
];
