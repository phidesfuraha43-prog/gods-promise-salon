import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import LocationHours from "./components/LocationHours";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-950 font-sans text-beige-100 overflow-x-hidden antialiased select-none selection:bg-gold-500 selection:text-stone-950">
      {/* Dynamic Navigation Header */}
      <Navbar />

      {/* Main Single Page Content */}
      <main>
        {/* Hero Showcase */}
        <Hero />

        {/* Brand Mission & Story */}
        <About />

        {/* Detailed Service Category Menu */}
        <Services />

        {/* Value Propositions / Trust indicators */}
        <WhyChooseUs />

        {/* Visual Styling Portfolio Grid */}
        <Gallery />

        {/* Operating Hours schedule & Google Maps Embed */}
        <LocationHours />

        {/* Interactive Booking Ticket Form */}
        <Contact />
      </main>

      {/* Footer Credentials & Socials */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
