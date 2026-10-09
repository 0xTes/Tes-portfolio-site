import { motion, useReducedMotion } from "framer-motion";
import { BUSINESS_COVERAGE } from "../lib/site";

const principles = [
  {
    title: "Business need before technology",
    description:
      "The starting point is the problem the business is trying to solve. Tools, platforms, and implementation choices come after the need is understood.",
  },
  {
    title: "Clarity before complexity",
    description:
      "Recommendations should be understandable, appropriately scoped, and useful. More features or more technology are not automatically better solutions.",
  },
  {
    title: "Collaborative review",
    description:
      "Important decisions and review points stay visible throughout the engagement so the work can remain aligned with the approved direction and business goal.",
  },
  {
    title: "Built to remain useful",
    description:
      "The goal is to create work that can be understood, maintained, and developed further without unnecessary dependence or avoidable complexity.",
  },
];

export default function AboutPartnership() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-partner"
      aria-labelledby="about-partnership-heading"
      className="scroll-mt-24 border-y border-slate-200 bg-white/50 py-14 sm:py-16 lg:py-20"
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
            HOW WE PARTNER
          </p>
          <h2
            id="about-partnership-heading"
            className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
          >
            Clear thinking, practical execution, and fewer unnecessary layers.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
            The relationship is collaborative, but the work stays grounded in
            scope, business priorities, and decisions that can be explained
            clearly.
          </p>
        </motion.div>

        <div className="mt-10 grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:gap-16">
          <ol
            role="list"
            className="min-w-0 list-decimal divide-y divide-slate-300/80 border-y border-slate-300/80 pl-6"
          >
            {principles.map((principle) => (
              <motion.li
                key={principle.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  ease: "easeOut",
                }}
                className="min-w-0 py-6 pl-2 marker:font-semibold marker:text-teal-700 sm:py-7"
              >
                <h3 className="text-xl font-semibold leading-tight text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-3 max-w-2xl text-[1.0625rem] leading-relaxed text-slate-600">
                  {principle.description}
                </p>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              ease: "easeOut",
            }}
            className="min-w-0 border-t border-slate-300/80 pt-6 sm:pt-7"
          >
            <dl>
              <dt className="text-sm font-semibold uppercase tracking-normal text-teal-700">
                WORKING MODEL
              </dt>
              <dd className="mt-3 text-lg font-semibold leading-relaxed text-slate-900">
                {BUSINESS_COVERAGE}
              </dd>
              <dd className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-slate-600">
                Teslim Digital is structured for remote collaboration, allowing
                project work to be scoped and delivered without requiring a
                shared physical location.
              </dd>
            </dl>
            <p className="mt-8 border-t border-slate-300/80 pt-6 text-base leading-relaxed text-slate-600">
              Automation should support better work, not remove useful human
              judgment from decisions that still need it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
