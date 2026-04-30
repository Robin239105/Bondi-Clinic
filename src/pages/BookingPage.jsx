import { motion } from "framer-motion";
import { images } from "../data/images";
import ServiceHero from "../components/sections/shared/ServiceHero";
import BookingSystem from "../components/sections/booking/BookingSystem";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

import SEO from "../components/layout/SEO";

export default function BookingPage() {
  return (
    <>
      <SEO 
        title="Book Online"
        description="Book your next clinical skin, body, or injectable treatment online. Convenient scheduling at our Bondi clinic."
        url="/booking"
        keywords="book skin treatment bondi, skin clinic appointment bondi, online booking bondi skin clinic"
      />
      <ServiceHero
        eyebrow="Appointments"
        title="Your Skin Journey Starts Here"
        copy="Reserve your professional consultation or treatment. Our clinicians are dedicated to providing personalized care in a tranquil Bondi environment."
        image={images.clinic}
      />
      
      <section className="section-pad bg-cream relative overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] bg-gold/5 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-gold/5 blur-[100px] rounded-full -translate-x-1/4 translate-y-1/4" />

        <div className="container-wide relative z-10">
          <div className="grid gap-10 lg:gap-20 lg:grid-cols-[1fr_350px]">
            {/* Booking System */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <BookingSystem />
            </motion.div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-[2.5rem] border border-primary/5 bg-white p-6 sm:p-10 shadow-xl"
              >
                <h3 className="font-display text-2xl text-primary italic mb-8">Visit the Clinic</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-cream flex items-center justify-center text-gold">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">Location</p>
                      <p className="mt-1 text-sm text-primary">Bondi Beach, NSW 2026</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-cream flex items-center justify-center text-gold">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">Call Us</p>
                      <p className="mt-1 text-sm text-primary">02 9000 1234</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-cream flex items-center justify-center text-gold">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-primary/70 font-bold">Email</p>
                      <p className="mt-1 text-sm text-primary">hello@bondiskinclinic.com</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="rounded-[2.5rem] border border-primary/5 bg-primary p-6 sm:p-10 shadow-xl text-white"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Clock className="text-gold" size={24} />
                  <h3 className="font-display text-2xl italic">Clinic Hours</h3>
                </div>
                
                <div className="space-y-3 text-sm opacity-90">
                  <div className="flex justify-between">
                    <span>Mon — Fri</span>
                    <span>9:00am – 7:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00am – 4:00pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-gold italic">By Appointment</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
