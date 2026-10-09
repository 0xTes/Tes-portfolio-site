import { motion, useReducedMotion } from "framer-motion";

const audiences = [
  {
    title: "Service businesses",
    description:
      "For businesses that need a clearer digital presence, stronger customer acquisition, or better systems supporting how enquiries and work are managed.",
  },
  {
    title: "Ecommerce & digital-product businesses",
    description:
      "For businesses improving the experience between discovery, purchasing, digital products, customer accounts, and the operational workflows supporting them.",
  },
  {
    title: "Growing teams with operational bottlenecks",
    description:
      "For teams spending too much time on repetitive processes, disconnected tools, unclear workflows, or manual work that could be handled more effectively.",
  },
];

export default function AboutAudience() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="who-we-help"
      aria-labelledby="about-audience-heading"
      className="scroll-mt-24 py-12 sm:py-14 lg:py-16"
    >
      <div className="section grid min-w-0 gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.35fr)] lg:gap-16">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="min-w-0 max-w-xl"
        >
          <p className="mb-5 text-sm uppercase tracking-normal text-teal-700">
            WHO WE HELP
          </p>
          <h2
            id="about-audience-heading"
            className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
          >
            Built for small and medium businesses and creator-led brands that
            need digital work to solve something real.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
            Teslim Digital works best with businesses that are improving how
            they present themselves, attract customers, sell online, or manage
            the systems behind their day-to-day operations.
          </p>
        </motion.div>

        <ul
          role="list"
          className="min-w-0 divide-y divide-slate-300/80 border-y border-slate-300/80"
        >
          {audiences.map((audience) => (
            <motion.li
              key={audience.title}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: "easeOut",
              }}
              className="min-w-0 py-6 sm:py-7"
            >
              <h3 className="text-2xl font-semibold leading-tight text-slate-900">
                {audience.title}
              </h3>
              <p className="mt-4 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-600">
                {audience.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
