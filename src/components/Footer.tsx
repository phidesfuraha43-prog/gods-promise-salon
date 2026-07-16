import { MessageCircle, Facebook, Instagram, Heart, ArrowUp } from "lucide-react";
import { salonDetails } from "../data";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, href: salonDetails.socials.whatsapp },
    { name: "Facebook", icon: Facebook, href: salonDetails.socials.facebook },
    { name: "Instagram", icon: Instagram, href: salonDetails.socials.instagram },
  ];

  return (
    <footer className="bg-stone-950 border-t border-stone-900 pt-16 pb-12 relative overflow-hidden text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-gold-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Brand Grid */}
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Logo */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-gold-400">
              GOD'S PROMISE
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.3em] text-beige-300 uppercase font-semibold">
              Salon &amp; Spa
            </span>
          </div>

          {/* Slogan */}
          <p className="text-sm text-beige-100 italic font-light max-w-md">
            "Where Beauty Meets Excellence."
          </p>

          {/* Location text shortcut */}
          <p className="text-xs text-beige-400 font-mono tracking-wide">
            Magongo Jua Kali Stage • Mombasa, Kenya
          </p>

          {/* Social Icons including custom TikTok icon */}
          <div className="flex justify-center items-center gap-4 pt-2">
            {socialLinks.map((social) => {
              const IconComp = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-stone-850 bg-stone-900 text-beige-300 hover:text-gold-400 hover:border-gold-500/50 hover:bg-stone-950 transition-all duration-300 hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  <IconComp className="w-5 h-5" />
                </a>
              );
            })}
            
            {/* Custom stylized TikTok icon (T letter inside a circular brand button) */}
            <a
              href={salonDetails.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 w-11 h-11 rounded-full border border-stone-850 bg-stone-900 text-beige-300 hover:text-gold-400 hover:border-gold-500/50 hover:bg-stone-950 transition-all duration-300 flex items-center justify-center font-bold text-base hover:-translate-y-0.5"
              aria-label="TikTok"
            >
              T
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center space-x-1.5 px-4 py-2 text-xs font-mono tracking-widest text-beige-400 hover:text-gold-400 transition-colors bg-stone-900/60 border border-stone-850 rounded-full hover:border-gold-500/30 cursor-pointer"
            aria-label="Scroll to top"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-stone-900/80 my-10" />

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-beige-500">
          <p>© {new Date().getFullYear()} God's Promise Salon. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-gold-400 fill-gold-400/20" /> for elegance
          </p>
        </div>

      </div>
    </footer>
  );
}
