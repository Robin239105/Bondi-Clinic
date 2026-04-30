import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen pt-48 pb-32">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="label-text text-gold">Legal Information</p>
          <h1 className="display-heading mt-6 text-6xl text-primary">Terms & <span className="italic">Conditions</span></h1>
          
          <div className="mt-16 prose prose-lg prose-stone max-w-none text-primary/90 leading-relaxed space-y-12 font-normal">
            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Booking & Cancellations</h2>
              <p>
                To ensure all patients receive timely care, we require a minimum of 24 hours' notice for cancellations. Late cancellations or no-shows may incur a fee or forfeiture of your deposit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Clinical Consultations</h2>
              <p>
                A professional consultation is mandatory for all new patients and certain advanced treatments. This ensures your safety and allows our clinicians to develop a tailored treatment plan suited to your unique skin health.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Treatment Outcomes</h2>
              <p>
                While we strive for excellence in every procedure, clinical outcomes can vary based on individual skin biology and post-treatment care. We do not provide refunds for services rendered based on subjective results.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Medical Suitability</h2>
              <p>
                You must provide accurate medical history. Bondi Skin Clinic reserves the right to refuse treatment if a patient is deemed clinically unsuitable or if the requested procedure poses an unnecessary health risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">E-Commerce & Shipping</h2>
              <p>
                For products purchased through our shop, we offer shipping within Australia. Due to the clinical nature of our cosmeceuticals, returns are only accepted for faulty items or in cases of documented adverse reactions verified by our team.
              </p>
            </section>

            <section className="pt-10 border-t border-primary/10">
              <p className="text-sm italic">Last updated: April 2026</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
