"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/ui/Loader";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import HeroSection from "@/components/sections/HeroSection";
import MarqueeTicker, { MarqueeTickerReverse } from "@/components/sections/MarqueeTicker";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import ScrollShowcase from "@/components/sections/ScrollShowcase";
import AboutSection from "@/components/sections/AboutSection";
import CollectionsSection from "@/components/sections/CollectionsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import NewsletterFooter from "@/components/sections/NewsletterFooter";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      {!loading && (
        <SmoothScroll>
          <main className="relative bg-void overflow-x-hidden">
            <Navbar />
            <HeroSection />
            <MarqueeTicker />
            <FeaturedProducts />
            <MarqueeTickerReverse />
            <ScrollShowcase />
            <AboutSection />
            <CollectionsSection />
            <TestimonialsSection />
            <NewsletterFooter />
          </main>
        </SmoothScroll>
      )}
    </>
  );
}
