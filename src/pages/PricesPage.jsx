import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ServiceHero from "../components/sections/shared/ServiceHero";
import Button from "../components/ui/Button";
import SectionLabel from "../components/ui/SectionLabel";
import { bodyTreatments } from "../data/bodyTreatments";
import { images } from "../data/images";
import { injectablesTreatments } from "../data/injectablesTreatments";
import { laserTreatments } from "../data/laserTreatments";
import { prpTreatments } from "../data/prpTreatments";
import { skinTreatments } from "../data/skinTreatments";

import SEO from "../components/layout/SEO";

const categories = [
  { label: "Skin", slug: "skin", treatments: skinTreatments },
  { label: "Body", slug: "body", treatments: bodyTreatments },
  { label: "Laser", slug: "laser", treatments: laserTreatments },
  { label: "Injectables", slug: "injectables", treatments: injectablesTreatments },
  { label: "PRP", slug: "prp", treatments: prpTreatments },
];

export default function PricesPage() {
  const [active, setActive] = useState("all");
  const visibleCategories = useMemo(
    () => (active === "all" ? categories : categories.filter((category) => category.slug === active)),
    [active],
  );

  return (
    <>
      <SEO 
        title="Treatment Prices"
        description="View current pricing for all advanced skin, body, laser, and injectable treatments at Bondi Skin Clinic in Bondi, Australia."
        url="/prices"
        keywords="skin treatment prices bondi, laser treatment cost bondi, injectables price list"
      />
      <ServiceHero
        eyebrow="Prices"
        title="Transparent Treatment Pricing"
        copy="Our clinical menu is designed with transparency in mind. Explore our range of tailored skin, body, and laser treatments. Final investment is confirmed after consultation."
      />

      <section className="bg-primary px-4 py-8 text-white">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="label-text text-gold">Experience Bondi Excellence</p>
            <h2 className="mt-2 text-2xl font-display italic">Complimentary consultations for new clients.</h2>
          </div>
          <Button href="/booking" size="lg">Book Your Visit</Button>
        </div>
      </section>

      <section className="section-pad bg-cream">
        <div className="container-wide">
          {/* Dynamic Filters */}
          <div className="sticky top-48 z-20 mb-16 flex justify-start md:justify-center gap-3 overflow-x-auto bg-cream/95 py-4 px-4 backdrop-blur-2xl no-scrollbar">
            {["all", ...categories.map((category) => category.slug)].map((slug) => {
              const label = slug === "all" ? "All Treatments" : categories.find((category) => category.slug === slug).label;
              return (
                <button
                  key={slug}
                  type="button"
                  onClick={() => setActive(slug)}
                  className={`shrink-0 rounded-full px-8 py-4 label-text transition-all ${
                    active === slug 
                      ? "bg-primary text-white shadow-xl scale-105" 
                      : "bg-white text-primary hover:bg-white/80"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Pricing Grid */}
          <div className="grid gap-16">
            {visibleCategories.map((category) => (
              <motion.div
                key={category.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: [0.25, 0, 0, 1] }}
                className="overflow-hidden rounded-[3rem] bg-white shadow-2xl"
              >
                <div className="grid border-b border-primary/5 bg-stone-50 p-10 md:grid-cols-[1fr_2fr] md:items-center">
                  <div>
                    <SectionLabel>{category.label}</SectionLabel>
                    <h2 className="mt-4 font-display text-5xl text-primary">{category.label} <span className="italic text-gold">Menu</span></h2>
                  </div>
                  <p className="mt-6 text-lg text-primary/90 leading-relaxed md:mt-0 md:pl-12 md:border-l border-primary/10">
                    Final pricing is determined after a professional consultation where your skin history and clinical suitability are assessed.
                  </p>
                </div>

                <div className="divide-y divide-primary/5">
                  {category.treatments.map((treatment) => (
                    <div key={treatment.id} className="grid gap-10 p-10 lg:grid-cols-[1.5fr_2fr]">
                      <div>
                        <h3 className="font-display text-3xl text-primary">{treatment.name}</h3>
                        <p className="mt-4 text-primary/80 leading-relaxed line-clamp-2">{treatment.description}</p>
                        <Link 
                          to={`/treatments/${treatment.id}`}
                          className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-gold hover:text-primary transition-colors"
                        >
                          Learn More <ArrowRight size={12} />
                        </Link>
                      </div>
                      <div className="space-y-4">
                        {treatment.prices.map((price) => (
                          <div
                            key={`${treatment.id}-${price.label}`}
                            className="group flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-cream/30 p-6 transition-colors hover:bg-gold/5"
                          >
                            <div>
                              <p className="font-display text-xl font-bold text-primary">{price.label}</p>
                              {price.note && <p className="mt-1 text-sm text-primary/70 italic">{price.note}</p>}
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="font-bold text-2xl text-gold">{price.amount}</span>
                              <div className="h-1 w-8 bg-primary/10 transition-all group-hover:w-12 group-hover:bg-gold/30" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
