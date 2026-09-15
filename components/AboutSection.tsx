"use client";

import { IconMapPin, IconCode, IconSparkles } from "./Icons";
import { portfolio } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

const data = portfolio.personal;

const PERSONAL_MEDIA = [...data.media.landscape, ...data.media.portrait];

export function AboutSection() {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const currentMedia = PERSONAL_MEDIA[activeMediaIndex] ?? PERSONAL_MEDIA[0];

  return (
    <section
      id="about"
      className="border-border bg-background w-full border-b-2 px-4 py-16 transition-colors sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card text-card-foreground flex border-3 shadow-[8px_8px_0px_0px_var(--border)] transition-colors">
          {/* Vertical Spine Tab */}
          <SpineTab label="ABOUT ME" theme="primary" side="left" />

          {/* Main About Card Body */}
          <div className="relative flex-1 overflow-hidden p-6 sm:p-10 md:px-14">
            {/* Top Sub-Header */}
            <div className="border-border mb-8 flex flex-col justify-between gap-3 border-b-2 pb-6 sm:flex-row sm:items-center">
              <div>
                <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                  {data.aboutSectionTag ??
                    "SECTION 01 // PROFILE & ARCHITECTURAL PHILOSOPHY"}
                </span>

                <h2 className="text-card-foreground font-display-wide mt-1 text-3xl tracking-tight sm:text-5xl">
                  {data.aboutHeading ?? "THE ENGINEER BEHIND THE CRAFT"}
                </h2>
              </div>

              <div className="bg-foreground text-background border-border inline-flex items-center gap-2 self-start border px-3 py-1.5 font-mono text-xs tracking-wider uppercase sm:self-auto">
                <IconMapPin size={14} className="text-primary" />
                <span>{data.location}</span>
              </div>
            </div>

            {/* Split Content */}
            <div className="mb-12 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
              {/* Media Gallery */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div className="border-border bg-muted relative border-2 p-2 shadow-[4px_4px_0px_0px_var(--border)]">
                  <div
                    className={cn(
                      "border-border relative w-full overflow-hidden border bg-black transition-all duration-300",
                      currentMedia.orientation === "portrait"
                        ? "h-110 sm:h-120"
                        : "h-75 sm:h-85"
                    )}
                  >
                    <Image
                      src={currentMedia.url}
                      alt={currentMedia.alt}
                      fill
                      className="object-cover object-center contrast-105 filter"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />

                    <div className="bg-primary text-primary-foreground absolute top-2 left-2 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider uppercase">
                      {currentMedia.orientation} CAPTURE
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="text-card-foreground flex items-center justify-between px-1 pt-2 font-mono text-[11px]">
                    <span className="truncate font-bold uppercase">
                      {currentMedia.caption ?? currentMedia.alt}
                    </span>

                    <span className="text-muted-foreground uppercase">
                      [{activeMediaIndex + 1}/{PERSONAL_MEDIA.length}]
                    </span>
                  </div>
                </div>

                {/* Media Selector */}
                <div className="border-border/30 mt-4 border-t pt-3">
                  <span className="text-muted-foreground mb-2 block font-mono text-[10px] font-bold tracking-wider uppercase">
                    SELECT VISUAL ORIENTATION:
                  </span>

                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {PERSONAL_MEDIA.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveMediaIndex(idx)}
                        className={cn(
                          "cursor-pointer border p-1.5 text-left font-mono text-[11px] transition-all",
                          activeMediaIndex === idx
                            ? "border-border bg-primary text-primary-foreground shadow-[2px_2px_0px_0px_var(--border)]"
                            : "border-border/40 bg-card text-card-foreground hover:border-border"
                        )}
                      >
                        <span className="block truncate font-bold">
                          #{idx + 1}
                        </span>

                        <span className="block truncate text-[9px] uppercase opacity-80">
                          {item.orientation}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Narrative */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
                {/* Intro Callout */}
                <div className="border-primary bg-primary/10 border-l-4 p-4 sm:p-6">
                  <p className="text-primary font-mono text-xs leading-relaxed font-bold tracking-wider uppercase sm:text-sm">
                    "{data.quote}"
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="text-card-foreground space-y-4 font-mono text-xs leading-relaxed sm:text-sm">
                  {data.detailedBio.map((paragraph) => (
                    <p key={paragraph} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Core Pillars */}
                {data.pillars && data.pillars.length > 0 && (
                  <div className="border-border grid grid-cols-1 gap-4 border-t-2 pt-4 sm:grid-cols-2">
                    {data.pillars.map((pillar) => (
                      <div
                        key={pillar.title}
                        className="border-border bg-card border p-3"
                      >
                        <div className="text-primary mb-1 flex items-center gap-2 font-mono text-xs font-bold uppercase">
                          {pillar.icon === "code" ? (
                            <IconCode size={16} />
                          ) : (
                            <IconSparkles size={16} />
                          )}
                          <span>{pillar.title}</span>
                        </div>

                        <p className="text-muted-foreground font-mono text-[11px]">
                          {pillar.description}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Signature Typography */}
            <div className="border-border overflow-hidden border-t-3 pt-6 select-none">
              <div className="text-center">
                <span className="font-display-condensed text-primary animate-cover block text-8xl leading-none tracking-tighter sm:text-9xl md:text-[10rem] lg:text-[12rem] xl:text-[14rem]">
                  {data.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
