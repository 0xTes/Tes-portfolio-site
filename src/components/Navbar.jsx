import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import brandMark from "../assets/branding/td-mark.webp";

const navLinks = [
  { label: "About", to: "/#about" },
  { label: "Services", to: "/#services" },
  { label: "Work", to: "/work" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

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

  useEffect(() => {
  if (!open) return;

  function handlePointerDown(event) {
    const menu = mobileMenuRef.current;
    const button = menuButtonRef.current;

    if (!menu || !button) return;

    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = button.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
      closeMenu();
    }
  }

  document.addEventListener("pointerdown", handlePointerDown);

  return () => {
    document.removeEventListener("pointerdown", handlePointerDown);
  };
}, [open]);

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
              <img src={brandMark} alt="" className="h-10 w-10 object-contain" />
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
                className="rounded-lg px-2 py-2 text-gray-700 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}

            <a
              href="/#contact"
              className="button-primary min-w-[130px]"
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
            ref={mobileMenuRef}
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
                  onClick={() => closeMenu()}
                  className="rounded-lg px-3 py-2 text-gray-700 transition-colors duration-200 hover:text-teal-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/#contact"
                onClick={() => closeMenu()}
                className="button-primary w-full"
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
