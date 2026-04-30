import { motion } from "framer-motion";
import { Calendar, Star, ArrowRight } from "lucide-react";
import Button from "../ui/Button";
import { images } from "../../data/images";

export default function PreFooterCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-gold/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-gold/5 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />

      <div className="container-wide relative z-10">
        <div className="rounded-[3.5rem] bg-primary overflow-hidden shadow-2xl border border-white/5">
          <div className="grid lg:grid-cols-2">
            {/* Content Side */}
            <div className="p-12 md:p-20 lg:p-24 flex flex-col justify-center relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-gold"
              >
                <div className="h-px w-8 bg-gold/50" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em]">The Bondi Experience</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-8 font-display text-5xl md:text-6xl text-white leading-[1.1]"
              >
                Ready to <span className="italic text-gold">Reveal</span> <br />
                Your Best Skin?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-8 text-white/90 text-lg leading-relaxed max-w-md"
              >
                Join over 2,500+ satisfied patients in Bondi. Book a personalized consultation today and let our experts design your unique treatment plan.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-14 flex flex-col items-start gap-5"
              >
                <Button 
                  href="/booking" 
                  variant="white"
                  size="lg" 
                  icon={false}
                  className="shadow-navy w-full md:w-auto"
                >
                  Book a Consultation
                  <Calendar size={20} className="ml-2" />
                </Button>
                
                <Button 
                  href="/prices" 
                  variant="outline-white" 
                  size="lg" 
                  icon={false}
                  className="w-full md:w-auto"
                >
                  View Pricing Guide
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* Visual Side */}
            <div className="relative min-h-[500px] lg:min-h-full overflow-hidden">
              <img 
                src={images.treatmentRoom} 
                alt="Clinic Interior" 
                className="absolute inset-0 h-full w-full object-cover"
              />
              {/* Sophisticated Overlays */}
              <div className="absolute inset-0 bg-primary/20 lg:bg-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent" />
              
              {/* Trust Badge */}
              <div className="absolute bottom-12 left-12 right-12">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-primary-dark/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-6"
                >
                  <div className="h-14 w-14 rounded-full bg-gold/20 flex items-center justify-center text-gold shadow-inner">
                    <Star fill="currentColor" size={26} />
                  </div>
                  <div>
                    <p className="text-white font-bold italic font-display text-2xl leading-none">Standard of Excellence</p>
                    <p className="text-white/70 text-[9px] uppercase tracking-[0.2em] mt-2">Accredited Bondi Professionals</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
