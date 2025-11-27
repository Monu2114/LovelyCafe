import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Search, ShoppingBag } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 mix-blend-difference text-[#F8F5EF]"
    >
      <div className="text-xs tracking-widest uppercase font-medium">
        Est. 2024
      </div>
      
      <div className="flex gap-8">
        <button className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">Menu</button>
        <button className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">Journal</button>
        <button className="text-xs tracking-widest uppercase hover:opacity-70 transition-opacity">Shop</button>
      </div>

      <div className="flex gap-4">
        <Search size={18} strokeWidth={1.5} />
        <ShoppingBag size={18} strokeWidth={1.5} />
      </div>
    </motion.nav>
  );
};