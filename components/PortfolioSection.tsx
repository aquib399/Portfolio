"use client";

import { IconExternalLink, IconGitHub, IconPlay } from "./Icons";
import { portfolio } from "../data/portfolio";
import { useEffect, useState } from "react";
import { SpineTab } from "./SpineTab";
import { cn } from "@/lib/utils";
import Image from "next/image";

const data = portfolio.project;

export function PortfolioSection() {
  const [activeProjectId, setActiveProjectId] = useState<string>(data[0].id);

  const activeProject = data.find((project) => project.id === activeProjectId)!;

  const [activeMediaId, setActiveMediaId] = useState<string>(
    activeProject?.media[0].id
  );

  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);

    const target = data.find((project) => project.id === projectId);

    if (target?.media.length) {
      setActiveMediaId(target.media[0].id);
    }
  };

  // Arrow-key project switching
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;

      const i = data.findIndex((p) => p.id === activeProjectId);

      if (i === -1) return;

      const next =
        e.key === "ArrowRight"
          ? (i + 1) % data.length
          : (i - 1 + data.length) % data.length;

      handleSelectProject(data[next].id);
    };

    window.addEventListener("keydown", onKey);

    return () => window.removeEventListener("keydown", onKey);
  }, [activeProjectId]);

  if (!activeProject) return null;

  const activeMedia =
    activeProject.media.find((m) => m.id === activeMediaId) ??
    activeProject.media[0];

  return (
    <section
      id="portfolio"
      className="border-border bg-primary w-full border-b-2 px-4 py-10 transition-colors sm:px-6 sm:py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card text-card-foreground flex border-3 shadow-[4px_4px_0px_0px_var(--border)] transition-colors sm:shadow-[8px_8px_0px_0px_var(--border)]">
          {/* Vertical Spine Tab */}
          <SpineTab label="PORTFOLIO" theme="background" side="left" />

          {/* Main Portfolio Body */}
          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden">
            {/* Background Graphic */}
            <div className="halftone-dots text-card-foreground pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10">
              {/* Section Header */}
              <div className="border-border mb-0 flex flex-col justify-between gap-3 border-b-2 px-4 py-4 sm:flex-row sm:items-baseline sm:px-10 sm:py-6 md:px-14">
                <div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    SELECTED WORK // CASE STUDIES
                  </span>

                  <h2 className="text-card-foreground font-display-wide mt-1 text-2xl leading-none tracking-tight sm:text-5xl">
                    Portfolio & Projects
                  </h2>
                </div>

                <div className="text-muted-foreground font-mono text-[10px] font-bold tracking-widest uppercase">
                  {data.length} case studies
                  <span className="hidden sm:inline"> • ← → to switch</span>
                </div>
              </div>

              {/* Two-pane shell: rail + detail */}
              <div className="flex flex-col lg:min-h-156 lg:flex-row">
                {/* ── RAIL ───────────────────────────────── */}
                <div className="border-border bg-card flex shrink-0 gap-0 overflow-x-auto border-b-3 lg:w-60 lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:border-r-3 lg:border-b-0">
                  {data.map((project) => {
                    const isActive = project.id === activeProjectId;

                    const thumb =
                      project.media.find(
                        (m) => m.orientation === "landscape"
                      ) ?? project.media[0];

                    return (
                      <button
                        key={project.id}
                        type="button"
                        onClick={() => handleSelectProject(project.id)}
                        className={cn(
                          "group border-border relative flex w-36 shrink-0 cursor-pointer flex-col items-stretch border-r-2 text-left transition-all sm:w-44 lg:w-full lg:border-r-0 lg:border-b-2",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : "bg-card text-card-foreground hover:bg-muted"
                        )}
                      >
                        {/* Thumbnail */}
                        <div className="relative h-16 w-full overflow-hidden bg-black sm:h-20">
                          {thumb &&
                            (thumb.type === "video" ? (
                              <video
                                src={thumb.url}
                                poster={thumb.thumbnailUrl}
                                muted
                                playsInline
                                autoPlay
                                loop
                                className={cn(
                                  "aspect-video h-full w-full object-cover",
                                  isActive
                                    ? "brightness-110"
                                    : "brightness-60 group-hover:brightness-90"
                                )}
                              />
                            ) : (
                              <Image
                                src={thumb.url}
                                alt={thumb.alt}
                                fill
                                sizes="240px"
                                className={cn(
                                  "aspect-video h-full w-full object-cover",
                                  isActive
                                    ? "brightness-110"
                                    : "brightness-60 group-hover:brightness-90"
                                )}
                              />
                            ))}

                          <span className="bg-primary text-primary-foreground absolute top-1 left-1 px-1.5 font-mono text-[10px] font-bold">
                            {project.letterBadge}
                          </span>
                        </div>

                        {/* Label */}
                        <div className="flex items-center justify-between gap-2 px-3 py-2">
                          <div className="min-w-0">
                            <span className="block truncate font-mono text-[9px] font-bold tracking-widest uppercase opacity-75">
                              {project.category}
                            </span>

                            <span className="font-display-condensed block truncate text-base leading-tight tracking-wide">
                              {project.title}
                            </span>
                          </div>

                          {isActive && (
                            <span className="shrink-0 font-bold">→</span>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* ── DETAIL ─────────────────────────────── */}
                <div className="bg-card text-card-foreground flex min-h-0 flex-1 flex-col">
                  {/* Title bar + actions */}
                  <div className="border-border flex shrink-0 flex-col justify-between gap-3 border-b-2 px-4 py-3 sm:flex-row sm:items-end sm:px-8 sm:py-4">
                    <div className="min-w-0">
                      <div className="text-primary mb-0.5 flex flex-wrap items-center gap-2 font-mono text-[10px] font-bold tracking-widest uppercase">
                        <span>
                          CASE STUDY{" "}
                          {activeProject.letterBadge.padStart(2, "0")}
                        </span>

                        <span>•</span>

                        <span>{activeProject.category}</span>

                        <span>•</span>

                        <span>{activeProject.year}</span>
                      </div>

                      <h3 className="font-display-wide truncate text-xl leading-none tracking-tight sm:text-3xl md:text-4xl">
                        {activeProject.title}
                      </h3>

                      {activeProject.subtitle && (
                        <p className="text-muted-foreground mt-1 truncate font-mono text-[11px] font-bold tracking-wider uppercase">
                          {activeProject.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="flex shrink-0 flex-wrap items-center gap-2">
                      {activeProject.liveUrl && (
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display-condensed border-border bg-primary text-primary-foreground hover:bg-foreground hover:text-background inline-flex items-center gap-2 border-2 px-3 py-1.5 text-sm tracking-wider shadow-[2px_2px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5"
                        >
                          <span>LIVE</span>
                          <IconExternalLink size={14} />
                        </a>
                      )}

                      {activeProject.githubUrl && (
                        <a
                          href={activeProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display-condensed border-border bg-card text-card-foreground hover:bg-muted inline-flex items-center gap-2 border-2 px-3 py-1.5 text-sm tracking-wider shadow-[2px_2px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5"
                        >
                          <IconGitHub size={14} />
                          <span>CODE</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body: media | narrative */}
                  <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 p-4 sm:gap-5 sm:p-8 lg:grid-cols-12">
                    {/* Media */}
                    <div className="flex min-h-0 flex-col gap-3 lg:col-span-7">
                      <div className="border-border relative flex min-h-52 flex-1 items-center justify-center overflow-hidden border-3 bg-black shadow-[4px_4px_0px_0px_var(--border)] sm:min-h-64">
                        {activeMedia.type === "video" ? (
                          <video
                            key={activeMedia.id}
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
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            className="object-contain"
                          />
                        )}

                        <div className="bg-primary text-primary-foreground absolute top-2 left-2 z-10 flex items-center gap-1 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                          {activeMedia.type === "video" && (
                            <IconPlay size={11} />
                          )}

                          <span>
                            {activeMedia.type.toUpperCase()} •{" "}
                            {activeMedia.orientation.toUpperCase()}
                          </span>
                        </div>

                        <span className="absolute right-0 bottom-0 left-0 z-10 truncate bg-black/70 px-2 py-1 font-mono text-[10px] text-white/90">
                          {activeMedia.caption}
                        </span>
                      </div>

                      {/* Thumbnail reel */}
                      <div className="flex shrink-0 gap-2 overflow-x-auto pb-1">
                        {activeProject.media.map((m, index) => {
                          const isSelected = m.id === activeMedia.id;

                          return (
                            <button
                              key={m.id}
                              type="button"
                              onClick={() => setActiveMediaId(m.id)}
                              className={cn(
                                "relative h-14 w-20 shrink-0 cursor-pointer overflow-hidden border-2 bg-black transition-all",
                                isSelected
                                  ? "border-primary shadow-[2px_2px_0px_0px_var(--border)]"
                                  : "border-border/40 hover:border-border opacity-70 hover:opacity-100"
                              )}
                              title={`#${index + 1} ${m.type}`}
                            >
                              <Image
                                src={m.thumbnailUrl ?? m.url}
                                alt={m.alt}
                                fill
                                sizes="80px"
                                className="object-cover"
                              />

                              {m.type === "video" && (
                                <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
                                  <IconPlay size={14} />
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Narrative */}
                    <div className="flex min-h-0 flex-col gap-4 overflow-y-auto pr-1 lg:col-span-5">
                      <div className="border-border bg-muted/30 border-2 p-4 shadow-[3px_3px_0px_0px_var(--border)]">
                        <span className="text-primary mb-1 block font-mono text-[10px] font-bold tracking-wider uppercase">
                          EXECUTIVE SUMMARY
                        </span>

                        <p className="font-mono text-xs leading-relaxed font-medium">
                          {activeProject.summary}
                        </p>
                      </div>

                      <p className="text-justify font-mono text-xs leading-relaxed">
                        {activeProject.description}
                      </p>

                      <div className="border-border border-t-2 pt-3">
                        <span className="text-primary mb-2 block font-mono text-[10px] font-bold tracking-wider uppercase">
                          CORE TECHNOLOGY STACK
                        </span>

                        <div className="flex flex-wrap gap-1.5">
                          {activeProject.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="border-border bg-foreground text-background border px-2 py-0.5 font-mono text-[11px] tracking-wide"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="border-border/20 text-muted-foreground flex flex-wrap gap-2 border-t pt-3 font-mono text-[10px] uppercase">
                        {activeProject.tags.map((tag) => (
                          <span key={tag} className="border-primary border-b">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
