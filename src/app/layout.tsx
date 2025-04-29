import { Rye, Outfit, Paytone_One, Bangers } from "next/font/google";
import AnimatedCursor from "@/components/cursor";
import { PROFILE_1 } from "@/lib/asset";
import type { Metadata } from "next";
import ReactLenis from "lenis/react";
import { cn } from "@/lib/utils";
import "@/app/globals.css";

const rye = Rye({
  variable: "--font-rye",
  subsets: ["latin"],
  weight: "400",
});

const outfit = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const paytoneOne = Paytone_One({
  variable: "--font-paytoneOne",
  subsets: ["latin"],
  weight: "400",
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "font-outfit relative antialiased",
          rye.variable,
          outfit.variable,
          bangers.variable,
          paytoneOne.variable,
        )}
      >
        <ReactLenis root options={{ lerp: 0.05 }}>
          {children}
        </ReactLenis>
        <AnimatedCursor />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Aquib Alam",
  description: "Aquib Alam's personal portfolio",
  abstract: "About Aquib Alam",
  applicationName: "Aquib Alam Portfolio",
  keywords: [
    "Aquib",
    "Aquib Alam",
    "Aquib Alam 399",
    "Aquib Alam Lohardaga",
    "Aquib Alam Kolkata",
    "Full Stack Developer",
    "Web Developer",
    "Developer",
  ],
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: PROFILE_1,
  },
  alternates: {
    canonical: "",
    languages: {
      "en-IN": "",
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Aquib",
    lastName: "Alam",
    username: "aquib399",
    gender: "male",
    countryName: "India",
    emails: ["aquibalam399@gmail.com", "aquibalamk99@gmail.com"],
    images: [
      {
        url: PROFILE_1,
        width: 800,
        height: 800,
      },
    ],
  },
};
