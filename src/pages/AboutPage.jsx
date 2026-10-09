import About from "../components/About";
import Services from "../components/Services";
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
        <Services />
        <Newsletter />
      </PageShell>
    </>
  );
}
