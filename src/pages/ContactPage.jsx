import { Link } from "react-router-dom";
import ContactForm from "../components/sections/contact/ContactForm";
import ContactInfo from "../components/sections/contact/ContactInfo";
import ServiceHero from "../components/sections/shared/ServiceHero";
import { images } from "../data/images";

import SEO from "../components/layout/SEO";

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact Us"
        description="Get in touch with Bondi Skin Clinic. Located in the heart of Bondi, we're here to help you achieve your skin health goals."
        url="/contact"
        keywords="contact skin clinic bondi, skin clinic location bondi, book consultation bondi"
      />
      <ServiceHero 
        eyebrow="Contact" 
        title="Connect with Our Clinic" 
        copy="Whether you have a question about a treatment or are ready to book your consultation, our team is here to help." 
        image={images.clinic} 
      />
      
      <section className="section-pad bg-cream">
        <div className="container-wide">
          <div className="overflow-hidden rounded-[3rem] bg-white shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="bg-primary p-12 lg:p-20 text-white">
                <ContactInfo />
              </div>
              <div className="p-12 lg:p-20">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <h3 className="font-display text-4xl text-primary">Send a Message</h3>
                  <Link to="/booking" className="text-[10px] uppercase tracking-widest font-black text-gold hover:text-primary transition-colors">Ready to book?</Link>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-[600px] w-full overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-1000">
        <iframe
          title="Bondi Skin Clinic map"
          src="https://www.google.com/maps?q=Bondi%20Beach%20NSW%202026&output=embed"
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
        />
        <div className="absolute inset-0 pointer-events-none bg-primary/10 mix-blend-multiply" />
      </div>
    </>
  );
}
