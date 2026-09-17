import { portfolio } from "../data/portfolio";
import { IconArrowRight } from "./Icons";
import Image from "next/image";

const data = portfolio.personal;

export function HeroSection() {
  const landscapeMedia = data.media.landscape;

  const heroImage = landscapeMedia[0];
  const secondaryImage = landscapeMedia[1];

  return (
    <section className="border-border relative w-full overflow-hidden border-b-2 bg-scroll p-3 transition-colors sm:p-6 md:p-10">
      {/* Background print texture */}
      <div className="halftone-dots text-primary-foreground pointer-events-none absolute inset-0 opacity-25" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Editorial Card */}
        <div className="border-border bg-card text-card-foreground border-3 p-4 shadow-[8px_8px_0px_0px_var(--border)] transition-colors sm:p-8 md:p-12">
          {/* Top Title Banner */}
          <div className="border-border mb-6 border-b-2 pb-4 text-center md:mb-8">
            <h2 className="text-primary font-display-wide text-3xl leading-none font-extrabold tracking-widest uppercase sm:text-4xl md:text-6xl lg:text-7xl">
              {data.role}
            </h2>
          </div>

          {/* Central Grid System */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            {/* Main Image */}
            <div className="group border-border bg-muted relative flex min-h-95 flex-col justify-center overflow-hidden border-2 sm:min-h-115 md:min-h-135 lg:col-span-8">
              <div className="relative h-full min-h-95 w-full sm:min-h-115 md:min-h-135">
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt}
                  fill
                  priority
                  className="scale-105 object-cover object-left transition-transform duration-700 group-hover:scale-110 md:object-center"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <div className="border-border/40 bg-background/90 text-foreground absolute bottom-4 left-4 border px-3 py-1.5 font-mono text-xs tracking-widest uppercase backdrop-blur-sm">
                {data.heroBadge ?? heroImage.caption}
              </div>
            </div>

            {/* Right Sub-Grid */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-4">
              {/* Secondary Image */}
              <div className="group border-border bg-muted relative h-48 overflow-hidden border-2 sm:h-56">
                <Image
                  src={secondaryImage.url}
                  alt={secondaryImage.alt}
                  fill
                  className="scale-105 object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                <div className="border-border bg-primary text-primary-foreground absolute top-2 right-2 border px-2 py-0.5 font-mono text-[10px] font-bold">
                  SEC. 00
                </div>
              </div>

              {/* Info Panel */}
              <div className="border-border bg-card flex flex-1 flex-col justify-between border-2 p-4">
                <div>
                  <div className="text-primary mb-1 font-mono text-[12px] font-bold tracking-wider uppercase sm:text-lg md:text-xl lg:text-sm">
                    {data.subRole}
                  </div>

                  <h1 className="font-display-condensed text-foreground text-6xl leading-none font-extrabold tracking-widest sm:text-7xl md:text-8xl lg:text-5xl xl:text-6xl">
                    {data.name}
                  </h1>
                </div>

                <div className="border-border/30 my-4 space-y-1.5 border-t pt-3 font-mono text-xs">
                  {data.metadataTags.map((tag) => (
                    <div
                      key={tag}
                      className="text-primary text-sm font-bold tracking-wider uppercase sm:text-base md:text-sm lg:text-sm"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#portfolio"
                    className="font-display-condensed border-border bg-foreground text-background hover:bg-primary hover:text-primary-foreground inline-flex w-full items-center justify-center gap-2 border-2 px-4 py-2.5 text-lg tracking-wider shadow-[2px_2px_0px_0px_var(--border)] transition-all active:translate-x-0.5 active:translate-y-0.5"
                  >
                    <span>EXPLORE WORKS</span>
                    <IconArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Editorial Split */}
          <div className="border-border mt-8 grid grid-cols-1 items-center gap-4 border-t-2 pt-6 lg:grid-cols-12">
            <div className="md:col-span-5">
              <h3 className="text-primary font-display-wide text-5xl sm:text-8xl lg:text-6xl xl:text-7xl">
                Hi, I&apos;m {data.name}
              </h3>
            </div>

            <div className="md:col-span-7">
              <p className="text-foreground font-mono text-xs leading-relaxed font-semibold tracking-wider uppercase sm:text-sm">
                {data.shortBio}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
