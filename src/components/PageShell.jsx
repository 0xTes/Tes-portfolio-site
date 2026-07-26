import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PageShell({ children, mainClassName = "pt-4" }) {
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

      <main id="main-content" className={mainClassName}>
        {children}
      </main>

      <Footer />
    </>
  );
}
