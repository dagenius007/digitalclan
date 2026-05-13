const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by deeply understanding your business, your market, and the gap between where you are and where you want to be.",
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "We develop a focused, phased plan — prioritising the highest-impact actions and aligning every team member behind a shared direction.",
  },
  {
    number: "03",
    title: "Execute",
    description:
      "Our team gets to work. We build, launch, and iterate — staying close to the data and adjusting as we go.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We hand over results you can see and measure. Then we stay to help you scale what's working.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-28 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-brand-bright mb-4">
              How We Work
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-cream leading-tight">
              A process built
              <br />
              around outcomes.
            </h2>
            <p className="text-muted text-sm leading-relaxed mt-6">
              No handoffs, no black boxes. You are involved at every stage and
              informed at every step.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-dark-border">
            {steps.map((step) => (
              <div
                key={step.number}
                className="bg-dark p-8 hover:bg-dark-card transition-colors duration-300"
              >
                <span className="text-5xl font-light text-dark-border select-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-medium text-cream mt-4 mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
