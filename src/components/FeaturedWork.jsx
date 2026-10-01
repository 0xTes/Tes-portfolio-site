import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import { caseStudies } from "../content/caseStudies";

const featuredProjects = caseStudies.slice(0, 3);
const DEFAULT_NDA_BLUR_PX = 5;

export default function FeaturedWork() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="featured-work"
      aria-labelledby="featured-work-heading"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <div className="section min-w-0">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          <p className="mb-6 text-sm uppercase tracking-[0.2em] text-teal-600">
            FEATURED WORK
          </p>
          <h2
            id="featured-work-heading"
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            Digital work built around real business needs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            A selection of websites and digital systems designed to improve how
            businesses present, operate, and connect with customers.
          </p>
        </motion.div>

        <div className="mt-14 grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((caseStudy, index) => {
            const blurPx = caseStudy.private
              ? caseStudy.blurAmount ?? DEFAULT_NDA_BLUR_PX
              : 0;

            return (
              <motion.article
                key={caseStudy.name}
                aria-labelledby={`featured-project-${index}-heading`}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.6,
                  delay: shouldReduceMotion ? 0 : index * 0.12,
                  ease: "easeOut",
                }}
                className="glass-card min-w-0 overflow-hidden rounded-[28px]"
              >
                <div className="overflow-hidden border-b border-slate-200/80 bg-white">
                  <img
                    src={caseStudy.image}
                    alt={`Supporting project screen for ${caseStudy.name}`}
                    loading="lazy"
                    decoding="async"
                    draggable="false"
                    onContextMenu={(event) => event.preventDefault()}
                    className="aspect-video w-full object-cover"
                    style={blurPx ? { filter: `blur(${blurPx}px)` } : undefined}
                  />
                </div>
                <div className="min-w-0 p-6">
                  <div className="flex min-w-0 flex-wrap items-center gap-3">
                    <p className="text-sm font-medium text-teal-700">
                      {caseStudy.industry}
                    </p>
                    {caseStudy.private && (
                      <span className="max-w-full rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
                        Private client deployment
                      </span>
                    )}
                  </div>
                  <h3
                    id={`featured-project-${index}-heading`}
                    className="mt-4 text-2xl font-semibold leading-tight text-slate-900"
                  >
                    {caseStudy.name}
                  </h3>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate-600">
                    {caseStudy.strategicGoal}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <Link to="/work" className="button-primary mt-10">
          View All Work
        </Link>
      </div>
    </section>
  );
}
