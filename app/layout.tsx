import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aquibalam.tech"),
  title: "AQUIB ALAM — Full Stack Developer & Creative Engineer",
  description:
    "Portfolio of Aquib Alam: Kolkata-based Full Stack Developer specializing in clean architectures, high-throughput systems, and tactile digital experiences.",
  keywords: [
    "Aquib Alam",
    "Full Stack Developer",
    "Kolkata",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Portfolio"
  ],
  authors: [{ name: "Aquib Alam" }],
  openGraph: {
    title: "AQUIB ALAM — Full Stack Developer & Creative Engineer",
    description:
      "Kolkata-based Full Stack Developer obsessed with clean code, resilient architectures, and tactile user experiences.",
    url: "https://aquibalam.tech",
    siteName: "Aquib Alam Portfolio",
    images: [
      {
        url: "/site/01-overview-moodboard.jpg",
        width: 1400,
        height: 875,
        alt: "Aquib Alam — Creative Portfolio Overview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AQUIB ALAM — Full Stack Developer",
    description:
      "Kolkata-based Full Stack Developer. Clean code, resilient architectures, and tactile digital craftsmanship.",
    images: ["/site/01-overview-moodboard.jpg"]
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#F4EFEA] text-[#111111] selection:bg-[#E53826] selection:text-white">
        {children}
      </body>
    </html>
  );
}
