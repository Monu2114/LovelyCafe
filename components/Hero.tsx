
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// A subtle, dreamy butterfly component
const Butterfly: React.FC<{ delay: number; initialX: string; initialY: string; scale?: number }> = ({ delay, initialX, initialY, scale = 1 }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: [0, 60, -30, 100], // Wandering path
        y: [0, -80, -150, -300], // Generally floating up
        opacity: [0, 0.6, 0.3, 0], // Soft fade in/out
      }}
      transition={{
        duration: 18,
        ease: "easeInOut",
        repeat: Infinity,
        delay: delay,
      }}
      className="absolute z-40 pointer-events-none mix-blend-multiply"
      style={{ left: initialX, top: initialY, scale }}
    >
      <motion.svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="#C98A82" // Rosewood Pink for visibility on Cream
        animate={{ rotate: [0, 10, -10, 0] }} // Gentle rotation
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 12C12 12 14 8 18 8C22 8 22 14 18 16C14 18 12 12 12 12Z" fillOpacity="0.3" />
        <path d="M12 12C12 12 10 8 6 8C2 8 2 14 6 16C10 18 12 12 12 12Z" fillOpacity="0.3" />
        <path d="M12 12C12 12 13 16 16 19C19 22 21 19 19 17C17 15 12 12 12 12Z" fillOpacity="0.5" />
        <path d="M12 12C12 12 11 16 8 19C5 22 3 19 5 17C7 15 12 12 12 12Z" fillOpacity="0.5" />
      </motion.svg>
    </motion.div>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Mask Animation: 
  // 0% -> 0% (fully black/opaque mask = content visible, video hidden)
  // Scroll -> transparent circle expands
  const maskSize = useTransform(scrollYProgress, [0, 0.8], ["0%", "200%"]);
  
  // Text Animations
  const opacity = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const textBlur = useTransform(scrollYProgress, [0, 0.4], ["0px", "10px"]);

  return (
    <div ref={containerRef} className="h-[200vh] relative z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#F8F5EF]">
        
        {/* 1. The Video Background (Revealed on Scroll) */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            poster="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2574&auto=format&fit=crop"
            className="w-full h-full object-cover opacity-90 brightness-[0.85] sepia-[0.1]"
          >
             {/* Reliable Pexels Link: Coffee Cup and Book */}
            <source src="https://videos.pexels.com/video-files/2903882/2903882-hd_1920_1080_30fps.mp4" type="video/mp4" />
            <source src="https://videos.pexels.com/video-files/3195804/3195804-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Warm Overlay on Video */}
          <div className="absolute inset-0 bg-[#3A2F2F]/20 mix-blend-overlay"></div>
        </div>

        {/* 2. The Masking Layer (Cream Foreground) */}
        {/* The mask-image gradient defines visibility. 
            Black = Opaque (See the Cream Layer).
            Transparent = See through (To the Video).
            Initial state: radial-gradient(transparent 0%, black 0%) -> All Black -> All Cream Visible.
        */}
        <motion.div
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#F8F5EF',
                maskImage: useTransform(maskSize, (val) => `radial-gradient(circle at center, transparent ${val}, black ${val})`),
                WebkitMaskImage: useTransform(maskSize, (val) => `radial-gradient(circle at center, transparent ${val}, black ${val})`)
            }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none"
        >
            {/* Butterflies - Now darker pink/brown to be visible on Cream */}
            <Butterfly delay={0} initialX="15%" initialY="65%" scale={1.2} />
            <Butterfly delay={5} initialX="85%" initialY="55%" scale={0.9} />
            <Butterfly delay={2} initialX="25%" initialY="75%" scale={1.1} />
            <Butterfly delay={8} initialX="60%" initialY="85%" scale={0.8} />

            {/* The Title seen BEFORE scrolling (On top of Cream) */}
            <motion.div 
                style={{ scale: textScale, opacity: opacity, filter: `blur(${textBlur})` }}
                className="flex flex-col items-center justify-center text-[#3A2F2F] p-4 relative z-50"
            >
                <motion.div
                  initial={{ opacity: 0, filter: "blur(12px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 2, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <h1 className="text-[16vw] md:text-[14vw] leading-none font-handwriting text-[#C98A82] tracking-wide mb-[-3vw] md:mb-[-4vw] relative mix-blend-multiply">
                      The Lovely
                  </h1>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 2, delay: 0.6, ease: "easeOut" }}
                >
                  <h2 className="text-[10vw] md:text-[10vw] leading-none font-serif tracking-tight text-[#3A2F2F] mt-8 md:mt-12 mix-blend-darken">
                      CAFÉ
                  </h2>
                </motion.div>
            </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0.05, 0.15], [1, 0]) }}
            className="absolute bottom-12 text-[#3A2F2F] text-center z-50"
        >
             <p className="uppercase tracking-[0.2em] text-xs md:text-sm font-medium animate-pulse opacity-60">
                Scroll to Reveal
             </p>
        </motion.div>

      </div>
    </div>
  );
};
