import Hero from "../components/Hero";
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
        <LetsTalk className="mt-8 md:mt-12" />
        <Newsletter className="mt-8 md:mt-12" />
      </PageShell>
    </>
  );
}
