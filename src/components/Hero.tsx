import { ArrowRight } from "lucide-react";
import Image from "next/image";

/*
 * City coordinates derived from africa.svg geoViewBox:
 * "-25.360994 37.343521 59.838547 -34.833225"
 * x = (lon + 25.361) / 85.200 * 239.057
 * y = (37.344 - lat) / 72.177 * 217.318
 */
const CITIES = [
  { name: "Casablanca", x: 49.9,  y: 11.4 },
  { name: "Cairo",      x: 158.9, y: 21.9 },
  { name: "Dakar",      x: 22.2,  y: 68.2 },
  { name: "Lagos",      x: 80.7,  y: 93.0 },
  { name: "Accra",      x: 70.7,  y: 95.7 },
  { name: "AddisAbaba", x: 179.9, y: 85.2 },
  { name: "Nairobi",    x: 174.6, y: 116.3 },
  { name: "Kinshasa",   x: 114.2, y: 125.4 },
  { name: "Joburg",     x: 149.9, y: 191.3 },
];

const CONNECTIONS = [
  ["Casablanca", "Cairo"],
  ["Dakar",      "Lagos"],
  ["Lagos",      "Accra"],
  ["Lagos",      "Nairobi"],
  ["Cairo",      "AddisAbaba"],
  ["AddisAbaba", "Nairobi"],
  ["Nairobi",    "Joburg"],
  ["Kinshasa",   "Nairobi"],
];

function cityPos(name: string) {
  return CITIES.find((c) => c.name === name)!;
}

function AfricaMap() {
  return (
    <div
      className="relative w-full max-w-sm lg:max-w-none"
      style={{ animation: "var(--animate-map-entrance)" }}
    >
      {/* Breathing glow behind continent */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ animation: "var(--animate-glow-breathe)" }}
      >
        <div className="w-72 h-72 rounded-full bg-brand/10 blur-3xl" />
      </div>

      {/* Africa base map image */}
      <Image
        src="/africa.svg"
        alt="Africa map"
        width={480}
        height={436}
        className="relative w-full h-auto"
        priority
      />

      {/* Animated SVG overlay — exact same viewBox as africa.svg */}
      <svg
        viewBox="0 0 239.057 217.318"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connection lines with flowing dash animation */}
        {CONNECTIONS.map(([a, b], i) => {
          const from = cityPos(a);
          const to   = cityPos(b);
          const delay = (i * 0.3).toFixed(1);
          return (
            <line
              key={`${a}-${b}`}
              x1={from.x} y1={from.y}
              x2={to.x}   y2={to.y}
              stroke="#00C4DC"
              strokeWidth="0.35"
              strokeOpacity="0.35"
              strokeDasharray="3 3"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="6" to="0"
                dur="1.8s"
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0;0.35;0.35"
                dur="0.6s"
                begin={`${delay}s`}
                fill="freeze"
              />
            </line>
          );
        })}

        {/* City markers — two staggered pulse rings + solid core */}
        {CITIES.map((city, i) => {
          const delay1 = (i * 0.25).toFixed(2);
          const delay2 = (i * 0.25 + 1.0).toFixed(2);
          return (
            <g key={city.name}>
              {/* Pulse ring 1 */}
              <circle cx={city.x} cy={city.y} r="2" fill="none" stroke="#00C4DC" strokeWidth="0.5">
                <animate attributeName="r"       values="2;10"    dur="2.4s" begin={`${delay1}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0"   dur="2.4s" begin={`${delay1}s`} repeatCount="indefinite" />
              </circle>

              {/* Pulse ring 2 — offset by 1 s for continuous feel */}
              <circle cx={city.x} cy={city.y} r="2" fill="none" stroke="#00C4DC" strokeWidth="0.4">
                <animate attributeName="r"       values="2;10"    dur="2.4s" begin={`${delay2}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;0"   dur="2.4s" begin={`${delay2}s`} repeatCount="indefinite" />
              </circle>

              {/* Solid core dot */}
              <circle cx={city.x} cy={city.y} r="1.8" fill="#00C4DC">
                <animate attributeName="opacity" values="0;1" dur="0.4s" begin={`${delay1}s`} fill="freeze" />
              </circle>
            </g>
          );
        })}
      </svg>
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
            <span className="text-brand-bright font-normal">digital excellence.</span>
          </h1>

          <p className="text-lg text-muted leading-relaxed max-w-lg mb-4">
            From digital marketing to software development and data analytics —
            we provide the strategy, tools, and execution to help African
            businesses compete globally.
          </p>

          <p className="text-xs tracking-[0.2em] text-brand-bright/70 uppercase mb-10">
            Technology &nbsp;|&nbsp; Innovation &nbsp;|&nbsp; Creativity &nbsp;|&nbsp; Ideas
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

        {/* Right — animated Africa map */}
        <div className="hidden lg:flex items-center justify-center h-full pl-6">
          <AfricaMap />
        </div>
      </div>

      {/* Stats row */}
      <div className="relative max-w-7xl mx-auto w-full px-6 lg:px-8 pb-16">
        <div className="pt-8 border-t border-dark-border grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "50+",  label: "Clients Served" },
            { value: "120+", label: "Projects Delivered" },
            { value: "8+",   label: "African Markets" },
            { value: "5 yrs",label: "Of Excellence" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-semibold text-brand-bright">{stat.value}</p>
              <p className="text-sm text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
