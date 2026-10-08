import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    id: "build",
    label: "BUILD",
    title: "Strategic websites & digital platforms",
    description:
      "Build or improve the digital foundation customers interact with\u2014from clear, responsive websites to ecommerce and digital experiences designed around real business goals.",
    capabilities: [
      "Strategic Websites",
      "Website Redesign",
      "Responsive Frontend",
      "Digital Platforms",
      "Ecommerce",
    ],
  },
  {
    id: "grow",
    label: "GROW",
    title: "Digital marketing & customer acquisition",
    description:
      "Strengthen how the business is discovered, reaches the right audience, and creates more structured opportunities for customer acquisition.",
    capabilities: [
      "Social Media Marketing",
      "SEO",
      "Lead Generation",
      "Digital Marketing",
      "Google Ads Management",
    ],
  },
  {
    id: "automate",
    label: "AUTOMATE",
    title: "AI automation & intelligent systems",
    description:
      "Improve repetitive or fragmented business processes with practical automation, connected workflows, and systems designed around how the business actually operates.",
    capabilities: [
      "AI & Automation",
      "Intelligent Systems",
      "Workflow Automation",
      "Operational Tools",
      "Technology Strategy",
    ],
  },
];

function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="pt-10 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24"
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
          className="min-w-0 max-w-3xl"
        >
          <p className="mb-5 text-sm uppercase tracking-normal text-teal-700">
            SERVICES
          </p>

          <h2
            id="services-heading"
            className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
          >
            Three ways Teslim Digital helps businesses move forward.
          </h2>

          <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
            The work is organized around three connected needs: building stronger
            digital foundations, growing customer acquisition, and improving
            operations through practical automation.
          </p>
        </motion.div>

        <div className="mt-10 min-w-0 md:mt-12">
          {services.map((service) => (
            <motion.article
              key={service.id}
              aria-labelledby={`${service.id}-service-heading`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: "easeOut",
              }}
              className="grid min-w-0 gap-6 border-t border-slate-300/80 py-8 md:py-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold uppercase tracking-normal text-teal-700">
                  {service.label}
                </p>
                <h3
                  id={`${service.id}-service-heading`}
                  className="mt-3 text-2xl font-semibold leading-tight text-slate-900 md:text-3xl"
                >
                  {service.title}
                </h3>
                <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </div>
              <div className="min-w-0 lg:pt-9">
                <p className="text-sm font-semibold text-slate-600">
                  Available capabilities
                </p>
                <ul
                  role="list"
                  aria-label={`${service.label} capabilities`}
                  className="mt-4 flex min-w-0 flex-wrap gap-x-6 gap-y-2 text-base leading-relaxed text-slate-600 lg:grid"
                >
                  {service.capabilities.map((capability) => (
                    <li
                      key={capability}
                      className="flex min-w-0 max-w-full items-baseline gap-2"
                    >
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 shrink-0 self-center rounded-full bg-teal-700"
                      />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
