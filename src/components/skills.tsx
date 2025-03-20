"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Badge } from "@/components/ui/badge";

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
  "Prisma (Basic)",
  "C",
  "C++",
  "Java",
  "Python",
  "Shadcn UI",
  "SEO",
];

export default function SkillsShowcase() {
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
      className="border-y-foreground relative h-[550vh] border-y"
    >
      <div ref={triggerRef}>
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <h2 className="relative z-10 mb-12 text-center text-4xl font-bold md:text-6xl">
            Technical Skills
          </h2>

          <div className="relative w-full">
            <div ref={horizontalRef} className="flex items-center">
              <div className="flex flex-nowrap gap-6 px-4">
                {techSkills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBadge({ skill, index }: { skill: string; index: number }) {
  return (
    <Badge
      className="cursor-default px-4 py-2 text-lg whitespace-nowrap transition-all duration-300 hover:scale-110"
      variant="outline"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {skill}
    </Badge>
  );
}
