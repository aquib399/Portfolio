"use client";
import SlideUpAnimation from "@/components/slide-up-animation";
import MultiFlipText from "@/components/multi-flip-text";
import RollAnimation from "@/components/roll-animation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

const techSkills = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "React.js",
  "Next.js",
  "Git/GitHub",
  "JWT",
  "Lucia Auth",
  "Next-Auth",
  "React Query",
  "Redux",
  "Jotai",
  "Zustand",
  "Cloudinary",
  "REST APIs",
  "Stripe",
  "MongoDB",
  "Prisma",
  "C",
  "C++",
  "Java",
  "Python",
  "Shadcn UI",
  "SEO",
];

export default function SkillsShowcase() {
  return (
    <>
      <MobileTabSkills className="md:hidden" />
      <DesktopSkills className="hiddens md:block" />
    </>
  );
}

function MobileTabSkills({ className = "" }) {
  return (
    <section className={cn("px-4 py-12", className)}>
      <h2 className="mb-8 text-center text-3xl font-bold">Technical Skills</h2>
      <div className="grid grid-cols-2 gap-4">
        {techSkills.map((skill) => (
          <div
            key={skill}
            className="border-foreground/20 bg-background hover:border-foreground/50 flex h-16 items-center justify-center rounded-lg border p-4 text-center shadow-sm transition-all hover:scale-105"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

function DesktopSkills({ className = "" }) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = horizontalRef.current;
    const section = sectionRef.current;

    if (!horizontal || !section || !triggerRef.current) return;

    let horizontalWidth = horizontal.scrollWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        markers: false,
      },
    });

    tl.fromTo(
      horizontal,
      {
        x: window.innerWidth * 0.95,
      },
      {
        x: -horizontalWidth + window.innerWidth * 0.5,
        ease: "none",
      },
    );

    const handleResize = () => {
      horizontalWidth = horizontal.scrollWidth;
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn(
        "border-y-foreground relative h-[300svh] border-y",
        className,
      )}
    >
      <div ref={triggerRef}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <h2 className="relative z-10 mb-12 text-center text-4xl font-bold md:text-6xl">
            Technical Skills
          </h2>

          <div className="relative w-full">
            <div ref={horizontalRef} className="flex items-center">
              <div className="flex flex-nowrap gap-16 px-4 md:gap-24">
                {techSkills.map((skill, index) => {
                  const AnimationComponent =
                    index % 3 === 0
                      ? SlideUpAnimation
                      : index % 3 === 1
                        ? MultiFlipText
                        : RollAnimation;

                  return (
                    <AnimationComponent
                      text={skill}
                      key={skill}
                      holdDuration={1 + (index % 3) + index * 0.125}
                    />
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
