"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;
    let glowX = 0;
    let glowY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      followerX += (mouseX - followerX) * 0.08;
      followerY += (mouseY - followerY) * 0.08;
      glowX += (mouseX - glowX) * 0.04;
      glowY += (mouseY - glowY) * 0.04;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${followerX - 20}px, ${followerY - 20}px)`;
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX - 125}px, ${glowY - 125}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);
    animate();

    const hoverables = document.querySelectorAll("a, button, .product-card, .interactive");
    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        if (followerRef.current) {
          followerRef.current.style.width = "64px";
          followerRef.current.style.height = "64px";
          followerRef.current.style.borderColor = "rgba(17,17,17,0.5)";
          followerRef.current.style.backgroundColor = "rgba(17,17,17,0.02)";
        }
        if (cursorRef.current) {
          cursorRef.current.style.opacity = "0";
        }
      });
      el.addEventListener("mouseleave", () => {
        if (followerRef.current) {
          followerRef.current.style.width = "40px";
          followerRef.current.style.height = "40px";
          followerRef.current.style.borderColor = "rgba(17,17,17,0.2)";
          followerRef.current.style.backgroundColor = "transparent";
        }
        if (cursorRef.current) {
          cursorRef.current.style.opacity = "1";
        }
      });
    });

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Subtle shadow that follows cursor */}
      <div
        ref={glowRef}
        className="fixed w-[250px] h-[250px] rounded-full pointer-events-none z-[9990] hidden lg:block"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)",
        }}
      />
      <div ref={cursorRef} className="cursor hidden lg:block" />
      <div ref={followerRef} className="cursor-follower hidden lg:block" />
    </>
  );
}
