import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { salonDetails } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = ["home", "about", "services", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Gallery", href: "#gallery", id: "gallery" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-stone-950/90 backdrop-blur-md border-b border-gold-500/20 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex flex-col group" onClick={(e) => handleLinkClick(e, "#home")}>
          <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-gold-400 group-hover:text-gold-300 transition-colors duration-300">
            GOD'S PROMISE
          </span>
          <span className="text-[10px] tracking-[0.25em] text-beige-300 -mt-1 group-hover:text-gold-100 transition-colors duration-300 uppercase">
            Salon &amp; Spa
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-1"
              style={{ color: activeSection === link.id ? "#d8aa40" : "#FAF9F6" }}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.span
                  layoutId="activeNavLine"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold-400"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${salonDetails.phone.replace(/\s+/g, "")}`}
            className="flex items-center text-xs font-mono tracking-wide text-beige-300 hover:text-gold-400 transition-colors duration-300"
          >
            <Phone className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
            {salonDetails.phone}
          </a>
          <a
            href={salonDetails.whatsappUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider text-stone-950 bg-gradient-to-r from-gold-400 to-gold-300 hover:from-gold-300 hover:to-gold-400 rounded-full transition-all duration-300 shadow-md hover:shadow-gold-500/20 shadow-transparent transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
            BOOK NOW
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href={salonDetails.whatsappUrl}
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center justify-center p-2 text-xs font-semibold rounded-full text-stone-950 bg-gradient-to-r from-gold-400 to-gold-300 hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-beige-100 hover:text-gold-400 p-1.5 transition-colors duration-300 focus:outline-none"
            aria-label="Toggle menu"
            id="mobile-menu-btn"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-stone-900 border-b border-gold-500/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-3 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`py-2 px-3 rounded-lg text-base font-semibold tracking-wide uppercase transition-all duration-200 ${
                    activeSection === link.id
                      ? "text-gold-400 bg-stone-950 border-l-2 border-gold-400 pl-4"
                      : "text-beige-100 hover:text-gold-300 hover:bg-stone-800"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-stone-800 flex flex-col space-y-3 px-3">
                <a
                  href={`tel:${salonDetails.phone.replace(/\s+/g, "")}`}
                  className="flex items-center text-sm font-mono text-beige-300 hover:text-gold-400"
                >
                  <Phone className="w-4 h-4 mr-2 text-gold-400" />
                  {salonDetails.phone}
                </a>
                <a
                  href={salonDetails.whatsappUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-bold tracking-wider text-stone-950 bg-gradient-to-r from-gold-400 to-gold-300 hover:from-gold-300 hover:to-gold-400 rounded-lg shadow-lg text-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  BOOK ON WHATSAPP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
