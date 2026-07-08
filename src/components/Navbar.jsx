import { useState } from "react";
import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900"
            aria-label="Homepage"
          >
            Teslim Yussuph
          </Link>
          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-700 hover:text-teal-600 transition"
                >
                  {link.label}
                </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 transition"
              >
                {link.label}
              </a>
            )
          )}
            <a
              href="#contact"
              className="rounded-full bg-teal-500 px-8 py-4 text-white font-semibold shadow-xl transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              Book Call
            </a>
          </div>

          {/* Mobile */}
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden flex flex-col gap-1"
            onClick={() => setOpen(!open)}
          >
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
            <span className="h-0.5 w-6 bg-black"></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            className="fixed top-24 left-1/2 z-40 w-[92%] -translate-x-1/2 rounded-3xl border border-white/40 bg-white/80 p-6 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-gray-700 hover:text-teal-600 transition"
                >
                  {link.label}
                </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-teal-600 transition"
              >
                {link.label}
              </a>
            )
          )}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-teal-500 px-6 py-4 text-white font-semibold shadow-xl text-center"
              >
                Book Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}