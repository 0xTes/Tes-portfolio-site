import { motion, useReducedMotion } from "framer-motion";

import {
  websitePackages,
  websitePackagesCommercialNotes,
} from "../content/websitePackages";
import { BOOKING_URL } from "../lib/site";

const formatPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export default function WebsitePackages() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="website-packages"
      aria-labelledby="website-packages-heading"
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
            WEBSITE DEVELOPMENT PACKAGES
          </p>
          <h2
            id="website-packages-heading"
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            Choose the digital foundation your business needs.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Start with a strategic website and scale into audience growth,
            customer systems, and protected production infrastructure.
          </p>
        </motion.div>

        <div className="mt-14 grid min-w-0 grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {websitePackages.map((websitePackage, index) => (
            <motion.article
              key={websitePackage.id}
              aria-labelledby={`${websitePackage.id}-package-heading`}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.6,
                delay: shouldReduceMotion ? 0 : index * 0.12,
                ease: "easeOut",
              }}
              className="glass-card flex min-w-0 flex-col rounded-[28px] p-6"
              style={
                websitePackage.badge
                  ? { borderColor: "var(--primary)" }
                  : undefined
              }
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-teal-700">
                {websitePackage.category}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                <h3
                  id={`${websitePackage.id}-package-heading`}
                  className="text-3xl font-semibold leading-tight text-slate-900"
                >
                  {websitePackage.name}
                </h3>
                {websitePackage.badge && (
                  <span className="rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                    {websitePackage.badge}
                  </span>
                )}
              </div>
              <div className="mt-6">
                <p className="text-sm font-medium text-slate-600">
                  {websitePackage.priceLabel}
                </p>
                <p className="mt-2 flex flex-wrap items-baseline gap-2 text-slate-900">
                  <span className="text-4xl font-semibold leading-tight">
                    {formatPrice.format(websitePackage.price)}
                  </span>
                  <span className="text-sm font-medium text-slate-600">USD</span>
                </p>
              </div>
              <p className="mt-6 text-[1.0625rem] leading-relaxed text-slate-600">
                {websitePackage.description}
              </p>
              <div className="mt-6">
                {websitePackage.progressionLabel && (
                  <p className="mb-3 text-sm font-semibold text-teal-800">
                    {websitePackage.progressionLabel}
                  </p>
                )}
                <ul className="space-y-3 text-[1.0625rem] leading-relaxed text-slate-600">
                  {websitePackage.features.map((feature) => (
                    <li key={feature} className="flex min-w-0 gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto pt-8">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-primary w-full"
                >
                  {websitePackage.ctaLabel}
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6">
          <h3 className="text-lg font-semibold text-slate-900">
            Investment and scope
          </h3>
          <div className="mt-3 max-w-5xl space-y-3 text-base leading-relaxed text-slate-600">
            {websitePackagesCommercialNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
