"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Drops", href: "#products" },
  { label: "Collections", href: "#collections" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-4"
            : "bg-transparent py-6"
        )}
        style={scrolled ? {
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
          boxShadow: "0 4px 30px rgba(0,0,0,0.03)",
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#" className="font-display text-2xl tracking-[0.15em] text-snow relative group" whileHover={{ scale: 1.03 }}>
            DripX
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="font-body text-sm font-medium text-chalk animated-underline hover:text-snow transition-colors duration-300">{link.label}</a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-6">
            <button className="font-body text-sm font-medium text-chalk hover:text-snow transition-colors">Search</button>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="font-body text-sm font-semibold px-6 py-2.5 rounded-full text-void bg-snow transition-all"
            >
              Shop Now
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 z-50">
            <motion.span animate={menuOpen ? { rotate: 45, y: 7, backgroundColor: "#111" } : { rotate: 0, y: 0, backgroundColor: "#111" }} className="w-6 h-0.5 block origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-snow block" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -7, backgroundColor: "#111" } : { rotate: 0, y: 0, backgroundColor: "#111" }} className="w-6 h-0.5 block origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 95% 5%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 95% 5%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed top-0 left-0 right-0 bottom-0 z-40 flex flex-col items-center justify-center gap-8 bg-void"
          >
            {/* Grid background */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />
            
            {navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href}
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                onClick={() => setMenuOpen(false)}
                className="font-display text-6xl tracking-[0.15em] text-snow hover:text-steel transition-colors relative group"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="mt-8 font-body text-sm font-semibold px-10 py-4 rounded-full text-void bg-snow shadow-xl"
              onClick={() => setMenuOpen(false)}
            >
              Shop Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
