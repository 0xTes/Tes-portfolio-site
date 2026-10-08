import { motion, useReducedMotion } from "framer-motion";
import { BOOKING_URL } from "../lib/site";

const processSteps = [
  {
    id: "discover",
    label: "DISCOVER",
    title: "Understand the problem first.",
    description:
      "We start by understanding your goals, current bottlenecks, audience, existing tools, and what success should realistically look like for the engagement.",
  },
  {
    id: "define",
    label: "DEFINE",
    title: "Turn the need into a clear scope.",
    description:
      "We define priorities, recommended services, deliverables, responsibilities, timeline, and investment so both sides understand what is being built or managed before work begins.",
  },
  {
    id: "build-implement",
    label: "BUILD & IMPLEMENT",
    title: "Execute with clarity and feedback.",
    description:
      "The agreed solution is designed, developed, configured, or managed in focused stages, with review points that keep the work aligned with the approved scope and business goal.",
  },
  {
    id: "launch-improve",
    label: "LAUNCH & IMPROVE",
    title: "Put the work into use and keep moving forward.",
    description:
      "Once the agreed work is ready, we launch, hand off, or begin delivery as appropriate, then address agreed post-launch needs and identify sensible next steps where continued support can add value.",
  },
];

export default function HowWeWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-we-work"
      aria-labelledby="how-we-work-heading"
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
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-normal text-teal-700">
            HOW WE WORK
          </p>
          <h2
            id="how-we-work-heading"
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            A clear process from problem to progress.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Every engagement starts with understanding the business need,
            defining the right scope, and building around practical
            outcomes&mdash;not unnecessary complexity.
          </p>
        </motion.div>

        <ol
          role="list"
          className="mt-14 grid min-w-0 grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-14 xl:grid-cols-4 xl:gap-8 xl:border-t xl:border-teal-700/25"
        >
          {processSteps.map((step, index) => (
            <motion.li
              key={step.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.1,
                ease: "easeOut",
              }}
              className="min-w-0 border-l border-teal-700/25 pl-6 md:pl-7 xl:border-l-0 xl:pt-8 xl:pl-0"
            >
              <p
                aria-hidden="true"
                className="text-4xl font-semibold leading-none text-teal-700 tabular-nums"
              >
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-normal text-teal-800">
                {step.label}
              </p>
              <h3
                id={`${step.id}-process-heading`}
                className="mt-4 text-xl font-semibold leading-tight text-slate-900"
              >
                {step.title}
              </h3>
              <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-5 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:gap-8">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary shrink-0"
          >
            Start a Conversation
          </a>
          <p className="min-w-0 max-w-xl text-base leading-relaxed text-slate-600">
            Not sure which service fits? Start with the business problem and we
            can define the right next step.
          </p>
        </div>
      </div>
    </section>
  );
}
