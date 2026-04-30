import { Link } from "react-router-dom";
import SectionLabel from "../../ui/SectionLabel";
import Button from "../../ui/Button";

export default function TeamSection() {
  return (
    <section className="section-pad bg-cream">
      <div className="container-wide grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Left: Image */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl">
            <img 
              src="/images/team.png" 
              alt="Bondi Skin Clinic Team" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gold/20 backdrop-blur-xl -z-10" />
        </div>

        {/* Right: Info */}
        <div className="max-w-xl">
          <SectionLabel>Expert Practitioners</SectionLabel>
          <h2 className="display-heading mt-6 text-5xl leading-tight text-primary md:text-6xl">
            Experienced Hands, <span className="font-display italic text-gold">Gentle Care</span>
          </h2>
          <p className="mt-8 text-lg text-primary/90 leading-relaxed">
            Our clinicians bring together decades of skin science, laser expertise, and warm, patient-first care. Every member of our team is highly trained in the latest aesthetic technologies to ensure your safety and results.
          </p>
          <p className="mt-6 text-lg text-primary/90 leading-relaxed">
            At Bondi Skin Clinic, we believe in clinical precision with a calm, inviting touch. Meet the experts dedicated to your skin journey.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button href="/our-story" size="lg">Our Story</Button>
            <Button href="/contact" variant="outline" size="lg">Join Our Team</Button>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-primary/10 pt-10">
            <div>
              <div className="font-display text-4xl text-primary">15+</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-primary/80">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl text-primary">10k+</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-primary/80">Successful Treatments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
