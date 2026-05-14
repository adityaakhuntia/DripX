"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<unknown>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
      on: (event: string, callback: any) => void;
    } | null = null;

    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      }) as any;

      lenisRef.current = lenis;

      // Sync Lenis with GSAP ScrollTrigger
      lenis?.on("scroll", ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    };

    initLenis();

    return () => {
      gsap.ticker.remove((time) => {
        lenis?.raf(time * 1000);
      });
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
