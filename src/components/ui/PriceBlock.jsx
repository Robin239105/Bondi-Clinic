export default function PriceBlock({ label, price, isSale, originalPrice, note }) {
  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-t border-primary/10 py-3">
      <span className="font-display text-xl italic text-muted">{label}</span>
      {originalPrice && (
        <span className="text-sm text-muted line-through">{originalPrice}</span>
      )}
      <strong className={isSale ? "text-lg font-medium text-gold" : "text-lg font-medium text-primary"}>
        {price}
      </strong>
      {note && <span className="text-xs text-muted">{note}</span>}
    </div>
  );
}
