"use client";

import { IconMapPin, IconCode, IconSparkles } from "./Icons";
import { portfolio } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Image from "next/image";

const data = portfolio.personal;

export function AboutSection() {
  const currentMedia = data.media.landscape[1];

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
              <h2 className="text-card-foreground font-display-wide mt-1 text-3xl tracking-tight sm:text-5xl">
                {data.aboutHeading}
              </h2>

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
                        ? "h-110 sm:h-136"
                        : "h-80 sm:h-92"
                    )}
                  >
                    <Image
                      src={currentMedia.url}
                      alt={currentMedia.alt}
                      fill
                      className="object-cover object-center contrast-105 filter"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>

                  {/* Caption */}
                  <div className="text-card-foreground flex items-center justify-between px-1 pt-2 font-mono text-[11px]">
                    <span className="truncate font-bold uppercase">
                      {currentMedia.caption ?? currentMedia.alt}
                    </span>
                  </div>
                </div>

                {/* Media Selector */}
              </div>

              {/* Narrative */}
              <div className="flex flex-col justify-between lg:col-span-7">
                {/* Intro Callout */}
                <div className="border-primary bg-primary/10 p-3 sm:p-4">
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
