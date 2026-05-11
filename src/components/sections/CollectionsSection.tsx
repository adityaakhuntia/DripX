"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { collections } from "@/lib/data";

export default function CollectionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section ref={sectionRef} id="collections" className="relative py-32 overflow-hidden bg-section-3">
      {/* Background elegant grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-smoke" />
            <span className="font-mono text-xs tracking-[0.3em] text-chalk uppercase">Shop by Category</span>
            <div className="w-6 h-[1px] bg-smoke" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-snow">
            OUR <span className="text-steel">COLLECTIONS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {collections.map((collection, i) => (
            <motion.div key={collection.id} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="relative rounded-3xl overflow-hidden cursor-pointer group shadow-sm hover:shadow-xl transition-shadow duration-500"
              style={{ height: i < 2 ? "420px" : "320px", border: `1px solid rgba(0,0,0,0.05)` }}
              onMouseEnter={() => setHovered(collection.id)} onMouseLeave={() => setHovered(null)}
            >
              <Image src={collection.image} alt={collection.name} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              
              {/* Elegant soft gradient overlay */}
              <motion.div animate={{ opacity: hovered === collection.id ? 0.7 : 0.4 }} transition={{ duration: 0.4 }}
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)` }}
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase font-semibold text-snow">{collection.count} Styles</span>
                  <motion.div animate={{ x: hovered === collection.id ? 0 : 10, opacity: hovered === collection.id ? 1 : 0 }} transition={{ duration: 0.3 }}
                    className="rounded-full px-4 py-1.5 text-xs font-body font-medium bg-snow text-void shadow-sm"
                  >
                    Explore →
                  </motion.div>
                </div>

                <div>
                  <motion.p animate={{ y: hovered === collection.id ? 0 : 10, opacity: hovered === collection.id ? 1 : 0 }} transition={{ duration: 0.3 }} className="font-body text-sm text-chalk mb-2">{collection.description}</motion.p>
                  <h3 className="font-display text-4xl md:text-5xl text-snow leading-none">{collection.name.toUpperCase()}</h3>
                  <motion.div animate={{ width: hovered === collection.id ? "60px" : "0px" }} transition={{ duration: 0.4 }} className="h-[2px] mt-4 rounded-full bg-snow" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.7 }} className="mt-12 text-center">
          <motion.button whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(0,0,0,0.08)" }} whileTap={{ scale: 0.97 }}
            className="font-body font-semibold px-10 py-4 rounded-full text-sm tracking-wide text-void bg-snow transition-all shadow-sm border border-smoke"
          >
            Browse All Collections →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
