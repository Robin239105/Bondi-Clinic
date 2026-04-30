import { motion } from "framer-motion";
import { images } from "../data/images";
import ServiceHero from "../components/sections/shared/ServiceHero";
import TeamGrid from "../components/sections/our-story/TeamGrid";
import SectionLabel from "../components/ui/SectionLabel";
import { ShieldCheck, Sparkles, Heart, Award } from "lucide-react";
import Button from "../components/ui/Button";

const values = [
  {
    icon: ShieldCheck,
    title: "Clinical Precision",
    text: "Evidence-based protocols and medical-grade technology in every procedure."
  },
  {
    icon: Sparkles,
    title: "Natural Aesthetic",
    text: "We believe in enhancement, not alteration. Your results will always look like you."
  },
  {
    icon: Heart,
    title: "Patient Comfort",
    text: "A warm, supportive environment where your skin journey feels safe and cared for."
  },
  {
    icon: Award,
    title: "Bondi Standard",
    text: "Setting the local benchmark for excellence in aesthetics since 2018."
  }
];

import SEO from "../components/layout/SEO";

export default function OurStoryPage() {
  return (
    <>
      <SEO 
        title="Our Story"
        description="Learn about the Bondi Standard in clinical aesthetics. Founded on clinical excellence and patient care, we are Bondi's premier skin health destination."
        url="/our-story"
        keywords="best skin clinic bondi, bondi clinical aesthetics, skin clinic mission, about bondi skin clinic"
      />
      <ServiceHero
        eyebrow="Our Story"
        title="Experience the Bondi Standard"
        copy="Founded on the belief that clinical results and patient comfort should coexist, we've built a sanctuary for skin health in the heart of Bondi."
        image={images.treatmentRoom}
      />
      
      {/* Values Section - Sleek Grid */}
      <section className="section-pad bg-primary text-white overflow-hidden">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <SectionLabel className="text-gold-light border-gold-light/20">The Bondi Difference</SectionLabel>
            <h2 className="display-heading mt-8 text-6xl italic">The Four Pillars of Excellence</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative rounded-[2.5rem] border border-white/10 bg-white/5 p-10 hover:bg-white hover:text-primary transition-all duration-500"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-gold group-hover:bg-primary group-hover:text-white transition-colors">
                  <value.icon size={28} />
                </div>
                <h3 className="font-display text-2xl mb-4 italic">{value.title}</h3>
                <p className="text-sm leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                  {value.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-pad bg-cream">
        <div className="container-wide mb-24 text-center">
          <SectionLabel>Our Experts</SectionLabel>
          <h2 className="display-heading mt-8 text-7xl text-primary leading-none">
            Meet the <span className="italic text-gold">Leadership</span>
          </h2>
        </div>
        <TeamGrid />
      </section>
    </>
  );
}
