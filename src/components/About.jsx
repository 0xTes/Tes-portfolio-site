import { motion, useReducedMotion } from "framer-motion";
import horizontalLogo from "../assets/branding/teslim-digital-horizontal.webp";

function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16"
    >
      <div className="section min-w-0">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="min-w-0 max-w-5xl"
        >
          <p className="mb-6 text-sm uppercase tracking-normal text-teal-700">
            ABOUT TESLIM DIGITAL
          </p>

          <h1
            id="about-heading"
            className="max-w-4xl text-[2rem] font-semibold leading-tight text-slate-900 sm:text-4xl md:text-5xl"
          >
            Digital solutions should solve business problems&mdash;not create
            new ones.
          </h1>

          <p className="mt-6 max-w-3xl text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
            Teslim Digital is a digital solutions hub helping businesses
            strengthen their digital presence, improve how they attract
            customers, and simplify the systems behind their operations.
          </p>
          <p className="mt-5 max-w-3xl text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
            The work spans strategic websites, digital growth, and practical
            automation, but the starting point is always the same: understand
            the business need before choosing the technology.
          </p>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: "easeOut",
          }}
          className="mt-10 grid min-w-0 gap-8 border-t border-slate-300/80 pt-8 md:mt-12 md:pt-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.7fr)] lg:gap-16"
        >
          <div className="min-w-0 max-w-[200px] sm:max-w-[220px] lg:max-w-[240px]">
            <img
              src={horizontalLogo}
              alt="Teslim Digital"
              width={1200}
              height={391}
              className="h-auto w-full object-contain brightness-0"
            />
          </div>
          <div className="min-w-0 max-w-3xl">
            <p className="text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
              The goal is not to add technology for its own sake. It is to
              identify where a better website, stronger acquisition strategy,
              clearer digital experience, or smarter workflow can remove friction
              and create a more useful foundation for growth.
            </p>
            <p className="mt-5 text-[1.0625rem] leading-relaxed text-slate-600 md:text-lg">
              Projects are approached with an emphasis on clarity,
              maintainability, and solutions that make sense for the business
              using them&mdash;not unnecessary complexity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
