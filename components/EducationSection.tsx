import { IconGraduationCap, IconSparkles } from "./Icons";
import { EDUCATION_HISTORY } from "../data/portfolio";
import { SpineTab } from "./SpineTab";

export function EducationSection() {
  return (
    <section
      id="education"
      className="w-full border-b-2 border-[#111111] bg-[#111111] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex border-3 border-[#111111] bg-[#191817] shadow-[8px_8px_0px_0px_#E53826]">
          {/* Vertical Spine Tab */}
          <SpineTab label="EDUCATIONAL BACKGROUND" theme="cream" side="left" />

          {/* Main Education Body */}
          <div className="relative flex-1 overflow-hidden bg-[#111111] p-6 text-[#F4EFEA] sm:p-10 md:p-14">
            {/* Celestial Starry Night Background Pattern */}
            <div className="halftone-dots-white pointer-events-none absolute inset-0 opacity-25" />

            {/* Ambient Cosmic Glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#E53826]/10 blur-3xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-12 flex flex-col justify-between gap-3 border-b-2 border-[#F4EFEA]/30 pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#E53826] uppercase">
                    SECTION 03 // ACADEMIC FOUNDATION & SCIENTIFIC RIGOR
                  </span>
                  <h2 className="mt-1 text-3xl leading-none tracking-tight text-white sm:text-5xl">
                    EDUCATIONAL TIMELINE
                  </h2>
                </div>
                <div className="flex items-center gap-2 font-mono text-xs tracking-widest text-[#F4EFEA]/70 uppercase">
                  <IconSparkles size={14} className="text-[#E53826]" />
                  <span>CELESTIAL ORBIT ARCHITECTURE</span>
                </div>
              </div>

              {/* Constellation Orbit Graphic Timeline */}
              <div className="relative">
                {/* SVG Orbit Lines Connecting Nodes (matching Behance diagram) */}
                <div className="absolute top-0 bottom-0 left-6 hidden w-1 bg-linear-to-b from-[#E53826] via-white/40 to-[#E53826]/20 sm:block md:left-12" />

                <div className="space-y-12">
                  {EDUCATION_HISTORY.map((edu, idx) => (
                    <div
                      key={edu.id}
                      className="group relative sm:pl-24 md:pl-28"
                    >
                      {/* Planetary Node Orb */}
                      <div className="absolute top-0 left-0 z-10 hidden h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#111111] font-mono text-xs font-bold text-white shadow-[0_0_15px_rgba(229,56,38,0.4)] transition-all group-hover:scale-110 group-hover:border-[#E53826] sm:flex md:left-6">
                        <IconGraduationCap
                          size={20}
                          className="text-[#E53826]"
                        />
                      </div>

                      {/* Content Card */}
                      <div className="relative border-2 border-[#F4EFEA]/30 bg-[#191817]/90 p-6 transition-colors hover:border-[#E53826] sm:p-8">
                        {/* Period Badge & Label */}
                        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-[#F4EFEA]/20 pb-4">
                          <div className="flex items-center gap-2">
                            <span className="font-display-condensed text-3xl font-bold tracking-wider text-[#E53826] sm:text-4xl">
                              {edu.period}
                            </span>
                            {edu.badge && (
                              <span className="bg-[#E53826] px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase">
                                {edu.badge}
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-xs tracking-widest text-[#F4EFEA]/60 uppercase">
                            {edu.location}
                          </span>
                        </div>

                        {/* Degree & Institution */}
                        <h3 className="mb-1 text-2xl text-white sm:text-3xl">
                          {edu.institution}
                        </h3>
                        <p className="mb-4 font-mono text-sm font-bold tracking-wider text-[#E53826] uppercase">
                          {edu.degree} — {edu.field}
                        </p>

                        {/* Achievements */}
                        {edu.achievements && edu.achievements.length > 0 && (
                          <div className="space-y-2 border-t border-[#F4EFEA]/15 pt-3 font-mono text-xs text-[#F4EFEA]/80">
                            {edu.achievements.map((item, aIdx) => (
                              <div
                                key={aIdx}
                                className="flex items-start gap-2"
                              >
                                <span className="font-bold text-[#E53826]">
                                  ▪
                                </span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Index Corner Tag */}
                        <div className="absolute top-2 right-2 font-mono text-[10px] text-[#F4EFEA]/40">
                          NODE 0{idx + 1}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Orbital Inscription */}
              <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-[#F4EFEA]/20 pt-6 font-mono text-xs tracking-widest text-[#F4EFEA]/60 uppercase sm:flex-row">
                <span>SYSTEM NODE: ACADEMIC CREDENTIALS</span>
                <span>DISCIPLINED PROBLEM SOLVING // FIRST PRINCIPLES</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
