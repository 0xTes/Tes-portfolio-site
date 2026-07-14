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