import NoisyBackground from "@/components/noisy-background";
import NameOverlay from "@/components/name-overlay";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/footer";
import type { Metadata } from "next";
import "@/app/globals.css";

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

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ThemeProvider
        enableSystem
        disableTransitionOnChange
        defaultTheme="system"
        attribute="class"
      >
        <NameOverlay />
        <div className="border-foreground flex min-h-screen flex-col justify-between border-[1vw]">
          {children}
          <Footer />
        </div>

        <NoisyBackground />
      </ThemeProvider>
    </>
  );
}
