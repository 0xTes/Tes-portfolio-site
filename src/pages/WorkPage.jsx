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
        <section aria-labelledby="work-heading" className="section py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-teal-600">
              Selected Work
            </p>
            <h1
              id="work-heading"
              className="mt-6 text-4xl font-semibold leading-tight text-slate-900 md:text-6xl"
            >
              Projects designed around the bottleneck, not just the visual.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              Each case study shows the business challenge, the practical
              solution, and the outcome it was designed to create before the
              supporting visuals.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary mt-8"
            >
              Book a discovery call
            </a>
          </div>

          <div className="mt-14 grid min-w-0 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
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
