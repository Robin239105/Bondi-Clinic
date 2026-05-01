import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const columns = [
  {
    title: "The Clinic",
    links: [
      ["Our Story", "/our-story"],
      ["Contact Us", "/contact"],
      ["Book Online", "/booking"],
      ["Pricing Guide", "/prices"],
    ],
  },
  {
    title: "Treatments",
    links: [
      ["Skin Health", "/skin"],
      ["Body Contouring", "/body"],
      ["Laser Excellence", "/laser"],
      ["Medical Injectables", "/injectables"],
      ["PRP Therapy", "/prp"],
    ],
  },
  {
    title: "Boutique Shop",
    links: [
      ["Aspect DR", "/shop"],
      ["Cosmedix", "/shop"],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-primary text-white pt-16 pb-8 lg:pt-24 lg:pb-12">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 h-[400px] w-[400px] lg:h-[500px] lg:w-[500px] bg-gold/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block group">
              <div className="h-28 w-28 lg:h-40 lg:w-40 bg-white rounded-[1.5rem] lg:rounded-[2rem] p-2 lg:p-3 overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105">
                <img src="/images/1ba57d1c-c91e-42be-98ae-004cd9a738d7.png" alt="Bondi Skin Clinic" className="h-full w-full object-contain" />
              </div>
            </Link>
            <h2 className="mt-6 lg:mt-8 font-display text-2xl lg:text-3xl italic text-sand leading-tight">
              The Gold Standard <br className="hidden lg:block" />
              of Bondi Aesthetics
            </h2>
            <p className="mt-4 lg:mt-6 text-white/80 text-sm leading-relaxed max-w-sm font-normal">
              Experience the fusion of medical precision and artistic beauty in the heart of Bondi.
            </p>
            
            <div className="mt-8 flex gap-3">
              {[Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 lg:h-10 lg:w-10 flex items-center justify-center rounded-full border border-white/10 hover:bg-white hover:text-primary transition-all duration-300">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns - Responsive Grid */}
          <div className="lg:col-span-8 grid gap-10 grid-cols-2 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title} className={column.title === "Boutique Shop" ? "col-span-2 sm:col-span-1" : ""}>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold mb-6 lg:mb-8">{column.title}</h3>
                <ul className="space-y-3 lg:space-y-4">
                  {column.links.map(([label, href]) => (
                    <li key={label}>
                      <Link to={href} className="group flex items-center gap-2 text-white/90 hover:text-white transition-colors">
                        <span className="text-sm font-normal">{label}</span>
                        <ArrowUpRight size={12} className="opacity-0 -translate-y-1 translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Info row - Compact Grid */}
        <div className="mt-16 lg:mt-24 pt-8 lg:pt-10 border-t border-white/10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-white/5 text-gold">
                <MapPin size={18} />
              </div>
              <div className="text-[11px] tracking-wide">
                <p className="text-white/60 uppercase font-bold">Find Us</p>
                <p className="text-white mt-0.5">108 Ebley St, Bondi Junction NSW 2022</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-white/5 text-gold">
                <Phone size={18} />
              </div>
              <div className="text-[11px] tracking-wide">
                <p className="text-white/60 uppercase font-bold">Call Us</p>
                <p className="text-white mt-0.5">+61 2 9387 1171</p>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:col-span-2 lg:col-span-1">
              <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-white/5 text-gold">
                <Mail size={18} />
              </div>
              <div className="text-[11px] tracking-wide">
                <p className="text-white/60 uppercase font-bold">Email Us</p>
                <p className="text-white mt-0.5">info@bondiskinclinic.com.au</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 lg:mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 lg:pt-10 text-[9px] lg:text-[10px] uppercase tracking-[0.2em] text-white/60 md:flex-row">
          <p>© {new Date().getFullYear()} Bondi Skin Clinic. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link to="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold transition-colors">Terms</Link>
            <p className="hidden sm:block">Aesthetics & Wellness Excellence</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
