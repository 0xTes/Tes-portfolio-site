import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import logo from "../assets/branding/logo.svg";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/work", newTab: true },
  { label: "Blog", to: "/blog", newTab: true },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);

  function closeMenu(returnFocus = false) {
    setOpen(false);
    if (returnFocus) menuButtonRef.current?.focus();
  }

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") closeMenu(true);
    }

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event) => {
      if (event.matches) setOpen(false);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <>
      <nav
        aria-label="Primary navigation"
        className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/80 shadow-md backdrop-blur-2xl transition-all duration-300"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              aria-label="Teslim Digital logo — return to homepage"
              className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              <img src={logo} alt="Teslim Digital" className="h-10 w-auto" />
            </Link>
            <Link
              to="/"
              aria-label="Teslim — return to homepage"
              className="rounded-md text-xl font-semibold text-gray-900 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
            >
              Teslim
            </Link>
          </div>

          <div className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                target={link.newTab ? "_blank" : undefined}
                rel={link.newTab ? "noopener noreferrer" : undefined}
                className="rounded-lg px-2 py-2 text-gray-700 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/#contact"
              className="inline-flex min-w-[130px] items-center justify-center rounded-full bg-teal-500 px-6 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Book Call
            </a>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white p-2 shadow-sm transition-colors hover:border-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 md:hidden"
            onClick={() => setOpen((previous) => !previous)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-5 rounded-full bg-slate-900 transition-transform duration-200 ${
                open ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-5 rounded-full bg-slate-900 transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute h-0.5 w-5 rounded-full bg-slate-900 transition-transform duration-200 ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -24 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-1/2 top-24 z-40 w-[92%] -translate-x-1/2 rounded-3xl border border-white/40 bg-white/95 p-8 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                  onClick={() => closeMenu()}
                  className="rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/#contact"
                onClick={() => closeMenu()}
                className="inline-flex min-w-[130px] items-center justify-center rounded-full bg-teal-500 px-8 py-3.5 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
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
