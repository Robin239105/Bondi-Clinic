import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";

const nav = [
  { label: "Our Story", href: "/our-story" },
  { label: "Skin", href: "/skin" },
  { label: "Body", href: "/body" },
  { label: "Laser", href: "/laser" },
  { label: "Injectables", href: "/injectables" },
  { label: "PRP", href: "/prp" },
  { label: "Shop", href: "/shop" },
  { label: "Prices", href: "/prices" },
];

function Logo() {
  return (
    <Link
      to="/"
      className="group relative flex-shrink-0 h-12 lg:h-20 transition-all duration-300 hover:scale-105 active:scale-95"
      aria-label="Bondi Skin Clinic home"
    >
      <img 
        src="/images/1ba57d1c-c91e-42be-98ae-004cd9a738d7.png" 
        alt="Bondi Skin Clinic Logo" 
        className="h-full w-auto object-contain" 
      />
    </Link>
  );
}

import { skinTreatments } from "../../data/skinTreatments";
import { bodyTreatments } from "../../data/bodyTreatments";
import { laserTreatments } from "../../data/laserTreatments";
import { injectablesTreatments } from "../../data/injectablesTreatments";
import { prpTreatments } from "../../data/prpTreatments";

const megaMenuData = {
  "Skin": skinTreatments,
  "Body": bodyTreatments,
  "Laser": laserTreatments,
  "Injectables": injectablesTreatments,
  "PRP": prpTreatments
};

function DesktopNavItem({ item, active }) {
  const [isHovered, setIsHovered] = useState(false);
  const subItems = megaMenuData[item.label];

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center"
    >
      <Link
        to={item.href}
        className="relative rounded-full px-5 py-3.5 transition-colors"
      >
        {/* Active Indicator (Persistent) */}
        {active && (
          <motion.div
            layoutId="active-pill"
            className="absolute inset-0 rounded-full bg-primary"
            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
          />
        )}

        {/* Hover Indicator (Sliding) */}
        {!active && isHovered && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full bg-primary/10"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}

        <span className={`relative z-10 whitespace-nowrap transition-colors duration-300 ${active ? "text-white font-bold" : "text-primary/90"}`}>
          {item.label}
        </span>
      </Link>

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isHovered && subItems && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="absolute left-1/2 top-full -translate-x-1/2 pt-4"
          >
            <div className="w-[640px] overflow-hidden rounded-[2.5rem] border border-primary/5 bg-white p-8 shadow-[0_24px_80px_rgba(26,20,16,0.15)] backdrop-blur-3xl">
              <div className="mb-6 flex items-center justify-between border-b border-primary/5 pb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold">{item.label} Clinical Menu</span>
                <span className="text-[10px] text-primary/80 uppercase tracking-widest font-bold">Select Treatment</span>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                {subItems.map((sub) => (
                  <Link
                    key={sub.id}
                    to={`/treatments/${sub.id}`}
                    className="group flex items-center justify-between rounded-2xl p-4 transition-all hover:bg-primary/5"
                  >
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-primary group-hover:text-gold transition-colors">{sub.name}</span>
                      <span className="text-[10px] text-primary/90 uppercase tracking-widest mt-1 font-bold">
                        {sub.prices[0]?.amount ? sub.prices[0].amount.split(' ')[0] : 'Inquire'}
                      </span>
                    </div>
                    <ArrowUpRight size={14} className="text-primary/10 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold" />
                  </Link>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-primary/5">
                <Link to={item.href} className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary/90 hover:text-primary transition-colors">
                  Explore All {item.label} Solutions <ChevronRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ArrowUpRight({ size, className }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function Navbar({ announcementVisible = true }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubOpen, setMobileSubOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ top: announcementVisible ? 36 : 0 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="fixed inset-x-0 z-40 px-3 lg:px-6 py-3 lg:py-4"
    >
      <div
        className={`container-wide flex h-16 lg:h-24 items-center justify-between gap-4 lg:gap-10 rounded-[2rem] lg:rounded-[3rem] border border-primary/5 shadow-[0_18px_60px_rgba(26,20,16,0.12)] backdrop-blur-2xl transition-all px-6 lg:px-12 ${
          scrolled ? "bg-white" : "bg-white/95"
        }`}
      >
        <Logo />
        <nav className="hidden items-center rounded-full p-1.5 label-text font-bold lg:flex bg-primary/5 text-primary">
          {nav.map((item) => (
            <DesktopNavItem key={item.label} item={item} active={location.pathname === item.href} scrolled={scrolled} />
          ))}
        </nav>
        <div className="hidden shrink-0 lg:block">
          <Button href="/booking" size="md">Book Online</Button>
        </div>
        <button
          type="button"
          className="grid h-14 w-14 place-items-center rounded-full bg-primary text-white shadow-warm lg:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] h-[100dvh] bg-primary/20 backdrop-blur-md lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="absolute right-0 h-full w-[85%] overflow-y-auto bg-white p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-12">
                  <div className="h-16 flex items-center bg-[#F2F2F2] rounded-2xl px-6">
                    <img src="/images/1ba57d1c-c91e-42be-98ae-004cd9a738d7.png" alt="Bondi Skin Clinic" className="h-12 w-auto object-contain" />
                  </div>
                  <button
                    type="button"
                    className="grid h-12 w-12 place-items-center rounded-full bg-primary/5 text-primary hover:bg-primary/10 transition-colors"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                <nav className="grid gap-1 pb-12">
                  {nav.map((item, i) => {
                    const subItems = megaMenuData[item.label];
                    const isSubOpen = mobileSubOpen === item.label;

                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.2 }}
                      >
                        <div className="border-b border-primary/5">
                          <div className="flex items-center justify-between py-4">
                            <Link
                              to={item.href}
                              className="font-display text-3xl text-primary"
                              onClick={() => setOpen(false)}
                            >
                              {item.label}
                            </Link>
                            {subItems && (
                              <button
                                onClick={() => setMobileSubOpen(isSubOpen ? null : item.label)}
                                className={`grid h-10 w-10 place-items-center rounded-full bg-primary/5 text-gold transition-transform duration-300 ${isSubOpen ? 'rotate-180' : ''}`}
                              >
                                <ChevronDown size={18} />
                              </button>
                            )}
                          </div>
                          
                          <AnimatePresence>
                            {isSubOpen && subItems && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden bg-primary/[0.02] rounded-3xl mb-4"
                              >
                                <div className="grid gap-1 p-4">
                                  {subItems.map((sub) => (
                                    <Link
                                      key={sub.id}
                                      to={`/treatments/${sub.id}`}
                                      className="flex items-center justify-between p-4 rounded-2xl bg-white/50 text-sm text-primary/90"
                                      onClick={() => setOpen(false)}
                                    >
                                      {sub.name}
                                      <ChevronRight size={14} className="text-gold" />
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  })}

                  <div className="mt-8">
                    <div className="rounded-[2.5rem] bg-cream/50 p-8 border border-primary/5">
                      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/70">Clinical Booking</p>
                      <p className="mt-4 text-sm leading-relaxed text-primary/90 font-normal">
                        Experience the gold standard of Bondi aesthetics.
                      </p>
                      <div className="mt-6">
                        <Button href="/booking" size="md" className="w-full">Book Your Visit</Button>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
