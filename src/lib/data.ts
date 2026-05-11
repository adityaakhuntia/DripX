export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  tag?: string;
  image: string;
  color: string;
}

export interface Collection {
  id: number;
  name: string;
  description: string;
  count: number;
  image: string;
  accent: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Drip Velocity Pro",
    category: "Running",
    price: 18999,
    tag: "NEW DROP",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    color: "#00ff88",
  },
  {
    id: 2,
    name: "CloudDrip Elite",
    category: "Lifestyle",
    price: 14999,
    tag: "BESTSELLER",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&q=80",
    color: "#7c3aed",
  },
  {
    id: 3,
    name: "Phantom X",
    category: "Training",
    price: 22999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80",
    color: "#00d4ff",
  },
  {
    id: 4,
    name: "Urban Drip Low",
    category: "Streetwear",
    price: 11999,
    tag: "LIMITED",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    color: "#fbbf24",
  },
  {
    id: 5,
    name: "TerraFlow GTX",
    category: "Running",
    price: 16999,
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=600&q=80",
    color: "#ff3d00",
  },
  {
    id: 6,
    name: "Apex Court OG",
    category: "Lifestyle",
    price: 9999,
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=600&q=80",
    color: "#00ff88",
  },
  {
    id: 7,
    name: "NightRun Carbon",
    category: "Running",
    price: 24999,
    tag: "PRO",
    image: "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?w=600&q=80",
    color: "#7c3aed",
  },
  {
    id: 8,
    name: "SkyDrip Boost",
    category: "Training",
    price: 19999,
    image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80",
    color: "#00d4ff",
  },
];

export const collections: Collection[] = [
  {
    id: 1,
    name: "Running",
    description: "Built for champions who chase every second",
    count: 24,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    accent: "#00ff88",
  },
  {
    id: 2,
    name: "Lifestyle",
    description: "Elevated comfort for everyday journeys",
    count: 31,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
    accent: "#7c3aed",
  },
  {
    id: 3,
    name: "Training",
    description: "Forged in the gym, worn everywhere",
    count: 18,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
    accent: "#00d4ff",
  },
  {
    id: 4,
    name: "Streetwear",
    description: "Culture on every corner, story in every step",
    count: 27,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    accent: "#fbbf24",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    role: "Professional Marathoner, Mumbai",
    text: "DripX completely changed my training. The Velocity Pro series shaved 4 minutes off my marathon time. The energy return is unlike anything I've experienced — it feels like running on clouds while flying.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    id: 2,
    name: "Priya Krishnan",
    role: "Fitness Coach, Bangalore",
    text: "I recommend DripX to every single one of my clients. The build quality is premium, the design is stunning, and my feet have never felt better after a full day of classes. Genuinely life-changing footwear.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    role: "Fashion Blogger, Delhi",
    text: "Finally, a brand that understands the intersection of performance and aesthetics. My CloudDrip Elites get more compliments than any outfit piece I own. Pure luxury, undeniable swagger.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: 4,
    name: "Shreya Nair",
    role: "Product Designer, Hyderabad",
    text: "As a designer, I notice every detail — and DripX nails every single one. The craftsmanship is extraordinary. I ordered three pairs in one month and I have zero regrets. This brand is special.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];
