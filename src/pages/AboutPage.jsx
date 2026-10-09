import About from "../components/About";
import AboutAudience from "../components/AboutAudience";
import Services from "../components/Services";
import AboutPartnership from "../components/AboutPartnership";
import AboutCTA from "../components/AboutCTA";
import Newsletter from "../components/Newsletter";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Teslim Digital | Websites, Growth & Automation"
        description="Meet Teslim Digital and discover the business-first approach behind strategic websites, digital growth, and practical automation for growing businesses."
        path="/about"
      />
      <PageShell>
        <About />
        <AboutAudience />
        <Services />
        <AboutPartnership />
        <AboutCTA />
        <Newsletter className="pb-12! md:pb-16!" />
      </PageShell>
    </>
  );
}
