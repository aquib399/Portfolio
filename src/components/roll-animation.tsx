"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface RollAnimationProps {
  text: string;
  holdDuration?: number;
}

export default function RollAnimation({
  text,
  holdDuration = 3.5,
}: RollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chars = text.split("");

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const charElements = containerRef.current.querySelectorAll(
      ".section__title--3 .section__title__char",
    );

    const mainTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    charElements.forEach((el) => {
      gsap.set(el, {
        yPercent: -100,
      });
    });

    const appearTimeline = gsap.timeline();

    charElements.forEach((el, i) => {
      appearTimeline.to(
        el,
        {
          yPercent: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        i * 0.05,
      );
    });

    mainTimeline.add(appearTimeline);

    mainTimeline.to({}, { duration: holdDuration });

    const disappearTimeline = gsap.timeline();

    charElements.forEach((el, i) => {
      disappearTimeline.to(
        el,
        {
          yPercent: -100,
          duration: 0.5,
          ease: "back.in(1.7)",
        },
        i * 0.05,
      );
    });

    mainTimeline.add(disappearTimeline);

    return () => {
      mainTimeline.kill();
    };
  }, [chars.length, holdDuration]);

  return (
    <div className="relative items-center justify-center" ref={containerRef}>
      <h3 className="font-rye section__title--3 flex h-[calc(2.5rem*1.5)] overflow-hidden text-4xl leading-[1.5] uppercase">
        {chars.map((char, index) => (
          <div
            className="section__title__char flex w-full flex-col whitespace-nowrap"
            key={index}
          >
            <span>{char}</span>
            <span>{char}</span>
          </div>
        ))}
      </h3>
    </div>
  );
}
