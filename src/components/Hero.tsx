import { ArrowRight } from "lucide-react";
import Image from "next/image";

const cities = [
  { name: "Cairo", x: "68.5%", y: "10%" },
  { name: "Casablanca", x: "14%", y: "5%" },
  { name: "Dakar", x: "1%", y: "30%" },
  { name: "Lagos", x: "30%", y: "44%" },
  { name: "Accra", x: "25%", y: "43%" },
  { name: "Addis Ababa", x: "80%", y: "38%" },
  { name: "Nairobi", x: "78%", y: "52%" },
  { name: "Johannesburg", x: "65%", y: "85%" },
];

function AfricaMap() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 bg-brand/8 rounded-full blur-3xl" />
      </div>

      {/* Africa SVG */}
      <div className="relative w-full max-w-sm lg:max-w-md">
        <Image
          src="/africa.svg"
          alt="Africa map"
          width={480}
          height={436}
          className="w-full h-auto opacity-90"
          priority
        />

        {/* City dot overlays positioned absolutely on the map */}
        {cities.map((city) => (
          <div
            key={city.name}
            className="absolute"
            style={{ left: city.x, top: city.y }}
          >
            {/* Outer pulse ring */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-teal/15" />
            {/* Mid ring */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-teal/30" />
            {/* Core */}
            <div className="absolute -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-teal" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Very subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#4A6AFF 1px, transparent 1px), linear-gradient(90deg, #4A6AFF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 pt-32 pb-10 grid lg:grid-cols-2 gap-10 lg:gap-0 items-center">
        {/* Left — text */}
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-dark-border bg-dark-card text-muted text-xs font-medium tracking-widest uppercase mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-bright" />
            Africa&apos;s Digital Consultancy
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.2rem] font-light text-cream leading-[1.08] tracking-tight mb-6">
            We transform
            <br />
            businesses through
            <br />
            <span className="text-brand-bright font-normal">
              digital excellence.
            </span>
          </h1>

          <p className="text-lg text-muted leading-relaxed max-w-lg mb-4">
            From digital marketing to software development and data analytics —
            we provide the strategy, tools, and execution to help African
            businesses compete globally.
          </p>

          <p className="text-xs tracking-[0.2em] text-brand-bright/70 uppercase mb-10">
            Technology &nbsp;|&nbsp; Innovation &nbsp;|&nbsp; Creativity
            &nbsp;|&nbsp; Ideas
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-bright text-white text-sm font-semibold rounded-sm hover:bg-brand-light transition-colors duration-200"
            >
              Start a Project
              <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-dark-border text-cream text-sm font-medium rounded-sm hover:border-brand-bright/40 hover:text-brand-bright transition-colors duration-200"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right — Africa map */}
        <div className="hidden lg:flex items-center justify-center h-full pl-6">
          <AfricaMap />
        </div>
      </div>

      {/* Stats row */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 pb-16">
        <div className="pt-8 border-t border-dark-border grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Clients Served" },
            { value: "120+", label: "Projects Delivered" },
            { value: "8+", label: "African Markets" },
            { value: "5 yrs", label: "Of Excellence" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-brand-bright">
                {stat.value}
              </p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
