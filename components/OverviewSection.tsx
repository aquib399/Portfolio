import { navigation } from "../data/navigation";
import { portfolio } from "@/data/portfolio";
import { IconArrowUpRight } from "./Icons";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

const data = portfolio.personal;

export function OverviewSection() {
  return (
    <section
      id="overview"
      className="border-border bg-primary relative w-full border-b-2 px-4 py-8 transition-colors sm:px-6 sm:py-12 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card text-card-foreground flex border-3 shadow-[4px_4px_0px_0px_var(--border)] transition-colors sm:shadow-[8px_8px_0px_0px_var(--border)]">
          {/* Vertical Spine Tab */}
          <SpineTab label="OVERVIEW" theme="background" side="left" />

          {/* Main Overview Body */}
          <div className="bg-card text-card-foreground relative flex-1 overflow-hidden p-4 sm:p-8 md:p-14">
            {/* Background Graphic Accents */}
            <div className="halftone-dots text-card-foreground pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10">
              {/* Header */}
              <div className="border-border mb-6 flex flex-col justify-between gap-4 border-b-2 pb-4 sm:mb-8 sm:flex-row sm:items-end sm:pb-6">
                <div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    TABLE OF CONTENTS // SITEMAP
                  </span>
                  <h2 className="text-primary font-display-wide mt-1 text-3xl leading-none tracking-tight sm:text-6xl">
                    INDEX DIRECTORY
                  </h2>
                </div>
                <div className="text-primary text-left font-mono text-xs uppercase sm:text-right">
                  {data.overviewEdition ?? "VOLUME 01 • EDITION 2025"}
                  <br />
                  CURATED BY {data.firstName}
                </div>
              </div>

              {/* Grid: Left is Collage Art, Right is Numbered Index */}
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
                {/* Left: Vintage Collage & Woodcut Elements */}
                <div className="border-border/60 relative h-72 w-full border-2 bg-black/40 p-3 backdrop-blur-xs sm:h-96 lg:col-span-5 lg:h-full">
                  <div className="border-border/40 relative h-full w-full overflow-hidden border">
                    <Image
                      src={data.media.portrait[0].url}
                      alt={data.media.portrait[0].alt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>

                {/* Right: Numbered Navigation Grid */}
                <div className="space-y-3 lg:col-span-7">
                  {navigation.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="group border-border bg-card text-card-foreground hover:bg-background flex items-center justify-between border-2 p-3 shadow-[3px_3px_0px_0px_var(--border)] transition-all hover:translate-x-2 sm:p-4"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-display-condensed text-primary text-3xl leading-none font-bold sm:text-4xl">
                          {sec.number}
                        </span>
                        <div>
                          <span className="text-card-foreground group-hover:text-primary font-display-wide text-lg leading-none transition-colors sm:text-xl">
                            {sec.title}
                          </span>
                          <p className="text-muted-foreground mt-0.5 font-mono text-[11px] tracking-wider uppercase">
                            {sec.label}
                          </p>
                        </div>
                      </div>

                      <div className="text-muted-foreground group-hover:text-primary flex items-center gap-2 font-mono text-xs transition-colors">
                        <span className="hidden font-bold sm:inline">
                          EXPLORE
                        </span>
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
