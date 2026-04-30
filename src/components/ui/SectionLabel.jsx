export default function SectionLabel({ children, line = true, className = "" }) {
  return (
    <div className={`mb-4 flex items-center gap-3 text-gold label-text ${className}`}>
      {line && <span className="h-px w-8 bg-gold" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  );
}
