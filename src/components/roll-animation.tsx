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
    <div
      className="section relative flex min-h-48 items-center justify-center bg-black p-12 text-white"
      ref={containerRef}
    >
      <code className="absolute top-0 left-0 w-full border-b border-[#0d0d0d] p-0 px-6">
        Roll
      </code>
      <h1 className="section__title section__title--3 absolute top-1/2 left-1/2 flex h-[calc(2.5rem*1.5)] -translate-x-1/2 -translate-y-1/2 overflow-hidden text-4xl leading-[1.5] uppercase">
        {chars.map((char, index) => (
          <div
            className="section__title__char font-paytoneOne flex flex-col tracking-wider"
            key={index}
          >
            <span>{char}</span>
            <span>{char}</span>
          </div>
        ))}
      </h1>
    </div>
  );
}
