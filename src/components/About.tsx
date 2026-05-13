import { CheckCircle2 } from "lucide-react";

const strengths = [
  "Deep understanding of African markets and consumer behaviour",
  "Integrated teams across strategy, design, and engineering",
  "Transparent reporting — you always know what's working",
  "Long-term partnerships, not one-off engagements",
];

export default function About() {
  return (
    <section id="about" className="py-28 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-brand-bright mb-4">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-cream leading-tight mb-6">
              Built in Africa,
              <br />
              built for the world.
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Digital Clan is a consultancy rooted in Africa with a global
              perspective. We work with startups, SMEs, and enterprises to help
              them grow — not just digitally, but strategically.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              We combine the agility of a boutique firm with the depth of an
              enterprise consultancy. Our teams think in outcomes, not
              deliverables — and we stay with you long enough to see them
              through.
            </p>

            <ul className="space-y-4">
              {strengths.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-teal mt-0.5 shrink-0"
                  />
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  label: "Strategy First",
                  desc: "Every engagement starts with a clear understanding of your goals.",
                },
                {
                  label: "Africa-Native",
                  desc: "We understand local context, culture, and market dynamics.",
                },
                {
                  label: "Data-Driven",
                  desc: "Decisions backed by research, metrics, and real-time insights.",
                },
                {
                  label: "Full-Service",
                  desc: "Marketing, engineering, and analytics under one roof.",
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-dark-card border border-dark-border p-6 rounded-sm"
                >
                  <h4 className="text-sm font-medium text-cream mb-2">
                    {card.label}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-brand-bright/15 rounded-sm pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-brand-bright/08 rounded-sm pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
