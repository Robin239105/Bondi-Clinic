import { BadgeDollarSign, CreditCard, WalletCards } from "lucide-react";

const methods = [
  ["Card", CreditCard],
  ["Cash", BadgeDollarSign],
  ["Afterpay", WalletCards],
];

export default function PaymentMethods() {
  return (
    <section className="bg-cream section-pad">
      <div className="container-wide grid gap-4 sm:grid-cols-3">
        {methods.map(([label, Icon]) => (
          <div key={label} className="flex items-center gap-4 bg-cream p-6">
            <Icon className="text-gold" size={24} />
            <span className="label-text text-primary">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
