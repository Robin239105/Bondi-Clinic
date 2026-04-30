import { Clock, Mail, MapPin, Phone } from "lucide-react";

const details = [
  [MapPin, "Bondi Beach, NSW 2026"],
  [Phone, "02 9000 1234"],
  [Mail, "info@bondiskinclinic.com.au"],
  [Clock, "Mon-Fri 9am-6pm, Sat 9am-3pm"],
];

export default function ContactInfo() {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <h2 className="font-display text-4xl sm:text-5xl text-white sm:text-primary mb-8">Visit Bondi Skin Clinic</h2>
      <div className="grid gap-6">
        {details.map(([Icon, value]) => (
          <div key={value} className="flex gap-4 items-start">
            <Icon className="mt-1 flex-shrink-0 text-gold" size={20} />
            <p className="break-words leading-relaxed text-white/90 sm:text-primary/90">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
