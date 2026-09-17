import { Portfolio } from "@/types/portfolio";

export const portfolio: Portfolio = {
  // export const portfolio = {
  personal: {
    name: "Aquib Alam",
    firstName: "Aquib",
    lastName: "Alam",
    role: "Software Engineer",
    subRole: "Full-Stack Developer",
    location: "Kolkata, India",
    locationCode: "Kolkata",
    status: "Available for full-time roles & engineering opportunities",
    email: "aquibalam399@gmail.com",
    shortBio:
      "Full-stack software engineer based in Kolkata. I build web applications, distributed backend services, and developer tooling using TypeScript, Go, Python, and React/Next.js. Focused on clean architecture, reliable APIs, and solid UX.",
    detailedBio: [
      "I am a full-stack engineer who enjoys building things end to end, from backend systems to thoughtful interfaces in Next.js.",
      "My journey started with a diploma in Computer Science at BIT Mesra, followed by my B.Tech at Brainware University. Since then, I’ve worked with startups, remote teams, and independent projects, always learning by building."
    ],
    quote:
      "A candle doesn't become brighter by protecting its flame. Sometimes you have to burn a little to become a light.",
    metadataTags: [
      "[full stack engineer]",
      "[typescript & go]",
      "[react & next.js]",
      "[system architecture]"
    ],
    aboutHeading: "Background & Engineering Focus",
    pillars: [
      {
        title: "Backend & Systems",
        description:
          "Designing reliable REST and gRPC services, managing database schemas, and building event-driven pipelines in Node.js and Go.",
        icon: "code"
      },
      {
        title: "Frontend Craft",
        description:
          "Building responsive, accessible Next.js and React interfaces with clean component composition and fast load times.",
        icon: "sparkles"
      }
    ],
    heroBadge: "Full-Stack Developer • Kolkata, IN",
    overviewEdition: "Portfolio // 2026 Edition",
    experiencePhilosophy: {
      title: "How I Work",
      quote:
        "Keep architectures straightforward, keep dependencies lean, and build software that stays easy to debug when scale or requirements change."
    },
    contactPitch:
      "Looking to collaborate on a product, discuss a role, or talk systems engineering? Feel free to reach out.",
    contactMeta: {
      security: "Direct: aquibalam399@gmail.com",
      responseTime: "Response time: within 24 hours"
    },
    media: {
      portrait: [
        {
          id: "media-portrait-main",
          type: "image",
          orientation: "portrait",
          url: "/me/3.png",
          thumbnailUrl: "/me/3.png",
          aspectRatio: "9/16",
          caption: "Aquib Alam — Full Stack Engineer",
          alt: "Portrait of Aquib Alam"
        },
        {
          id: "media-portrait-b-w",
          type: "image",
          orientation: "portrait",
          url: "/me/3.png",
          thumbnailUrl: "/me/3.png",
          aspectRatio: "9/16",
          caption: "Aquib Alam — Contact Terminal",
          alt: "Portrait of Aquib Alam"
        }
      ],

      landscape: [
        {
          id: "media-landscape-cover",
          type: "image",
          orientation: "landscape",
          url: "/me/1.png",
          thumbnailUrl: "/me/1.png",
          aspectRatio: "3/2",
          caption: "Aquib Alam — Workspace",
          alt: "Aquib Alam sitting in front of architecture"
        },
        {
          id: "media-landscape-motifs",
          type: "image",
          orientation: "landscape",
          url: "/me/2.png",
          thumbnailUrl: "/me/2.png",
          aspectRatio: "3/2",
          caption: "Aquib Alam — Engineering & Design",
          alt: "Aquib Alam outdoors"
        },
        {
          id: "media-landscape-overview",
          type: "image",
          orientation: "landscape",
          url: "/overview/archive-booklet.png",
          thumbnailUrl: "/overview/archive-booklet.png",
          aspectRatio: "16/9",
          caption: "Directory & Project Index",
          alt: "Directory and sitemap overview"
        }
      ]
    }
  },

  social: [
    {
      id: "social-github",
      platform: "github",
      label: "GitHub",
      url: "https://github.com/aquib399",
      handle: "@aquib399"
    },
    {
      id: "social-linkedin",
      platform: "linkedin",
      label: "LinkedIn",
      url: "https://linkedin.com/in/aquib-alam",
      handle: "in/aquib-alam"
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
      label: "Portfolio",
      url: "https://aquibalam.tech",
      handle: "aquibalam.tech"
    },
    {
      id: "social-resume",
      platform: "resume",
      label: "Résumé",
      url: "/resume.pdf",
      handle: "Download CV"
    }
  ],

  skillCategory: [
    {
      id: "frontend",
      title: "Frontend Engineering",
      subtitle: "Interactive, accessible user interfaces",
      stackedTitle: ["Frontend"],
      media: {
        id: "skill-frontend-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/frontend.png",
        thumbnailUrl: "/skills/frontend.png",
        alt: "Frontend development with React, Next.js, and TypeScript",
        caption: "Component trees & UI architecture",
        aspectRatio: "16/9"
      },
      skills: [
        {
          name: "TypeScript",
          level: "Advanced",
          description: "Strict typing, generics, and type-safe API contracts"
        },
        {
          name: "React.js & Next.js",
          level: "Advanced",
          description: "App Router, Server Components, SSR, and Server Actions"
        },
        {
          name: "Tailwind CSS & shadcn/ui",
          level: "Advanced",
          description:
            "Responsive layouts, accessible primitives, and consistent styling"
        },
        {
          name: "TanStack Query & Redux",
          level: "Advanced",
          description:
            "Server-state caching, optimistic updates, and client state"
        },
        {
          name: "React Native",
          level: "Intermediate",
          description: "Cross-platform mobile interfaces and API integration"
        },
        {
          name: "HTML5, CSS3 & Web APIs",
          level: "Advanced",
          description:
            "Semantic layouts, responsive design, and Core Web Vitals tuning"
        }
      ]
    },

    {
      id: "backend",
      title: "Backend & Distributed Systems",
      subtitle: "APIs, microservices, and databases",
      stackedTitle: ["Backend"],
      media: {
        id: "skill-backend-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/backend.png",
        thumbnailUrl: "/skills/backend.png",
        alt: "Backend services, APIs, and data modeling",
        caption: "Services, databases & background jobs",
        aspectRatio: "16/9"
      },
      skills: [
        {
          name: "Node.js & Express",
          level: "Advanced",
          description:
            "RESTful APIs, middleware architecture, and async workflows"
        },
        {
          name: "Go & Django",
          level: "Intermediate",
          description:
            "Rule engines, gRPC communication, and core backend services"
        },
        {
          name: "PostgreSQL & MongoDB",
          level: "Advanced",
          description:
            "Relational data modeling, indexing, and document aggregation"
        },
        {
          name: "Redis",
          level: "Intermediate",
          description:
            "In-memory caching, rate-limiting, and pub/sub message queues"
        },
        {
          name: "gRPC, WebSockets & SSE",
          level: "Intermediate",
          description:
            "Protobuf-based RPCs, bi-directional events, and live feeds"
        },
        {
          name: "Prisma ORM",
          level: "Advanced",
          description:
            "Type-safe database queries, relation modeling, and migrations"
        }
      ]
    },

    {
      id: "devops",
      title: "DevOps & Developer Tooling",
      subtitle: "Infrastructure, CI/CD, and workflows",
      stackedTitle: ["DevOps"],
      media: {
        id: "skill-devops-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/devops.png",
        thumbnailUrl: "/skills/devops.png",
        alt: "DevOps pipelines, Docker containers, and cloud deployment",
        caption: "Containers, CI/CD & cloud services",
        aspectRatio: "16/9"
      },
      skills: [
        {
          name: "AWS (EC2, S3, Lambda)",
          level: "Intermediate",
          description:
            "Application hosting, cloud object storage, and serverless tasks"
        },
        {
          name: "Docker & Containers",
          level: "Intermediate",
          description:
            "Containerized environments, multi-stage builds, and Compose setups"
        },
        {
          name: "Git & GitHub Actions",
          level: "Advanced",
          description:
            "Automated test suites, CI/CD pipelines, and pull request hygiene"
        },
        {
          name: "tree-sitter & ASTs",
          level: "Intermediate",
          description:
            "Abstract Syntax Tree parsing and recursive call-graph analysis"
        },
        {
          name: "Languages (Python, C++, Java)",
          level: "Intermediate",
          description:
            "System fundamentals, algorithmic problem solving, and scripts"
        }
      ]
    }
  ],

  experience: [
    {
      id: "exp-digontom",
      company: "Digontom",
      role: "Full Stack Developer",
      period: "Jun 2026 – Sept 2026",
      location: "Kolkata (Hybrid)",
      type: "Part-time",
      badge: "Part-time",
      description:
        "Built full-stack AI agent and chatbot applications for client projects, translating business requirements into automated conversational workflows.",
      highlights: [
        "Built full-stack AI agent and chatbot workflows for client deployments, converting operational requirements into automated conversational logic.",
        "Integrated third-party APIs including WhatsApp Business API automation to extend agent capabilities and customer notification flows.",
        "Shipped end-to-end features across concurrent client implementations with clean, maintainable code."
      ],
      skillsUsed: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "AI Agents",
        "REST APIs",
        "WhatsApp Business API"
      ]
    },
    {
      id: "exp-controlshift",
      company: "ControlShift",
      role: "Full Stack Intern",
      period: "Jan 2026 – Aug 2026",
      location: "Dubai (Remote)",
      type: "Internship",
      badge: "Internship",
      description:
        "Worked with a 15-member cross-functional team delivering features and UI systems across client web and mobile applications.",
      highlights: [
        "Collaborated in a 15-member team shipping features for client web and mobile codebases using MVC architecture and reusable components.",
        "Maintained and improved existing codebases by applying SOLID principles and standardizing component patterns.",
        "Worked on technical SEO and performance improvements to help increase search visibility and organic lead generation on client platforms."
      ],
      skillsUsed: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "SEO"
      ]
    },
    {
      id: "exp-scrollify",
      company: "Scrollify",
      role: "Software Engineer Intern",
      period: "May 2025 – Jan 2026",
      location: "Delhi (On-site)",
      type: "Internship",
      badge: "Internship",
      description:
        "Contributed to core backend infrastructure, building a dynamic Rule Engine and orchestrating distributed workflow execution.",
      highlights: [
        "Architected and built core components of a configurable Rule Engine evaluating dynamic business logic, custom validation rules, conditional branching, and event outcomes at runtime.",
        "Collaborated on multi-step workflow orchestration using dependency injection and gRPC-based service communication, integrating third-party APIs and automated WhatsApp flows.",
        "Implemented core platform services in Go and Django, with the management and configuration interface built in Next.js on self-managed infrastructure."
      ],
      skillsUsed: [
        "Go",
        "Django",
        "Python",
        "gRPC",
        "Next.js",
        "PostgreSQL",
        "Docker"
      ]
    },
    {
      id: "exp-dxdeals",
      company: "DxDeals",
      role: "Freelance Full Stack Developer",
      period: "Apr 2024 – Jul 2024",
      location: "Dubai (Remote)",
      type: "Freelance",
      badge: "Freelance",
      description:
        "Delivered an international e-commerce platform end-to-end, handling frontend, payment integrations, and cloud infrastructure.",
      highlights: [
        "Built a responsive Next.js storefront using Tailwind CSS and shadcn/ui, backed by Node.js, Express, and MongoDB services hosted on AWS EC2.",
        "Integrated Stripe, Paymob, and Mastercard for multi-currency payments, Algolia Search for product discovery, and AWS S3 for media storage.",
        "Optimized site architecture and Google Merchant Center feeds, securing #1 product rankings across Google Merchant search results in the UAE and Middle East."
      ],
      skillsUsed: [
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS EC2",
        "Stripe",
        "Algolia",
        "Tailwind CSS"
      ]
    }
  ],

  education: [
    {
      id: "bwu-btech",
      institution: "Brainware University, Kolkata",
      degree: "B.Tech",
      field: "Computer Science & Engineering",
      period: "2023 — 2026",
      location: "Kolkata, India",
      badge: "GPA: 7.4 / 10",
      media: {
        id: "edu-btech-media",
        type: "image",
        orientation: "landscape",
        url: "/education/bwu.png",
        thumbnailUrl: "/education/bwu.png",
        alt: "Brainware University Computer Science & Engineering",
        caption: "B.Tech in Computer Science and Engineering",
        aspectRatio: "1/1"
      },
      achievements: [
        "B.Tech in Computer Science and Engineering (GPA: 7.4 / 10.0)",
        "1st Place - Internal SIH Hackathon",
        "Organized and led Texihition Tech Fest, coordinating 60 participating groups"
      ]
    },
    {
      id: "bit-diploma",
      institution: "Birla Institute of Technology, Mesra",
      degree: "Diploma",
      field: "Computer Science & Engineering",
      period: "2020 — 2023",
      location: "Ranchi, India",
      badge: "GPA: 9.01 / 10",
      media: {
        id: "edu-hs-media",
        type: "image",
        orientation: "landscape",
        url: "/education/bit.png",
        thumbnailUrl: "/education/bit.png",
        alt: "BIT Mesra Computer Science & Engineering Diploma",
        caption: "Diploma in Computer Science and Engineering",
        aspectRatio: "1/1"
      },
      achievements: [
        "Completed Diploma in Computer Science and Engineering with a 9.01 / 10.0 GPA",
        "Student Placement Coordinator for the Computer Science Department",
        "Tech fest coordinator"
      ]
    }
  ],

  project: [
    {
      id: "project-patchmycode",
      slug: "patchmycode",
      letterBadge: "A",
      title: "PatchMyCode",
      subtitle: "AI-Powered GitHub PR Review & Remediation Engine",
      category: "Developer Tools & Static Analysis",
      year: "2025",
      summary:
        "AST-based code analysis and automated PR remediation engine using tree-sitter across 12+ languages and targeted LLM context.",
      description:
        "Built to cut down noisy and hallucinated AI code reviews. PatchMyCode parses pull requests into ASTs using tree-sitter, traverses recursive call graphs to map transitive dependency blast radius, and gives LLMs accurate architectural context. Features an asynchronous event-driven GitHub App pipeline, inline PR reviews categorized by severity, and a 1-click remediation engine that commits fixes directly while preventing bot-triggered CI loops.",
      tags: [
        "TypeScript",
        "tree-sitter",
        "AST Analysis",
        "GitHub App",
        "LLMs",
        "Developer Tools"
      ],
      techStack: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "tree-sitter",
        "GitHub REST API"
      ],
      liveUrl: "https://github.com/aquib399",
      githubUrl: "https://github.com/aquib399",
      featured: true,
      media: [
        {
          id: "pa-media-1",
          type: "image",
          orientation: "landscape",
          url: "/projects/zenith-workspace/workspace-canvas.png",
          thumbnailUrl: "/projects/zenith-workspace/workspace-canvas.png",
          alt: "PatchMyCode PR review management console and telemetry",
          caption:
            "Management console: repository onboarding, review policies, and PR backlog telemetry",
          aspectRatio: "16/9"
        },
        {
          id: "pa-media-2",
          type: "image",
          orientation: "portrait",
          url: "/projects/zenith-workspace/mobile-studio.png",
          thumbnailUrl: "/projects/zenith-workspace/mobile-studio.png",
          alt: "PatchMyCode AST call-graph inspect pane",
          caption:
            "Inspector pane: recursive call-graph blast radius and remediation preview",
          aspectRatio: "3/4"
        },
        {
          id: "pa-media-3",
          type: "video",
          orientation: "landscape",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          thumbnailUrl: "/projects/zenith-workspace/preview-thumbnail.png",
          alt: "PatchMyCode interactive workflow demo",
          caption:
            "End-to-end webhook processing, LLM review synthesis, and 1-click commit demo",
          aspectRatio: "16/9"
        }
      ]
    },

    {
      id: "project-dxdeals",
      slug: "dxdeals",
      letterBadge: "B",
      title: "DxDeals Storefront",
      subtitle: "Multi-Country E-Commerce Platform & Checkout Engine",
      category: "Full Stack / E-Commerce",
      year: "2024",
      summary:
        "Full-stack regional e-commerce platform built with Next.js, Node.js, and MongoDB with multi-gateway payments and instant search.",
      description:
        "Designed and built an international e-commerce platform serving customers in the UAE and Middle East. Integrated Algolia for instant product search, Stripe and Paymob for localized card and wallet checkout, and AWS S3 for media assets. Implemented technical SEO and Google Merchant feed optimizations that achieved #1 product rankings in Google Merchant results.",
      tags: ["E-Commerce", "Next.js", "MongoDB", "Stripe", "Paymob", "AWS EC2"],
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Node.js",
        "Express",
        "MongoDB",
        "AWS EC2",
        "Stripe",
        "Algolia"
      ],
      liveUrl: "https://github.com/aquib399",
      githubUrl: "https://github.com/aquib399",
      featured: true,
      media: [
        {
          id: "pb-media-1",
          type: "image",
          orientation: "landscape",
          url: "/projects/lumina-commerce/storefront-cover.png",
          thumbnailUrl: "/projects/lumina-commerce/storefront-cover.png",
          alt: "DxDeals Storefront catalog and product discovery",
          caption: "Storefront catalog and Algolia instant search interface",
          aspectRatio: "16/9"
        },
        {
          id: "pb-media-2",
          type: "image",
          orientation: "portrait",
          url: "/projects/lumina-commerce/mobile-checkout.png",
          thumbnailUrl: "/projects/lumina-commerce/mobile-checkout.png",
          alt: "DxDeals mobile checkout sheet with payment options",
          caption:
            "Mobile checkout flow supporting Stripe and regional payment gateways",
          aspectRatio: "3/4"
        },
        {
          id: "pb-media-3",
          type: "video",
          orientation: "landscape",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
          thumbnailUrl: "/projects/lumina-commerce/preview-thumbnail.png",
          alt: "DxDeals checkout workflow video",
          caption:
            "Walkthrough of cart, instant checkout, and payment confirmation",
          aspectRatio: "16/9"
        }
      ]
    },

    {
      id: "project-drift",
      slug: "drift",
      letterBadge: "C",
      title: "Drift",
      subtitle: "Full-Stack Social Platform with Real-Time Messaging",
      category: "Full Stack / Social & Real-Time",
      year: "2024",
      summary:
        "Modern social media web application using Next.js Server Actions, optimistic UI updates, Lucia authentication, and Stream Chat.",
      description:
        "A full-stack social media application built with a focus on responsiveness and low perceived latency. Utilizes Next.js Server Actions and server-side caching paired with optimistic UI updates for instant feedback on posts, likes, and replies. Features session-based authentication with Lucia, media uploads with UploadThing, real-time messaging via Stream Chat, and scheduled jobs with Vercel Cron.",
      tags: [
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "Stream Chat",
        "Lucia Auth",
        "Tailwind CSS"
      ],
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "Prisma",
        "PostgreSQL",
        "Stream Chat",
        "Lucia"
      ],
      liveUrl: "https://github.com/aquib399",
      githubUrl: "https://github.com/aquib399",
      featured: true,
      media: [
        {
          id: "pc-media-1",
          type: "image",
          orientation: "landscape",
          url: "/projects/hyperflow-engine/showcase-grid.png",
          thumbnailUrl: "/projects/hyperflow-engine/showcase-grid.png",
          alt: "Drift social feed and timeline",
          caption:
            "Feed view with optimistic post updates, reactions, and media embeds",
          aspectRatio: "16/9"
        },
        {
          id: "pc-media-2",
          type: "image",
          orientation: "portrait",
          url: "/projects/hyperflow-engine/mobile-stream.png",
          thumbnailUrl: "/projects/hyperflow-engine/mobile-stream.png",
          alt: "Drift mobile direct messaging chat",
          caption:
            "Real-time direct messaging interface powered by Stream Chat",
          aspectRatio: "3/4"
        },
        {
          id: "pc-media-3",
          type: "video",
          orientation: "landscape",
          url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          thumbnailUrl: "/projects/hyperflow-engine/preview-thumbnail.png",
          alt: "Drift interactive walkthrough",
          caption:
            "Live demonstration of authentication, media uploads, and real-time chat",
          aspectRatio: "16/9"
        }
      ]
    }
  ]
};
