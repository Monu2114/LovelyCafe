import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuItem } from '../types';
import { ArrowRight } from 'lucide-react';

const menuData: MenuItem[] = [
  {
    id: 'drinks',
    category: 'Lattes & Shakes',
    items: [
      { name: 'Rose Petal Latte', price: '$6.50', description: 'Infused with organic rose water', image: 'https://images.unsplash.com/photo-1550951177-3e6f980145cf?q=80&w=2574&auto=format&fit=crop' },
      { name: 'Smoked Vanilla Cold Brew', price: '$5.50', description: 'Oak-smoked vanilla bean syrup', image: 'https://images.unsplash.com/photo-1517701604599-bb29b5c7dd90?q=80&w=2670&auto=format&fit=crop' },
      { name: 'Vintage Chocolate Shake', price: '$8.00', description: '70% Dark chocolate, sea salt', image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=2574&auto=format&fit=crop' }
    ]
  },
  {
    id: 'bakes',
    category: 'Fresh Bakes',
    items: [
      { name: 'Almond Croissant', price: '$4.50', description: 'Twice-baked with frangipane', image: 'https://images.unsplash.com/photo-1555507036-ab1f40388085?q=80&w=2526&auto=format&fit=crop' },
      { name: 'Lemon Lavender Cake', price: '$5.00', description: 'Zesty lemon curd glaze', image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&w=2574&auto=format&fit=crop' }
    ]
  },
  {
    id: 'books',
    category: 'Book Collections',
    items: [
      { name: 'Modern Romance', price: 'Various', description: 'Curated contemporary love stories', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=2698&auto=format&fit=crop' },
      { name: 'Classic Poetry', price: 'Various', description: 'Keats, Yeats, and Plath', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=2573&auto=format&fit=crop' }
    ]
  }
];

export const MenuAccordion: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(menuData[0].id);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section className="min-h-screen py-32 px-4 md:px-20 bg-[#F8F5EF] flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-serif text-[#3A2F2F] mb-12">Table & Shelf</h2>
        
        <div className="flex flex-col gap-8">
          {menuData.map((category) => (
            <div key={category.id} className="border-b border-[#D9D6D2] pb-8">
              <button 
                onClick={() => setActiveCategory(category.id)}
                className={`text-2xl font-serif mb-6 transition-colors duration-300 w-full text-left flex justify-between items-center ${activeCategory === category.id ? 'text-[#C98A82]' : 'text-[#3A2F2F]'}`}
              >
                {category.category}
                <motion.span animate={{ rotate: activeCategory === category.id ? 90 : 0 }}>
                    <ArrowRight size={24} strokeWidth={1} />
                </motion.span>
              </button>

              <AnimatePresence mode='wait'>
                {activeCategory === category.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-6 pl-4 pb-4">
                      {category.items.map((item, idx) => (
                        <div 
                            key={idx} 
                            className="group cursor-pointer"
                            onMouseEnter={() => setHoveredImage(item.image)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                          <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-lg font-medium text-[#3A2F2F] group-hover:translate-x-4 transition-transform duration-300 font-serif">
                                {item.name}
                            </h4>
                            <span className="font-sans text-sm text-[#7C8B6A]">{item.price}</span>
                          </div>
                          <p className="font-sans text-xs text-[#3A2F2F]/60 group-hover:translate-x-4 transition-transform duration-300 delay-75">
                              {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <div className="md:w-1/2 relative h-[50vh] md:h-auto hidden md:block">
        <div className="sticky top-32 w-full aspect-[4/5] bg-[#EDE7DB] rounded-sm overflow-hidden p-4">
             <AnimatePresence mode="wait">
                <motion.img 
                    key={hoveredImage || activeCategory}
                    src={hoveredImage || menuData.find(c => c.id === activeCategory)?.items[0].image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover rounded-sm sepia-[0.3]"
                    alt="Menu preview"
                />
             </AnimatePresence>
             {/* Decorative lines */}
             <div className="absolute top-8 left-8 w-[1px] h-24 bg-white/50"></div>
             <div className="absolute top-8 left-8 h-[1px] w-24 bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};