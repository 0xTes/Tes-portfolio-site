import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "../lib/site";

export default function AboutCTA() {
  const shouldReduceMotion = useReducedMotion();

  function handleWorkNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }

  return (
    <section
      id="about-cta"
      aria-labelledby="about-cta-heading"
      className="scroll-mt-24 pt-14 pb-4 sm:pt-16 sm:pb-6 lg:pt-20 lg:pb-8"
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
            READY TO MOVE FORWARD?
          </p>
          <h2
            id="about-cta-heading"
            className="text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
          >
            Start with the business problem. We can define the right next step
            from there.
          </h2>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
            Whether the need is a stronger website, better customer acquisition,
            or a more effective workflow, the first conversation is about
            understanding what needs to improve and what kind of engagement
            makes sense.
          </p>
          <div className="mt-8 flex min-w-0 flex-col items-start gap-5 text-slate-700 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary w-full sm:w-auto"
            >
              Start a Conversation
            </a>
            <Link
              to="/work"
              onClick={handleWorkNavigation}
              className="inline-flex min-h-[52px] w-full max-w-full items-center justify-center rounded-full border border-teal-700/80 bg-transparent px-7 py-3.5 text-center font-semibold leading-tight text-teal-700! transition-colors duration-200 hover:border-teal-700 hover:bg-teal-700/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700 motion-reduce:transition-none sm:w-auto"
            >
              View Selected Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
