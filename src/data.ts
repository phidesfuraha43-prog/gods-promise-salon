import { ServiceCategory, GalleryItem, Feature, OpeningHour, Testimonial } from "./types";

// Import generated images
import heroBraids from "./assets/images/hero_braids_1784199584116.jpg";
import eyebrowTinting from "./assets/images/eyebrow_tinting_1784199599622.jpg";
import toenailCare from "./assets/images/toenail_care_1784199611634.jpg";
import braidsGallery from "./assets/images/braids_gallery_1784199626818.jpg";

export const salonDetails = {
  name: "God's Promise Salon",
  tagline: "Where Beauty Meets Excellence",
  phone: "0791 567 310",
  phoneFormatted: "+254791567310",
  whatsappUrl: "https://wa.me/254791567310?text=Hello%20God's%20Promise%20Salon!%20I'd%20like%20to%20book%20an%20appointment.",
  location: "Magongo Jua Kali Stage, Mombasa, Kenya",
  locationShort: "Magongo Jua Kali Stage",
  hours: "Monday – Sunday: 8:00 AM – 8:00 PM",
  heroImage: heroBraids,
  socials: {
    whatsapp: "https://wa.me/254791567310",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    tiktok: "https://tiktok.com"
  }
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "hair-braiding",
    title: "💇 Hair Braiding",
    description: "Flawless and neat protective braids tailored perfectly to highlight your natural beauty.",
    items: [
      {
        id: "knotless",
        name: "Knotless Braids",
        description: "Pain-free, lightweight, and incredibly natural-looking braids starting from the root.",
        price: "KSh 1,500+",
        features: ["Scalp-friendly", "Long-lasting", "Flexible styling"]
      },
      {
        id: "box-braids",
        name: "Box Braids",
        description: "Classic protective hairstyle with elegant, neat square parts for a bold look.",
        price: "KSh 1,200+",
        features: ["Low maintenance", "Classic beauty", "Rich texture"]
      },
      {
        id: "stitch-braids",
        name: "Stitch Braids",
        description: "Ultra-sharp lines created with high-precision stitch techniques for a modern flair.",
        price: "KSh 800+",
        features: ["Sleek design", "Highly defined lines", "Perfect edges"]
      },
      {
        id: "cornrows",
        name: "Cornrows",
        description: "Traditional and modern cornrow patterns braided close to the scalp with neat lines.",
        price: "KSh 500+",
        features: ["Elegant curves", "Quick styling", "Comfortable"]
      },
      {
        id: "fulani-braids",
        name: "Fulani Braids",
        description: "Stunning historical braided styles featuring a signature center braid and side plaits with optional beads.",
        price: "KSh 1,500+",
        features: ["Cultural elegance", "Bead-friendly", "Unique patterns"]
      },
      {
        id: "kids-hairstyles",
        name: "Kids Hairstyles",
        description: "Gentle, cute, and child-friendly braiding designs crafted with maximum care for sensitive scalps.",
        price: "KSh 400+",
        features: ["Gentle handling", "Colorful accessories", "Kid-approved styles"]
      }
    ]
  },
  {
    id: "trendy-hairstyles",
    title: "✨ Trendy Hairstyles",
    description: "Chic fashion hairstyles and custom protective extensions to keep you looking modern and beautiful.",
    items: [
      {
        id: "protective-styles",
        name: "Protective Styles",
        description: "Hairstyles designed to secure and protect your natural hair from environmental wear while encouraging growth.",
        price: "KSh 1,000+",
        features: ["Retains length", "Saves time daily", "Deep hydration prep"]
      },
      {
        id: "fashion-hairstyles",
        name: "Fashion Hairstyles",
        description: "Latest trending updos, ponytails, and styling options matching global fashion trends.",
        price: "KSh 1,200+",
        features: ["Red carpet looks", "Volume boost", "Perfect hold"]
      },
      {
        id: "custom-styling",
        name: "Custom Styling",
        description: "Personalized hair consultations and tailored hairstyles for your special events and weddings.",
        price: "By consultation",
        features: ["1-on-1 consultation", "Unique creations", "Trial runs available"]
      }
    ]
  },
  {
    id: "eyebrow-tinting",
    title: "🌸 Eyebrow Tinting",
    description: "Definition and shape for your brows, creating an elegant frame for your beautiful eyes.",
    items: [
      {
        id: "shaping-tinting",
        name: "Eyebrow Shaping & Tinting",
        description: "Precise threading or tweezing followed by premium skin-safe organic tinting for fully-defined, natural brows.",
        price: "KSh 300+",
        features: ["Accentuates eyes", "Waterproof tint", "Saves morning makeup time"]
      }
    ]
  },
  {
    id: "toenail-care",
    title: "💅 Toenail Care",
    description: "Relaxing pampering sessions for your feet, complete with hygienic care, skin softening, and beautiful polishes.",
    items: [
      {
        id: "toenail-pedicure",
        name: "Luxury Toenail Care & Polish",
        description: "Deep cleansing, professional cuticle work, exfoliating scrub, and a stunning shiny or matte polish finishing.",
        price: "KSh 400+",
        features: ["Hygienic deep-clean", "Soothing foot massage", "Premium chip-resistant polish"]
      }
    ]
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "Signature Golden Stitch Braids",
    category: "Hair Braiding",
    imageUrl: braidsGallery,
    description: "Beautifully defined lines with neat golden extensions highlighting custom stitch braiding."
  },
  {
    id: "g2",
    title: "Sleek Knotless Braids",
    category: "Hair Braiding",
    imageUrl: heroBraids,
    description: "Lightweight, beautiful, and pain-free classic knotless protective styling."
  },
  {
    id: "g3",
    title: "Flawless Eyebrow Definition",
    category: "Eyebrow Tinting",
    imageUrl: eyebrowTinting,
    description: "Precisely shaped and subtly tinted eyebrows providing an elegant frame."
  },
  {
    id: "g4",
    title: "Hygienic Toenail Care & Polish",
    category: "Toenail Care",
    imageUrl: toenailCare,
    description: "Clean, fresh, and perfectly polished toenails in our relaxing spa chair."
  }
];

export const features: Feature[] = [
  {
    title: "Professional Stylists",
    description: "Years of specialized experience in braiding, hair care, brow mapping, and pedicure hygiene."
  },
  {
    title: "Friendly Customer Service",
    description: "We treat you like family, welcoming you with fresh drinks and warm smiles."
  },
  {
    title: "Affordable Prices",
    description: "Get premium, luxury-level styling at prices that respect your budget."
  },
  {
    title: "Clean & Comfortable Salon",
    description: "A serene, clean, and beautifully decorated environment located conveniently at Magongo."
  },
  {
    title: "Latest Hairstyle Trends",
    description: "Always updated with the newest social media braid trends, stitch patterns, and tints."
  },
  {
    title: "Quality Products",
    description: "We use only tested, premium, scalp-safe braiding oils, organic tints, and healthy hair products."
  }
];

export const openingHours: OpeningHour[] = [
  { day: "Monday", time: "8:00 AM – 8:00 PM" },
  { day: "Tuesday", time: "8:00 AM – 8:00 PM" },
  { day: "Wednesday", time: "8:00 AM – 8:00 PM" },
  { day: "Thursday", time: "8:00 AM – 8:00 PM" },
  { day: "Friday", time: "8:00 AM – 8:00 PM" },
  { day: "Saturday", time: "8:00 AM – 8:00 PM" },
  { day: "Sunday", time: "8:00 AM – 8:00 PM" }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Phides Furaha",
    role: "Regular Client",
    text: "The best knotless braids I have ever had! They are so neat, and my scalp doesn't hurt at all. God's Promise is my permanent beauty home now.",
    rating: 5
  },
  {
    id: "t2",
    name: "Amani Mwangi",
    role: "Local Customer",
    text: "Extremely clean and friendly salon at Magongo Jua Kali. Their eyebrow tint is absolutely perfect and lasts for weeks! Highly recommended.",
    rating: 5
  },
  {
    id: "t3",
    name: "Fatma Juma",
    role: "Happy Client",
    text: "I took my daughter there for school holidays braids and got my toenails done. Wonderful service, very affordable, and high-quality products used.",
    rating: 5
  }
];
