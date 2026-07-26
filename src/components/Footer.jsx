import { STORE_URL } from "../lib/site";

const navigationLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

const focusAreas = [
  "Strategic websites",
  "Intelligent systems",
  "AI & automation",
  "Technology strategy",
];

export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 px-6 py-16 text-slate-300 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.7fr)_minmax(0,0.9fr)_minmax(0,0.9fr)] lg:gap-10 lg:pb-16">
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <a
              href="/"
              className="inline-block rounded-sm text-2xl font-semibold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
            >
              TESLIM DIGITAL<span className="text-teal-400">.</span>
            </a>
            <p className="mt-5 max-w-sm text-[1.0625rem] leading-relaxed text-slate-400">
              Digital systems, strategic websites, and practical AI for
              businesses ready to remove friction and grow with more clarity.
            </p>
          </div>

          <nav aria-label="Footer navigation" className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
              Navigate
            </p>
            <ul className="mt-5 space-y-3 text-[1.0625rem]">
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded-sm transition-colors hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-300">
              Focus
            </p>
            <ul className="mt-5 space-y-3 text-[1.0625rem] text-slate-400">
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:self-end lg:text-right">
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary"
            >
              Visit Store <span aria-hidden="true">-&gt;</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-300">
              Nationwide delivery - Worldwide delivery soon
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              Opens my Store in a new tab.
            </p>
          </div>
        </div>

        <div className="grid gap-8 pt-8 text-center md:grid-cols-3 md:items-center">
          <div aria-hidden="true" className="hidden md:block" />
          <div>
            <p className="text-sm font-medium text-slate-300">
              © {new Date().getFullYear()} Teslim Digital. All rights reserved.
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">
              AI &amp; Automation - Systems - Websites
            </p>
          </div>
          <div aria-hidden="true" className="hidden md:block" />
        </div>
      </div>
    </footer>
  );
}
