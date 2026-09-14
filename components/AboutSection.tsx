"use client";

import { PERSONAL_INFO, PERSONAL_MEDIA } from "../data/portfolio";
import { IconMapPin, IconCode, IconSparkles } from "./Icons";
import { useState } from "react";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

export function AboutSection() {
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);
  const currentMedia = PERSONAL_MEDIA[activeMediaIndex] || PERSONAL_MEDIA[0];

  return (
    <section
      id="about"
      className="w-full border-b-2 border-[#111111] bg-[#F4EFEA] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex border-3 border-[#111111] bg-[#FBF8F3] shadow-[8px_8px_0px_0px_#111111]">
          {/* Vertical Spine Tab */}
          <SpineTab label="ABOUT ME" theme="red" side="left" />

          {/* Main About Card Body */}
          <div className="relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            {/* Top Sub-Header */}
            <div className="mb-8 flex flex-col justify-between gap-3 border-b-2 border-[#111111] pb-6 sm:flex-row sm:items-center">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-[#E53826] uppercase">
                  SECTION 01 // PROFILE & ARCHITECTURAL PHILOSOPHY
                </span>
                <h2 className="mt-1 text-3xl tracking-tight text-[#111111] sm:text-5xl">
                  THE ENGINEER BEHIND THE CRAFT
                </h2>
              </div>

              <div className="inline-flex items-center gap-2 self-start bg-[#111111] px-3 py-1.5 font-mono text-xs tracking-wider text-[#F4EFEA] uppercase sm:self-auto">
                <IconMapPin size={14} className="text-[#E53826]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Split Content: Left Media Frame, Right Narrative Story */}
            <div className="mb-12 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
              {/* Media Gallery Frame (Supports both portrait & landscape) */}
              <div className="flex flex-col justify-between lg:col-span-5">
                <div className="relative border-2 border-[#111111] bg-[#111111] p-2 shadow-[4px_4px_0px_0px_#111111]">
                  <div
                    className={`relative w-full overflow-hidden border border-[#111111] bg-zinc-900 ${
                      currentMedia.orientation === "portrait"
                        ? "h-110 sm:h-120"
                        : "h-75 sm:h-85"
                    } transition-all duration-300`}
                  >
                    <Image
                      src={currentMedia.url}
                      alt={currentMedia.alt}
                      fill
                      className="object-cover object-center contrast-105 filter"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-2 left-2 bg-[#E53826] px-2 py-0.5 font-mono text-[10px] tracking-wider text-white uppercase">
                      {currentMedia.orientation} CAPTURE
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="flex items-center justify-between px-1 pt-2 font-mono text-[11px] text-[#111111]">
                    <span className="truncate font-bold uppercase">
                      {currentMedia.title}
                    </span>
                    <span className="text-[#78716c] uppercase">
                      [{activeMediaIndex + 1}/{PERSONAL_MEDIA.length}]
                    </span>
                  </div>
                </div>

                {/* Media Selector Tabs (Portrait & Landscape selection) */}
                <div className="mt-4 border-t border-[#111111]/20 pt-3">
                  <span className="mb-2 block font-mono text-[10px] tracking-wider text-[#78716c] uppercase">
                    SELECT VISUAL ORIENTATION:
                  </span>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                    {PERSONAL_MEDIA.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveMediaIndex(idx)}
                        className={`border p-1.5 text-left font-mono text-[11px] transition-all ${
                          activeMediaIndex === idx
                            ? "border-[#111111] bg-[#E53826] text-white shadow-[2px_2px_0px_0px_#111111]"
                            : "border-[#111111]/40 bg-[#F4EFEA] text-[#111111] hover:border-[#111111]"
                        }`}
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

              {/* Right: Narrative Story & Engineering Evolution */}
              <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
                {/* Intro Callout */}
                <div className="border-l-4 border-[#E53826] bg-[#E53826]/10 p-4 sm:p-6">
                  <p className="font-mono text-xs leading-relaxed font-bold tracking-wider text-[#E53826] uppercase sm:text-sm">
                    "{PERSONAL_INFO.quote}"
                  </p>
                </div>

                {/* Paragraphs */}
                <div className="space-y-4 font-mono text-xs leading-relaxed text-[#111111] sm:text-sm">
                  {PERSONAL_INFO.detailedBio.map((paragraph, i) => (
                    <p key={i} className="text-justify">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Core Pillars Grid */}
                <div className="grid grid-cols-1 gap-4 border-t-2 border-[#111111] pt-4 sm:grid-cols-2">
                  <div className="border border-[#111111] bg-white p-3">
                    <div className="mb-1 flex items-center gap-2 font-mono text-xs font-bold text-[#E53826] uppercase">
                      <IconCode size={16} />
                      <span>THE CRAFT</span>
                    </div>
                    <p className="font-mono text-[11px] text-[#78716c]">
                      Modular TypeScript components, zero unnecessary
                      re-renders, and predictable state transitions.
                    </p>
                  </div>

                  <div className="border border-[#111111] bg-white p-3">
                    <div className="mb-1 flex items-center gap-2 font-mono text-xs font-bold text-[#E53826] uppercase">
                      <IconSparkles size={16} />
                      <span>USER-FIRST</span>
                    </div>
                    <p className="font-mono text-[11px] text-[#78716c]">
                      Accessible layouts, sub-second latency, and visceral
                      visual tactility inspired by print design.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Signature Overlapping Typography Banner */}
            <div className="overflow-hidden border-t-3 border-[#111111] pt-6 select-none">
              <div className="text-center">
                <span className="font-display-condensed block text-6xl leading-none tracking-tighter text-[#E53826] transition-colors hover:text-[#111111] sm:text-8xl md:text-9xl lg:text-[13rem]">
                  {PERSONAL_INFO.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
