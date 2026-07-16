import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Check, PhoneCall, MessageCircle } from "lucide-react";
import { serviceCategories, salonDetails } from "../data";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const activeCategoryData = serviceCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-stone-950 relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-0 right-1/4 w-[350px] h-[350px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.25em] text-gold-400 uppercase font-bold">
            Tailored Elegance
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Our Premium Services
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto" />
          <p className="text-beige-300 text-sm sm:text-base leading-relaxed">
            Choose from our specialized beauty menu. Every service is delivered with high-grade hygiene, scalp-safe materials, and meticulous styling craftsmanship.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12" id="service-tabs">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-gold-500 to-gold-400 text-stone-950 shadow-md shadow-gold-500/10"
                  : "bg-stone-900 border border-stone-800 text-beige-200 hover:border-gold-500/30 hover:text-white"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <p className="text-sm text-beige-400 italic">
              {activeCategoryData?.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Services Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {activeCategoryData?.items.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-stone-900/60 backdrop-blur-sm border border-stone-800 hover:border-gold-500/30 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gold-500/5 group relative overflow-hidden"
              >
                {/* Visual card corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold-500/5 to-transparent rounded-bl-3xl pointer-events-none group-hover:from-gold-500/10 transition-colors duration-300" />
                
                <div className="space-y-4">
                  {/* Service Header: Name & Price */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.price && (
                      <span className="shrink-0 font-mono text-xs sm:text-sm font-semibold tracking-wider text-gold-400 bg-gold-400/5 px-2.5 py-1.5 rounded-lg border border-gold-500/20">
                        {item.price}
                      </span>
                    )}
                  </div>

                  {/* Service Description */}
                  <p className="text-sm text-beige-300 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights/Features Checklist */}
                  {item.features && item.features.length > 0 && (
                    <ul className="space-y-2 pt-2">
                      {item.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center text-xs text-beige-400">
                          <Check className="w-3.5 h-3.5 text-gold-400 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Card Button Footer */}
                <div className="pt-6 mt-6 border-t border-stone-800 flex items-center justify-between">
                  <span className="text-[10px] tracking-widest font-mono text-beige-500 uppercase group-hover:text-gold-500/60 transition-colors duration-300">
                    EXCELLENCE ASSURED
                  </span>
                  
                  <a
                    href={`https://wa.me/254791567310?text=Hello%20God's%20Promise%20Salon!%20I'd%20like%20to%20book%20or%20ask%20about%20your%20${encodeURIComponent(item.name)}.`}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="inline-flex items-center text-xs font-semibold tracking-wider text-gold-400 hover:text-gold-300 transition-colors duration-300"
                  >
                    <MessageCircle className="w-3.5 h-3.5 mr-1 text-gold-500" />
                    BOOK NOW
                  </a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic bottom call to action */}
        <div className="mt-16 bg-stone-900 border border-gold-500/10 rounded-[2rem] p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="text-left max-w-xl space-y-2">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-400 animate-spin" />
              Need a Custom Hairstyling or Custom Braid Length?
            </h4>
            <p className="text-sm text-beige-300 leading-relaxed">
              We specialize in custom protective patterns, beads, braids of extreme lengths, or coloring. Reach out on WhatsApp with reference photos to get a customized price estimate instantly!
            </p>
          </div>
          <a
            href={salonDetails.whatsappUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-stone-950 hover:bg-stone-900 text-gold-400 border border-gold-500/30 hover:border-gold-400/80 font-semibold tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4 mr-2 text-gold-400" />
            CHATS &amp; ESTIMATES
          </a>
        </div>

      </div>
    </section>
  );
}
