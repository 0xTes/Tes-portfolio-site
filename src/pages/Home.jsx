import { Helmet } from "react-helmet-async";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import LetsTalk from "../components/LetsTalk";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
            Teslim Digital | AI Automation, Digital Transformation & Strategic Websites
        </title>

        <meta
            name="description"
            content="Teslim Digital helps businesses grow through AI automation, intelligent systems, strategic websites, and digital transformation. We build scalable digital solutions that improve efficiency, visibility, and sustainable business growth."
        />

        <link rel="canonical" href="https://teslim.digital/" />

        <meta
          property="og:title"
          content="Teslim Digital | AI Automation, Digital Transformation & Strategic Websites"
        />

        <meta
          property="og:description"
          content="Teslim Digital helps businesses grow through AI automation, intelligent systems, strategic websites, and digital transformation. We build scalable digital solutions that improve efficiency, visibility, and sustainable business growth."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://teslim.digital/" />

        <meta
          property="og:image"
          content="https://teslim.digital/og-image.png"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Teslim Digital | AI Automation, Digital Transformation & Strategic Websites"
        />

        <meta
          name="twitter:description"
          content="Teslim Digital helps businesses grow through AI automation, intelligent systems, strategic websites, and digital transformation. We build scalable digital solutions that improve efficiency, visibility, and sustainable business growth."
        />

        <meta
          name="twitter:image"
          content="https://teslim.digital/og-image.png"
  />
      </Helmet>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:z-[9999] focus:rounded-lg focus:bg-teal-600 focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to main content
      </a>

      <header>
        <Navbar />
      </header>

      <main id="main-content" className="pt-4">
        <Hero />
        <About />
        <Services />
        <Work />
        <LetsTalk />
      </main>

      <Footer />
    </>
  );
}