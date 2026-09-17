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
      subtitle: "Web interfaces, mobile apps, and application state",
      stackedTitle: ["Frontend"],
      media: {
        id: "skill-frontend-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/frontend.png",
        thumbnailUrl: "/skills/frontend.png",
        alt: "Frontend development with React, Next.js, and TypeScript",
        caption: "Interfaces, components & application state",
        aspectRatio: "16/9"
      },
      skills: [
        {
          name: "TypeScript & JavaScript",
          level: "Advanced",
          description: "Writing application code"
        },
        {
          name: "React.js & Next.js",
          level: "Advanced",
          description: "Building web applications"
        },
        {
          name: "React Native",
          level: "Intermediate",
          description: "Building mobile applications"
        },
        {
          name: "Tailwind CSS & shadcn/ui",
          level: "Advanced",
          description: "Styling and building UI"
        },
        {
          name: "Redux & React Query",
          level: "Advanced",
          description: "Managing application state"
        },
        {
          name: "HTML & CSS",
          level: "Advanced",
          description: "Building web layouts"
        }
      ]
    },

    {
      id: "backend",
      title: "Backend & Systems",
      subtitle: "Services, databases, APIs, and application logic",
      stackedTitle: ["Backend"],
      media: {
        id: "skill-backend-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/backend.png",
        thumbnailUrl: "/skills/backend.png",
        alt: "Backend services, APIs, databases, and application systems",
        caption: "Services, APIs, databases & workflows",
        aspectRatio: "16/9"
      },
      skills: [
        {
          name: "Node.js & Express",
          level: "Advanced",
          description: "Building APIs and backend services"
        },
        {
          name: "Go & Django",
          level: "Intermediate",
          description: "Building backend services"
        },
        {
          name: "PostgreSQL & MongoDB",
          level: "Advanced",
          description: "Working with application data"
        },
        {
          name: "Redis & Prisma",
          level: "Intermediate",
          description: "Caching and database access"
        },
        {
          name: "gRPC, WebSockets & SSE",
          level: "Intermediate",
          description: "Connecting services and clients"
        },
        {
          name: "Python, C++ & Java",
          level: "Intermediate",
          description: "General programming"
        }
      ]
    },

    {
      id: "infrastructure",
      title: "Infrastructure & Tooling",
      subtitle: "Cloud, deployment, automation, and developer tools",
      stackedTitle: ["Infrastructure"],
      media: {
        id: "skill-infrastructure-media",
        type: "image",
        orientation: "landscape",
        url: "/skills/devops.png",
        thumbnailUrl: "/skills/devops.png",
        alt: "Cloud infrastructure, deployment, and developer tooling",
        caption: "Cloud, deployment & developer tooling",
        aspectRatio: "16/9"
      },
      skills: [
        {
          name: "AWS",
          level: "Intermediate",
          description: "EC2, S3, Lambda"
        },
        {
          name: "Docker",
          level: "Intermediate",
          description: "Running applications in containers"
        },
        {
          name: "Git & GitHub",
          level: "Advanced",
          description: "Managing code and repositories"
        },
        {
          name: "GitHub Actions",
          level: "Advanced",
          description: "Running CI/CD workflows"
        },
        {
          name: "tree-sitter & ASTs",
          level: "Intermediate",
          description: "Parsing and analyzing code"
        },
        {
          name: "GitHub App API",
          level: "Intermediate",
          description: "Working with GitHub repositories"
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
      id: "patchmycode",
      slug: "patchmycode",
      letterBadge: "A",
      title: "PatchMyCode",
      subtitle: "GitHub pull request review and fixes",
      category: "Developer Tooling",
      year: "2026",
      summary: "A GitHub app that reviews pull requests and can apply fixes.",
      description:
        "Built an AST-based code analysis engine with tree-sitter for 12+ languages. The GitHub app processes pull request webhooks, reviews code changes, posts inline findings, and can generate and commit fixes. Also built a Next.js console for repositories, review settings, and PRs.",
      tags: ["GitHub App", "Code Analysis", "Pull Requests"],
      techStack: [
        "TypeScript",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "tree-sitter",
        "AST",
        "GitHub App API",
        "LLMs"
      ],
      liveUrl: "https://patchmycode-frontend.vercel.app/",
      githubUrl: "https://github.com/aquib399/patchmycode",
      media: [
        {
          id: "patchmycode-1",
          type: "image",
          orientation: "landscape",
          url: "https://picsum.photos/seed/patchmycode-1/1600/900",
          thumbnailUrl: "https://picsum.photos/seed/patchmycode-1/800/450",
          alt: "PatchMyCode project preview",
          caption: "Pull request review",
          aspectRatio: "16/9"
        },
        {
          id: "patchmycode-2",
          type: "image",
          orientation: "landscape",
          url: "https://picsum.photos/seed/patchmycode-2/1600/900",
          thumbnailUrl: "https://picsum.photos/seed/patchmycode-2/800/450",
          alt: "PatchMyCode management console",
          caption: "Project dashboard",
          aspectRatio: "16/9"
        }
      ],
      featured: true
    },

    {
      id: "drift",
      slug: "drift",
      letterBadge: "B",
      title: "Drift",
      subtitle: "Social media application",
      category: "Web Application",
      year: "2026",
      summary: "A social media application with messaging and media uploads.",
      description:
        "Built a full-stack social media application with Next.js, Server Actions, caching, and optimistic UI updates. Added session-based authentication, media uploads, Stream Chat messaging, and CI/CD with GitHub Actions and Vercel Cron.",
      tags: ["Social Media", "Messaging", "Next.js"],
      techStack: [
        "Next.js",
        "Tailwind CSS",
        "shadcn/ui",
        "Prisma",
        "PostgreSQL",
        "Stream Chat"
      ],
      liveUrl: "https://drift-xyz.vercel.app/",
      githubUrl: "https://github.com/aquib399/social-media",
      media: [
        {
          id: "drift-1",
          type: "image",
          orientation: "landscape",
          url: "https://picsum.photos/seed/drift-1/1600/900",
          thumbnailUrl: "https://picsum.photos/seed/drift-1/800/450",
          alt: "Drift social media project preview",
          caption: "Social media application",
          aspectRatio: "16/9"
        },
        {
          id: "drift-2",
          type: "image",
          orientation: "landscape",
          url: "https://picsum.photos/seed/drift-2/1600/900",
          thumbnailUrl: "https://picsum.photos/seed/drift-2/800/450",
          alt: "Drift messaging interface",
          caption: "Messaging and media",
          aspectRatio: "16/9"
        }
      ],
      featured: false
    }
  ]
};
