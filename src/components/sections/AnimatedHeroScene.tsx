"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "framer-motion";

export default function AnimatedHeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Mouse interaction for parallax
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 40;
        const y = (e.clientY - top - height / 2) / 40;
        mouseX.set(x);
        mouseY.set(y);
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const { left, top, width, height } = containerRef.current!.getBoundingClientRect();
        const x = (e.touches[0].clientX - left - width / 2) / 50;
        const y = (e.touches[0].clientY - top - height / 2) / 50;
        mouseX.set(x);
        mouseY.set(y);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [mouseX, mouseY, shouldReduceMotion]);

  // Parallax transforms based on mouse movement
  const bgX = useTransform(mouseX, (x) => -x * 0.5);
  const bgY = useTransform(mouseY, (y) => -y * 0.5);
  
  const midX = useTransform(mouseX, (x) => x * 1.5);
  const midY = useTransform(mouseY, (y) => y * 1.5);

  const frontX = useTransform(mouseX, (x) => x * 3);
  const frontY = useTransform(mouseY, (y) => y * 3);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden bg-void pointer-events-none z-0">
      {/* 1. Cinematic Animated Background (Mesh / Gradients) */}
      <motion.div
        style={{ x: bgX, y: bgY }}
        className="absolute inset-[-10%] w-[120%] h-[120%] opacity-40"
      >
        {/* Soft glowing orbs using Cobalt, Rose, Flame - Optimized */}
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.4, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full opacity-30 will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            scale: [1, 1.1, 1], 
            opacity: [0.2, 0.3, 0.2],
            x: [0, -30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full opacity-20 will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(225,29,72,0.3) 0%, transparent 70%)" }}
        />
        <motion.div
          animate={shouldReduceMotion ? {} : { 
            scale: [1, 1.3, 1], 
            opacity: [0.15, 0.25, 0.15],
            x: [0, 40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] rounded-full opacity-15 will-change-transform"
          style={{ background: "radial-gradient(circle, rgba(234,88,12,0.3) 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* 2. Liquid Blob Movement & Soft Light Streaks */}
      <motion.div
        style={{ x: midX, y: midY }}
        className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-void/50 to-void/80" />
        <motion.div
          animate={shouldReduceMotion ? {} : { rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="w-[150vw] h-[150vw] absolute rounded-full will-change-transform"
          style={{
            background: "conic-gradient(from 0deg at 50% 50%, rgba(37,99,235,0.1) 0deg, rgba(225,29,72,0.1) 120deg, rgba(234,88,12,0.1) 240deg, rgba(37,99,235,0.1) 360deg)"
          }}
        />
      </motion.div>

      {/* 3. Floating Glassmorphism Product Cards / Abstract Silhouettes */}
      <motion.div style={{ x: frontX, y: frontY }} className="absolute inset-0">
        
        {/* Card 1 - Left */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, -20, 0], rotate: [-2, 2, -2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-64 h-80 rounded-2xl glass-card hidden lg:flex flex-col justify-between p-6 opacity-80"
          style={{ border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}
        >
          <div className="w-full h-32 rounded-xl bg-gradient-to-br from-carbon to-smoke relative overflow-hidden">
            <div className="absolute inset-0 bg-neon/10 mix-blend-overlay" />
            <motion.div 
              className="absolute bottom-[-10px] right-[-10px] w-24 h-24 bg-neon/20 rounded-full blur-xl"
              animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
          <div>
            <div className="w-12 h-1 bg-neon/30 mb-2 rounded-full" />
            <div className="h-4 w-3/4 bg-chalk/10 rounded mb-2" />
            <div className="h-4 w-1/2 bg-chalk/10 rounded" />
          </div>
        </motion.div>

        {/* Card 2 - Right */}
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 20, 0], rotate: [2, -2, 2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[15%] right-[5%] w-72 h-40 rounded-2xl glass-card hidden md:flex items-center p-4 gap-4 opacity-90"
          style={{ border: "1px solid rgba(255,255,255,0.9)", boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}
        >
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose/20 to-flame/20 flex-shrink-0 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-2 bg-void rounded-full shadow-inner" />
          </div>
          <div className="flex-1">
            <div className="h-3 w-1/3 bg-flame/30 rounded-full mb-3" />
            <div className="h-5 w-full bg-chalk/10 rounded mb-2" />
            <div className="h-3 w-2/3 bg-chalk/5 rounded" />
          </div>
        </motion.div>

      </motion.div>

      {/* 4. Glass Overlay / Grain for readablity & premium feel */}
      <div className="absolute inset-0 bg-void/30 z-10 pointer-events-none" />
      <div className="grain-overlay z-20" />
    </div>
  );
}
