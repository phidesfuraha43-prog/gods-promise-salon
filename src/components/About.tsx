import { motion } from "motion/react";
import { Heart, Sparkles, MapPin, Users } from "lucide-react";
import { salonDetails } from "../data";

export default function About() {
  const stats = [
    { label: "Happy Clients", value: "850+", icon: Users },
    { label: "Braid Styles Done", value: "1,200+", icon: Sparkles },
    { label: "Satisfaction Rate", value: "100%", icon: Heart },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-stone-900 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-2">
              <p className="text-xs font-mono tracking-[0.25em] text-gold-400 uppercase font-bold">
                Our Story &amp; Values
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                Welcome to God's Promise Salon
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mt-4" />
            </div>

            <p className="text-base sm:text-lg text-beige-200 font-normal leading-relaxed">
              Located at the bustling <strong className="text-gold-300 font-medium">Magongo Jua Kali Stage</strong>, God's Promise Salon is your ultimate sanctuary and trusted destination in Mombasa for expert hair braiding, gorgeous hairstyles, precise eyebrow tinting, and professional toenail care.
            </p>

            <p className="text-beige-300 text-sm sm:text-base leading-relaxed">
              Our sacred mission is simple: to empower and elevate every client who walks through our doors. We believe that beauty is a promise of confidence. Through highly precise protective braiding and refreshing self-care routines, we deliver excellence in a sanitised, friendly, and relaxing environment.
            </p>

            {/* Core Mission Callout */}
            <div className="bg-stone-950/40 border-l-2 border-gold-400 p-5 rounded-r-2xl space-y-2 max-w-2xl">
              <p className="text-xs font-mono text-gold-400 tracking-wider font-bold uppercase flex items-center">
                <Heart className="w-3.5 h-3.5 mr-1.5 text-gold-400 fill-gold-400/20" /> Our Core Promise
              </p>
              <p className="text-sm text-beige-100 italic leading-relaxed">
                "Where Beauty Meets Excellence. We promise premium hair and nail products, skilled stylists who listen to your desires, and a professional finish that leaves you glowing with confidence."
              </p>
            </div>

            {/* Quick Location Highlight */}
            <div className="flex items-start space-x-3 text-beige-300 text-sm">
              <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5 animate-bounce" />
              <div>
                <p className="font-semibold text-white">Easy to Find</p>
                <p>Located conveniently right at Magongo Jua Kali Stage, easily accessible by public transport or personal car with nearby parking.</p>
              </div>
            </div>
          </div>

          {/* Right Visual / Stats Column */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Visual Box / Card */}
            <div className="bg-stone-950 border border-gold-500/10 p-8 sm:p-10 rounded-[2rem] relative shadow-2xl overflow-hidden group">
              {/* Abstract decorative shape */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Beauty with Excellence
              </h3>
              <p className="text-sm text-beige-300 leading-relaxed mb-6">
                Our salon stands for absolute safety, warm service, and professional outcomes. Every braid is sectioned with geometric perfection and tensioned perfectly to prevent scalp damage or hairline stress.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 pt-6 border-t border-stone-800">
                {stats.map((stat, idx) => {
                  const IconComp = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 bg-stone-900/40 p-4 rounded-xl border border-gold-500/5 hover:border-gold-500/20 transition-all duration-300"
                    >
                      <div className="p-3 rounded-lg bg-gold-400/10 text-gold-400 shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-white font-mono">{stat.value}</p>
                        <p className="text-xs text-beige-400 tracking-wide font-medium">{stat.label}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Customer Love Stamp */}
            <div className="bg-gradient-to-r from-gold-950/20 to-stone-950 border border-gold-500/15 p-5 rounded-2xl flex items-center space-x-4">
              <div className="flex -space-x-2">
                <span className="w-8 h-8 rounded-full border border-stone-900 bg-gold-500 flex items-center justify-center font-bold text-xs text-stone-950">P</span>
                <span className="w-8 h-8 rounded-full border border-stone-900 bg-gold-300 flex items-center justify-center font-bold text-xs text-stone-950">A</span>
                <span className="w-8 h-8 rounded-full border border-stone-900 bg-gold-400 flex items-center justify-center font-bold text-xs text-stone-950">F</span>
              </div>
              <div className="text-xs text-beige-300">
                Loved by salon lovers in <span className="text-gold-400 font-bold">Magongo, Changamwe &amp; Mombasa</span>.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
