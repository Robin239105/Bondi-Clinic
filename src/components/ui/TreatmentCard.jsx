import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Check } from "lucide-react";
import PriceBlock from "./PriceBlock";
import Button from "./Button";

export default function TreatmentCard({ id, name, prices, description, image, risks, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative grid gap-8 lg:gap-12 lg:grid-cols-2 items-center mb-20 lg:mb-32"
    >
      {/* Image Section */}
      <div className={`relative aspect-[4/5] overflow-hidden rounded-[3rem] lg:rounded-[4rem] shadow-2xl ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <motion.img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
        
        {/* Floating Accent */}
        <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-gold/20 blur-3xl" />
      </div>

      {/* Content Section */}
      <div className={`space-y-8 ${isEven ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"}`}>
        <div className="space-y-4">
          <h3 className="font-display text-3xl sm:text-4xl lg:text-6xl text-primary leading-tight">
            {name}
          </h3>
        </div>

        <p className="text-lg leading-relaxed text-primary/90 font-normal italic">
          {description.substring(0, 180)}...
        </p>

        <div className="space-y-4 pt-4">
          <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/60">Investment Details</h4>
          <div className="divide-y divide-primary/5 border-y border-primary/5">
            {prices.slice(0, 3).map((item, idx) => (
              <div key={idx} className="py-4 flex justify-between items-baseline group/price">
                <div className="space-y-1">
                  <span className="text-sm font-display text-primary/80 group-hover/price:text-gold transition-colors">{item.label}</span>
                  {item.note && <p className="text-[10px] text-gold font-bold uppercase tracking-wider">{item.note}</p>}
                </div>
                <span className="text-lg font-bold text-primary">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-wrap gap-4 lg:gap-6 items-center">
          <Button href={`/treatments/${id}`} variant="outline" className="px-8">
            View Details
          </Button>
          <Button href="/booking" className="px-8">
            Book Treatment
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
