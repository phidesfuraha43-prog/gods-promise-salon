import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { salonDetails } from "../data";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      
      {/* Small floating hover tooltip */}
      <div className="absolute right-14 bottom-3 whitespace-nowrap bg-stone-900 border border-gold-500/20 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none tracking-wide">
        Chat with Us on WhatsApp
      </div>

      {/* Ripple/Pulsing glow ring */}
      <span className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75 group-hover:animate-none pointer-events-none" />

      {/* Main button link */}
      <a
        href={salonDetails.whatsappUrl}
        target="_blank"
        referrerPolicy="no-referrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Book on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>

    </div>
  );
}
