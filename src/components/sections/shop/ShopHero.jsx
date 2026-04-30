import { motion } from "framer-motion";
import SectionLabel from "../../ui/SectionLabel";
import { ShieldCheck, Sparkles, Award } from "lucide-react";

export default function ShopHero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-48 pb-20 lg:pt-60 lg:pb-32">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-gold/10 to-gold/5 blur-[120px] opacity-70" />
      
      <div className="container-wide grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0, 0, 1] }}
        >
          <SectionLabel>The Shop</SectionLabel>
          <h1 className="display-heading mt-8 text-7xl leading-tight text-primary md:text-8xl lg:text-9xl">
            Clinical results, <br />
            <span className="font-display italic text-gold">At home.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-primary/90 font-normal">
            A curated selection of world-class cosmeceuticals. We feature only the gold standard in skin health: <span className="font-bold text-primary">Aspect</span> and <span className="font-bold text-primary">Cosmedix</span>.
          </p>
          
          <div className="mt-12 flex flex-wrap gap-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold shadow-sm">
                <ShieldCheck size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/90">Expert Selected</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold shadow-sm">
                <Sparkles size={24} />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/90">Clinical Grade</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Layered Product Collage (Aspect & Cosmedix) */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
            {/* Main Product Image (Cosmedix focus) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0, 0, 1] }}
              className="absolute inset-0 z-10 overflow-hidden rounded-[4rem] shadow-2xl border-4 border-white"
            >
              <img 
                src="/images/Why_Cosmedix.webp" 
                alt="Cosmedix Skincare" 
                className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </motion.div>

            {/* Secondary Product Image (Aspect focus) */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: -40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0, 0, 1] }}
              className="absolute -top-12 -right-12 z-20 w-3/4 aspect-square overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white/50 backdrop-blur-xl"
            >
              <img 
                src="https://bondiskinclinic.wpdevfreaks.xyz/wp-content/uploads/2024/04/01c616_815a81b229aa4a5fb40065ad225de4e4mv2-1.webp" 
                alt="Aspect Skincare Product" 
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>

            {/* Accent Floating Card */}
            <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0, 0, 1] }}
              className="absolute -bottom-10 -left-10 z-30 rounded-[2rem] bg-white p-8 shadow-2xl border border-primary/5"
            >
              <div className="flex items-center gap-5">
                <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Award size={32} />
                </div>
                <div>
                  <div className="font-display text-3xl text-primary leading-none italic">Elite</div>
                  <div className="mt-1 text-xs text-primary/70 uppercase tracking-widest font-bold">Authorized Stockist</div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Sparkle Accents */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-20 -left-10 text-gold/20"
            >
              <Sparkles size={80} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
