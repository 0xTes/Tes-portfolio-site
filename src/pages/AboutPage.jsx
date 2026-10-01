import About from "../components/About";
import Services from "../components/Services";
import PageShell from "../components/PageShell";
import Seo from "../components/Seo";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About & Services | Teslim Digital"
        description="Learn about Teslim Digital and explore strategic websites, intelligent systems, AI and automation, and technology strategy."
        path="/about"
      />
      <PageShell>
        <About />
        <Services />
      </PageShell>
    </>
  );
}
