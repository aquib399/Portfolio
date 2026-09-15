import { Bebas_Neue, Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import ThemeProvider from "@/providers/theme";
import { portfolio } from "@/data/portfolio";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://aquibalam.tech"),
  title: `${personal.name.toUpperCase()} — ${personal.role} & ${personal.subRole}`,
  description: personal.shortBio,
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
  authors: [{ name: personal.name }],
  openGraph: {
    title: `${personal.name.toUpperCase()} — ${personal.role} & ${personal.subRole}`,
    description: personal.shortBio,
    url: "https://aquibalam.tech",
    siteName: `${personal.name} Portfolio`,
    images: [
      {
        url: "/overview/og-cover.png",
        width: 1400,
        height: 875,
        alt: `${personal.name} — Creative Portfolio Overview`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name.toUpperCase()} — ${personal.role}`,
    description: personal.shortBio,
    images: ["/overview/og-cover.png"]
  }
};

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
      <Analytics />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
