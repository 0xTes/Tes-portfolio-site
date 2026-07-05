import { motion } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────
const contactItems = [
  {
    icon: "📧",
    label: "Email",
    value: "tesdistro@gmail.com",
    subtitle: "Reply within 24 hours",
    href: "mailto:hello@prozone-digital.com",
  },
  {
    icon: "📱",
    label: "WhatsApp",
    value: "+234 800 000 0000",
    subtitle: "Available 9am – 6pm WAT",
    href: "https://wa.me/2348000000000",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Mauritius",
    subtitle: "Remote / Nationwide delivery",
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

// ── Component ─────────────────────────────────────────────────────────────────
function LetsTalk() {
  return (
    <section id="contact" className="py-36">
      <div className="section">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden grid lg:grid-cols-2 gap-8"
        >
          {/* Wallpaper text — lives on the shared grid container (not inside
              either card) so it runs behind both "Get in touch" and "Ready
              to start your project" as one continuous watermark. Each card
              below gets position + z-10 so its own translucent background
              paints above this layer and the text shows through faintly
              instead of being covered — or, without the z-10, painting on
              TOP of the card content, since positioned elements paint above
              static in-flow content by default regardless of DOM order. */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
            aria-hidden="true"
          >
            <span className="text-[140px] md:text-[220px] lg:text-[260px] font-black tracking-tight text-slate-900 opacity-[0.04] leading-none whitespace-nowrap">
              CONTACT
            </span>
          </div>

          {/* ── Left column: contact info ── */}
          <div className="relative z-10 rounded-[40px] glass-card p-10 md:p-12">
            {/* Foreground */}
            <div>
              <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-5">
                Available for new projects
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">
                Get in touch
              </h2>

              <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md">
                Currently taking on freelance and consultancy work. Reach out —
                I'd love to hear about what you're building.
              </p>

              {/* Contact items */}
              <ul className="space-y-5 mb-10">
                {contactItems.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-slate-800 font-medium hover:text-teal-600 transition-colors duration-200"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 font-medium">{item.value}</p>
                      )}
                      <p className="text-sm text-slate-500 mt-0.5">{item.subtitle}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:-translate-y-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right column: availability card ── */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-10 glass-card rounded-[40px] p-10 md:p-12 flex flex-col justify-between gap-10"
          >
            {/* Status */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-4 h-4 rounded-full bg-green-400 animate-pulse"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-green-600">
                  Available now
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-3">
                Ready to start your project
              </h3>

              <p className="text-slate-500 text-base leading-relaxed">
                Response time within 24 hours. No commitment required for the
                first call.
              </p>
            </div>

            {/* CTA */}
            <div>
              <a
                href="mailto:hello@prozone-digital.com"
                className="flex items-center justify-center gap-3 w-full rounded-xl bg-teal-600 py-5 font-semibold text-white transition-all duration-300 hover:bg-teal-700 hover:-translate-y-1"
              >
                Book a discovery call
                <span aria-hidden="true">→</span>
              </a>

              <p className="text-center text-sm text-slate-400 mt-4">
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