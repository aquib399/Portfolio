"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

interface ParticleBackgroundProps {
  /** Maximum number of particles to display (default: 1000) */
  maxParticles?: number;
  /** Base speed multiplier for particles (default: 0.4) */
  speedFactor?: number;
  /** Density factor - lower means more particles (default: 15000) */
  densityFactor?: number;
  /** Opacity of the background (default 25) */
  opacity?: number;
}

export default function ParticleBackground({
  maxParticles = 1000,
  speedFactor = 0.4,
  densityFactor = 1500,
  opacity = 25,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme, resolvedTheme } = useTheme();
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  const currentTheme = resolvedTheme || theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / densityFactor),
        maxParticles,
      );

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * speedFactor,
          speedY: (Math.random() - 0.5) * speedFactor,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const foregroundColor =
        currentTheme === "light" ? "35, 31, 32" : "249, 244, 218";

      particlesRef.current.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        else if (particle.x < 0) particle.x = canvas.width;

        if (particle.y > canvas.height) particle.y = 0;
        else if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${foregroundColor}, ${particle.opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(drawParticles);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    drawParticles();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [currentTheme, maxParticles, speedFactor, densityFactor]);

  return (
    <canvas
      ref={canvasRef}
      className={"bg-background pointer-events-none fixed inset-0 z-[-5]"}
      style={{
        opacity: (theme == "light" ? opacity / 100 : opacity / 150).toFixed(3),
      }}
      suppressHydrationWarning
    />
  );
}
