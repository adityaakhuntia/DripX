import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DripX — Drip Different",
  description:
    "Premium streetwear footwear engineered for the culture. Explore DripX's boundary-pushing collections where performance meets drip.",
  keywords: ["DripX", "premium sneakers", "streetwear footwear", "luxury kicks", "drip shoes"],
  openGraph: {
    title: "DripX — Drip Different",
    description: "Where performance meets drip. Premium footwear for the culture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="grain-overlay">{children}</body>
    </html>
  );
}
