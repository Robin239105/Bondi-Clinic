import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Button from "../../ui/Button";

const API_URL = import.meta.env.VITE_API_URL || "";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const fd = new FormData(e.target);
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          phone: fd.get("phone") || undefined,
          message: fd.get("message"),
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
      setSubmitted(true);
      e.target.reset();
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="w-full max-w-full overflow-hidden">
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <div className="h-16 w-16 rounded-full bg-gold/10 flex items-center justify-center text-gold">
            <CheckCircle2 size={32} />
          </div>
          <p className="font-display text-2xl text-primary">Message <span className="italic text-gold">Received</span></p>
          <p className="text-primary/70 text-sm max-w-xs">Thank you for reaching out. Our team will be in touch with you shortly.</p>
          <button onClick={() => setSubmitted(false)} className="mt-2 text-xs uppercase tracking-widest font-bold text-primary/50 hover:text-primary transition-colors">
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-full overflow-hidden">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input required name="name" className="bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Name" aria-label="Name" />
        <input required name="email" className="bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Email" aria-label="Email" type="email" />
        <input name="phone" className="bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Phone (optional)" aria-label="Phone" />
        <textarea required name="message" className="min-h-36 resize-y bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Message" aria-label="Message" />
        {error && (
          <div className="flex items-center gap-2 rounded-xl bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-700">
            <AlertCircle size={15} className="shrink-0" /> {error}
          </div>
        )}
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={16} className="animate-spin" /> Sending…
            </span>
          ) : "Submit enquiry"}
        </Button>
      </form>
    </div>
  );
}
