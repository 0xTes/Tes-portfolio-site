import { STORE_URL } from "../lib/site";

export default function Footer() {
  return (
    <footer className="mt-12 bg-slate-950 px-6 py-12 text-center text-white md:py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-wide">
            © {new Date().getFullYear()} Teslim Digital
          </p>
          <p className="mt-3 text-sm text-slate-300">
            AI &amp; Automation • Systems • Websites
          </p>
          <p className="mt-4 max-w-md text-xs leading-relaxed text-slate-500">
            Designed and built with performance, accessibility and long-term
            scalability in mind.
          </p>
        </div>
        <div className="text-center">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-teal-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Visit Store <span aria-hidden="true">↗</span>
          </a>
          <p className="mt-4 text-sm text-slate-300">
            Nationwide delivery · Worldwide delivery soon
          </p>
          <p className="mt-2 text-xs text-slate-500">Opens my Store in a new tab.</p>
        </div>
      </div>
    </footer>
  );
}
