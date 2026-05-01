import { images } from "../../../data/images";
import BeforeAfterSlider from "../../ui/BeforeAfterSlider";
import Button from "../../ui/Button";
import SectionLabel from "../../ui/SectionLabel";
import { Star } from "lucide-react";

export default function BeforeAfterSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
        {/* Left: Testimonial & Context */}
        <div className="max-w-xl">
          <SectionLabel>Real Transformations</SectionLabel>
          <h2 className="display-heading mt-6 text-5xl leading-tight text-primary md:text-6xl">
            Proof in Every <span className="font-display italic text-gold">Transformation</span>
          </h2>
          <p className="mt-8 text-lg text-primary/90 leading-relaxed">
            Every glow tells a story—discover the difference expert care can make. Our results speak for themselves through clinical precision and personalized care plans.
          </p>

          <div className="mt-12 rounded-[2rem] bg-cream p-6 md:p-10">
            <div className="flex gap-1 text-gold mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <blockquote className="font-display text-2xl italic text-primary leading-snug">
              "After my laser genesis sessions, my skin feels smoother and I finally feel confident without makeup! The team at Bondi Skin Clinic is exceptional."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-full ring-2 ring-gold/20">
                <img src="/images/WhatsApp-Image-2024-05-28-at-6.22.33-AM.jpeg" alt="Sarah J." className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-primary">Sarah J.</div>
                <div className="text-sm text-primary/80">Verified Patient</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button href="/booking" className="w-full sm:w-auto">Book a Consultation</Button>
            <Button href="/skin" variant="outline" className="w-full sm:w-auto">View All Results</Button>
          </div>
        </div>

        {/* Right: Slider */}
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-2xl">
            <BeforeAfterSlider before={images.before} after={images.after} />
          </div>
          
          {/* Decorative Badge */}
          {/* Decorative Badge - Hidden or repositioned on mobile */}
          <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 h-24 w-24 lg:h-32 lg:w-32 rounded-full bg-gold p-1 shadow-lg hidden sm:block">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full border border-white/20 text-center text-white">
              <div className="font-display text-2xl font-bold leading-none italic">100%</div>
              <div className="text-[10px] uppercase tracking-widest mt-1">Refined</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
