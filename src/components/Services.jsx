import { motion } from "framer-motion";

// ── Data ──────────────────────────────────────────────────────────────────────
// Add or remove services here — the grid reflows automatically.
const services = [
  {
    title: "Front-end Development",
    description:
      "Precisely rendered and responsive interfaces built with modern web standards for speed, accessibility, and long-term maintainability.",
  },
  {
    title: "Project Management",
    description:
      "Timely delivery of digital projects, on budget and aligned with business goals, using agile or waterfall workflows.",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven campaigns using analytics, SEO, content strategy, and paid ads to generate leads and improve conversions.",
  },
  {
    title: "Consultancy",
    description:
      "Guidance for startups and growing businesses. Helping you leverage smart technologies and make sound, growth-based decisions.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
function Services() {
  return (
    <section id="services" className="py-36">
      <div className="section">
        <p className="uppercase tracking-[0.2em] text-sm text-teal-600 mb-6">
          Services
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold mb-14 text-slate-900">
          Services tailored to grow your business
        </h2>

        {/*
          BUG FIX: original used md:grid-cols-3 for 4 items — one card
          was always orphaned alone in the last row on mid-size screens.
          md:grid-cols-2 gives a clean 2×2 layout; lg:grid-cols-4 allows
          a single-row display on wide screens if ever needed.
        */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="glass-card rounded-[28px] p-6 md:p-8 min-h-[240px] transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="w-12 h-1 rounded-full bg-teal-500 mb-5" aria-hidden="true" />

              <h3 className="text-xl font-semibold mb-4 text-slate-900">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;