import Button from "../../ui/Button";

export default function ContactForm() {
  return (
    <form className="grid gap-4 bg-surface p-8 shadow-warm">
      <input className="bg-cream px-4 py-4 outline-gold" placeholder="Name" aria-label="Name" />
      <input className="bg-cream px-4 py-4 outline-gold" placeholder="Email" aria-label="Email" type="email" />
      <input className="bg-cream px-4 py-4 outline-gold" placeholder="Phone" aria-label="Phone" />
      <textarea className="min-h-36 resize-y bg-cream px-4 py-4 outline-gold" placeholder="Message" aria-label="Message" />
      <Button type="submit">Submit enquiry</Button>
    </form>
  );
}
