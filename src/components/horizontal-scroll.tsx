"use client";
import { type PropsWithChildren, useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView, motion } from "framer-motion";
import CurvedText from "./curved-text";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";

interface HorizontallScrollProps extends PropsWithChildren {
  heading?: {
    text: string;
    curveness?: number;
    fontSize?: number;
    initialScale?: number;
  };
  className?: string;
  disableThemeing?: boolean;
}

export default function HorizontallScroll({
  heading,
  children,
  className,
  disableThemeing = false,
}: HorizontallScrollProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const [swappedMode, setSwappedMode] = useState(false);

  gsap.registerPlugin(ScrollTrigger);
  const scrollSpeedFactor = 2.5;
  const partition = 4;

  useEffect(() => {
    const horizontal = horizontalRef.current;
    const section = sectionRef.current;
    const headingElement = headingRef.current;

    if (!horizontal || !section || !triggerRef.current) return;

    let horizontalWidth = horizontal.scrollWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalWidth * (1 / scrollSpeedFactor)}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: false,
        markers: false,
        onUpdate: (self) => {
          if (disableThemeing) return;
          const num = self.progress;
          const percentage = num * 100;
          const partitionSize = 100 / partition;
          const partitionIndex = Math.floor(percentage / partitionSize);
          setSwappedMode(partitionIndex % 2 === 1);
        },
      },
    });

    tl.fromTo(
      horizontal,
      {
        x: window.innerWidth * 0.2,
      },
      {
        x: -horizontalWidth + window.innerWidth * 0.95,
        ease: "none",
      },
    );

    if (headingElement && heading) {
      const initialScale = heading.initialScale || 3;
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });

      headingTl.fromTo(
        headingElement,
        {
          scale: initialScale,
          y: "100vh",
          position: "fixed",
          zIndex: 10,
          opacity: 0.3,
        },
        {
          scale: 1,
          y: "0",
          position: "absolute",
          top: "4rem",
          ease: "power2.out",
          opacity: 1,
        },
      );
    }

    const handleResize = () => {
      horizontalWidth = horizontal.scrollWidth;
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [disableThemeing, heading]);

  const inView = useInView(triggerRef, {
    once: false,
    amount: 0.75,
  });

  return (
    <section
      ref={sectionRef}
      className={cn(
        "border-y-foreground relative h-auto transition-all duration-75 sm:duration-200 md:duration-500",
        swappedMode && "bg-foreground text-background",
        className,
      )}
    >
      <div ref={triggerRef}>
        {heading && (
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="absolute top-4 flex w-full flex-col items-center text-5xl sm:top-8 md:top-10 lg:top-12 xl:top-14 2xl:top-16"
          >
            <CurvedText
              arcHeight={heading.curveness || 100}
              fontSize={heading.fontSize || 48}
              textClassName={cn(
                "transition-all duration-75 sm:duration-200 md:duration-500",
                swappedMode ? "fill-background " : "fill-foreground",
              )}
            >
              {heading.text}
            </CurvedText>
          </motion.div>
        )}
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
          <div className="relative w-full">
            <div ref={horizontalRef} className="flex items-center">
              {children}
            </div>
          </div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="absolute bottom-1 left-2 text-xs"
        >
          Scroll ↓
        </motion.p>
      </div>
    </section>
  );
}
