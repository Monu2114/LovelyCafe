import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#2C2522] text-[#F8F5EF] pt-32 pb-12 overflow-hidden">
      {/* Decorative Gradient Fade from top */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#EDE7DB] to-[#2C2522]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-32">
            <span className="font-sans text-sm uppercase tracking-[0.3em] text-[#C98A82] mb-6">Come Say Hello</span>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                className="text-[12vw] font-serif leading-none tracking-tight mix-blend-overlay hover:mix-blend-normal transition-all duration-500 cursor-pointer"
            >
                Visit Us
            </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
            <div>
                <h4 className="font-serif text-xl mb-6 text-[#C98A82]">Location</h4>
                <address className="not-italic font-sans text-sm opacity-70 leading-loose">
                    1402 Rosewood Lane,<br/>
                    Old District, Hyderabad,<br/>
                    India 500033
                </address>
            </div>

            <div>
                <h4 className="font-serif text-xl mb-6 text-[#C98A82]">Hours</h4>
                <ul className="font-sans text-sm opacity-70 leading-loose">
                    <li className="flex justify-between w-32"><span>Mon-Fri</span> <span>08 — 22</span></li>
                    <li className="flex justify-between w-32"><span>Sat-Sun</span> <span>10 — 23</span></li>
                </ul>
            </div>

            <div>
                <h4 className="font-serif text-xl mb-6 text-[#C98A82]">Socials</h4>
                <ul className="font-sans text-sm opacity-70 leading-loose">
                    <li><a href="#" className="hover:text-[#C98A82] transition-colors">Instagram</a></li>
                    <li><a href="#" className="hover:text-[#C98A82] transition-colors">Goodreads</a></li>
                    <li><a href="#" className="hover:text-[#C98A82] transition-colors">Pinterest</a></li>
                </ul>
            </div>

            <div className="flex flex-col justify-end">
                <div className="text-[10px] uppercase tracking-widest opacity-40">
                    Local Time
                </div>
                <div className="font-mono text-xl mt-2">
                    {/* Static for demo, could be dynamic */}
                    Hyderabad: 18:42
                </div>
            </div>
        </div>

        <div className="mt-24 text-center">
            <p className="text-[10px] uppercase tracking-widest opacity-20">
                © 2024 The Lovely Café. Crafted with Love.
            </p>
        </div>
      </div>
    </footer>
  );
};