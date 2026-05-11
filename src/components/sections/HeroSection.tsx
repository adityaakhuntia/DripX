"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const shoeY = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const shoeRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const shoeScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };

  const lineVariants = {
    hidden: { y: "120%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } },
  };

  const fadeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-hero">
      {/* Elegant soft blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[600px] h-[600px] top-[-100px] right-[-100px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 60%)", filter: "blur(60px)" }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-[500px] h-[500px] bottom-[-50px] left-[-150px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 60%)", filter: "blur(60px)" }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
          {/* Left: Text */}
          <motion.div style={{ y: textY, opacity }} variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col gap-8">
            <motion.div variants={fadeVariants} className="flex items-center gap-3">
              <div className="w-8 h-[2px] bg-snow rounded-full" />
              <span className="font-mono text-xs tracking-[0.3em] text-chalk uppercase">Season 2025 — New Drop</span>
            </motion.div>

            <div className="space-y-1">
              <div className="overflow-hidden">
                <motion.h1 variants={lineVariants} className="font-display text-[clamp(4.5rem,12vw,9rem)] leading-[0.9] text-snow tracking-tight">DRIP</motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={lineVariants}
                  className="font-display text-[clamp(4.5rem,12vw,9rem)] leading-[0.9] tracking-tight elegant-text"
                >
                  DIFFERENT
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1 variants={lineVariants} className="font-display text-[clamp(4.5rem,12vw,9rem)] leading-[0.9] text-snow tracking-tight">DAILY</motion.h1>
              </div>
            </div>

            <motion.p variants={fadeVariants} className="font-body text-base md:text-lg text-chalk leading-relaxed max-w-md">
              Precision-engineered kicks where biomechanical science meets uncompromising drip. Every step, a statement.
            </motion.p>

            <motion.div variants={fadeVariants} className="flex flex-wrap gap-4 mt-2">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}
                whileTap={{ scale: 0.97 }}
                className="bg-snow text-void font-body font-semibold px-8 py-4 rounded-full text-sm tracking-wide transition-all"
              >
                Explore Drops
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.04, backgroundColor: "rgba(0,0,0,0.02)" }}
                whileTap={{ scale: 0.97 }}
                className="border border-smoke text-snow font-body font-medium px-8 py-4 rounded-full text-sm tracking-wide transition-all"
              >
                Shop Now →
              </motion.button>
            </motion.div>

            <motion.div variants={fadeVariants} className="flex gap-10 pt-8 border-t border-smoke mt-4">
              {[
                { value: "50K+", label: "Drippers" },
                { value: "120+", label: "Designs" },
                { value: "25+", label: "Cities" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-snow">{stat.value}</p>
                  <p className="font-mono text-[10px] text-steel tracking-wider uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Floating shoe */}
          <div className="relative flex items-center justify-center h-[500px] lg:h-[700px]">
            {/* Elegant backdrop circles */}
            <div
              className="absolute w-[450px] h-[450px] rounded-full bg-void shadow-[0_20px_60px_rgba(0,0,0,0.05)] border border-smoke/50"
            />
            
            {/* Orbiting ring */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} className="absolute w-[380px] h-[380px] rounded-full" style={{ border: "1px dashed rgba(0,0,0,0.1)" }} />

            {/* Editor pick badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute top-[15%] right-[5%] bg-snow text-void rounded-full px-4 py-2 text-xs font-mono font-semibold tracking-wider z-20 shadow-xl"
            >
              ★ EDITOR&apos;S PICK
            </motion.div>

            {/* Price tag */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="absolute bottom-[20%] right-[0%] glass-card rounded-2xl px-5 py-4 z-20"
            >
              <p className="font-mono text-[10px] text-steel tracking-wider">Starting from</p>
              <p className="font-display text-2xl text-snow">₹9,999</p>
            </motion.div>

            {/* Main shoe */}
            <motion.div
              style={{ y: shoeY, rotate: shoeRotate, scale: shoeScale }}
              animate={{ y: [0, -20, 0], rotate: [-4, 4, -4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[380px] h-[380px] md:w-[520px] md:h-[520px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=90"
                alt="DripX Velocity Pro"
                fill
                className="object-contain"
                style={{ filter: "drop-shadow(0 30px 40px rgba(0,0,0,0.25))" }}
                priority
              />
            </motion.div>

            {/* Soft shadow under shoe */}
            <motion.div
              animate={{ scaleX: [1, 0.8, 1], opacity: [0.15, 0.05, 0.15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] w-56 h-10 rounded-full blur-2xl bg-black"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.4em] text-steel uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-px h-10 bg-gradient-to-b from-black to-transparent" />
      </motion.div>
    </section>
  );
}
