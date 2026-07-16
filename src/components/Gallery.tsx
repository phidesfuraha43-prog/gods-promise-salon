import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { galleryItems } from "../data";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = ["All", "Hair Braiding", "Eyebrow Tinting", "Toenail Care"];

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : (prev ?? 0) - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : (prev ?? 0) + 1));
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-stone-950 relative overflow-hidden">
      {/* Background glow visual */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.25em] text-gold-400 uppercase font-bold">
            Visual Craftsmanship
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Salon Gallery
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto" />
          <p className="text-beige-300 text-sm sm:text-base leading-relaxed">
            See the actual results delivered by God's Promise Salon. Real clients, real styles, and immaculate attention to detail.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10" id="gallery-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? "bg-gold-500 text-stone-950 shadow-md shadow-gold-500/10"
                  : "bg-stone-900 border border-stone-800 text-beige-300 hover:border-gold-500/20 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              // Find index of item in global filtered list for lightboxing
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setLightboxIndex(idx)}
                  className="group relative aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-stone-900 border border-stone-800 hover:border-gold-500/30 cursor-pointer shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant Gradient Mask */}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-65 group-hover:opacity-85 transition-opacity duration-300" />

                  {/* Corner Accent Zoom Icon */}
                  <div className="absolute top-4 right-4 p-2 rounded-xl bg-stone-950/80 backdrop-blur-md border border-gold-500/20 text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[9px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-beige-300 font-light line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/95 backdrop-blur-md p-4 sm:p-6"
              id="gallery-lightbox"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-stone-900 border border-gold-500/20 text-beige-200 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-6 p-3 rounded-full bg-stone-900/50 hover:bg-stone-900 border border-gold-500/20 text-gold-400 hover:text-gold-300 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 sm:right-6 p-3 rounded-full bg-stone-900/50 hover:bg-stone-900 border border-gold-500/20 text-gold-400 hover:text-gold-300 transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Main Image Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] max-h-[70vh] rounded-[2rem] overflow-hidden border border-gold-500/20 bg-stone-900 shadow-2xl"
              >
                <img
                  src={filteredItems[lightboxIndex].imageUrl}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Lightbox Footer Content */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="mt-6 max-w-xl w-full text-center space-y-3 px-4"
              >
                <span className="text-xs font-mono tracking-widest text-gold-400 uppercase font-bold">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {filteredItems[lightboxIndex].title}
                </h3>
                <p className="text-sm text-beige-300 font-light leading-relaxed">
                  {filteredItems[lightboxIndex].description}
                </p>

                <div className="pt-2 flex justify-center">
                  <a
                    href={`https://wa.me/254791567310?text=Hello%20God's%20Promise%20Salon!%20I'd%20like%20to%20book%20an%20appointment%20to%20get%20a%20style%20similar%20to%20your%20gallery%20item:%20"${encodeURIComponent(filteredItems[lightboxIndex].title)}".`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-stone-950 font-bold tracking-wider text-xs transition-transform transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 mr-1.5" />
                    BOOK THIS STYLE ON WHATSAPP
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
