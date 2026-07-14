import { motion } from "framer-motion";

// ── Configuration ─────────────────────────────────────────────────────────────
const BOOKING_URL = "https://ablink.send.calendly.com/ls/click?upn=u001.-2FpFZHOmNsCfytAyhc9roxA5LD773niqqD0IJajnN0YWAh4u17NoxhQF3waIyR-2BsCGwZnLuUZCd0bVghPIsvJVm1IDhUtcLmBVWcPM9XzrZLFjMLbB-2FyvrSBKOVhRMAJejcXqGpW8oXU9CEXUwfSS-2FE-2Bf-2BxWJbk3eSG0H7tiOc-2FotmpWjNa7svGw-2Fx-2BXLRxDzeWHN-2FZyaCj9XItenIQkVNQ-3D-3D9XMA_H-2Ba2icJftUiQ5Ai7F-2F6vIehEFbxvzbeRV7-2BVmqbxcRZspqc7IGqgawvffq4y4ee6u7CeqJ-2FhkXVFXyMINd0pZsDB5-2FPaX0Pm1JvFS9hm-2FWJNOtzDzSF8h6vt7yeTRPOawpI1a60zbVJ2-2BkhNW5mqN8dB67G1VCPDXZ8pblxG4VI-2FazVdkWVmKP7i3i7pTc9iPqd3pfDBjkpYFEQZfndwpXFjvNq5g5-2BD-2B-2FwJGOA1Gl1q1PAqxwQzH2PNGiBjcJfTyhR-2BqRudmWbTaEnqWCGBeuA7XOZQGZQrI2a4ngzTf53U6bhsyHL0Srz6WuBbLecjLURtq0w3PYtftDDmaNyhww-2B7TRbl-2B4yRx-2B2hOR4CPRKPrZhj7GVtx9JErSNpKFQQeV6sTjiMVBIXeA322vbdirGisVHuOFeSuj1JVrDxr3eWiSM1pbqsiIwDdujTLtyfw8i4W-2B3pMKdS8sXqU0TIJu9vFNBb5VVhtW0Y-2FH-2Fb84MHOC-2BtifcbdRG9RXKa9GxhJWuzSw8ZbecHq0ZubyA-2B48BCD7-2FCVHVVD0ce6A-2BKoQNwRRdA-2FTMolNruH9j-2Fj2nb-2FbcaybPmY-2FMcPH5NU5pXlTaWDn4vCHnRddfHkXfoeA-2Fsm7AsXMR8Kh4ySSj7po9U9-2BHnyTQ0X-2Bu4l3IjGa6vx81HtWVP8mEaB6OS-2BNEOvt3TZMGBpOF9TUXLUBYcf41swRamIzqUrm1h6sk-2FR6pWFd9Q6UGKI2zIWbiw6tYe-2BjEWZ0fjxY3zJFkzUouTtuM4";
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
  {
    icon: "📍",
    label: "Location",
    value: "United States",
    subtitle: "Remote · Worldwide delivery",
    href: null,
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
  return (
    <section id="contact" className="py-36">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative grid gap-8 overflow-hidden lg:grid-cols-2"
        >
          {/* Background watermark */}
          <div
            className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
            aria-hidden="true"
          >
            <span className="whitespace-nowrap text-[140px] font-black leading-none tracking-tight text-slate-900 opacity-[0.07] md:text-[220px] lg:text-[260px]">
              CONTACT
            </span>
          </div>

          {/* Left Card */}
          <div className="glass-card relative z-10 rounded-[40px] p-10 md:p-12">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-teal-600">
              Available for new projects
            </p>

            <h2 className="mb-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              Get in touch
            </h2>

            <p className="mb-10 max-w-md text-lg leading-relaxed text-slate-600">
              Whether you're planning a new website, exploring AI and
              automation, or looking to improve existing business systems, I'd
              be happy to learn about your goals and discuss how Teslim Digital
              can help.
            </p>

            <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_330px]">

  {/* LEFT SIDE */}
  <div className="space-y-6">

    {contactItems.slice(0, 2).map((item) => (
      <div key={item.label} className="flex items-start gap-4">

        <span className="mt-0.5 text-2xl" aria-hidden="true">
          {item.icon}
        </span>

        <div>
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
            {item.label}
          </p>

          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-slate-800 transition-colors duration-200 hover:text-teal-600"
          >
            {item.value}
          </a>

          <p className="mt-1 text-sm text-slate-500">
            {item.subtitle}
          </p>

        </div>

      </div>
    ))}

    {/* LOCATION */}

    <div className="flex items-start gap-4">

      <span className="mt-0.5 text-2xl">
        📍
      </span>

      <div>

        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Location
        </p>

        <p className="font-medium text-slate-800">
          United States
        </p>

      </div>

    </div>

  </div>

  {/* STORE PANEL */}

  <div className="flex flex-col justify-start">

    <a
      href={STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-teal-300 px-7 py-5 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-teal-300 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
    >
      🛍️ Visit Store
      <span aria-hidden="true">↗</span>
    </a>

    <p className="mt-6 text-sm leading-relaxed text-slate-600">
       Nationwide delivery · Worldwide delivery soon
    </p>

    <p className="mt-2 max-w-xs text-xs leading-relaxed text-slate-400">
      Opens my Store in a new tab.
    </p>

  </div>

</div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-slate-200 px-8 py-5 text-base font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-slate-900 hover:bg-slate-900 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card relative z-10 flex flex-col justify-between gap-10 rounded-[40px] p-10 md:p-12"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="h-4 w-4 animate-pulse rounded-full bg-green-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-green-600">
                  Available now
                </span>
              </div>

              <h3 className="mb-3 text-2xl font-semibold text-slate-900 md:text-3xl">
                Ready to start your project?
              </h3>

              <p className="text-base leading-relaxed text-slate-500">
                Every project starts with a conversation. We'll discuss your
                business, your objectives, and the most practical path forward—
                with no obligation and no pressure.
              </p>
            </div>

            <div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-teal-600 py-5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                Book a discovery call
                <span aria-hidden="true">→</span>
              </a>

              <p className="mt-4 text-center text-sm text-slate-400">
                Free 30-minute session · No obligation
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default LetsTalk;