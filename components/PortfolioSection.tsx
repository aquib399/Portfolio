"use client";

import { IconExternalLink, IconGitHub, IconPlay } from "./Icons";
import { PROJECTS } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function PortfolioSection() {
  const [activeProjectId, setActiveProjectId] = useState<string>(
    PROJECTS[0].id
  );
  const activeProject =
    PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  // Active media within current project
  const [activeMediaId, setActiveMediaId] = useState<string>(
    activeProject.media[0]?.id || ""
  );

  // When project changes, set first media as active
  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);
    const target = PROJECTS.find((p) => p.id === projectId);
    if (target && target.media.length > 0) {
      setActiveMediaId(target.media[0].id);
    }
  };

  const activeMedia =
    activeProject.media.find((m) => m.id === activeMediaId) ||
    activeProject.media[0];

  return (
    <section
      id="portfolio"
      className="border-border bg-primary w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Master Portfolio Box */}
        <div className="border-border bg-card text-card-foreground border-3 shadow-[8px_8px_0px_0px_var(--border)] transition-colors">
          {/* Top Banner: PORTFOLIO Wide Title */}
          <div className="border-border bg-primary text-primary-foreground border-b-3 p-4 text-center sm:p-6">
            <h2 className="font-display-wide text-4xl leading-none tracking-tighter sm:text-6xl md:text-8xl">
              PORTFOLIO
            </h2>
            <p className="mt-1 font-mono text-xs font-bold tracking-widest uppercase opacity-90">
              CURATED PRODUCTION SYSTEMS & VISUAL CASE STUDIES
            </p>
          </div>

          {/* Master Horizontal Project Strips (Replicating Behance Project A, B, C Banner Layout) */}
          <div className="divide-border border-border bg-card divide-y-2 border-b-3">
            {PROJECTS.map((proj) => {
              const isActive = proj.id === activeProjectId;
              const bannerImages: Record<string, string> = {
                "project-a":
                  "/site/04-showcase-grid-about-skills-portfolio-project-a.png",
                "project-b": "/site/06-project-b-surreal-eye.png",
                "project-c": "/site/07-project-c-woodcut-textures.png"
              };
              const bannerImg =
                bannerImages[proj.id] || "/site/01-overview-moodboard.jpg";

              return (
                <button
                  key={proj.id}
                  type="button"
                  onClick={() => handleSelectProject(proj.id)}
                  className={cn(
                    "group relative flex w-full cursor-pointer flex-col items-stretch overflow-hidden text-left transition-all md:flex-row",
                    isActive
                      ? "ring-primary ring-4 ring-inset"
                      : "opacity-85 hover:opacity-100"
                  )}
                >
                  {/* Left Spine Tag on Banner */}
                  <div
                    className={cn(
                      "border-border flex items-center justify-center border-b-2 px-4 py-2 transition-colors select-none md:flex-col md:border-r-2 md:border-b-0 md:py-4",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-card text-card-foreground group-hover:bg-primary group-hover:text-primary-foreground"
                    )}
                  >
                    <span className="font-display-condensed text-xl font-bold tracking-widest whitespace-nowrap md:text-2xl">
                      PROJECT {proj.letterBadge}
                    </span>
                  </div>

                  {/* Banner Image Preview Strip */}
                  <div className="relative h-24 flex-1 overflow-hidden bg-black sm:h-28 md:h-32">
                    <Image
                      src={bannerImg}
                      alt={proj.title}
                      fill
                      className={cn(
                        "object-cover transition-transform duration-700",
                        isActive
                          ? "scale-105 brightness-105 filter"
                          : "brightness-75 filter group-hover:scale-105 group-hover:brightness-95"
                      )}
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />

                    {/* Gradient & Typographic Overlay */}
                    <div className="absolute inset-0 flex items-center justify-between bg-gradient-to-r from-black/85 via-black/40 to-transparent px-6">
                      <div>
                        <span className="text-primary font-mono text-[10px] font-bold tracking-widest uppercase">
                          {proj.category}
                        </span>
                        <h3 className="font-display-wide text-lg text-white drop-shadow-md sm:text-2xl md:text-3xl">
                          {proj.title}
                        </h3>
                      </div>

                      <div className="hidden items-center gap-2 border border-white/30 bg-black/80 px-3 py-1 font-mono text-xs text-white sm:flex">
                        <span>{isActive ? "SELECTED" : "VIEW PROJECT"}</span>
                        <span className="text-primary font-bold">→</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Project Showcase Container */}
          <div className="bg-card text-card-foreground flex">
            <SpineTab
              label={`PROJECT ${activeProject.letterBadge}`}
              theme="red"
              side="left"
            />

            {/* Project Details Body */}
            <div className="relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
              {/* Project Headline & Actions */}
              <div className="border-border mb-8 flex flex-col justify-between gap-4 border-b-2 pb-6 lg:flex-row lg:items-end">
                <div>
                  <div className="text-primary mb-1 flex items-center gap-2 font-mono text-xs font-bold tracking-widest uppercase">
                    <span>CASE STUDY 0{activeProject.letterBadge}</span>
                    <span>•</span>
                    <span>{activeProject.category}</span>
                    <span>•</span>
                    <span>{activeProject.year}</span>
                  </div>
                  <h3 className="text-card-foreground font-display-wide text-3xl leading-none tracking-tight sm:text-5xl md:text-6xl">
                    {activeProject.title}
                  </h3>
                  {activeProject.subtitle && (
                    <p className="text-muted-foreground mt-1.5 font-mono text-xs font-bold tracking-wider uppercase sm:text-sm">
                      {activeProject.subtitle}
                    </p>
                  )}
                </div>

                {/* External Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 self-start lg:self-auto">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display-condensed border-border bg-primary text-primary-foreground hover:bg-foreground hover:text-background inline-flex items-center gap-2 border-2 px-4 py-2.5 text-base tracking-wider shadow-[2px_2px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <span>LIVE DEMO</span>
                      <IconExternalLink size={16} />
                    </a>
                  )}

                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-display-condensed border-border bg-card text-card-foreground hover:bg-muted inline-flex items-center gap-2 border-2 px-4 py-2.5 text-base tracking-wider shadow-[2px_2px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5"
                    >
                      <IconGitHub size={16} />
                      <span>SOURCE CODE</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Grid: Media Frame (Supports Image & Video, Portrait & Landscape) + Narrative */}
              <div className="mb-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
                {/* Media Showcase (7 Columns) */}
                <div className="flex flex-col space-y-4 lg:col-span-7">
                  {/* Media Viewport Container */}
                  <div className="border-border relative border-3 bg-black p-2 shadow-[6px_6px_0px_0px_var(--border)]">
                    {/* Media Display Component */}
                    <div
                      className={cn(
                        "relative flex w-full items-center justify-center overflow-hidden bg-black transition-all duration-300",
                        activeMedia.orientation === "portrait"
                          ? "h-115 sm:h-130"
                          : "h-80 sm:h-100"
                      )}
                    >
                      {activeMedia.type === "video" ? (
                        <video
                          src={activeMedia.url}
                          poster={activeMedia.thumbnailUrl}
                          controls
                          playsInline
                          className="h-full w-full object-contain"
                        />
                      ) : (
                        <Image
                          src={activeMedia.url}
                          alt={activeMedia.alt}
                          fill
                          className="object-contain contrast-105 filter sm:object-cover"
                          sizes="(max-width: 1024px) 100vw, 60vw"
                        />
                      )}

                      {/* Orientation & Type Badge */}
                      <div className="bg-primary text-primary-foreground absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                        {activeMedia.type === "video" && <IconPlay size={12} />}
                        <span>
                          {activeMedia.type.toUpperCase()} •{" "}
                          {activeMedia.orientation.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Media Caption */}
                    <div className="flex flex-col justify-between gap-1 px-1 pt-2 font-mono text-[11px] sm:flex-row sm:items-center">
                      <span className="font-semibold text-white/90">
                        {activeMedia.caption}
                      </span>
                      <span className="text-primary font-bold tracking-wider uppercase">
                        MEDIA SPEC: {activeMedia.orientation} [
                        {activeMedia.aspectRatio || "AUTO"}]
                      </span>
                    </div>
                  </div>

                  {/* Media Switcher Buttons (Portrait, Landscape, Video) */}
                  <div className="pt-2">
                    <span className="text-muted-foreground mb-2 block font-mono text-[10px] font-bold tracking-wider uppercase">
                      PROJECT MEDIA REEL ({activeProject.media.length} ASSETS):
                    </span>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                      {activeProject.media.map((mediaItem, mIdx) => {
                        const isSelected = mediaItem.id === activeMedia.id;
                        return (
                          <button
                            key={mediaItem.id}
                            type="button"
                            onClick={() => setActiveMediaId(mediaItem.id)}
                            className={cn(
                              "flex cursor-pointer items-center justify-between border-2 p-2 text-left font-mono text-xs transition-all",
                              isSelected
                                ? "border-border bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_var(--border)]"
                                : "border-border/40 bg-card text-card-foreground hover:border-border"
                            )}
                          >
                            <div className="truncate">
                              <span className="block font-bold">
                                #{mIdx + 1} {mediaItem.type.toUpperCase()}
                              </span>
                              <span className="text-[10px] uppercase opacity-80">
                                {mediaItem.orientation}
                              </span>
                            </div>
                            {mediaItem.type === "video" && (
                              <IconPlay size={14} />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Narrative & Technical Deep Dive (5 Columns) */}
                <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
                  {/* Summary Callout */}
                  <div className="border-border bg-muted/30 border-2 p-4 shadow-[3px_3px_0px_0px_var(--border)] sm:p-5">
                    <span className="text-primary mb-1 block font-mono text-[10px] font-bold tracking-wider uppercase">
                      EXECUTIVE SUMMARY
                    </span>
                    <p className="text-card-foreground font-mono text-xs leading-relaxed font-medium sm:text-sm">
                      {activeProject.summary}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <div className="text-card-foreground space-y-3 font-mono text-xs leading-relaxed sm:text-sm">
                    <p className="text-justify">{activeProject.description}</p>
                  </div>

                  {/* Architecture & Tech Stack */}
                  <div className="border-border border-t-2 pt-4">
                    <span className="text-primary mb-2 block font-mono text-[11px] font-bold tracking-wider uppercase">
                      CORE TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="border-border bg-foreground text-background border px-2.5 py-1 font-mono text-xs tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="border-border/20 text-muted-foreground flex flex-wrap gap-2 border-t pt-3 font-mono text-[10px] uppercase">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="border-primary border-b">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="border-border text-muted-foreground flex flex-col items-center justify-between gap-2 border-t-2 pt-6 font-mono text-xs uppercase sm:flex-row">
                <span>PROJECT INTERFACE: STRICT TYPESCRIPT SPEC</span>
                <span>
                  ASPECT PRESERVATION: PORTRAIT & LANDSCAPE DUAL PIPELINE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
