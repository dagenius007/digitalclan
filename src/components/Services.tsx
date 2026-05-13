import { TrendingUp, Code2, BarChart3, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Brand strategy, SEO, paid media, content, and social — all built around measurable results for African and global markets.",
    points: [
      "Search & Social Advertising",
      "Brand Strategy & Identity",
      "Content Marketing",
      "SEO & Web Analytics",
    ],
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Web and mobile applications built with modern technology. From MVPs to enterprise platforms — scalable, secure, and fast.",
    points: [
      "Web & Mobile Applications",
      "API & Backend Systems",
      "E-commerce Solutions",
      "Product Design & UX",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Turn raw data into decisions that move your business forward. We build dashboards, models, and pipelines that give you clarity.",
    points: [
      "Business Intelligence",
      "Data Pipelines & Engineering",
      "Reporting & Dashboards",
      "Predictive Analytics",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-medium tracking-widest uppercase text-brand-bright mb-4">
            What We Do
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-cream leading-tight max-w-xl">
            Three disciplines.
            <br />
            One focused team.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-dark-border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-dark p-8 lg:p-10 group hover:bg-dark-card transition-colors duration-300"
              >
                <div className="w-10 h-10 flex items-center justify-center border border-dark-border group-hover:border-brand-bright/30 rounded-sm mb-8 transition-colors duration-300">
                  <Icon size={18} className="text-brand-bright" />
                </div>

                <h3 className="text-xl font-medium text-cream mb-4">
                  {service.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-8">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-muted"
                    >
                      <span className="w-1 h-1 rounded-full bg-teal shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm text-brand-bright group-hover:gap-2.5 transition-all duration-200"
                >
                  Get started
                  <ArrowUpRight size={14} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
