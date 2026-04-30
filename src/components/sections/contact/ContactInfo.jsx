import { Clock, Mail, MapPin, Phone } from "lucide-react";

const details = [
  [MapPin, "Bondi Beach, NSW 2026"],
  [Phone, "02 9000 1234"],
  [Mail, "info@bondiskinclinic.com.au"],
  [Clock, "Mon-Fri 9am-6pm, Sat 9am-3pm"],
];

export default function ContactInfo() {
  return (
    <div className="bg-surface p-6 sm:p-8 shadow-warm w-full max-w-full overflow-hidden">
      <h2 className="font-display text-5xl text-primary">Visit Bondi Skin Clinic</h2>
      <div className="mt-8 grid gap-5">
        {details.map(([Icon, value]) => (
          <div key={value} className="flex gap-4">
            <Icon className="mt-1 flex-shrink-0 text-gold" size={20} />
            <p className="break-words leading-7">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
