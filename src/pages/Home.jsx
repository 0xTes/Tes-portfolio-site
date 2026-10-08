import Hero from "../components/Hero";
import FeaturedWork from "../components/FeaturedWork";
import Capabilities from "../components/Capabilities";
import WebsitePackages from "../components/WebsitePackages";
import GrowthAutomationServices from "../components/GrowthAutomationServices";
import HowWeWork from "../components/HowWeWork";
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
        <FeaturedWork />
        <Capabilities />
        <WebsitePackages />
        <GrowthAutomationServices />
        <HowWeWork />
        <LetsTalk className="mt-8 md:mt-12" />
        <Newsletter className="mt-8 md:mt-12" />
      </PageShell>
    </>
  );
}
