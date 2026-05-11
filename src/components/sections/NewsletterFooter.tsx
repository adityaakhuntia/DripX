"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const footerLinks = {
  Shop: ["New Arrivals", "Running", "Lifestyle", "Training", "Streetwear", "Sale"],
  Company: ["About Us", "Careers", "Press", "Sustainability", "Investors"],
  Support: ["FAQ", "Shipping & Returns", "Size Guide", "Track Order", "Contact Us"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"],
};

export default function NewsletterFooter() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if (email) { setSubmitted(true); setEmail(""); } };

  return (
    <footer ref={sectionRef}>
      {/* Newsletter section */}
      <div className="relative overflow-hidden bg-abyss border-t border-smoke">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)`, backgroundSize: "80px 80px" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-smoke" />
            <span className="font-mono text-xs tracking-[0.3em] text-chalk uppercase">Stay Ahead</span>
            <div className="w-6 h-[1px] bg-smoke" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-none text-snow mb-4">
            JOIN THE <span className="text-steel">DRIP</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.25 }} className="font-body text-chalk text-base mb-10 max-w-md mx-auto">
            Be first to know about new drops, exclusive launches, and early access to limited editions. No spam — only fire.
          </motion.p>

          <motion.form initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.35 }} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            {submitted ? (
              <div className="flex-1 rounded-full text-sm px-6 py-4 text-center font-body bg-void border border-smoke text-snow shadow-sm">
                ✓ You&apos;re on the list! Welcome to DripX.
              </div>
            ) : (
              <>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" required
                  className="flex-1 border bg-void text-snow placeholder-steel font-body text-sm px-6 py-4 rounded-full focus:outline-none transition-all shadow-sm"
                  style={{ borderColor: "rgba(0,0,0,0.1)" }}
                  onFocus={(e) => { e.target.style.borderColor = "#111"; e.target.style.boxShadow = "0 0 0 1px #111"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.boxShadow = "none"; }}
                />
                <motion.button type="submit" whileHover={{ scale: 1.04, boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }} whileTap={{ scale: 0.97 }}
                  className="font-body font-semibold text-sm px-8 py-4 rounded-full whitespace-nowrap text-void bg-snow transition-all shadow-md"
                >
                  Subscribe →
                </motion.button>
              </>
            )}
          </motion.form>

          <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }} className="font-mono text-[10px] tracking-widest text-steel mt-6 uppercase">
            Join 50,000+ sneakerheads — Unsubscribe anytime
          </motion.p>
        </div>
      </div>

      {/* Footer main */}
      <div className="border-t border-smoke bg-void">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
            <div className="col-span-2">
              <h3 className="font-display text-3xl tracking-[0.15em] mb-4 text-snow">DripX</h3>
              <p className="font-body text-sm text-chalk leading-relaxed mb-6 max-w-xs">Drip Different. Premium footwear crafted at the intersection of performance and culture.</p>
              <div className="flex gap-3">
                {["IG", "TW", "FB", "YT"].map((social) => (
                  <motion.button key={social} whileHover={{ scale: 1.1, borderColor: "#111", color: "#111" }}
                    className="w-9 h-9 border border-smoke rounded-full flex items-center justify-center text-steel font-mono text-[10px] transition-all bg-abyss"
                  >
                    {social}
                  </motion.button>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-mono text-[11px] tracking-[0.25em] uppercase mb-5 text-snow">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}><a href="#" className="font-body text-sm text-steel hover:text-snow animated-underline transition-colors">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-smoke pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-mono text-xs text-steel tracking-wider">© 2025 DripX. All rights reserved. Drip Different.</p>
            <div className="flex items-center gap-6">
              <span className="font-mono text-[10px] text-steel tracking-widest uppercase">Engineered for Motion</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
