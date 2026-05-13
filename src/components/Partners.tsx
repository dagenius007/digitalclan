const partners = [
  { name: "Flutterwave", style: "font-bold tracking-tight text-lg" },
  { name: "Safaricom", style: "font-semibold tracking-wide text-base uppercase" },
  { name: "MTN Group", style: "font-black tracking-tighter text-xl" },
  { name: "Paystack", style: "font-medium tracking-tight text-lg" },
  { name: "Jumia", style: "font-bold tracking-widest text-base uppercase" },
  { name: "Andela", style: "font-light tracking-[0.2em] text-lg uppercase" },
  { name: "Equity Group", style: "font-semibold tracking-tight text-base" },
  { name: "Standard Bank", style: "font-medium tracking-wide text-sm uppercase" },
];

export default function Partners() {
  return (
    <section className="py-16 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-medium tracking-widest uppercase text-muted text-center mb-10">
          Trusted by teams across Africa
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`${partner.style} text-muted/40 hover:text-muted/70 transition-colors duration-300 select-none cursor-default`}
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
