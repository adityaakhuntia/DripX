"use client";

import { useRef, useEffect, useLayoutEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const showcaseItems = [
  { id: 1, label: "01 / VELOCITY", title: "Born to Run", subtitle: "Carbon-plate propulsion", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80", color: "#2563eb", bg: "#f8f9fa" },
  { id: 2, label: "02 / CLOUD", title: "Step on Air", subtitle: "Zero-gravity cushioning", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=700&q=80", color: "#7c3aed", bg: "#f1f3f5" },
  { id: 3, label: "03 / PHANTOM", title: "Invisible Weight", subtitle: "24g ultra-light upper", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=700&q=80", color: "#0ea5e9", bg: "#e9ecef" },
  { id: 4, label: "04 / URBAN", title: "Street Royalty", subtitle: "Culture in motion", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=700&q=80", color: "#ea580c", bg: "#dee2e6" },
];

export default function ScrollShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;
      
      const getScrollAmount = () => {
        if (!track || !section) return 0;
        return track.scrollWidth - window.innerWidth;
      };
      
      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });
      
      if (headingRef.current) {
        gsap.fromTo(headingRef.current, 
          { opacity: 0, y: 60 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            scrollTrigger: { 
              trigger: section, 
              start: "top 80%", 
              end: "top 40%", 
              scrub: false, 
              toggleActions: "play none none reverse" 
            } 
          }
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative bg-section-2 overflow-hidden">
      {/* Background elegant grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`, backgroundSize: "100px 100px" }} />

      <div className="py-20 px-6 text-center relative z-10">
        <h2 ref={headingRef} className="font-display text-[clamp(3rem,8vw,6rem)] leading-none text-snow">
          THE <span className="text-steel">COLLECTION</span>
        </h2>
        <p className="font-body text-chalk mt-4 text-base md:text-lg">Scroll to explore our signature series</p>
        <div className="w-32 h-[1px] bg-smoke mx-auto mt-6" />
      </div>

      <div ref={trackRef} className="horizontal-scroll-track flex gap-6 px-6 pb-24 w-max relative z-10">
        {showcaseItems.map((item, index) => (
          <div key={item.id} className="flex-shrink-0 w-[85vw] md:w-[55vw] lg:w-[42vw] overflow-hidden relative group" style={{ background: item.bg, borderRadius: "2rem", border: `1px solid rgba(0,0,0,0.05)` }}>
            {/* Card inner */}
            <div className="relative h-[70vh] md:h-[80vh] flex flex-col justify-between p-8">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.3em] font-semibold" style={{ color: item.color }}>{item.label}</span>
                <motion.div whileHover={{ scale: 1.1, backgroundColor: item.color, color: "#fff", borderColor: item.color }} className="w-10 h-10 rounded-full flex items-center justify-center border border-smoke cursor-pointer transition-colors" style={{ color: item.color }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </motion.div>
              </div>

              <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ y: [0, -18, 0], rotate: [-2, 2, -2] }} transition={{ duration: 4 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}>
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                  <Image src={item.image} alt={item.title} fill className="object-contain" style={{ filter: `drop-shadow(0 30px 40px rgba(0,0,0,0.2))` }} />
                </div>
              </motion.div>

              <div>
                <p className="font-mono text-xs text-chalk mb-1 tracking-wider">{item.subtitle}</p>
                <h3 className="font-display text-5xl md:text-6xl text-snow leading-none">{item.title}</h3>
                <div className="mt-6 flex items-center gap-4">
                  <motion.button whileHover={{ scale: 1.05, boxShadow: `0 10px 25px rgba(0,0,0,0.1)` }} whileTap={{ scale: 0.97 }} className="font-body text-sm font-semibold px-6 py-3 rounded-full text-void shadow-md" style={{ background: item.color }}>Shop Series</motion.button>
                  <span className="font-mono text-xs text-chalk tracking-wider">From ₹{[18999, 14999, 22999, 11999][index].toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* End card */}
        <div className="flex-shrink-0 w-[40vw] md:w-[25vw] flex items-center justify-center relative overflow-hidden bg-snow text-void" style={{ borderRadius: "2rem", minHeight: "70vh" }}>
          <div className="text-center p-8 relative z-10">
            <p className="font-display text-4xl mb-4">VIEW ALL</p>
            <p className="font-mono text-xs mb-8 tracking-widest text-steel">120+ Designs</p>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="border border-smoke text-void bg-void font-body text-sm px-6 py-3 rounded-full hover:bg-smoke transition-all">Explore →</motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
