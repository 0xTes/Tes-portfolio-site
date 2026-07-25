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
      className="group relative min-w-0 min-h-[420px] overflow-hidden rounded-[30px] shadow-xl focus-within:ring-2 focus-within:ring-teal-500"
    >
      <img
        src={caseStudy.image}
        alt={`Screenshot of ${caseStudy.name}`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        style={blurPx ? { filter: `blur(${blurPx}px)` } : undefined}
      />
      <div className="absolute inset-0 bg-black/50 transition duration-500 group-hover:bg-black/60" />
      <div className="relative z-10 flex h-full min-w-0 flex-col justify-end p-10 text-white">
        {caseStudy.private && (
          <span className="mb-4 w-fit max-w-full break-words rounded-full bg-white/20 px-4 py-2 text-xs font-semibold backdrop-blur-md">
            Private Client Deployment
          </span>
        )}
        <p className="mb-3 text-sm font-medium text-teal-100">{caseStudy.industry}</p>
        <h2 className="mb-3 min-w-0 break-words text-xl font-semibold transition-colors duration-300 group-hover:text-teal-200 md:text-2xl">
          {caseStudy.name}
        </h2>
        <p className="min-w-0 break-words leading-relaxed text-white/85">
          {caseStudy.description}
        </p>
        {caseStudy.metrics.length > 0 && (
          <dl className="mt-6 grid grid-cols-2 gap-3">
            {caseStudy.metrics.map((metric) => (
              <div key={metric.label} className="rounded-xl bg-white/15 p-3 backdrop-blur-sm">
                <dt className="text-xs text-white/75">{metric.label}</dt>
                <dd className="mt-1 text-lg font-semibold">{metric.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </motion.article>
  );
}
