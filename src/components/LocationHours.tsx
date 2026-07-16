import { MapPin, Clock, Calendar, ShieldCheck, Compass } from "lucide-react";
import { openingHours, salonDetails } from "../data";

export default function LocationHours() {
  // Determine current day to highlight opening hours
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDayIndex = new Date().getDay();
  const currentDayName = daysOfWeek[currentDayIndex];

  // Determine if open right now (between 8 AM and 8 PM)
  const currentHour = new Date().getHours();
  const isOpenNow = currentHour >= 8 && currentHour < 20;

  return (
    <section className="py-20 lg:py-28 bg-stone-900 relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Opening Hours & Information */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-2">
              <p className="text-xs font-mono tracking-[0.25em] text-gold-400 uppercase font-bold">
                Plan Your Visit
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Hours &amp; Location
              </h2>
              <div className="w-16 h-1 bg-gold-500 rounded-full mt-4" />
            </div>

            {/* Live Open/Closed indicator */}
            <div className="flex items-center space-x-3 bg-stone-950/60 border border-stone-800 rounded-2xl p-4 max-w-sm">
              <div className="relative flex h-3 w-3">
                {isOpenNow ? (
                  <>
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </>
                ) : (
                  <>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                  </>
                )}
              </div>
              <span className="text-sm font-semibold text-white">
                {isOpenNow ? "Open Now" : "Closed Now"}
              </span>
              <span className="text-xs text-beige-400 font-mono">
                • 8:00 AM – 8:00 PM Daily
              </span>
            </div>

            {/* Opening Hours Schedule */}
            <div className="bg-stone-950/40 border border-stone-800/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-400" />
                Salon Schedule
              </h3>
              <div className="space-y-3 pt-2">
                {openingHours.map((hour, index) => {
                  const isToday = hour.day === currentDayName;
                  return (
                    <div
                      key={index}
                      className={`flex justify-between items-center py-2 px-3 rounded-xl transition-all duration-300 ${
                        isToday
                          ? "bg-gold-500/10 border-l-2 border-gold-400 text-gold-300 font-semibold"
                          : "text-beige-300"
                      }`}
                    >
                      <span className="text-sm">{hour.day}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs sm:text-sm font-mono text-right">{hour.time}</span>
                        {isToday && (
                          <span className="text-[9px] uppercase tracking-wider bg-gold-400/20 text-gold-400 font-bold px-2 py-0.5 rounded-md font-mono">
                            Today
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Contact Details */}
            <div className="space-y-4 border-t border-stone-800 pt-6">
              <div className="flex items-start space-x-3 text-beige-300 text-sm">
                <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Our Address</p>
                  <p className="text-xs sm:text-sm">{salonDetails.location}</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 text-beige-300 text-sm">
                <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Daily Committment</p>
                  <p className="text-xs sm:text-sm">Monday through Sunday, including holidays.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed */}
          <div className="lg:col-span-7 h-full">
            <div className="relative w-full aspect-video sm:aspect-[4/3] lg:aspect-square bg-stone-950 rounded-[2.5rem] overflow-hidden border border-gold-500/10 shadow-2xl group">
              {/* Golden layout border */}
              <div className="absolute inset-4 border border-gold-400/15 rounded-[2rem] pointer-events-none z-10 group-hover:border-gold-400/30 transition-colors duration-500" />
              
              {/* Real Google Maps embed (with zero API keys) */}
              <iframe
                title="God's Promise Salon Location Map"
                src="https://maps.google.com/maps?q=Magongo%20Jua%20Kali%20Stage,%20Mombasa&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(120%) brightness(100%)" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-0"
              />

              {/* Float Location Card */}
              <div className="absolute bottom-6 left-6 right-6 z-10 bg-stone-950/90 backdrop-blur-md border border-gold-500/20 rounded-2xl p-4 flex items-center justify-between shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-gold-400/10 text-gold-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] uppercase tracking-widest text-gold-400 font-mono">Salon Location</p>
                    <p className="text-xs sm:text-sm font-bold text-white">Magongo Jua Kali Stage</p>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=Magongo+Jua+Kali+Stage+Mombasa`}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-stone-950 text-xs font-bold transition-all"
                >
                  NAVIGATE
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
