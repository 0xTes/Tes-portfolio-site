import { motion, useReducedMotion } from "framer-motion";

import { BOOKING_URL } from "../lib/site";

const contactItems = [
  {
    icon: "✉",
    label: "Email",
    value: "tesdistro@gmail.com",
    subtitle: "Reply within 24 hours",
    href: "mailto:tesdistro@gmail.com",
  },
  {
    icon: "◉",
    label: "WhatsApp",
    value: "+1 985 288 7616",
    subtitle: "Available Mondays – Fridays",
    href: "https://wa.me/19852887616",
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/prozone-digital" },
  { label: "GitHub", href: "https://github.com/0xTes" },
  { label: "X (Twitter)", href: "https://twitter.com/prozone_digital" },
];

export default function LetsTalk({ className = "" }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className={`py-28 md:py-36 ${className}`}
    >
      <div className="section min-w-0">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 35 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative grid min-w-0 gap-8 overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        >
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <span className="whitespace-nowrap text-[140px] font-black leading-none tracking-tight text-slate-900 opacity-[0.07] md:text-[220px] lg:text-[260px]">
              CONTACT
            </span>
          </div>

          <div className="glass-card relative z-10 min-w-0 rounded-[40px] p-8 sm:p-10 md:p-12">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-teal-600">
              Available for new projects
            </p>
            <h2
              id="contact-heading"
              className="mb-4 min-w-0 break-words text-3xl font-semibold text-slate-900 md:text-4xl"
            >
              Let’s find the right next step.
            </h2>
            <p className="max-w-md text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
              Whether you are planning a new website, exploring AI and
              automation, or improving existing systems, the first step is a
              focused conversation about the business outcome you need.
            </p>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-teal-600 px-6 py-5 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Book a discovery call <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 text-center text-sm text-slate-500">
              Free 30-minute session · No obligation
            </p>

            <dl className="mt-10 space-y-6">
              {contactItems.map((item) => (
                <div key={item.label} className="flex min-w-0 items-start gap-4">
                  <span className="mt-0.5 shrink-0 text-xl text-teal-700" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {item.label}
                    </dt>
                    <dd>
                      <a
                        href={item.href}
                        target={item.label === "WhatsApp" ? "_blank" : undefined}
                        rel={item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                        className="break-anywhere rounded-sm font-medium text-slate-800 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                      >
                        {item.value}
                      </a>
                    </dd>
                    <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                  </div>
                </div>
              ))}
              <div className="flex min-w-0 items-start gap-4">
                <span className="mt-0.5 shrink-0 text-xl text-teal-700" aria-hidden="true">
                  ◌
                </span>
                <div className="min-w-0">
                  <dt className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Location
                  </dt>
                  <dd className="font-medium text-slate-800">United States</dd>
                </div>
              </div>
            </dl>

            <nav aria-label="Teslim Digital social links" className="mt-10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                Social links
              </p>
              <div className="flex min-w-0 flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="max-w-full break-words rounded-2xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <div className="glass-card relative z-10 flex min-w-0 flex-col justify-between gap-10 rounded-[40px] p-8 sm:p-10 md:p-12">
            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-4 w-4 shrink-0 rounded-full bg-green-400 motion-safe:animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-green-700">Available now</span>
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                A practical first conversation
              </h3>
              <p className="text-[1.0625rem] leading-relaxed text-slate-600">
                We will discuss your goals, the friction your business is
                experiencing, and the most useful path forward—with no pressure
                to start a project before it makes sense.
              </p>
            </div>
            <div className="rounded-[28px] border border-teal-100 bg-teal-50/70 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
                In the call
              </p>
              <ul className="mt-4 space-y-3 text-[1.0625rem] leading-relaxed text-slate-700">
                <li className="flex gap-3"><span aria-hidden="true">✓</span><span>Clarify the business outcome that matters most.</span></li>
                <li className="flex gap-3"><span aria-hidden="true">✓</span><span>Identify the bottleneck worth solving first.</span></li>
                <li className="flex gap-3"><span aria-hidden="true">✓</span><span>Leave with a practical next step.</span></li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
