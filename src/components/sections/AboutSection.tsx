"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (!isInView) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, target, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 50, suffix: "K+", label: "Happy Drippers", description: "Athletes and enthusiasts trust DripX" },
  { value: 120, suffix: "+", label: "Designs", description: "New styles launching every season" },
  { value: 25, suffix: "+", label: "Cities Served", description: "Across India and growing globally" },
  { value: 4, suffix: ".9★", label: "Avg. Rating", description: "Across 12,000+ verified reviews" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-15%" });

  return (
    <section ref={sectionRef} id="about" className="relative py-32 overflow-hidden bg-section-3">
      {/* Subtle background blur blobs - Optimized */}
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none opacity-60" style={{ background: "radial-gradient(circle, var(--carbon) 0%, transparent 70%)" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-6">
            <div className="w-6 h-[2px] bg-snow rounded-full" />
            <span className="font-mono text-xs tracking-[0.3em] text-chalk uppercase">Our Story</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <motion.h2 initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.1 }} className="font-display text-[clamp(3rem,7vw,6rem)] leading-none text-snow">
              ENGINEERED<br />FOR THE<br />
              <span className="text-steel">RELENTLESS</span>
            </motion.h2>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.3 }}>
              <p className="font-body text-chalk text-base leading-relaxed mb-6">DripX was founded in 2020 with a singular obsession: to build footwear that disappears beneath you, letting you move with pure, unimpeded intent.</p>
              <p className="font-body text-chalk text-base leading-relaxed mb-8">We collaborate with biomechanical researchers, elite athletes, and boundary-pushing designers to create shoes that are simultaneously precision instruments and works of art.</p>
              <motion.button whileHover={{ scale: 1.04, backgroundColor: "rgba(0,0,0,0.04)" }} whileTap={{ scale: 0.97 }} className="border border-smoke text-snow font-body text-sm font-medium px-8 py-3.5 rounded-full transition-all">
                Read Our Story →
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[1px] rounded-3xl overflow-hidden border border-smoke shadow-sm bg-smoke">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
              className="p-8 md:p-10 group transition-all duration-500 relative overflow-hidden bg-void hover:bg-abyss"
            >
              <p className="stat-number text-[clamp(2.5rem,6vw,4rem)] leading-none mb-2 text-snow relative z-10">
                <AnimatedCounter target={Math.floor(stat.value)} suffix={stat.suffix} duration={2} />
              </p>
              <p className="font-body text-sm font-semibold text-snow mb-2 relative z-10">{stat.label}</p>
              <p className="font-body text-xs text-steel leading-relaxed relative z-10">{stat.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-snow" />
            </motion.div>
          ))}
        </div>

        {/* Image strip */}
        <div className="mt-16 grid grid-cols-3 gap-4 rounded-3xl overflow-hidden">
          {[
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
            "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&q=80",
            "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80",
          ].map((src, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }} className="relative h-48 md:h-64 overflow-hidden rounded-2xl group">
              <Image src={src} alt="DripX craftsmanship" fill className="object-cover transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-void/10 group-hover:bg-transparent transition-all duration-500" />
            </motion.div>
          ))}
        </div>

        {/* Values */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: "⚡", title: "Innovation", text: "R&D-first approach" },
            { icon: "☁️", title: "Comfort", text: "Zero-compromise cushioning" },
            { icon: "🏆", title: "Performance", text: "Built for champions" },
            { icon: "✦", title: "Style", text: "Timeless design language" },
          ].map((value, i) => (
            <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
              className="rounded-2xl p-6 group transition-all duration-500 relative overflow-hidden border border-smoke hover:border-chalk bg-void shadow-sm hover:shadow-md"
            >
              <span className="text-2xl mb-3 block relative z-10">{value.icon}</span>
              <h4 className="font-heading text-snow font-semibold text-lg mb-1 relative z-10">{value.title}</h4>
              <p className="font-mono text-[10px] tracking-wider text-steel relative z-10">{value.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
