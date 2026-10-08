import { motion, useReducedMotion } from "framer-motion";

import {
  growthAutomationServiceLevels,
  growthAutomationServices,
  growthAutomationCommercialNotes,
} from "../content/growthAutomationServices";
import { BOOKING_URL } from "../lib/site";

export default function GrowthAutomationServices() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="growth-services"
      aria-labelledby="growth-services-heading"
      className="scroll-mt-24 py-24 md:py-32"
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
            GROWTH &amp; AUTOMATION
          </p>
          <h2
            id="growth-services-heading"
            className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            Flexible services for ongoing growth and smarter operations.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Start at the level your business needs today, then scale the
            engagement as your marketing, acquisition, and automation
            requirements grow.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="mt-14 min-w-0"
        >
          <div className="glass-card hidden overflow-hidden rounded-[28px] lg:block">
            <table
              aria-describedby="growth-services-terms growth-services-ads-note"
              className="w-full table-fixed border-collapse text-left"
            >
              <caption className="sr-only">
                Starting Growth &amp; Automation service rates in USD by service
                level.
              </caption>
              <colgroup>
                <col className="w-2/5" />
                {growthAutomationServiceLevels.map((level) => (
                  <col key={level.id} className="w-1/5" />
                ))}
              </colgroup>
              <thead className="border-b border-teal-100 bg-teal-50/70 text-base text-teal-700">
                <tr>
                  <th scope="col" className="px-8 py-6 font-semibold">
                    Service
                  </th>
                  {growthAutomationServiceLevels.map((level) => (
                    <th
                      key={level.id}
                      scope="col"
                      className="px-6 py-6 text-center font-semibold"
                    >
                      {level.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {growthAutomationServices.map((service) => (
                  <tr key={service.id}>
                    <th scope="row" className="px-8 py-7 font-normal">
                      <span className="block text-xl font-semibold leading-tight text-slate-900">
                        {service.name}
                      </span>
                      <span className="mt-2 block text-base leading-relaxed text-slate-600">
                        {service.description}
                      </span>
                    </th>
                    {growthAutomationServiceLevels.map((level) => (
                      <td
                        key={level.id}
                        className="px-6 py-7 text-center align-middle text-xl font-semibold whitespace-nowrap text-slate-900 tabular-nums"
                      >
                        {service.pricing[level.id]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-6 lg:hidden">
            {growthAutomationServices.map((service) => (
              <article
                key={service.id}
                aria-labelledby={`${service.id}-growth-heading`}
                className="glass-card min-w-0 rounded-[28px] p-6 sm:p-8"
              >
                <h3
                  id={`${service.id}-growth-heading`}
                  className="text-xl font-semibold leading-tight text-slate-900"
                >
                  {service.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>
                <dl className="mt-6 divide-y divide-slate-200">
                  {growthAutomationServiceLevels.map((level) => (
                    <div
                      key={level.id}
                      className="flex min-w-0 items-baseline justify-between gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <dt className="text-base text-slate-600">{level.label}</dt>
                      <dd className="text-xl font-semibold whitespace-nowrap text-slate-900 tabular-nums">
                        {service.pricing[level.id]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 space-y-3 border-t border-slate-200 pt-6 text-base leading-relaxed text-slate-600">
          {growthAutomationCommercialNotes.map((note, index) => (
            <p
              key={note}
              id={index === 0 ? "growth-services-terms" : "growth-services-ads-note"}
              className="max-w-5xl"
            >
              {note}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary bg-teal-700! hover:bg-teal-800!"
          >
            Discuss a Growth Plan
          </a>
          <p className="text-base leading-relaxed text-slate-600">
            Custom combinations can be scoped around your business priorities.
          </p>
        </div>
      </div>
    </section>
  );
}
