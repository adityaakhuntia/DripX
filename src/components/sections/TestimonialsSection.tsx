"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [activeIndex, setActiveIndex] = useState(0);
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-32 overflow-hidden bg-section-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-smoke" />
            <span className="font-mono text-xs tracking-[0.3em] text-chalk uppercase">What They Say</span>
            <div className="w-6 h-[1px] bg-smoke" />
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-[clamp(3rem,7vw,5.5rem)] leading-none text-snow">
            REAL <span className="text-steel">STORIES</span>
          </motion.h2>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.id} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
              className="rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-3 transition-all duration-500 group relative overflow-hidden bg-void border border-smoke shadow-sm hover:shadow-xl"
              style={{ marginTop: i % 2 === 1 ? "32px" : "0" }}
            >
              <div className="flex gap-1 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <span key={j} className="text-sm text-snow">★</span>
                ))}
              </div>
              <span className="font-display text-5xl leading-none -mt-2 relative z-10 text-smoke">&ldquo;</span>
              <p className="font-body text-sm text-chalk leading-relaxed -mt-4 relative z-10">{testimonial.text}</p>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-smoke relative z-10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-smoke">
                  <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-snow">{testimonial.name}</p>
                  <p className="font-mono text-[10px] text-steel tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }}
              className="rounded-3xl p-6 relative overflow-hidden bg-void border border-smoke shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, j) => (
                  <span key={j} className="text-snow">★</span>
                ))}
              </div>
              <p className="font-body text-sm text-chalk leading-relaxed mb-6">&ldquo;{testimonials[activeIndex].text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-smoke">
                  <Image src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-body text-sm font-semibold text-snow">{testimonials[activeIndex].name}</p>
                  <p className="font-mono text-[10px] text-steel">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="w-10 h-10 border border-smoke rounded-full flex items-center justify-center text-chalk hover:border-snow hover:text-snow bg-void transition-colors shadow-sm">←</button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActiveIndex(i)} className={`h-1.5 rounded-full transition-all ${i === activeIndex ? "w-6 bg-snow" : "w-2 bg-smoke"}`} />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 border border-smoke rounded-full flex items-center justify-center text-chalk hover:border-snow hover:text-snow bg-void transition-colors shadow-sm">→</button>
          </div>
        </div>

        {/* Trust badges */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.8 }} className="mt-20 flex flex-wrap items-center justify-center gap-10 opacity-30 grayscale">
          {["VOGUE INDIA", "GQ", "ESQUIRE", "HYPEBEAST", "COMPLEX"].map((brand) => (
            <span key={brand} className="font-display text-xl tracking-[0.15em] text-snow hover:opacity-100 transition-all cursor-pointer duration-300">{brand}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
