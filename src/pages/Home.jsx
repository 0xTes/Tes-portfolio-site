import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import LetsTalk from "../components/LetsTalk";
import Newsletter from "../components/Newsletter";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo />
      <PageShell>
        <Hero />
        <About />
        <Services />
        <LetsTalk className="mt-8 md:mt-12" />
        <Newsletter className="mt-8 md:mt-12" />
      </PageShell>
    </>
  );
}
