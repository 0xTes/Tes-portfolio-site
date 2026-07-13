export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 px-6 py-10 text-center text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold tracking-wide">
          © {new Date().getFullYear()} Teslim Digital
        </p>

        <p className="mt-3 text-sm text-slate-300">
          AI &amp; Automation • Systems • Websites
        </p>

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          Designed and built with performance, accessibility and long-term
          scalability in mind.
        </p>
      </div>
    </footer>
  );
}