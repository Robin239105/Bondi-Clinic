import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Clock, DollarSign, Calendar, ChevronDown } from "lucide-react";
import { skinTreatments } from "../data/skinTreatments";
import { bodyTreatments } from "../data/bodyTreatments";
import { laserTreatments } from "../data/laserTreatments";
import { injectablesTreatments } from "../data/injectablesTreatments";
import { prpTreatments } from "../data/prpTreatments";
import Button from "../components/ui/Button";
import SectionLabel from "../components/ui/SectionLabel";
import SEO from "../components/layout/SEO";

const allTreatments = [
  ...skinTreatments,
  ...bodyTreatments,
  ...laserTreatments,
  ...injectablesTreatments,
  ...prpTreatments
];

export default function TreatmentDetailsPage() {
  const { id } = useParams();
  const treatment = allTreatments.find((t) => t.id === id);
  const [activeFaq, setActiveFaq] = useState(null);

  if (!treatment) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <SEO title="Treatment Not Found" url={`/treatments/${id}`} />
        <div className="text-center">
          <h1 className="display-heading text-6xl text-primary">Treatment Not Found</h1>
          <Button href="/" className="mt-8">Return Home</Button>
        </div>
      </div>
    );
  }

  // Fallback FAQs if not present in data
  const faqs = treatment.faqs || [
    {
      q: "How many sessions are recommended?",
      a: "While results can often be seen after a single session, we typically recommend a course of 3 to 6 treatments spaced 4-6 weeks apart for optimal, long-lasting results."
    },
    {
      q: "Is the treatment painful?",
      a: "Most patients describe the sensation as a light tingling or warmth. We use various techniques to ensure your comfort throughout the procedure, including topical numbing where appropriate."
    },
    {
      q: "What is the downtime?",
      a: "Downtime varies by treatment. Some have zero downtime, while others may involve 24-48 hours of mild redness or swelling similar to a light sunburn."
    },
    {
      q: "When will I see results?",
      a: "Initial improvements in skin tone and texture are often visible within days. However, as collagen production is stimulated, full results typically manifest over 2-3 months."
    }
  ];

  return (
    <div className="bg-cream min-h-screen">
      <SEO 
        title={treatment.name}
        description={treatment.description?.substring(0, 160)}
        url={`/treatments/${treatment.id}`}
        keywords={`${treatment.name.toLowerCase()}, ${treatment.name.toLowerCase()} bondi, skin treatment bondi`}
      />
      {/* Hero Section */}
      <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <img 
          src={treatment.image} 
          alt={treatment.name} 
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
        
        <div className="container-wide relative h-full flex flex-col justify-end pb-12 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <SectionLabel className="text-gold mb-6">Bondi Clinical Treatment</SectionLabel>
            <h1 className="display-heading text-6xl lg:text-8xl text-white leading-tight">
              {treatment.name}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-pad">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Column: Details */}
            <div className="space-y-12 lg:space-y-20">
              {/* About */}
              <div>
                <SectionLabel>The Procedure</SectionLabel>
                <h2 className="display-heading text-4xl lg:text-5xl text-primary mt-6">Clinical overview</h2>
                <p className="mt-8 text-lg lg:text-xl text-primary/90 leading-relaxed font-normal whitespace-pre-line">
                  {treatment.description}
                </p>
              </div>

              {/* Benefits */}
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="bg-white p-6 sm:p-10 rounded-[2.5rem] shadow-sm">
                  <div className="h-12 w-12 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mb-6">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="font-display text-2xl text-primary">Key Benefits</h3>
                  <ul className="mt-6 space-y-4 text-primary/90">
                    <li className="flex gap-3 items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Stimulates natural collagen and elastin production</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Refines skin texture and minimizes pore size</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />
                      <span>Reduces fine lines and chronological ageing</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary text-white p-6 sm:p-10 rounded-[2.5rem] shadow-xl">
                  <div className="h-12 w-12 bg-white/10 rounded-2xl flex items-center justify-center text-gold mb-6">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-display text-2xl">Clinical Info</h3>
                  <div className="mt-8 space-y-6">
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-white/70 uppercase tracking-widest text-[10px]">Duration</span>
                      <span className="font-medium">45 - 60 Min</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-4">
                      <span className="text-white/70 uppercase tracking-widest text-[10px]">Downtime</span>
                      <span className="font-medium">0 - 48 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70 uppercase tracking-widest text-[10px]">Anesthetic</span>
                      <span className="font-medium">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <SectionLabel>Questions</SectionLabel>
                <h2 className="display-heading text-4xl lg:text-5xl text-primary mt-6">Common inquiries</h2>
                <div className="mt-12 space-y-4">
                  {faqs.map((faq, index) => (
                    <div 
                      key={index}
                      className="group overflow-hidden rounded-3xl bg-white border border-primary/5 transition-all"
                    >
                      <button
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        className="flex w-full items-center justify-between p-8 text-left"
                      >
                        <span className="font-display text-xl text-primary">{faq.q}</span>
                        <div className={`transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                          <ChevronDown size={20} className="text-gold" />
                        </div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: activeFaq === index ? "auto" : 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-primary/90 leading-relaxed border-t border-primary/5">
                          {faq.a}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sidebar */}
            <div className="space-y-12">
              {/* Pricing Card */}
              <div className="sticky top-32 bg-white p-6 lg:p-12 rounded-[3rem] shadow-2xl border border-primary/5">
                <h3 className="font-display text-3xl text-primary">Treatment Investment</h3>
                <div className="mt-10 space-y-6">
                  {treatment.prices.map((p, i) => (
                    <div key={i} className="flex justify-between items-center gap-4">
                      <div>
                        <p className="font-medium text-primary">{p.label}</p>
                        {p.note && <p className="text-xs text-primary/70 mt-1 italic">{p.note}</p>}
                      </div>
                      <span className="text-gold font-bold text-lg whitespace-nowrap">{p.amount}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-cream rounded-2xl border border-gold/10">
                  <div className="flex gap-4 items-start">
                    <AlertCircle size={20} className="text-gold shrink-0 mt-1" />
                    <p className="text-xs text-primary/90 leading-relaxed italic">
                      Final pricing and suitability are confirmed after a professional clinical consultation.
                    </p>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4">
                  <Button href="/booking" className="w-full">Book This Treatment</Button>
                  <Button href="/contact" variant="outline" className="w-full">Enquire Now</Button>
                </div>
              </div>

              {/* Safety/Risks */}
              {treatment.risks && (
                <div className="bg-primary/5 p-10 rounded-[2.5rem] border border-primary/5">
                  <h3 className="font-display text-2xl text-primary mb-6 flex items-center gap-3">
                    <ShieldCheck className="text-gold" size={24} />
                    Clinical Safety
                  </h3>
                  <p className="text-sm text-primary/90 leading-relaxed">
                    {treatment.risks}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Promo or Gallery? */}
      <section className="bg-primary py-24 text-white overflow-hidden">
        <div className="container-wide grid lg:grid-cols-2 items-center gap-16">
          <div>
            <SectionLabel className="text-gold mb-6">Expertise</SectionLabel>
            <h2 className="display-heading text-5xl lg:text-7xl">Results you can <span className="italic text-gold">trust</span>.</h2>
            <p className="mt-8 text-xl text-white/90 font-normal leading-relaxed">
              Every skin journey is unique. Our clinicians combine advanced technology with a measured approach to deliver natural, refined results.
            </p>
            <div className="mt-12 flex gap-4">
              <Button href="/booking" variant="outline-white">Free Consultation</Button>
              <Button href="/prices" variant="ghost" className="text-white">View All Prices</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img src="/images/room.png" alt="Clinical Environment" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -left-10 h-64 w-64 bg-gold/20 blur-[100px] rounded-full hidden lg:block" />
          </div>
        </div>
      </section>
    </div>
  );
}

function ShieldCheck({ size, className }) {
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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
