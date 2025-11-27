import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MaterialTexture } from "../types";
import { X, Plus } from "lucide-react";

const textures: MaterialTexture[] = [
  {
    id: "foam",
    name: "Velvet Foam",
    description: "Sourced from local artisan roasters.",
    detail: "Micro-foam texturing at 65°C",
    image:
      "https://images.unsplash.com/photo-1542384557-0824d90731ee?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "paper",
    name: "Aged Pages",
    description: "Vintage book paper, 1960s.",
    detail: "Imported from Parisian flea markets",
    image:
      "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: "wood",
    name: "Oak Grain",
    description: "Reclaimed oak from Jaipur cafés.",
    detail: "Hand-polished with beeswax",
    image:
      "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?q=80&w=2535&auto=format&fit=crop",
  },
];

export const MaterialLibrary: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="py-32 px-4 md:px-12 bg-[#F8F5EF]">
      <div className="mb-16 text-center">
        <span className="text-xs font-sans uppercase tracking-widest text-[#C98A82]">
          The Elements
        </span>
        <h2 className="text-5xl font-serif text-[#3A2F2F] mt-4">
          Material Library
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {textures.map((item) => (
          <motion.div
            layoutId={`card-${item.id}`}
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className="group relative aspect-square cursor-pointer overflow-hidden rounded-sm"
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover grayscale-[20%] group-hover:scale-110 transition-transform duration-700"
            />
            <motion.div className="absolute inset-0 bg-[#3A2F2F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <div className="bg-[#F8F5EF] p-4 rounded-full">
                <Plus size={24} className="text-[#3A2F2F]" />
              </div>
            </motion.div>
            <motion.div className="absolute bottom-6 left-6 text-[#F8F5EF]">
              <h3 className="font-serif text-xl">{item.name}</h3>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#3A2F2F]/40 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
          >
            {textures.map(
              (item) =>
                item.id === selectedId && (
                  <motion.div
                    layoutId={`card-${item.id}`}
                    key={item.id}
                    className="bg-[#F8F5EF] w-full max-w-4xl overflow-hidden shadow-2xl rounded-sm grid grid-cols-1 md:grid-cols-2 relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur rounded-full hover:bg-white/40 transition-colors"
                    >
                      <X size={20} className="text-[#3A2F2F]" />
                    </button>

                    <div className="h-64 md:h-[60vh]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-12 flex flex-col justify-center">
                      <span className="text-[#C98A82] text-xs font-sans uppercase tracking-widest mb-4">
                        Texture Detail
                      </span>
                      <h3 className="font-serif text-4xl text-[#3A2F2F] mb-6">
                        {item.name}
                      </h3>
                      <p className="font-serif text-lg text-[#3A2F2F]/80 italic mb-8">
                        "{item.description}"
                      </p>

                      <div className="border-t border-[#D9D6D2] pt-8">
                        <p className="font-sans text-sm text-[#7C8B6A] leading-relaxed">
                          {item.detail}. At The Lovely Café, every surface tells
                          a story. We believe touch is the first language of
                          comfort.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
