import Button from "../../ui/Button";

export default function ContactForm() {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <form className="grid gap-4">
        <input className="bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Name" aria-label="Name" />
        <input className="bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Email" aria-label="Email" type="email" />
        <input className="bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Phone" aria-label="Phone" />
        <textarea className="min-h-36 resize-y bg-cream px-4 py-4 outline-gold rounded-xl" placeholder="Message" aria-label="Message" />
        <Button type="submit" className="w-full">Submit enquiry</Button>
      </form>
    </div>
  );
}
