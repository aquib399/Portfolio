import { Bebas_Neue, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/providers/theme";
import { portfolio } from "@/data/portfolio";
import { GOOGLE_SITE_VERIFICATION, SITE_URL } from "@/lib/constant";
import type { Metadata } from "next";
import "./globals.css";

const sans = Bebas_Neue({
  weight: "400",
  variable: "--font-sans",
  subsets: ["latin"]
});

const mono = Syne({
  weight: ["700", "800"],
  variable: "--font-mono",
  subsets: ["latin"]
});

const personal = portfolio.personal;
const siteUrl = SITE_URL;
const siteTitle = `${personal.name.toUpperCase()} — ${personal.role} & ${personal.subRole}`;

const buildJsonLdSchemas = () => {
  const baseSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: personal.name,
      url: siteUrl,
      jobTitle: personal.role,
      description: personal.shortBio,
      email: personal.email,
      image: `${siteUrl}/me/1.png`,
      homeLocation: {
        "@type": "Place",
        name: personal.location
      },
      sameAs: portfolio.social.map((social) => social.url),
      knowsAbout: [
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Go",
        "Full-stack Development",
        "Web Development",
        "API Design",
        "Database Design"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: `${personal.name} — Portfolio`,
      url: siteUrl,
      description: personal.shortBio,
      logo: `${siteUrl}/android-chrome-512x512.png`,
      image: `${siteUrl}/me/1.png`,
      sameAs: portfolio.social.map((social) => social.url),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Professional Inquiry",
        email: personal.email,
        availableLanguage: "English"
      },
      areaServed: "IN"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: `${personal.name} Portfolio`,
      url: siteUrl,
      description: personal.shortBio,
      author: {
        "@type": "Person",
        name: personal.name
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}?q={search_term_string}`
        },
        query: "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Portfolio",
          item: siteUrl
        }
      ]
    }
  ];

  const projectSchemas = portfolio.project.map((proj) => ({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: proj.title,
    description: proj.description,
    url: proj.liveUrl || siteUrl,
    image: proj.media?.[0]?.url,
    author: {
      "@type": "Person",
      name: personal.name
    },
    sourceOrganization: {
      "@type": "Organization",
      name: `${personal.name} — Portfolio`
    },
    downloadUrl: proj.githubUrl,
    applicationCategory: "Productivity",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  }));

  return JSON.stringify([...baseSchemas, ...projectSchemas]);
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: personal.shortBio,
  applicationName: `${personal.name} Portfolio`,
  category: "technology",
  classification: "Software engineering portfolio",
  keywords: [
    personal.name,
    personal.role,
    personal.locationCode,
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Portfolio"
  ],
  verification: {
    google: GOOGLE_SITE_VERIFICATION,
    me: portfolio.social[0].url
  },
  authors: [{ name: personal.name }],
  creator: personal.name,
  publisher: personal.name,
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false
  }
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f3efe7",
  colorScheme: "light dark"
});

export const generateStaticParams = () => [];

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${mono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Resource hints */}
        <link rel="preconnect" href="https://github.com" />
        <link rel="preconnect" href="https://linkedin.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />
      </head>
      <Analytics />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: buildJsonLdSchemas()
          }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
