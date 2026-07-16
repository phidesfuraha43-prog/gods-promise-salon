import { motion } from "motion/react";
import { MessageCircle, Scissors, ArrowRight, Sparkles } from "lucide-react";
import { salonDetails } from "../data";

export default function Hero() {
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-32 overflow-hidden bg-stone-950">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-[300px] h-[300px] rounded-full bg-gold-500/5 blur-[80px] pointer-events-none" />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-10 w-[1px] bg-gradient-to-b from-transparent via-gold-500/10 to-transparent hidden xl:block" />
      <div className="absolute top-0 bottom-0 right-10 w-[1px] bg-gradient-to-b from-transparent via-gold-500/10 to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gold-950/40 border border-gold-500/30 text-gold-300 text-xs font-mono tracking-widest uppercase"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-gold-400" />
              <span>Magongo Jua Kali Stage</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Your Beauty, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-200">
                Our Promise.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-beige-200 font-normal leading-relaxed max-w-xl"
            >
              Professional braiding, trendy hairstyles, eyebrow tinting, and toenail care—all delivered with excellence and care in Mombasa.
            </motion.p>

            {/* Micro-Features */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-beige-300 border-t border-stone-800 pt-6 w-full max-w-lg"
            >
              <div className="flex items-center space-x-2">
                <Scissors className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Expert Hair Braiding</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-gold-400 shrink-0" />
                <span>Precision Eyebrow Tinting</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gold-400 font-bold shrink-0">💅</span>
                <span>Hygienic Toenail Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-gold-400 font-bold shrink-0">👑</span>
                <span>Excellence Guaranteed</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto"
            >
              <a
                href={salonDetails.whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-stone-950 font-bold tracking-wider text-sm transition-all duration-300 shadow-lg shadow-gold-500/20 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                BOOK ON WHATSAPP
              </a>
              <button
                onClick={handleScrollToServices}
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-gold-500/30 hover:border-gold-400/80 bg-stone-900/40 hover:bg-stone-900/80 text-white font-semibold tracking-wider text-sm transition-all duration-300 group"
              >
                VIEW SERVICES
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform duration-300 text-gold-400" />
              </button>
            </motion.div>
          </div>

          {/* Hero Right Visuals */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[400px] lg:max-w-none aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden group shadow-2xl border border-gold-500/10"
            >
              {/* Gold frame border accents */}
              <div className="absolute inset-4 border border-gold-400/20 rounded-[1.5rem] pointer-events-none z-20 group-hover:border-gold-400/40 transition-colors duration-500" />
              
              {/* Subtle gold gradient mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/10 to-transparent opacity-60 z-10" />

              {/* Glowing ring animation behind image */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-600/30 to-gold-400/20 rounded-[2rem] blur opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

              {/* The high-quality braids image */}
              <img
                src={salonDetails.heroImage}
                alt="Beautiful African Woman with Elegant Hair Braids"
                className="w-full h-full object-cover relative z-10 transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Card floating badge */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-stone-950/80 backdrop-blur-md border border-gold-500/30 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gold-400 font-mono">Trending Style</p>
                  <p className="text-sm font-serif font-bold text-white">Neat Knotless Braids</p>
                </div>
                <div className="flex items-center space-x-1 text-gold-400 bg-gold-400/10 px-2 py-1 rounded-md text-[10px] font-bold font-mono">
                  <span>★</span>
                  <span>5.0</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
