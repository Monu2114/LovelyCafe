import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StoriesGrid: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -250]); // Faster parallax

  return (
    <section ref={containerRef} className="py-32 bg-[#EDE7DB] overflow-hidden">
        <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
            <div>
                 <span className="font-sans text-xs uppercase tracking-widest text-[#C98A82]">The Journal</span>
                 <h2 className="font-serif text-5xl text-[#3A2F2F] mt-4">Stories in Ink</h2>
            </div>
            <p className="font-serif italic text-xl hidden md:block text-[#3A2F2F]/70">"Some stories taste better with warm coffee."</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 max-w-7xl mx-auto">
            {/* Column 1 - Normal Scroll */}
            <motion.div style={{ y: y1 }} className="flex flex-col gap-12">
                <div className="relative aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1515549832467-8783363e19b6?q=80&w=2454&auto=format&fit=crop" className="w-full h-full object-cover" alt="Reading" />
                    <div className="absolute -bottom-6 -right-6 bg-[#F8F5EF] p-6 shadow-sm max-w-[200px]">
                        <p className="font-serif italic text-sm text-[#3A2F2F]">Notes on solitude and latte art.</p>
                    </div>
                </div>
                
                <div className="bg-[#F8F5EF] p-12 flex items-center justify-center text-center aspect-square">
                    <p className="font-serif text-2xl leading-relaxed text-[#3A2F2F]">
                        "I love the smell of book ink in the morning."
                    </p>
                </div>

                <div className="relative aspect-[4/3]">
                     <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2673&auto=format&fit=crop" className="w-full h-full object-cover" alt="Library" />
                </div>
            </motion.div>

            {/* Column 2 - Faster Scroll (Parallax) */}
            <motion.div style={{ y: y2 }} className="flex flex-col gap-12 pt-24">
                <div className="bg-[#3A2F2F] p-12 flex flex-col justify-between text-[#F8F5EF] aspect-[3/4]">
                    <span className="text-xs uppercase tracking-widest text-[#C98A82]">Featured</span>
                    <h3 className="font-serif text-4xl">The Lost Art of <br/>Letter Writing</h3>
                    <p className="font-sans text-sm opacity-70">Join our workshop this Sunday.</p>
                </div>

                <div className="relative aspect-[3/4]">
                    <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover" alt="Coffee" />
                </div>

                <div className="relative aspect-square">
                     <img src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2670&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[30%]" alt="Window" />
                </div>
            </motion.div>
        </div>
    </section>
  );
};