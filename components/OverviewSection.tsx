import { NAVIGATION_SECTIONS } from "../data/portfolio";
import { IconArrowUpRight } from "./Icons";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="w-full border-b-2 border-[#111111] bg-[#E53826] px-4 py-12 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex border-3 border-[#111111] bg-[#F4EFEA] shadow-[8px_8px_0px_0px_#111111]">
          {/* Vertical Spine Tab */}
          <SpineTab label="OVERVIEW" theme="cream" side="left" />

          {/* Main Overview Body */}
          <div className="relative flex-1 overflow-hidden bg-[#E53826] p-6 text-white sm:p-10 md:p-14">
            {/* Background Graphic Accents */}
            <div className="halftone-dots pointer-events-none absolute inset-0 opacity-20" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-8 flex flex-col justify-between gap-4 border-b-2 border-white pb-6 sm:flex-row sm:items-end">
                <div>
                  <span className="font-mono text-xs tracking-widest text-[#F4EFEA]/80 uppercase">
                    TABLE OF CONTENTS // SITEMAP
                  </span>
                  <h2 className="font-display-wide mt-1 text-4xl leading-none tracking-tight text-white sm:text-6xl">
                    INDEX DIRECTORY
                  </h2>
                </div>
                <div className="text-right font-mono text-xs text-[#F4EFEA]/90 uppercase">
                  VOLUME 01 • EDITION 2025
                  <br />
                  CURATED BY AQUIB ALAM
                </div>
              </div>

              {/* Grid: Left is Collage Art, Right is Numbered Index */}
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                {/* Left: Vintage Collage & Woodcut Elements */}
                <div className="relative border-2 border-white/80 bg-[#111111]/40 p-4 backdrop-blur-xs lg:col-span-5">
                  <div className="relative h-72 w-full overflow-hidden border border-white/40 sm:h-80">
                    <Image
                      src="/site/02-overview-booklet-mockup.png"
                      alt="Overview Collage with Vintage Engravings and Skull"
                      fill
                      className="object-cover object-left"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between font-mono text-[11px] text-[#F4EFEA]/80 uppercase">
                    <span>ARCHIVE CATALOG</span>
                    <span>FIG. 01 — COLLAGE</span>
                  </div>
                </div>

                {/* Right: Numbered Navigation Grid */}
                <div className="space-y-3 lg:col-span-7">
                  {NAVIGATION_SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group flex items-center justify-between border-2 border-[#111111] bg-[#F4EFEA] p-3.5 text-[#111111] shadow-[3px_3px_0px_0px_#111111] transition-all hover:translate-x-2 hover:bg-white sm:p-4"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-display-condensed text-3xl leading-none font-bold text-[#E53826] sm:text-4xl">
                          {sec.number}
                        </span>
                        <div>
                          <span className="font-display-wide text-lg leading-none text-[#111111] transition-colors group-hover:text-[#E53826] sm:text-xl">
                            {sec.title}
                          </span>
                          <p className="mt-0.5 font-mono text-[11px] tracking-wider text-[#78716c] uppercase">
                            {sec.label}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-[#111111]/70 group-hover:text-[#E53826]">
                        <span className="hidden sm:inline">EXPLORE</span>
                        <IconArrowUpRight
                          size={18}
                          className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
