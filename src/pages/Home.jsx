import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Work from "../components/Work";
import LetsTalk from "../components/LetsTalk";

export default function Home() {
  return (
    <>
  <Navbar />
  <main className="pt-4">
    <Hero />
    <About />
    <Services />
    <Work />
    <LetsTalk />
  </main>
</>
  );
}