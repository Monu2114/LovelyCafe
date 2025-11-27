import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SignatureItem } from "../types";

const items: SignatureItem[] = [
  {
    id: 1,
    title: "Strawberry Shake",
    description: "For Two",
    image:
      "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Rainy Corner",
    description: "Quiet Hours",
    image:
      "https://images.unsplash.com/photo-1519682577862-22b62b233c16?q=80&w=2670&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Lover's Latte",
    description: "Hazelnut & Rose",
    image:
      "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2537&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "The Balcony",
    description: "Sunset Views",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop",
  },
];

export const SignatureGallery: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-[#EDE7DB]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute top-12 left-12 z-20">
          <h2 className="text-[#3A2F2F] font-serif text-4xl">
            Signature Moments
          </h2>
          <div className="h-[1px] w-24 bg-[#C98A82] mt-4"></div>
        </div>

        <motion.div style={{ x }} className="flex gap-16 px-20">
          {items.map((item) => (
            <div
              key={item.id}
              className="group relative w-[70vw] md:w-[40vw] flex-shrink-0 cursor-none"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2] brightness-90"
                />
                {/* Lens Simulation via overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 backdrop-blur-[2px]"></div>
              </div>
              <div className="mt-8">
                <p className="font-sans text-xs uppercase tracking-widest text-[#7C8B6A] mb-2">
                  {item.description}
                </p>
                <h3 className="font-serif text-3xl text-[#3A2F2F]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
