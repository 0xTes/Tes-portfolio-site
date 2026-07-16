import { motion, useReducedMotion } from "framer-motion";

// ── Services Data ─────────────────────────────────────────────────────────────
const services = [
  {
    title: "Strategic Websites",
    description:
      "Modern, responsive websites built to establish credibility, communicate your value, and convert visitors into customers. Every website is designed around your business goals—not just aesthetics.",
  },
  {
    title: "Intelligent Systems",
    description:
      "Custom digital systems that simplify operations, improve efficiency, and support better decision-making. From internal tools to business workflows, every solution is built for long-term scalability.",
  },
  {
    title: "AI & Automation",
    description:
      "Automate repetitive tasks, streamline processes, and leverage AI to help your business operate smarter. The focus is on saving time, reducing manual work, and increasing productivity.",
  },
  {
    title: "Technology Strategy",
    description:
      "Technology guidance that helps businesses make informed decisions, prioritize the right solutions, and build a roadmap for sustainable digital growth with confidence.",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-36"
    >
      <div className="section">

        {/* Section Heading */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: 30 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-teal-600">
            Services
          </p>

          <h2
            id="services-heading"
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            Technology services built to help your business grow smarter.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Every business has unique challenges and opportunities. That's why
            I focus on practical technology solutions tailored to your goals.
            Whether you're building your online presence, improving operations,
            or preparing for future growth, every service is designed to create
            measurable business value.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 30 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="glass-card min-h-[250px] rounded-[28px] p-10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div
                className="mb-6 h-1 w-12 rounded-full bg-teal-500"
                aria-hidden="true"
              />

              <h3 className="mb-4 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>

              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
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