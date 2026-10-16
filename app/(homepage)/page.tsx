"use client";
import { ExperienceSection } from "@/components/ExperienceSection";
import { EducationSection } from "@/components/EducationSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { OverviewSection } from "@/components/OverviewSection";
import { ContactSection } from "@/components/ContactSection";
import { SkillsSection } from "@/components/SkillsSection";
import { AboutSection } from "@/components/AboutSection";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { useOffline } from "next/offline";

export default function Home() {
  const isOffline = useOffline();

  console.log({ isOffline });
  return (
    <div className="bg-background text-foreground selection:bg-primary selection:text-primary-foreground flex min-h-screen flex-col font-sans">
      {/* Sticky Editorial Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex w-full flex-1 flex-col">
        {/* Hero / Cover Spread */}
        <HeroSection />

        {/* 00: Overview & Table of Contents */}
        <OverviewSection />

        {/* 01: About Me & Personal Media Gallery */}
        <AboutSection />

        {/* 02: Technical Skills (3 Pillars) */}
        <SkillsSection />

        {/* 03: Experience & Career Chronicles */}
        <ExperienceSection />

        {/* 04: Featured Projects Showcase (Portrait & Landscape Media) */}
        <PortfolioSection />

        {/* 05: Education & Academic Orbit */}
        <EducationSection />

        {/* 06: Contact, Socials & Interactive Dispatch Form */}
        <ContactSection />
      </main>
    </div>
  );
}
