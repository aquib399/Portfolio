import { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  personal: {
    name: "Aquib Alam",
    firstName: "Aquib",
    lastName: "Alam",
    role: "Software Engineer",
    subRole: "Creative Engineer & Architect",
    location: "Kolkata, India",
    locationCode: "Kolkata",
    status: "Available for new roles & collaborations",
    email: "aquibalam399@gmail.com",
    shortBio:
      "Kolkata-based Full Stack Software Engineer obsessed with clean code, resilient architectures, and visceral, memorable user experiences. Balancing delivery speed with modular, scalable design.",
    detailedBio: [
      "I believe in a user-centered design and engineering approach—ensuring every product is tailored to solve real problems with absolute clarity and precision.",
      "Early in my career, I experienced the friction of fast-paced shipping that sacrificed code clarity: large hard-to-navigate files, quick patches, and mounting tech debt. That friction transformed my philosophy.",
      "Today, I engineer codebases with deliberate intent: modular components, immutable data flows, high-performance rendering, and comprehensive type safety that scales effortlessly from day one."
    ],
    quote:
      "Balancing rapid delivery speed with sustainable architecture. clean code, faster iterations, tactile craftsmanship.",
    metadataTags: [
      "[full stack craftsmanship]",
      "[performance architect]",
      "[type-safe ecosystems]",
      "[tactile user experience]"
    ],
    aboutHeading: "The engineer behind the craft",
    aboutSectionTag: "Section 01 // profile & architectural philosophy",
    pillars: [
      {
        title: "The craft",
        description:
          "Modular TypeScript components, zero unnecessary re-renders, and predictable state transitions.",
        icon: "code"
      },
      {
        title: "User-first",
        description:
          "Accessible layouts, sub-second latency, and visceral visual tactility inspired by print design.",
        icon: "sparkles"
      }
    ],
    heroBadge: "Op-art stipple • linocut serigraphy",
    overviewEdition: "Volume 01 • edition 2025",
    experiencePhilosophy: {
      title: "The philosophy",
      quote:
        "I balance delivery speed with clear structure and sustainable practices so the codebase remains easy to understand, test, and evolve."
    },
    contactPitch:
      "Have a complex architecture to build, a product to launch, or a collaboration to propose? send a direct dispatch.",
    contactMeta: {
      security: "Security: ssl encrypted",
      responseTime: "Response time: < 24 hours"
    },
    media: {
      portrait: [
        {
          id: "media-portrait-main",
          type: "image",
          orientation: "portrait",
          url: "/me/portrait-archway.png",
          thumbnailUrl: "/me/portrait-archway.png",
          aspectRatio: "9/16",
          caption: "Aquib Alam — Full Stack Engineer",
          alt: "Portrait of Aquib Alam standing under architectural archway in vintage red risograph finish"
        },
        {
          id: "media-portrait-b-w",
          type: "image",
          orientation: "portrait",
          url: "/me/portrait-archway.png",
          thumbnailUrl: "/me/portrait-archway.png",
          aspectRatio: "9/16",
          caption: "Aquib Alam — Dispatch Terminal",
          alt: "Portrait of Aquib Alam in vintage red risograph finish"
        }
      ],

      landscape: [
        {
          id: "media-landscape-cover",
          type: "image",
          orientation: "landscape",
          url: "/me/landscape-architectural.png",
          thumbnailUrl: "/me/landscape-architectural.png",
          aspectRatio: "3/2",
          caption: "Architectural setting with crimson sun",
          alt: "Aquib Alam sitting in front of modernist architecture with crimson sun"
        },
        {
          id: "media-landscape-motifs",
          type: "image",
          orientation: "landscape",
          url: "/me/landscape-mountains.png",
          thumbnailUrl: "/me/landscape-mountains.png",
          aspectRatio: "3/2",
          caption: "Mountain summit in duotone red sky",
          alt: "Aquib Alam in front of mountain range with dramatic crimson sky"
        },
        {
          id: "media-landscape-overview",
          type: "image",
          orientation: "landscape",
          url: "/overview/archive-booklet.png",
          thumbnailUrl: "/overview/archive-booklet.png",
          aspectRatio: "16/9",
          caption: "Engineering Index Directory & Sitemap Architecture",
          alt: "Engineering index directory and sitemap catalog in linocut print"
        }
      ]
    }
  },

  social: [
    {
      id: "social-github",
      platform: "github",
      label: "Github",
      url: "https://github.com/aquib399",
      handle: "@aquib399"
    },
    {
      id: "social-linkedin",
      platform: "linkedin",
      label: "Linkedin",
      url: "https://linkedin.com/in/aquib-alam",
      handle: "in/aquib399"
    },
    {
      id: "social-email",
      platform: "email",
      label: "Email",
      url: "mailto:aquibalam399@gmail.com",
      handle: "aquibalam399@gmail.com"
    },
    {
      id: "social-twitter",
      platform: "twitter",
      label: "X / twitter",
      url: "https://twitter.com/aquib399",
      handle: "@aquib399"
    },
    {
      id: "social-resume",
      platform: "resume",
      label: "Résumé",
      url: "#contact",
      handle: "Download cv"
    }
  ],

  skillCategory: [
    {
      id: "frontend",
      title: "Frontend & interaction",
      subtitle: "High-performance user interfaces",
      stackedTitle: ["Photo", "Gra", "Phy"],
      statusBadge: "Production ready",
      media: {
        id: "skill-frontend-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/frontend.png",
        thumbnailUrl: "/skills/frontend.png",
        alt: "Frontend Web Engineering, DOM Tree, and Interactive Components",
        caption: "Visual interfaces & dom craft",
        aspectRatio: "16/9"
      },
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
      title: "Backend & data systems",
      subtitle: "Robust, resilient architectures",
      stackedTitle: ["Illustra", "Tion"],
      statusBadge: "Production ready",
      media: {
        id: "skill-backend-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/backend.png",
        thumbnailUrl: "/skills/backend.png",
        alt: "Backend Architecture, Microservices, and Database Pipelines",
        caption: "Data pipelines & services",
        aspectRatio: "16/9"
      },
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
      title: "Devops, systems & tools",
      subtitle: "Automation & scale",
      stackedTitle: ["Graphic", "Design"],
      statusBadge: "Production ready",
      media: {
        id: "skill-devops-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/devops.png",
        thumbnailUrl: "/skills/devops.png",
        alt: "DevOps Cloud Orchestration, Containers, and CI/CD Pipelines",
        caption: "Containers, cloud & scale",
        aspectRatio: "16/9"
      },
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
  ],

  experience: [
    {
      id: "exp-fullstack-lead",
      company: "Creative tech labs",
      role: "Full stack engineer",
      period: "2024 — present",
      location: "Remote / hybrid",
      type: "Full-time",
      badge: "Current role",
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
      company: "Innovation digital studio",
      role: "Frontend developer",
      period: "2023 — 2024",
      location: "Kolkata, india",
      type: "Full-time",
      badge: "Frontend specialist",
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
      company: "Independent client consulting",
      role: "Full stack developer & architect",
      period: "2022 — 2023",
      location: "Kolkata, india",
      type: "Freelance",
      badge: "Consultant",
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
  ],

  education: [
    {
      id: "edu-btech",
      institution: "West bengal university of technology",
      degree: "Bachelor of technology",
      field: "Computer science & engineering",
      period: "2020 — 2024",
      location: "Kolkata, india",
      badge: "B.tech cse",
      media: {
        id: "edu-btech-media",
        type: "image",
        orientation: "landscape",
        url: "/education/btech-wbut.png",
        thumbnailUrl: "/education/btech-wbut.png",
        alt: "Computer Science & Engineering Academic Foundations",
        caption: "CS & SE Academic Rigor // Algorithms & Distributed Systems",
        aspectRatio: "16/9"
      },
      achievements: [
        "Comprehensive study of Data Structures, Algorithms, Distributed Systems, and Database Management",
        "Engineered open-source full stack web systems and led collegiate developer initiatives",
        "Graduated with honors in Computer Science fundamentals and software engineering"
      ]
    },
    {
      id: "edu-hs",
      institution: "Kolkata senior secondary academy",
      degree: "Higher secondary (class xii)",
      field: "Pure sciences (physics, chemistry, mathematics)",
      period: "2018 — 2020",
      location: "Kolkata, india",
      badge: "Science & math",
      media: {
        id: "edu-hs-media",
        type: "image",
        orientation: "landscape",
        url: "/education/hs-science.png",
        thumbnailUrl: "/education/hs-science.png",
        alt: "Pure Sciences, Physics and Mathematics Foundations",
        caption:
          "Pure Sciences & Mathematical Logic // Physics, Math & Algorithms",
        aspectRatio: "16/9"
      },
      achievements: [
        "Advanced Mathematics, Physics, and Computer Science specializations",
        "Algorithmic problem-solving competitions and Olympiad preparation"
      ]
    }
  ],

  project: [
    {
      id: "project-a",
      slug: "hyperflow-engine",
      letterBadge: "A",
      title: "Hyperflow engine",
      subtitle: "Distributed real-time analytics & canvas",
      category: "Full stack / distributed systems",
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
          url: "/projects/hyperflow-engine/showcase-grid.png",
          thumbnailUrl: "/projects/hyperflow-engine/showcase-grid.png",
          alt: "HyperFlow Engine Real-Time Distributed Architecture & Telemetry Grid",
          caption:
            "Landscape Architecture: Real-time event streaming and dashboard telemetry layout",
          aspectRatio: "16/9"
        },
        {
          id: "pa-media-2",
          type: "image",
          orientation: "portrait",
          url: "/projects/hyperflow-engine/mobile-stream.png",
          thumbnailUrl: "/projects/hyperflow-engine/mobile-stream.png",
          alt: "HyperFlow Mobile Stream Node Telemetry Visualizer",
          caption:
            "Portrait Interface: Deep-dive node inspect pane with tactile visual telemetry",
          aspectRatio: "3/4"
        },
        {
          id: "pa-media-3",
          type: "video",
          orientation: "landscape",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          thumbnailUrl: "/projects/hyperflow-engine/preview-thumbnail.png",
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
      title: "Lumina os commerce",
      subtitle: "Headless architecture with zero-latency checkout",
      category: "Full stack / e-commerce",
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
        "Aws s3"
      ],
      liveUrl: "https://lumina-demo.example.com",
      githubUrl: "https://github.com/aquib399",
      featured: true,
      media: [
        {
          id: "pb-media-1",
          type: "image",
          orientation: "landscape",
          url: "/projects/lumina-commerce/storefront-cover.png",
          thumbnailUrl: "/projects/lumina-commerce/storefront-cover.png",
          alt: "Lumina Commerce Headless Architecture & Digital Store Showcase",
          caption:
            "Landscape Display: Headless commerce architecture and digital catalog",
          aspectRatio: "16/9"
        },
        {
          id: "pb-media-2",
          type: "image",
          orientation: "portrait",
          url: "/projects/lumina-commerce/mobile-checkout.png",
          thumbnailUrl: "/projects/lumina-commerce/mobile-checkout.png",
          alt: "Lumina Zero-Latency Biometric Checkout Sheet",
          caption:
            "Portrait Display: Streamlined mobile payment sheet with biometric verification",
          aspectRatio: "3/4"
        },
        {
          id: "pb-media-3",
          type: "video",
          orientation: "landscape",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          thumbnailUrl: "/projects/lumina-commerce/preview-thumbnail.png",
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
      title: "Zenith workspace",
      subtitle: "Collaborative developer workspace & canvas",
      category: "Full stack / dev tools",
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
          url: "/projects/zenith-workspace/workspace-canvas.png",
          thumbnailUrl: "/projects/zenith-workspace/workspace-canvas.png",
          alt: "Zenith Workspace Minimalist Split-Pane Markdown Canvas",
          caption:
            "Landscape View: Minimalist code & markdown studio with peer-to-peer sync nodes",
          aspectRatio: "16/9"
        },
        {
          id: "pc-media-2",
          type: "image",
          orientation: "portrait",
          url: "/projects/zenith-workspace/mobile-studio.png",
          thumbnailUrl: "/projects/zenith-workspace/mobile-studio.png",
          alt: "Zenith Tactile Note Reader and Offline Editor",
          caption:
            "Portrait View: Compact typography view optimized for handheld reading",
          aspectRatio: "3/4"
        },
        {
          id: "pc-media-3",
          type: "video",
          orientation: "landscape",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          thumbnailUrl: "/projects/zenith-workspace/preview-thumbnail.png",
          alt: "Zenith Workspace Video Preview",
          caption:
            "Interactive Demo: Real-time peer-to-peer sync and split-pane markdown parsing",
          aspectRatio: "16/9"
        }
      ]
    }
  ]
};
