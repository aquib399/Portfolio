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
      className="border-border bg-primary w-full border-b-2 px-4 py-12 transition-colors sm:px-6 lg:px-8"
    >
      <div className="halftone-dots text-primary-foreground pointer-events-none absolute inset-0 opacity-25" />

      <div className="mx-auto max-w-7xl">
        <div className="border-border bg-card text-card-foreground flex border-3 shadow-[8px_8px_0px_0px_var(--border)] transition-colors">
          {/* Vertical Spine Tab */}
          <SpineTab label="OVERVIEW" theme="background" side="left" />

          {/* Main Overview Body */}
          <div className="bg-secondary text-primary-foreground relative flex-1 overflow-hidden p-6 sm:p-10 md:p-14">
            {/* Background Graphic Accents */}
            <div className="halftone-dots text-primary-foreground pointer-events-none absolute inset-0 opacity-20" />

            <div className="relative z-10">
              {/* Header */}
              <div className="border-border mb-8 flex flex-col justify-between gap-4 border-b-2 pb-6 sm:flex-row sm:items-end">
                <div>
                  <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase">
                    TABLE OF CONTENTS // SITEMAP
                  </span>
                  <h2 className="text-primary font-display-wide mt-1 text-4xl leading-none tracking-tight sm:text-6xl">
                    INDEX DIRECTORY
                  </h2>
                </div>
                <div className="text-primary text-right font-mono text-xs uppercase">
                  {data.overviewEdition ?? "VOLUME 01 • EDITION 2025"}
                  <br />
                  CURATED BY {data.firstName}
                </div>
              </div>

              {/* Grid: Left is Collage Art, Right is Numbered Index */}
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                {/* Left: Vintage Collage & Woodcut Elements */}
                <div className="border-primary-foreground/60 relative h-full w-full border-2 bg-black/40 p-3 backdrop-blur-xs lg:col-span-5">
                  <div className="border-primary-foreground/40 relative h-full w-full overflow-hidden border">
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
                      className="group border-border bg-card text-card-foreground hover:bg-background flex items-center justify-between border-2 p-3.5 shadow-[3px_3px_0px_0px_var(--border)] transition-all hover:translate-x-2 sm:p-4"
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
