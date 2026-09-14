import { PERSONAL_INFO } from "../data/portfolio";
import { IconArrowRight } from "./Icons";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden border-b-2 border-[#111111] bg-[#E53826] p-3 sm:p-6 md:p-10">
      {/* Background print texture */}
      <div className="halftone-dots pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Editorial Card */}
        <div className="border-3 border-[#111111] bg-[#F4EFEA] p-4 shadow-[8px_8px_0px_0px_#111111] sm:p-8 md:p-12">
          {/* Top Title Banner */}
          <div className="mb-6 border-b-2 border-[#111111] pb-4 text-center md:mb-8">
            <h2 className="text-3xl leading-none font-extrabold tracking-widest text-[#E53826] uppercase sm:text-4xl md:text-6xl lg:text-7xl">
              {PERSONAL_INFO.role}
            </h2>
          </div>

          {/* Central Grid System (Inspired by Behance Cover Spread) */}
          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            {/* Left Main Panel: Psychedelic Op-Art Artwork (8 Columns on desktop) */}
            <div className="group relative flex min-h-95 flex-col justify-center overflow-hidden border-2 border-[#111111] bg-[#111111] sm:min-h-115 md:min-h-135 lg:col-span-8">
              <div className="relative h-full min-h-95 w-full sm:min-h-115 md:min-h-135">
                <Image
                  src={PERSONAL_INFO.images.landscape_1.src}
                  alt={PERSONAL_INFO.images.landscape_1.alt}
                  fill
                  priority
                  className="scale-105 object-cover object-left transition-transform duration-700 group-hover:scale-110 md:object-center"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 border border-[#F4EFEA]/40 bg-[#111111]/90 px-3 py-1.5 font-mono text-xs tracking-widest text-[#F4EFEA] uppercase backdrop-blur-sm">
                OP-ART STIPPLE • LINOCUT SERIGRAPHY
              </div>
            </div>

            {/* Right Sub-Grid: 4 Columns on desktop */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-4">
              {/* Top Sub-Panel: Mushroom Dome Motif */}
              <div className="group relative h-48 overflow-hidden border-2 border-[#111111] bg-[#111111] sm:h-56">
                <Image
                  src={PERSONAL_INFO.images.landscape_2.src}
                  alt={PERSONAL_INFO.images.landscape_2.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute top-2 right-2 border border-[#111111] bg-[#E53826] px-2 py-0.5 font-mono text-[10px] text-white">
                  SEC. 00
                </div>
              </div>

              {/* Bottom Sub-Panel: Dancing Figures & Giant Typography */}
              <div className="flex flex-1 flex-col justify-between border-2 border-[#111111] bg-[#F4EFEA] p-4">
                <div>
                  <div className="mb-1 font-mono text-[11px] font-bold tracking-wider text-[#E53826]">
                    {PERSONAL_INFO.subRole}
                  </div>
                  <h1 className="font-display-condensed text-3xl leading-none font-extrabold tracking-widest text-[#111111] sm:text-4xl lg:text-5xl">
                    {PERSONAL_INFO.name}
                  </h1>
                </div>

                <div className="my-4 space-y-1.5 border-t border-[#111111]/20 pt-3 font-mono text-xs text-[#111111]/80">
                  {PERSONAL_INFO.metadataTags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="text-[11px] font-bold tracking-wider text-[#E53826]"
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href="#portfolio"
                    className="font-display-condensed inline-flex w-full items-center justify-center gap-2 border border-[#111111] bg-[#111111] px-4 py-2.5 text-lg tracking-wider text-[#F4EFEA] transition-colors hover:bg-[#E53826]"
                  >
                    <span>EXPLORE WORKS</span>
                    <IconArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Editorial Split */}
          <div className="mt-8 grid grid-cols-1 items-center gap-4 border-t-2 border-[#111111] pt-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <h3 className="text-3xl leading-tight text-[#E53826] sm:text-5xl">
                Hi, I'm {PERSONAL_INFO.name}
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="font-mono text-xs leading-relaxed font-semibold tracking-wider text-[#111111] uppercase sm:text-sm">
                FULL STACK DEVELOPER & CREATIVE ENGINEER. WITNESS THE FUSION OF
                SCALABLE ARCHITECTURE AND DIGITAL CRAFTSMANSHIP IN A JOURNEY
                CRAFTED WITH PASSION AND PRECISION.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
