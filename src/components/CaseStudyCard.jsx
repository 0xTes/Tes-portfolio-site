import { motion, useReducedMotion } from "framer-motion";

const DEFAULT_NDA_BLUR_PX = 5;

export default function CaseStudyCard({ caseStudy, index }) {
  const shouldReduceMotion = useReducedMotion();
  const blurPx = caseStudy.private
    ? caseStudy.blurAmount ?? DEFAULT_NDA_BLUR_PX
    : 0;

  return (
    <motion.article
      initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 35 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
      className="glass-card min-w-0 overflow-hidden rounded-[30px] p-6 sm:p-8"
    >
      <div className="min-w-0">
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <p className="text-sm font-medium text-teal-700">{caseStudy.industry}</p>
          {caseStudy.private && (
            <span className="max-w-full rounded-full bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white">
              Private client deployment
            </span>
          )}
        </div>
        <h2 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-slate-900 md:text-3xl">
          {caseStudy.name}
        </h2>
        <p className="mt-4 max-w-xl text-[1.0625rem] leading-relaxed text-slate-600">
          {caseStudy.strategicGoal}
        </p>
      </div>

      <dl className="mt-8 grid min-w-0 gap-4 sm:grid-cols-3">
        <div className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/50 p-4">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Client
          </dt>
          <dd className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
            {caseStudy.client}
          </dd>
        </div>
        <div className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/50 p-4">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Industry
          </dt>
          <dd className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
            {caseStudy.industry}
          </dd>
        </div>
        <div className="min-w-0 rounded-2xl border border-slate-200/80 bg-white/50 p-4">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            Service
          </dt>
          <dd className="mt-2 text-sm font-medium leading-relaxed text-slate-800">
            {caseStudy.serviceCategory}
          </dd>
        </div>
      </dl>

      <div className="mt-8 grid min-w-0 gap-6 md:grid-cols-2">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Before
          </p>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-600">
            {caseStudy.before}
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Solution
          </p>
          <p className="mt-3 text-[1.0625rem] leading-relaxed text-slate-600">
            {caseStudy.solution}
          </p>
        </div>
        <div className="min-w-0 rounded-[24px] border border-teal-100 bg-teal-50/70 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">
            Outcome
          </p>
          <p className="mt-3 text-lg font-medium leading-relaxed text-slate-800">
            {caseStudy.results}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            {caseStudy.communicationGoal}
          </p>
          {caseStudy.metrics.length > 0 ? (
            <dl className="mt-6 grid grid-cols-2 gap-3">
              {caseStudy.metrics.map((metric) => (
                <div key={metric.label} className="rounded-xl bg-white/70 p-3">
                  <dt className="text-xs text-slate-500">{metric.label}</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-900">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : (
            <p className="mt-6 text-sm leading-relaxed text-slate-500">
              {caseStudy.metricsNote}
            </p>
          )}
        </div>
      </div>

      <figure className="mt-8 overflow-hidden rounded-[22px] border border-slate-200/80 bg-white">
        <img
          src={caseStudy.image}
          alt={`Supporting project screen for ${caseStudy.name}`}
          loading="lazy"
          decoding="async"
          draggable="false"
          onContextMenu={(event) => event.preventDefault()}
          className="h-60 w-full object-cover transition duration-700 hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:scale-100 sm:h-72"
          style={blurPx ? { filter: `blur(${blurPx}px)` } : undefined}
        />
        <figcaption className="px-5 py-4 text-sm leading-relaxed text-slate-500">
          Supporting visual for the delivery described above.
        </figcaption>
      </figure>
    </motion.article>
  );
}
