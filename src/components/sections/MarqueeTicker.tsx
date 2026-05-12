"use client";



const tickerItems = [
  "ELEGANT MOTION", "✦", "PREMIUM CRAFT", "✦", "ENGINEERED COMFORT", "✦",
  "STREET LUXURY", "✦", "LIMITED RELEASES", "✦", "FREE SHIPPING", "✦",
  "ELEGANT MOTION", "✦", "PREMIUM CRAFT", "✦", "ENGINEERED COMFORT", "✦",
  "STREET LUXURY", "✦", "LIMITED RELEASES", "✦", "FREE SHIPPING", "✦",
];

export default function MarqueeTicker() {
  return (
    <div className="relative py-6 overflow-hidden bg-snow">
      <div className="flex animate-marquee">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="font-display text-2xl md:text-3xl tracking-[0.15em] whitespace-nowrap mx-4 md:mx-6 text-void">{item}</span>
        ))}
      </div>
    </div>
  );
}

export function MarqueeTickerReverse() {
  const reverseItems = [
    "50K+ MEMBERS", "◆", "120+ DESIGNS", "◆", "25+ CITIES", "◆", "4.9★ RATING", "◆", "SINCE 2020", "◆",
    "50K+ MEMBERS", "◆", "120+ DESIGNS", "◆", "25+ CITIES", "◆", "4.9★ RATING", "◆", "SINCE 2020", "◆",
  ];

  return (
    <div className="relative py-5 overflow-hidden border-y border-smoke bg-abyss">
      <div className="flex animate-marquee-reverse">
        {[...reverseItems, ...reverseItems].map((item, i) => (
          <span key={i} className="font-mono text-sm tracking-[0.2em] whitespace-nowrap mx-6" style={{ color: i % 2 === 0 ? "#6c757d" : "#111111" }}>{item}</span>
        ))}
      </div>
    </div>
  );
}
