import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);

  const closeMenu = () => {
  setOpen(false);
  menuButtonRef.current?.focus();
};

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  const handleChange = (event) => {
    if (event.matches) {
      setOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  mediaQuery.addEventListener("change", handleChange);

  return () => {
    mediaQuery.removeEventListener("change", handleChange);
  };
}, []);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/80 backdrop-blur-2xl shadow-md transition-all duration-300"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          {/* Logo */}
          <a
            href="/"
            className="rounded-md text-xl font-semibold text-gray-900 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            aria-label="Homepage"
          >
            Teslim
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full bg-teal-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Book Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex flex-col gap-1 rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="h-0.5 w-6 bg-slate-900"></span>
            <span className="h-0.5 w-6 bg-slate-900"></span>
            <span className="h-0.5 w-6 bg-slate-900"></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -24 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -24 }
            }
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
            className="fixed top-24 left-1/2 z-40 w-[92%] -translate-x-1/2 rounded-3xl border border-white/40 bg-white/85 p-8 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="rounded-full bg-teal-500 px-7 py-3 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Book Call
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}