"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        const increment = prev < 60 ? 2 : prev < 85 ? 3 : 5;
        return Math.min(prev + increment, 100);
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key="loader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
    >
      {/* Light elegant ambient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb w-[400px] h-[400px] bg-carbon top-[10%] right-[20%]" />
        <div className="orb w-[300px] h-[300px] bg-abyss bottom-[20%] left-[15%]" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.2) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbiting rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{ border: "1px solid rgba(0,0,0,0.06)" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-snow shadow-sm" />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] rounded-full"
        style={{ border: "1px solid rgba(0,0,0,0.04)" }}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-steel" />
      </motion.div>

      {/* Brand */}
      <div className="overflow-hidden mb-2 relative z-10">
        <motion.h1
          initial={{ y: "120%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          className="font-display text-7xl md:text-9xl text-snow tracking-[0.2em] elegant-shadow"
        >
          DripX
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, letterSpacing: "0.5em" }}
        animate={{ opacity: 0.8, letterSpacing: "0.3em" }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="font-mono text-xs uppercase mb-16 tracking-[0.3em] text-chalk relative z-10"
      >
        Elegant Motion
      </motion.p>

      {/* Progress bar */}
      <div className="w-64 relative z-10">
        <div className="w-full h-[2px] bg-black/10 relative overflow-hidden rounded-full">
          <motion.div
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: progress / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
            className="absolute inset-0 bg-snow rounded-full"
          />
        </div>
        <div className="flex justify-between mt-3">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} transition={{ delay: 0.5 }} className="font-mono text-[10px] text-chalk tracking-widest uppercase">Loading</motion.span>
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="font-mono text-[10px] text-snow tracking-widest">{progress}%</motion.span>
        </div>
      </div>
    </motion.div>
  );
}
