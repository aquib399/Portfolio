"use client";

import { IconExternalLink, IconGitHub, IconPlay } from "./Icons";
import { PROJECTS } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import { useState } from "react";
import Image from "next/image";

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
      className="w-full border-b-2 border-[#111111] bg-[#E53826] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Master Portfolio Box */}
        <div className="border-3 border-[#111111] bg-[#F4EFEA] shadow-[8px_8px_0px_0px_#111111]">
          {/* Top Banner: PORTFOLIO Wide Title */}
          <div className="border-b-3 border-[#111111] bg-[#E53826] p-4 text-center sm:p-6">
            <h2 className="text-4xl leading-none tracking-tighter text-white sm:text-6xl md:text-8xl">
              PORTFOLIO
            </h2>
            <p className="mt-1 font-mono text-xs tracking-widest text-[#F4EFEA]/80 uppercase">
              CURATED PRODUCTION SYSTEMS & VISUAL CASE STUDIES
            </p>
          </div>

          {/* Master Horizontal Project Strips (Replicating Behance Project A, B, C Banner Layout) */}
          <div className="divide-y-2 divide-[#111111] border-b-3 border-[#111111] bg-[#111111]">
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
                  className={`group relative flex w-full flex-col items-stretch overflow-hidden text-left transition-all md:flex-row ${
                    isActive
                      ? "ring-4 ring-[#E53826] ring-inset"
                      : "opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* Left Spine Tag on Banner */}
                  <div
                    className={`flex items-center justify-center border-b-2 border-[#111111] px-4 py-2 md:flex-col md:border-r-2 md:border-b-0 md:py-4 ${
                      isActive
                        ? "bg-[#E53826] text-white"
                        : "bg-[#F4EFEA] text-[#111111] group-hover:bg-[#E53826] group-hover:text-white"
                    } transition-colors select-none`}
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
                      className={`object-cover transition-transform duration-700 ${
                        isActive
                          ? "scale-105 brightness-105 filter"
                          : "brightness-75 filter group-hover:scale-105 group-hover:brightness-95"
                      }`}
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />

                    {/* Gradient & Typographic Overlay */}
                    <div className="absolute inset-0 flex items-center justify-between bg-linear-to-r from-black/80 via-black/40 to-transparent px-6">
                      <div>
                        <span className="font-mono text-[10px] font-bold tracking-widest text-[#E53826] uppercase">
                          {proj.category}
                        </span>
                        <h3 className="text-lg text-white drop-shadow-md sm:text-2xl md:text-3xl">
                          {proj.title}
                        </h3>
                      </div>

                      <div className="hidden items-center gap-2 border border-white/30 bg-[#111111]/80 px-3 py-1 font-mono text-xs text-white sm:flex">
                        <span>{isActive ? "SELECTED" : "VIEW PROJECT"}</span>
                        <span className="text-[#E53826]">→</span>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Project Showcase Container */}
          <div className="flex bg-[#F4EFEA]">
            <SpineTab
              label={`PROJECT ${activeProject.letterBadge}`}
              theme="red"
              side="left"
            />

            {/* Project Details Body */}
            <div className="relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
              {/* Project Headline & Actions */}
              <div className="mb-8 flex flex-col justify-between gap-4 border-b-2 border-[#111111] pb-6 lg:flex-row lg:items-end">
                <div>
                  <div className="mb-1 flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#E53826] uppercase">
                    <span>CASE STUDY 0{activeProject.letterBadge}</span>
                    <span>•</span>
                    <span>{activeProject.category}</span>
                    <span>•</span>
                    <span>{activeProject.year}</span>
                  </div>
                  <h3 className="text-3xl leading-none tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
                    {activeProject.title}
                  </h3>
                  {activeProject.subtitle && (
                    <p className="mt-1.5 font-mono text-xs font-bold tracking-wider text-[#78716c] uppercase sm:text-sm">
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
                      className="font-display-condensed inline-flex items-center gap-2 border-2 border-[#111111] bg-[#E53826] px-4 py-2.5 text-base tracking-wider text-white shadow-[2px_2px_0px_0px_#111111] transition-colors hover:bg-[#111111]"
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
                      className="font-display-condensed inline-flex items-center gap-2 border-2 border-[#111111] bg-white px-4 py-2.5 text-base tracking-wider text-[#111111] shadow-[2px_2px_0px_0px_#111111] transition-colors hover:bg-[#F4EFEA]"
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
                  <div className="relative border-3 border-[#111111] bg-[#111111] p-2 shadow-[6px_6px_0px_0px_#111111]">
                    {/* Media Display Component */}
                    <div
                      className={`relative flex w-full items-center justify-center overflow-hidden bg-black ${
                        activeMedia.orientation === "portrait"
                          ? "h-115 sm:h-130"
                          : "h-80 sm:h-100"
                      } transition-all duration-300`}
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
                      <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-[#E53826] px-2 py-0.5 font-mono text-[10px] tracking-wider text-white uppercase">
                        {activeMedia.type === "video" && <IconPlay size={12} />}
                        <span>
                          {activeMedia.type.toUpperCase()} •{" "}
                          {activeMedia.orientation.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Media Caption */}
                    <div className="flex flex-col justify-between gap-1 px-1 pt-2 font-mono text-[11px] text-[#111111] sm:flex-row sm:items-center">
                      <span className="font-semibold text-white/90">
                        {activeMedia.caption}
                      </span>
                      <span className="font-bold tracking-wider text-[#E53826] uppercase">
                        MEDIA SPEC: {activeMedia.orientation} [
                        {activeMedia.aspectRatio || "AUTO"}]
                      </span>
                    </div>
                  </div>

                  {/* Media Switcher Buttons (Portrait, Landscape, Video) */}
                  <div className="pt-2">
                    <span className="mb-2 block font-mono text-[10px] font-bold tracking-wider text-[#78716c] uppercase">
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
                            className={`flex items-center justify-between border-2 p-2 text-left font-mono text-xs transition-all ${
                              isSelected
                                ? "border-[#111111] bg-[#E53826] text-white shadow-[2px_2px_0px_0px_#111111]"
                                : "border-[#111111]/40 bg-white text-[#111111] hover:border-[#111111]"
                            }`}
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
                  <div className="border-2 border-[#111111] bg-white p-4 shadow-[3px_3px_0px_0px_#111111] sm:p-5">
                    <span className="mb-1 block font-mono text-[10px] font-bold tracking-wider text-[#E53826] uppercase">
                      EXECUTIVE SUMMARY
                    </span>
                    <p className="font-mono text-xs leading-relaxed font-medium text-[#111111] sm:text-sm">
                      {activeProject.summary}
                    </p>
                  </div>

                  {/* Detailed Description */}
                  <div className="space-y-3 font-mono text-xs leading-relaxed text-[#111111] sm:text-sm">
                    <p className="text-justify">{activeProject.description}</p>
                  </div>

                  {/* Architecture & Tech Stack */}
                  <div className="border-t-2 border-[#111111] pt-4">
                    <span className="mb-2 block font-mono text-[11px] font-bold tracking-wider text-[#E53826] uppercase">
                      CORE TECHNOLOGY STACK
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="border border-[#111111] bg-[#111111] px-2.5 py-1 font-mono text-xs tracking-wide text-[#F4EFEA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 border-t border-[#111111]/20 pt-3 font-mono text-[10px] text-[#78716c] uppercase">
                    {activeProject.tags.map((tag) => (
                      <span key={tag} className="border-b border-[#E53826]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Decorative Bar */}
              <div className="flex flex-col items-center justify-between gap-2 border-t-2 border-[#111111] pt-6 font-mono text-xs text-[#78716c] uppercase sm:flex-row">
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
