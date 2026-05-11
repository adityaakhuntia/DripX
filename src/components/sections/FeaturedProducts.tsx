"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { products } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

export default function FeaturedProducts() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section ref={sectionRef} id="products" className="relative py-32 bg-section-1 overflow-hidden">
      {/* Soft background elements */}
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 60%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-snow rounded-full" />
              <span className="font-mono text-xs tracking-[0.3em] text-chalk uppercase">Fresh Drops</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-snow">
              FEATURED
              <br />
              <span className="text-steel">COLLECTION</span>
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="flex gap-3 flex-wrap">
            {["All", "Running", "Lifestyle", "Training", "Streetwear"].map((filter, i) => (
              <motion.button key={filter} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className={`font-body text-xs px-4 py-2 rounded-full border transition-all ${i === 0 ? "bg-snow text-void font-semibold border-transparent" : "border-smoke text-steel hover:border-chalk hover:text-snow bg-void"}`}>
                {filter}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product) => (
            <motion.div key={product.id} variants={cardVariants} className="product-card group relative rounded-3xl overflow-hidden cursor-pointer">
              {product.tag && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-[10px] tracking-widest px-3 py-1 rounded-full font-semibold" style={{ backgroundColor: product.color + "15", color: product.color, border: `1px solid ${product.color}30` }}>{product.tag}</span>
                </div>
              )}
              <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-smoke hover:border-snow shadow-sm">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </button>

              <div className="relative h-56 flex items-center justify-center p-6 overflow-hidden bg-abyss transition-colors duration-500 group-hover:bg-carbon">
                <motion.div className="relative w-full h-full" whileHover={{ scale: 1.12, rotate: 6 }} transition={{ duration: 0.5 }}>
                  <Image src={product.image} alt={product.name} fill className="object-contain" style={{ filter: `drop-shadow(0 20px 25px rgba(0,0,0,0.15))` }} />
                </motion.div>
              </div>

              <div className="p-5">
                <span className="font-mono text-[10px] tracking-widest text-steel uppercase">{product.category}</span>
                <h3 className="font-heading text-lg font-semibold text-snow mt-1 mb-3 leading-tight">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-body font-semibold text-snow text-base">{formatPrice(product.price)}</span>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="font-body text-xs font-semibold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all text-void shadow-md" style={{ background: product.color }}>
                    Add to Cart
                  </motion.button>
                </div>
                <div className="flex gap-2 mt-3">
                  {[product.color, "#d4d8f0", "#111111"].map((c, i) => (
                    <div key={i} className="w-4 h-4 rounded-full border-2 border-transparent hover:border-smoke transition-all cursor-pointer shadow-sm" style={{ backgroundColor: c }} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }} className="text-center mt-16 relative z-10">
          <motion.button whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }} whileTap={{ scale: 0.97 }} className="border border-smoke bg-void text-snow font-body font-medium px-10 py-4 rounded-full text-sm tracking-wide transition-all shadow-sm">
            View All Products →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
