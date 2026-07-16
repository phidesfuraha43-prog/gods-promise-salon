import { motion } from "motion/react";
import { UserCheck, Smile, Tag, ShieldCheck, Compass, Sparkles } from "lucide-react";
import { features } from "../data";

export default function WhyChooseUs() {
  // Map icons to features based on index
  const icons = [
    UserCheck,    // Professional Stylists
    Smile,        // Friendly Customer Service
    Tag,          // Affordable Prices
    Sparkles,     // Clean & Comfortable Salon
    Compass,      // Latest Hairstyle Trends
    ShieldCheck,  // Quality Products
  ];

  return (
    <section className="py-20 lg:py-28 bg-stone-900 relative overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.25em] text-gold-400 uppercase font-bold">
            The Salon Difference
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto" />
          <p className="text-beige-300 text-sm sm:text-base leading-relaxed">
            We are dedicated to providing an unmatched salon experience. Here is why clients keep choosing God's Promise Salon for all their beauty needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, idx) => {
            const IconComp = icons[idx] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(197, 155, 39, 0.4)" }}
                className="bg-stone-950 border border-stone-800/80 rounded-3xl p-6 sm:p-8 flex flex-col items-start text-left space-y-4 transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                {/* Background glow in card on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gold-500/0 to-gold-400/0 rounded-3xl group-hover:from-gold-500/5 group-hover:to-gold-400/5 blur transition-all duration-500 pointer-events-none" />

                {/* Styled icon circle */}
                <div className="p-4 rounded-2xl bg-stone-900 text-gold-400 border border-stone-800 group-hover:bg-gold-500 group-hover:text-stone-950 transition-all duration-500">
                  <IconComp className="w-6 h-6" />
                </div>

                <div className="space-y-2 z-10">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-beige-300 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
