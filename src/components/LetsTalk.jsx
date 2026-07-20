import { motion, useReducedMotion } from "framer-motion";

// ── Configuration ─────────────────────────────────────────────────────────────
const BOOKING_URL =
  "https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxA5LD773niqqD0IJajnN0YWAh4u17NoxhQF3waIyR-2BsCGwZnLuUZCd0bVghPIsvJVm1IDhUtcLmBVWcPM9XzrZLFjMLbB-2FyvrSBKOVhRMAJejcXqGpW8oXU9CEXUwfSS-2FE-2Bf-2BxWJbk3eSG0H7tiOc-2FotmpWjNa7svGw-2Fx-2BXLRxDzeWHN-2FZyaCj9XItenIQkVNQ-3D-3D9XMA_H-2Ba2icJftUiQ5Ai7F-2F6vIehEFbxvzbeRV7-2BVmqbxcRZspqc7IGqgawvffq4y4ee6u7CeqJ-2FhkXVFXyMINd0pZsDB5-2FPaX0Pm1JvFS9hm-2FWJNOtzDzSF8h6vt7yeTRPOawpI1a60zbVJ2-2BkhNW5mqN8dB67G1VCPDXZ8pblxG4VI-2FazVdkWVmKP7i3i7pTc9iPqd3pfDBjkpYFEQZfndwpXFjvNq5g5-2BD-2B-2FwJGOA1Gl1q1PAqxwQzH2PNGiBjcJfTyhR-2BqRudmWbTaEnqWCGBeuA7XOZQGZQrI2a4ngzTf53U6bhsyHL0Srz6WuBbLecjLURtq0w3PYtftDDmaNyhww-2B7TRbl-2B4yRx-2B2hOR4CPRKPrZhj7GVtx9JErSNpKFQQeV6sTjiMVBIXeA322vbdirGisVHuOFeSuj1JVrDxr3eWiSM1pbqsiIwDdujTLtyfw8i4W-2B3pMKdS8sXqU0TIJu9vFNBb5VVhtW0Y-2FH-2Fb84MHOC-2BtifcbdRG9RXKa9GxhJWuzSw8ZbecHq0ZubyA-2B48BCD7-2FCVHVVD0ce6A-2BKoQNwRRdA-2FTMolNruH9j-2Fj2nb-2FbcaybPmY-2FMcPH5NU5pXlTaWDn4vCHnRddfHkXfoeA-2Fsm7AsXMR8Kh4ySSj7po9U9-2BHnyTQ0X-2Bu4l3IjGa6vx81HtWVP8mEaB6OS-2BNEOvt3TZMGBpOF9TUXLUBYcf41swRamIzqUrm1h6sk-2FR6pWFd9Q6UGKI2zIWbiw6tYe-2BjEWZ0fjxY3zJFkzUouTtuM4";
const STORE_URL = "https://teslimdigital.shop";

const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: "tesdistro@gmail.com",
    subtitle: "Reply within 24 hours",
    href: "mailto:tesdistro@gmail.com",
  },
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+19852887616",
    subtitle: "Available Mondays - Fridays",
    href: "https://wa.me/19852887616",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/prozone-digital",
  },
  {
    label: "GitHub",
    href: "https://github.com/0xTes",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/prozone_digital",
  },
];

function LetsTalk() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-36">
      <div className="section min-w-0">
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 35 }
          }
          whileInView={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative grid min-w-0 gap-8 overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]"
        >
          {/* Background watermark */}
          <div
            className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <span className="whitespace-nowrap text-[140px] font-black leading-none tracking-tight text-slate-900 opacity-[0.07] md:text-[220px] lg:text-[260px]">
              CONTACT
            </span>
          </div>

          {/* Left Card */}
          <div className="glass-card relative z-10 min-w-0 rounded-[40px] p-10 md:p-12">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-teal-600">
              Available for new projects
            </p>

            <h2 className="mb-4 min-w-0 break-words text-3xl font-semibold text-slate-900 md:text-4xl">
              Get in touch
            </h2>

            <p className="mb-10 min-w-0 max-w-md break-words text-lg leading-relaxed text-slate-600">
              Whether you're planning a new website, exploring AI and
              automation, or looking to improve existing business systems, I'd
              be happy to learn about your goals and discuss how Teslim Digital
              can help.
            </p>

            <div className="mb-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,330px)]">
              {/* LEFT SIDE */}
              <div className="min-w-0 space-y-6">
                {contactItems.map((item) => (
                  <div
                    key={item.label}
                    className="flex min-w-0 items-start gap-4"
                  >
                    <span
                      className="mt-0.5 shrink-0 text-2xl"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>

                    <div className="min-w-0">
                      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                        {item.label}
                      </p>

                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block max-w-full break-words rounded-sm font-medium text-slate-800 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                      >
                        {item.value}
                      </a>

                      <p className="mt-1 break-words text-sm text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                ))}

                {/* LOCATION */}
                <div className="flex min-w-0 items-start gap-4">
                  <span
                    className="mt-0.5 shrink-0 text-2xl"
                    aria-hidden="true"
                  >
                    📍
                  </span>

                  <div className="min-w-0">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
                      Location
                    </p>

                    <p className="break-words font-medium text-slate-800">
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* STORE PANEL */}
              <div className="min-w-0 flex flex-col justify-start">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full min-w-0 items-center justify-center gap-3 rounded-full bg-teal-300 px-7 py-5 text-center text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-400 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <span className="break-words">🛍️ Visit Store</span>
                  <span aria-hidden="true">↗</span>
                </a>

                <p className="mt-6 max-w-full break-words text-sm leading-relaxed text-slate-600">
                  Nationwide delivery · Worldwide delivery soon
                </p>

                <p className="mt-2 max-w-full break-words text-xs leading-relaxed text-slate-400">
                  Opens my Store in a new tab.
                </p>
              </div>
            </div>

            <div className="flex min-w-0 flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-full break-words rounded-2xl border border-slate-200 px-8 py-5 text-base font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-900 hover:bg-slate-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <div className="glass-card relative z-10 flex min-w-0 flex-col justify-between gap-10 rounded-[40px] p-10 md:p-12">
            <div className="min-w-0">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-4 w-4 shrink-0 motion-safe:animate-pulse rounded-full bg-green-400"
                  aria-hidden="true"
                />

                <span className="break-words text-sm font-medium text-green-600">
                  Available now
                </span>
              </div>

              <h3 className="mb-3 min-w-0 break-words text-2xl font-semibold text-slate-900 md:text-3xl">
                Ready to start your project?
              </h3>

              <p className="min-w-0 break-words text-base leading-relaxed text-slate-500">
                Every project starts with a conversation. We'll discuss your
                business, your objectives, and the most practical path
                forward—with no obligation and no pressure.
              </p>
            </div>

            <div className="min-w-0">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full min-w-0 items-center justify-center gap-3 rounded-2xl bg-teal-600 px-6 py-5 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span className="break-words">Book a discovery call</span>
                <span aria-hidden="true">→</span>
              </a>

              <p className="mt-4 break-words text-center text-sm text-slate-400">
                Free 30-minute session · No obligation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LetsTalk;
