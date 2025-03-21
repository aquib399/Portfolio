import { Rye, Outfit, Paytone_One, Bangers } from "next/font/google";
import NoisyBackground from "@/components/noisy-background";
import NameOverlay from "@/components/name-overlay";
import AnimatedCursor from "@/components/cursor";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import ReactLenis from "lenis/react";
import { cn } from "@/lib/utils";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Aquib Alam",
  description: "Aquib Alam's personal portfolio",
  openGraph: {
    type: "profile",
    firstName: "Aquib",
    lastName: "Alam",
    username: "aquib399",
    gender: "male",
    countryName: "India",
    emails: ["aquibalam399@gmail.com", "aquibalamk99@gmail.com"],
  },
};

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
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          defaultTheme="system"
          attribute="class"
        >
          <NameOverlay />
          <ReactLenis root options={{ lerp: 0.05 }}>
            <div className="border-foreground min-h-screen border-[1vw]">
              {children}
            </div>
          </ReactLenis>
          <AnimatedCursor />
          <NoisyBackground />
        </ThemeProvider>
      </body>
    </html>
  );
}
