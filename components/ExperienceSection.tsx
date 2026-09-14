import { EXPERIENCE_HISTORY } from "../data/portfolio";
import { IconBriefcase } from "./Icons";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full border-b-2 border-[#111111] bg-[#E53826] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex border-3 border-[#111111] bg-[#F4EFEA] shadow-[8px_8px_0px_0px_#111111]">
          {/* Vertical Spine Tab */}
          <SpineTab label="WORK EXPERIENCE" theme="cream" side="left" />

          {/* Main Experience Body */}
          <div className="relative flex-1 overflow-hidden bg-[#F4EFEA] p-6 text-[#111111] sm:p-10 md:p-14">
            {/* Background Texture */}
            <div className="halftone-dots pointer-events-none absolute inset-0 opacity-15" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-10 flex flex-col justify-between gap-3 border-b-2 border-[#111111] pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#E53826] uppercase">
                    SECTION 04 // PROFESSIONAL TRAJECTORY & IMPACT
                  </span>
                  <h2 className="font-display-wide mt-1 text-3xl leading-none tracking-tight text-[#111111] sm:text-5xl">
                    CAREER CHRONICLES
                  </h2>
                </div>
                <div className="font-mono text-xs tracking-widest text-[#78716c] uppercase">
                  ENTERPRISE DELIVERIES • PROVEN EXECUTION
                </div>
              </div>

              {/* Grid: Left Column is Behance Cosmic Linocut Visual, Right Column is Experience Cards */}
              <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
                {/* Left Visual Column (Cosmic Face Motif from Behance Design) */}
                <div className="flex flex-col justify-between border-2 border-[#111111] bg-[#111111] p-3 shadow-[4px_4px_0px_0px_#111111] lg:col-span-4">
                  <div className="relative h-80 w-full overflow-hidden border border-[#F4EFEA]/30 sm:h-96">
                    <Image
                      src="/site/03-creative-portfolio-hero.png"
                      alt="Work Experience Cosmic Linocut Graphic"
                      fill
                      className="object-cover object-center contrast-125 grayscale filter transition-all duration-700 hover:grayscale-0"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute top-2 left-2 bg-[#E53826] px-2 py-0.5 font-mono text-[10px] tracking-wider text-white uppercase">
                      EXECUTION TRAIL
                    </div>
                  </div>

                  <div className="mt-4 border border-[#F4EFEA]/20 bg-[#191817] p-3">
                    <div className="mb-1 flex items-center gap-2 font-mono text-xs font-bold text-[#E53826] uppercase">
                      <IconBriefcase size={16} />
                      <span>THE PHILOSOPHY</span>
                    </div>
                    <p className="font-mono text-[11px] leading-relaxed text-[#F4EFEA]/70">
                      "I balance delivery speed with clear structure and
                      sustainable practices so the codebase remains easy to
                      understand, test, and evolve."
                    </p>
                  </div>
                </div>

                {/* Right Experience Chronology Cards */}
                <div className="space-y-6 lg:col-span-8">
                  {EXPERIENCE_HISTORY.map((exp, idx) => (
                    <div
                      key={exp.id}
                      className="group relative border-2 border-[#111111] bg-white p-6 transition-all hover:shadow-[4px_4px_0px_0px_#E53826] sm:p-8"
                    >
                      {/* Top Bar: Period & Company */}
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b-2 border-[#111111] pb-3">
                        <div className="flex items-center gap-3">
                          <span className="font-display-condensed text-3xl leading-none font-bold text-[#E53826] sm:text-4xl">
                            {exp.period}
                          </span>
                          {exp.badge && (
                            <span className="bg-[#111111] px-2 py-0.5 font-mono text-[10px] tracking-wider text-[#F4EFEA] uppercase">
                              {exp.badge}
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs text-[#78716c] uppercase">
                          {exp.location} • {exp.type}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <h3 className="font-display-wide mb-1 text-2xl text-[#111111] sm:text-3xl">
                        {exp.role}
                      </h3>
                      <p className="mb-3 font-mono text-xs font-bold tracking-wider text-[#E53826] uppercase sm:text-sm">
                        {exp.company}
                      </p>

                      <p className="mb-4 font-mono text-xs leading-relaxed text-[#111111]/80 sm:text-sm">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="mb-4 space-y-1.5 border-t border-[#111111]/15 pt-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="flex items-start gap-2 font-mono text-xs text-[#111111]"
                          >
                            <span className="font-bold text-[#E53826]">▪</span>
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Used Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {exp.skillsUsed.map((skill) => (
                          <span
                            key={skill}
                            className="border border-[#111111] bg-[#F4EFEA] px-2 py-0.5 font-mono text-[10px] text-[#111111] uppercase"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Index tag */}
                      <div className="absolute top-2 right-2 font-mono text-[10px] text-[#111111]/30">
                        REF 0{idx + 1}
                      </div>
                    </div>
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
