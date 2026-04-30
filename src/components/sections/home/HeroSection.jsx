import { motion } from "framer-motion";
import { Search, ChevronRight } from "lucide-react";
import Button from "../../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-cream pt-32 pb-12 lg:pt-40 lg:pb-20">
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 h-[400px] lg:h-[600px] w-[400px] lg:w-[600px] rounded-full bg-gold/5 blur-[120px] opacity-70" />
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
          
          {/* Left: Content Area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
            className="flex flex-col justify-center py-8 lg:py-12"
          >
            <h1 className="display-heading text-5xl leading-[1.1] text-primary sm:text-7xl lg:text-[7.5rem] max-w-xl">
              Clinical Skin <br />
              <span className="italic text-gold">Excellence</span>
            </h1>
            
            <p className="mt-6 lg:mt-8 max-w-md text-base lg:text-lg leading-relaxed text-primary/90 font-normal">
              Specializing in medical-grade results and clinical skin health. Experience a harmony of advanced dermatological technology and bespoke care.
            </p>

            <div className="mt-10 lg:mt-12 flex flex-wrap items-center gap-4">
              <Button href="/booking" size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 px-8">
                Book Consultation
              </Button>
              <Button href="/prices" variant="outline" size="lg" className="w-full sm:w-auto px-8">
                View Prices
              </Button>
            </div>

            {/* Bottom Stats */}
            <div className="mt-20 flex gap-12 lg:gap-20">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-display text-primary">35+</span>
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] leading-relaxed text-primary/70 font-bold">
                  Medical & Clinical <br /> Grade Treatments
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-display text-primary">50+</span>
                </div>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] leading-relaxed text-primary/70 font-bold">
                  Specialist Medical <br /> Aesthetic Experts
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Immersive Portrait & Floating UI */}
          <div className="relative h-full flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px] aspect-[0.85/1] mx-auto lg:mx-0">
              
              {/* Main Portrait with Subtle Blending */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                className="relative h-full w-full"
              >
                <div className="absolute inset-0 bg-cream/20 z-10 pointer-events-none rounded-[3rem] lg:rounded-[5rem]" />
                <img
                  src="/images/hero_portrait.png"
                  alt="Clinical Skin Excellence"
                  fetchpriority="high"
                  loading="eager"
                  className="h-full w-full object-cover rounded-[3rem] lg:rounded-[5rem] shadow-2xl"
                  style={{
                    maskImage: 'radial-gradient(circle at center, #1B222C 60%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, #1B222C 60%, transparent 100%)',
                  }}
                />
                
                {/* Scanner Overlay Animation - Desktop Only */}
                <div className="absolute top-[30%] right-[35%] z-20 pointer-events-none hidden lg:block">
                  <div className="relative">
                    <div className="h-40 w-40 rounded-full border border-white/40 border-dashed animate-spin-slow opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_20px_white]" />
                    </div>
                    {/* Scanning Line */}
                    <motion.div 
                      animate={{ y: [0, 40, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge: Advanced Analysis - Hidden on Mobile */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-5 -right-4 lg:top-10 lg:-right-8 z-30 glass rounded-2xl px-4 py-3 lg:px-6 lg:py-4 flex items-center gap-3 lg:gap-4 shadow-xl border border-white/50 scale-75 lg:scale-100"
              >
                <div className="h-8 w-8 lg:h-10 lg:w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Search size={16} className="text-primary" />
                </div>
                <span className="text-[9px] lg:text-[11px] font-bold uppercase tracking-widest text-primary">Skin Analysis</span>
              </motion.div>

              {/* Floating Card: Hydration Level - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -left-6 lg:-left-12 top-[40%] z-30 glass rounded-3xl p-4 lg:p-6 shadow-xl w-32 lg:w-44 hidden md:block"
              >
                <div className="text-[9px] lg:text-[10px] uppercase tracking-widest text-primary/90 font-bold mb-3">Hydration</div>
                <div className="relative flex items-center justify-center">
                  <svg className="h-14 w-14 lg:h-20 lg:w-20 -rotate-90">
                    <circle cx="28" cy="28" r="24" className="stroke-primary/5 fill-none lg:hidden" strokeWidth="6" />
                    <circle cx="40" cy="40" r="34" className="stroke-primary/5 fill-none hidden lg:block" strokeWidth="8" />
                    <circle 
                      cx="40" cy="40" r="34" 
                      className="stroke-primary fill-none hidden lg:block" 
                      strokeWidth="8" 
                      strokeDasharray="213" 
                      strokeDashoffset="53" 
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-lg lg:text-xl font-display text-primary">75</span>
                </div>
              </motion.div>

              {/* Floating Card: Recommendations - Scale down on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-10 -right-2 lg:bottom-4 lg:-right-4 z-30 glass rounded-[2rem] lg:rounded-[2.5rem] p-5 lg:p-6 shadow-2xl w-[85%] sm:w-72 scale-90 lg:scale-100 origin-bottom-right"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-primary">Patient Plan</span>
                  <ChevronRight size={14} className="text-primary/70" />
                </div>
                <div className="flex gap-2 lg:gap-3 mb-5 lg:mb-6">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-white/40 overflow-hidden shadow-sm">
                      <img 
                        src="/images/Why_Cosmedix.webp" 
                        alt="Clinical Product" 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                  ))}
                </div>
                <button className="w-full rounded-xl bg-white py-3 text-[9px] lg:text-[10px] font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-colors">
                  View Recommendations
                </button>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
