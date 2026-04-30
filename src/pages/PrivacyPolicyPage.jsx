import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-cream min-h-screen pt-48 pb-32">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="label-text text-gold">Legal Information</p>
          <h1 className="display-heading mt-6 text-6xl text-primary">Privacy <span className="italic">Policy</span></h1>
          
          <div className="mt-16 prose prose-lg prose-stone max-w-none text-primary/90 leading-relaxed space-y-12 font-normal">
            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Introduction</h2>
              <p>
                Bondi Skin Clinic ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our clinic or use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Information We Collect</h2>
              <p>
                To provide you with high-quality clinical care, we may collect personal details such as your name, contact information, medical history, and skin concerns. We also collect data regarding your website visits through cookies to improve your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">How We Use Your Data</h2>
              <p>
                Your information is used strictly for:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Managing your clinical appointments and treatments.</li>
                <li>Communicating treatment plans and follow-up care.</li>
                <li>Internal quality assurance and clinical safety.</li>
                <li>Processing payments for services and products.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your medical records are stored in encrypted, clinical-grade systems with restricted access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display text-primary font-normal uppercase tracking-widest border-b border-primary/10 pb-4 mb-6">Your Rights</h2>
              <p>
                You have the right to access, correct, or request the deletion of your personal data. If you have any concerns regarding your privacy, please contact our clinic management directly.
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
