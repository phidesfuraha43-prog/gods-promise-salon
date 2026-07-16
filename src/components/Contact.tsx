import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, Calendar, Clock, User, Heart, Send, CheckCircle2 } from "lucide-react";
import { salonDetails } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Knotless Braids",
    date: "",
    time: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const servicesList = [
    "Knotless Braids",
    "Box Braids",
    "Stitch Braids",
    "Cornrows",
    "Fulani Braids",
    "Kids Hairstyles",
    "Protective Styles",
    "Fashion Hairstyles",
    "Eyebrow Shaping & Tinting",
    "Luxury Toenail Care & Polish",
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending, then format and trigger WhatsApp redirection
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);

      // Create a beautifully structured booking message
      const message = `Hello God's Promise Salon! I'd like to book an appointment with you.

📋 BOOKING DETAILS:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Service: ${formData.service}
• Date: ${formData.date}
• Time: ${formData.time}
${formData.notes ? `• Special Notes: ${formData.notes}` : ""}

Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const waUrl = `https://wa.me/254791567310?text=${encodedMessage}`;

      // Open WhatsApp after a brief delay so the user sees our lovely success state
      setTimeout(() => {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }, 1000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-stone-950 relative overflow-hidden">
      {/* Background visual glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-mono tracking-[0.25em] text-gold-400 uppercase font-bold">
            Secure Your Spot
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Book Appointment
          </h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto" />
          <p className="text-beige-300 text-sm sm:text-base leading-relaxed">
            Fill out our quick appointment planner or click directly to chat with us on WhatsApp. We look forward to pampering you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Booking Planner Form */}
          <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-[2.5rem] p-6 sm:p-10 relative overflow-hidden shadow-2xl flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <AnimatePresence mode="wait">
              {!showSuccess ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                    Appointment Planner
                  </h3>
                  <p className="text-xs text-beige-400 font-light -mt-2 mb-4">
                    Fill this out to generate a pre-formatted WhatsApp booking text automatically.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-beige-200">
                        Full Name <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-stone-500 pointer-events-none">
                          <User className="w-4 h-4 text-beige-400/60" />
                        </span>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Phides Furaha"
                          className="w-full pl-10 pr-4 py-3 bg-stone-950 border border-stone-800 focus:border-gold-500/50 rounded-xl text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-beige-200">
                        Phone Number <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-stone-500 pointer-events-none">
                          <Phone className="w-4 h-4 text-beige-400/60" />
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="0791 567 310"
                          className="w-full pl-10 pr-4 py-3 bg-stone-950 border border-stone-800 focus:border-gold-500/50 rounded-xl text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {/* Select Service */}
                    <div className="space-y-2 sm:col-span-1">
                      <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-beige-200">
                        Desired Service
                      </label>
                      <select
                        name="service"
                        id="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 bg-stone-950 border border-stone-800 focus:border-gold-500/50 rounded-xl text-sm text-white focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        {servicesList.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div className="space-y-2">
                      <label htmlFor="date" className="block text-xs font-semibold uppercase tracking-wider text-beige-200">
                        Preferred Date <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-stone-500 pointer-events-none">
                          <Calendar className="w-4 h-4 text-beige-400/60" />
                        </span>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-stone-950 border border-stone-800 focus:border-gold-500/50 rounded-xl text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-2">
                      <label htmlFor="time" className="block text-xs font-semibold uppercase tracking-wider text-beige-200">
                        Preferred Time <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-stone-500 pointer-events-none">
                          <Clock className="w-4 h-4 text-beige-400/60" />
                        </span>
                        <input
                          type="time"
                          name="time"
                          id="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-stone-950 border border-stone-800 focus:border-gold-500/50 rounded-xl text-sm text-white focus:outline-none transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Special Notes */}
                  <div className="space-y-2">
                    <label htmlFor="notes" className="block text-xs font-semibold uppercase tracking-wider text-beige-200">
                      Special Notes / Reference Style
                    </label>
                    <textarea
                      name="notes"
                      id="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="e.g., I want waist-length braids with beads, or dynamic color gradients."
                      className="w-full px-4 py-3 bg-stone-950 border border-stone-800 focus:border-gold-500/50 rounded-xl text-sm text-white focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center py-4 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-500 text-stone-950 font-bold tracking-wider text-sm rounded-xl transition-all shadow-lg hover:shadow-gold-500/10 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    id="submit-booking-btn"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center space-x-2">
                        <span className="w-4 h-4 border-2 border-stone-950 border-t-transparent rounded-full animate-spin" />
                        <span>PREPARING TICKET...</span>
                      </span>
                    ) : (
                      <span className="flex items-center space-x-2">
                        <Send className="w-4 h-4 mr-1" />
                        <span>SUBMIT &amp; OPEN WHATSAPP BOOKING</span>
                      </span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                >
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full animate-bounce">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Booking Details Formatted!</h3>
                  <p className="text-beige-300 text-sm max-w-md leading-relaxed">
                    We have compiled your appointment request and are redirecting you to WhatsApp to send it directly. If the WhatsApp window did not open, click the button below.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-4">
                    <a
                      href={`https://wa.me/254791567310?text=${encodeURIComponent(
                        `Hello God's Promise Salon! I'd like to book an appointment.\n\n📋 BOOKING DETAILS:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Date: ${formData.date}\n• Time: ${formData.time}`
                      )}`}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-sm tracking-wide shadow-lg transition-transform transform hover:-translate-y-0.5"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      RE-OPEN WHATSAPP
                    </a>
                    <button
                      onClick={() => {
                        setFormData({ name: "", phone: "", service: "Knotless Braids", date: "", time: "", notes: "" });
                        setShowSuccess(false);
                      }}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-stone-800 text-beige-300 hover:text-white hover:bg-stone-800 text-sm tracking-wide font-medium"
                    >
                      BOOK ANOTHER
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: General Information and Instant Support Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Direct Book Card */}
            <div className="bg-stone-900 border border-gold-500/10 rounded-[2rem] p-8 text-left space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-2xl font-bold text-white">
                Instant Booking
              </h3>
              <p className="text-sm text-beige-300 leading-relaxed">
                Skip the planner and message us directly. Tap the booking button below to open a direct chat window with us, pre-filled with an appointment request immediately.
              </p>

              {/* Major WhatsApp Callout Button */}
              <a
                href={salonDetails.whatsappUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full inline-flex items-center justify-center py-4 rounded-xl bg-stone-950 hover:bg-stone-900 text-gold-400 hover:text-gold-300 border border-gold-500/30 hover:border-gold-400 font-bold tracking-wider text-sm transition-all shadow-md group"
                id="contact-whatsapp-btn"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-gold-500 animate-pulse" />
                CHAT TO BOOK NOW
              </a>

              <div className="border-t border-stone-800 pt-6 flex items-center justify-between text-xs font-mono text-beige-400">
                <span>TYPICAL REPLY TIME</span>
                <span className="text-gold-400 font-bold">UNDER 5 MINS</span>
              </div>
            </div>

            {/* Direct Phone Support Card */}
            <div className="bg-stone-900 border border-stone-800/80 rounded-[2rem] p-8 text-left space-y-4 shadow-xl relative overflow-hidden">
              <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <Phone className="w-5 h-5 text-gold-400" />
                Phone Inquiries
              </h4>
              <p className="text-xs sm:text-sm text-beige-300 leading-relaxed">
                Prefer a standard telephone call or SMS? Reach out to us at our business hotline directly for group bookings or special inquiries.
              </p>
              <div className="pt-2">
                <a
                  href={`tel:${salonDetails.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center text-xl font-mono font-bold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  {salonDetails.phone}
                </a>
                <p className="text-[10px] text-beige-500 uppercase tracking-widest font-mono mt-1">
                  Mombasa - Changamwe Line
                </p>
              </div>
            </div>

            {/* Safety & Hygiene Card */}
            <div className="bg-gradient-to-br from-gold-950/20 to-stone-900 border border-gold-500/10 rounded-2xl p-6 text-left flex items-start space-x-4">
              <div className="p-2.5 rounded-xl bg-gold-400/10 text-gold-400 shrink-0">
                <Heart className="w-5 h-5 fill-gold-400/10" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold uppercase tracking-wider text-gold-400">
                  Hygienic Guarantee
                </h5>
                <p className="text-xs text-beige-300 leading-relaxed">
                  We use medical-grade sanitization for all pedicure and manicure tools before and after every client. Your hair health and skin safety is our absolute priority.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
