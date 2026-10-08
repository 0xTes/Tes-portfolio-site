import { motion, useReducedMotion } from "framer-motion";

const capabilities = [
  {
    id: "build",
    label: "BUILD",
    title: "Strategic websites & digital platforms",
    description:
      "Create credible, responsive digital experiences designed around business goals, customer journeys, and long-term usability.",
    services: [
      "Strategic websites",
      "Website redesign",
      "Responsive frontend",
      "Digital platforms",
      "Ecommerce experiences",
    ],
    commercialCue: "Website engagements from $600",
  },
  {
    id: "grow",
    label: "GROW",
    title: "Digital marketing & customer acquisition",
    description:
      "Strengthen how businesses are discovered, attract the right audiences, and turn digital attention into qualified opportunities.",
    services: [
      "Social media marketing",
      "SEO",
      "Lead generation",
      "Google Ads management",
      "Digital marketing",
    ],
    commercialCue: "Ongoing growth services from $200/mo",
  },
  {
    id: "automate",
    label: "AUTOMATE",
    title: "AI automation & intelligent systems",
    description:
      "Reduce repetitive work and improve operations through practical automation, smarter workflows, and digital systems built around real business processes.",
    services: [
      "AI & automation",
      "Intelligent systems",
      "Workflow automation",
      "Operational tools",
      "Technology strategy",
    ],
    commercialCue: "Automation engagements from $400+",
  },
];

export default function Capabilities() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="scroll-mt-24 bg-white/30 py-24 md:py-32"
    >
      <div className="section min-w-0">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="max-w-5xl"
        >
          <p className="mb-6 text-sm uppercase tracking-normal text-teal-700">
            WHAT WE HELP YOU DO
          </p>
          <h2
            id="capabilities-heading"
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            Build stronger digital foundations. Grow with intention. Automate
            what slows you down.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Teslim Digital combines strategic websites, digital growth, and
            practical automation to help businesses improve how they attract
            customers, operate, and scale.
          </p>
        </motion.div>

        <div className="mt-14 grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.id}
              aria-labelledby={`${capability.id}-capability-heading`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              className="flex min-w-0 flex-col border-t border-slate-300/80 pt-8"
            >
              <p className="flex items-center gap-4 text-sm font-semibold uppercase tracking-normal">
                <span aria-hidden="true" className="text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-teal-700">{capability.label}</span>
              </p>
              <h3
                id={`${capability.id}-capability-heading`}
                className="mt-5 text-2xl font-semibold leading-tight text-slate-900"
              >
                {capability.title}
              </h3>
              <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600">
                {capability.description}
              </p>
              <ul className="mt-6 mb-8 space-y-3 text-[1.0625rem] leading-relaxed text-slate-600">
                {capability.services.map((service) => (
                  <li key={service} className="flex min-w-0 items-baseline gap-3">
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 self-center rounded-full bg-teal-600"
                    />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-auto border-t border-slate-200 pt-5 text-sm font-semibold leading-relaxed text-slate-600">
                {capability.commercialCue}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
