import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronRight, Calendar, User, ClipboardList, CheckCircle2, ArrowLeft, MessageCircle, AlertCircle, Loader2 } from "lucide-react";
import Button from "../../ui/Button";
import { useTreatments } from "../../../hooks/useTreatments";

const API_URL = import.meta.env.VITE_API_URL || "";

const categories = [
  { id: "skin", label: "Skin Health", icon: "✨" },
  { id: "body", label: "Body Contouring", icon: "🧘" },
  { id: "laser", label: "Laser Excellence", icon: "⚡" },
  { id: "injectables", label: "Medical Injectables", icon: "💉" },
  { id: "prp", label: "PRP Therapy", icon: "🩸" },
];

export default function BookingSystem() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    category: null,
    service: null,
    details: { name: "", email: "", phone: "", preferred_date: "", preferred_time: "", notes: "" }
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [whatsappUrl, setWhatsappUrl] = useState("");
  
  // Fetch treatments when category is selected
  const { treatments, loading: treatmentsLoading, error: treatmentsError } = useTreatments(selection.category?.id);

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const handleCategorySelect = (cat) => {
    setSelection({ ...selection, category: cat, service: null });
    nextStep();
  };

  const handleServiceSelect = (service) => {
    setSelection({ ...selection, service: service });
    nextStep();
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setSubmitting(true);
    const formData = new FormData(e.target);
    try {
      const res = await fetch(`${API_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          category: selection.category?.id,
          service_name: selection.service?.name,
          service_price: selection.service?.prices?.[0]?.amount || "",
          preferred_date: formData.get("preferred_date") || null,
          preferred_time: formData.get("preferred_time") || null,
          notes: formData.get("notes") || "",
        }),
      });

      let data;
      const contentType = res.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        data = await res.json();
      } else {
        const text = await res.text();
        throw new Error(text?.substring(0, 200) || `Server error ${res.status}`);
      }

      if (!res.ok) throw new Error(data?.errors?.[0]?.msg || data?.error || `Submission failed (${res.status})`);
      setWhatsappUrl(data.whatsappUrl || "");
      nextStep();
    } catch (err) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-4xl rounded-[3rem] border border-primary/5 bg-white p-6 md:p-16 shadow-[0_40px_100px_rgba(26,20,16,0.12)]">
      {/* Progress Bar */}
      <div className="mb-12 md:mb-16 flex items-center justify-between gap-2 sm:gap-4 px-2 sm:px-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex flex-1 items-center gap-2 sm:gap-4">
            <div className={`h-8 w-8 sm:h-12 sm:w-12 rounded-full border-2 flex items-center justify-center text-xs sm:text-base transition-all duration-500 ${
              step >= i ? "border-primary bg-primary text-white" : "border-primary/10 text-primary/60"
            }`}>
              {step > i ? <CheckCircle2 size={16} className="sm:hidden" /> : null}
              {step > i ? <CheckCircle2 size={20} className="hidden sm:block" /> : i}
            </div>
            {i < 4 && <div className={`h-px flex-1 transition-all duration-700 ${step > i ? "bg-primary" : "bg-primary/10"}`} />}
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-10"
          >
            <div className="text-center">
              <h2 className="font-display text-5xl text-primary leading-tight">Select a <span className="italic text-gold">Department</span></h2>
              <p className="mt-4 text-primary/80">Choose the area of expertise you require for your skin journey.</p>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat)}
                  className="group flex flex-col sm:flex-row items-center justify-between rounded-3xl border border-primary/5 bg-cream/30 p-6 sm:p-8 text-left transition-all hover:bg-primary hover:text-white"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-4xl grayscale group-hover:grayscale-0 transition-all">{cat.icon}</span>
                    <span className="font-display text-2xl">{cat.label}</span>
                  </div>
                  <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transition-all" />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-10"
          >
            <div className="flex items-center justify-between">
              <button onClick={prevStep} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors">
                <ArrowLeft size={16} /> Back
              </button>
              <div className="text-right">
                <h2 className="font-display text-4xl text-primary">{selection.category?.label} <span className="italic text-gold">Treatments</span></h2>
              </div>
            </div>

            {treatmentsLoading ? (
              <div className="grid gap-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="bg-stone-200 h-24 rounded-3xl animate-pulse"></div>
                ))}
              </div>
            ) : treatmentsError ? (
              <p className="text-red-600 text-center">Failed to load treatments. Please try again.</p>
            ) : (
              <div className="grid gap-4">
                {treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleServiceSelect({
                      id: t.id,
                      name: t.name,
                      prices: t.prices?.map(p => ({ amount: p.amount, label: p.label, note: p.note })) || []
                    })}
                    className="group flex flex-col items-start rounded-3xl border border-primary/5 bg-cream/30 p-6 sm:p-8 text-left transition-all hover:bg-primary hover:text-white"
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-display text-2xl">{t.name}</span>
                      <span className="font-bold text-gold group-hover:text-gold-light">{t.prices?.[0]?.amount}</span>
                    </div>
                    <p className="mt-2 text-sm opacity-80 max-w-xl line-clamp-2">{t.description}</p>
                  </button>
                ))}
              </div>
            )}
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-10"
          >
            <div className="flex items-center justify-between">
              <button onClick={prevStep} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors">
                <ArrowLeft size={16} /> Back
              </button>
              <h2 className="font-display text-4xl text-primary text-right">Patient <span className="italic text-gold">Details</span></h2>
            </div>

            <form onSubmit={handleFormSubmit} className="grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Full Name</label>
                  <input required name="name" type="text" placeholder="Sarah Jenkins" className="w-full rounded-2xl border border-primary/5 bg-cream/30 p-4 sm:p-6 focus:border-primary focus:bg-white transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Phone Number</label>
                  <input required name="phone" type="tel" placeholder="0400 000 000" className="w-full rounded-2xl border border-primary/5 bg-cream/30 p-4 sm:p-6 focus:border-primary focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Email Address</label>
                <input required name="email" type="email" placeholder="sarah@example.com" className="w-full rounded-2xl border border-primary/5 bg-cream/30 p-4 sm:p-6 focus:border-primary focus:bg-white transition-all outline-none" />
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Preferred Date (optional)</label>
                  <input name="preferred_date" type="date" className="w-full rounded-2xl border border-primary/5 bg-cream/30 p-4 sm:p-6 focus:border-primary focus:bg-white transition-all outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Preferred Time (optional)</label>
                  <input name="preferred_time" type="time" className="w-full rounded-2xl border border-primary/5 bg-cream/30 p-4 sm:p-6 focus:border-primary focus:bg-white transition-all outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary/70">Clinical Notes / Concerns</label>
                <textarea name="notes" placeholder="Tell us about your skin goals..." className="w-full h-32 rounded-2xl border border-primary/5 bg-cream/30 p-4 sm:p-6 focus:border-primary focus:bg-white transition-all outline-none resize-none" />
              </div>
              {submitError && (
                <div className="flex items-center gap-3 rounded-2xl bg-red-50 border border-red-100 p-4 text-sm text-red-700">
                  <AlertCircle size={16} className="shrink-0" />
                  {submitError}
                </div>
              )}
              
              <div className="mt-8 rounded-3xl bg-primary p-6 sm:p-8 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center text-gold">
                      <ClipboardList size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest opacity-90">Appointment for</p>
                      <p className="font-display text-xl">{selection.service?.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest opacity-90">Estimate</p>
                    <p className="font-bold text-2xl text-gold">{selection.service?.prices[0]?.amount}</p>
                  </div>
                </div>
              </div>

              <button type="submit" disabled={submitting} className="w-full rounded-full bg-primary py-5 sm:py-8 font-bold uppercase tracking-[0.1em] sm:tracking-widest text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] text-xs sm:text-base disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-3">
                {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : "Request Professional Appointment"}
              </button>
            </form>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="mx-auto mb-8 h-24 w-24 rounded-full bg-gold/10 flex items-center justify-center text-gold">
              <CheckCircle2 size={48} />
            </div>
            <h2 className="font-display text-5xl text-primary">Request <span className="italic text-gold">Sent</span></h2>
            <p className="mt-6 text-xl text-primary/80 max-w-md mx-auto">
              Our clinical coordinator will contact you shortly to confirm your clinical time and treatment plan.
            </p>
            {whatsappUrl && (
              <div className="mt-8">
                <p className="text-sm text-primary/60 mb-4 uppercase tracking-widest font-bold">Send us a WhatsApp message</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white shadow-lg transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={20} /> Message Us on WhatsApp
                </a>
              </div>
            )}
            <div className="mt-8">
              <Button href="/" size="lg">Return to Home</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
