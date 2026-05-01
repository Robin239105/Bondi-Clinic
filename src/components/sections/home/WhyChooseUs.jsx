import { ShieldCheck, Sparkles, HeartPulse } from "lucide-react";
import SectionLabel from "../../ui/SectionLabel";

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2 className="display-heading mt-6 max-w-2xl text-4xl leading-tight text-primary md:text-5xl">
            Clinical Excellence Meets <span className="font-display italic text-gold">Patient Outcomes</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-primary/90">
            At Bondi Skin Clinic, we prioritize medical-grade results. Each treatment plan is scientifically designed to optimize your skin health and deliver long-term clinical efficacy.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Bespoke Clinical Plans",
              description: "Every treatment is scientifically tailored to your specific skin physiology, clinical goals, and health history.",
              Icon: HeartPulse,
              bg: "bg-gold/5",
              iconBg: "bg-gold/10",
              iconColor: "text-gold",
            },
            {
              title: "Medical Precision",
              description: "Led by specialist practitioners using medical-grade techniques and proven dermatological technology.",
              Icon: ShieldCheck,
              bg: "bg-gold/5",
              iconBg: "bg-gold/10",
              iconColor: "text-gold",
            },
            {
              title: "Skin Health Optimization",
              description: "We focus on therapeutic intervention while prioritizing the long-term integrity and resilience of your skin barrier.",
              Icon: Sparkles,
              bg: "bg-primary/5",
              iconBg: "bg-primary/10",
              iconColor: "text-primary",
            },
          ].map((feature) => (
            <div key={feature.title} className={`${feature.bg} rounded-[2rem] p-8 md:p-10 transition-transform hover:-translate-y-1`}>
              <div className={`${feature.iconBg} ${feature.iconColor} flex h-14 w-14 items-center justify-center rounded-2xl`}>
                <feature.Icon size={28} />
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold text-primary">{feature.title}</h3>
              <p className="mt-4 leading-relaxed text-primary/90">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
