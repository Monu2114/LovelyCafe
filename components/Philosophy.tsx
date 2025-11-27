import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Philosophy: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.5"]
  });

  const words = "We create spaces where stories and souls meet in quiet luxury.".split(" ");

  return (
    <section ref={targetRef} className="min-h-screen flex items-center justify-center px-4 md:px-20 py-24 bg-[#F8F5EF]">
      <div className="max-w-6xl w-full">
        <p className="text-[8vw] md:text-[5vw] leading-[1.1] font-serif flex flex-wrap gap-x-6 gap-y-2">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + (1 / words.length);
            // eslint-disable-next-line
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            
            return (
              <motion.span 
                key={i}
                style={{ opacity }}
                className={`
                   ${word === 'stories' || word === 'souls' ? 'italic text-[#C98A82]' : 'text-[#3A2F2F]'}
                `}
              >
                {word}
              </motion.span>
            );
          })}
        </p>
        
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1]) }}
            className="mt-16 flex justify-end"
        >
            <div className="max-w-md font-sans text-[#7C8B6A] text-lg leading-relaxed">
                A sanctuary for the mind, brewed with patience and bound in leather.
                <br/>Established 2024.
            </div>
        </motion.div>
      </div>
    </section>
  );
};