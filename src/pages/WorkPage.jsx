import CaseStudyCard from "../components/CaseStudyCard";
import Newsletter from "../components/Newsletter";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";
import { caseStudies } from "../content/caseStudies";
import { BOOKING_URL } from "../lib/site";

export default function WorkPage() {
  return (
    <>
      <Seo
        title="Selected Work | Teslim Digital"
        description="Selected Teslim Digital projects: websites and systems designed to improve customer experience and business operations."
        path="/work"
      />
      <PageShell>
        <section aria-labelledby="work-heading" className="section py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-600">
              Selected Work
            </p>
            <h1
              id="work-heading"
              className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl"
            >
              Projects that solved real business problems
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Every project starts with a real business challenge. The focus is
              on practical digital solutions that improve operations,
              strengthen brands, and create long-term value.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-teal-600 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Book a discovery call
            </a>
          </div>

          <div className="mt-14 grid min-w-0 gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.name}
                caseStudy={caseStudy}
                index={index}
              />
            ))}
          </div>
        </section>
        <Newsletter />
      </PageShell>
    </>
  );
}
