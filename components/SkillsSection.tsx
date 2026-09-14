import { SKILL_CATEGORIES } from "../data/portfolio";
import { SpineTab } from "./SpineTab";
import Image from "next/image";

export function SkillsSection() {
  const visualMotifs = [
    {
      image: "/site/08-ipad-mockup-outro-contact.png",
      caption: "VISUAL INTERFACES & DOM CRAFT",
      columnTitle: ["FRONT", "END", "UI"]
    },
    {
      image: "/site/06-project-b-surreal-eye.png",
      caption: "DATA PIPELINES & SERVICES",
      columnTitle: ["BACK", "END", "APIS"]
    },
    {
      image: "/site/07-project-c-woodcut-textures.png",
      caption: "CONTAINERS, CLOUD & SCALE",
      columnTitle: ["DEV", "OPS", "TOOLS"]
    }
  ];

  return (
    <section
      id="skills"
      className="w-full border-b-2 border-[#111111] bg-[#191817] px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex border-3 border-[#111111] bg-[#111111] shadow-[8px_8px_0px_0px_#E53826]">
          {/* Vertical Spine Tab */}
          <SpineTab label="TECHNICAL SKILLS" theme="cream" side="left" />

          {/* Main Skills Body */}
          <div className="relative flex-1 overflow-hidden bg-[#191817] p-6 text-[#F4EFEA] sm:p-10 md:p-14">
            {/* Background Texture */}
            <div className="halftone-dots-white pointer-events-none absolute inset-0 opacity-10" />

            <div className="relative z-10">
              {/* Header */}
              <div className="mb-10 flex flex-col justify-between gap-3 border-b-2 border-[#F4EFEA]/30 pb-6 sm:flex-row sm:items-baseline">
                <div>
                  <span className="font-mono text-xs font-bold tracking-widest text-[#E53826] uppercase">
                    SECTION 02 // TECHNICAL ARSENAL & CAPABILITIES
                  </span>
                  <h2 className="mt-1 text-3xl leading-none tracking-tight text-white sm:text-5xl">
                    ENGINEERING DOMAINS
                  </h2>
                </div>
                <div className="font-mono text-xs tracking-widest text-[#F4EFEA]/70 uppercase">
                  RIGOROUS SPECIFICATIONS • MODERN STANDARDS
                </div>
              </div>

              {/* 3 Pillars Grid (Matching Behance layout: Photo / Gra / Phy, Illustra / Tion, Graphic / Design) */}
              <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
                {SKILL_CATEGORIES.map((category, index) => {
                  const motif = visualMotifs[index] || visualMotifs[0];

                  return (
                    <div
                      key={category.id}
                      className="group flex flex-col justify-between border-2 border-[#F4EFEA]/40 bg-[#111111]/80 p-5 transition-colors hover:border-[#E53826]"
                    >
                      <div>
                        {/* Stacked Ultra-Condensed Title */}
                        <div className="mb-4 border-b border-[#F4EFEA]/20 pb-4">
                          <div className="flex items-start justify-between">
                            <div className="font-display-condensed text-4xl leading-none tracking-wider text-white sm:text-5xl">
                              {motif.columnTitle.map((part, i) => (
                                <div
                                  key={i}
                                  className="transition-colors group-hover:text-[#E53826]"
                                >
                                  {part}
                                </div>
                              ))}
                            </div>
                            <span className="font-mono text-xs font-bold text-[#E53826]">
                              [0{index + 1}]
                            </span>
                          </div>
                          <p className="mt-2 font-mono text-[11px] tracking-wider text-[#F4EFEA]/70 uppercase">
                            {category.subtitle}
                          </p>
                        </div>

                        {/* Inset Framed Artwork Motif */}
                        <div className="relative mb-4 h-36 w-full overflow-hidden border border-[#F4EFEA]/30 bg-black">
                          <Image
                            src={motif.image}
                            alt={motif.caption}
                            fill
                            className="object-cover object-center grayscale filter transition-all duration-500 group-hover:grayscale-0"
                            sizes="(max-width: 1024px) 100vw, 30vw"
                          />
                          <div className="absolute right-1 bottom-1 border border-white/20 bg-black/80 px-2 py-0.5 font-mono text-[9px] tracking-widest text-white uppercase">
                            {motif.caption}
                          </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-2.5">
                          {category.skills.map((skill) => (
                            <div
                              key={skill.name}
                              className="border border-[#F4EFEA]/15 bg-[#191817] p-2 transition-colors hover:border-[#E53826]/70"
                            >
                              <div className="flex items-center justify-between">
                                <span className="font-mono text-xs font-bold tracking-wide text-white">
                                  {skill.name}
                                </span>
                                {skill.level && (
                                  <span className="border border-[#E53826]/40 bg-[#E53826]/10 px-1.5 py-0.5 font-mono text-[10px] text-[#E53826] uppercase">
                                    {skill.level}
                                  </span>
                                )}
                              </div>
                              {skill.description && (
                                <p className="mt-1 font-mono text-[10px] leading-normal text-[#F4EFEA]/60">
                                  {skill.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-[#F4EFEA]/20 pt-4 font-mono text-[10px] text-[#F4EFEA]/50 uppercase">
                        <span>PILLAR 0{index + 1}</span>
                        <span>PRODUCTION READY</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
