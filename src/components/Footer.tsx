import Image from "next/image";

const year = new Date().getFullYear();

const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-dark-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <a href="#" className="inline-block">
              <Image
                src="/logo.png"
                alt="Digital Clan"
                width={130}
                height={39}
                className="h-9 w-auto object-contain rounded-sm"
              />
            </a>
            <p className="text-xs text-muted mt-2 tracking-[0.15em] uppercase">
              Technology | Innovation | Creativity | Ideas
            </p>
          </div>

          <nav className="flex flex-wrap gap-6">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-cream transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-xs text-muted">
            © {year} Digital Clan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
