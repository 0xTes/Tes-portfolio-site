import { motion, useReducedMotion } from "framer-motion";

function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-36"
    >
      <div className="section grid min-w-0 items-center gap-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        {/* Left: Section Heading */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: -40 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="min-w-0"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-teal-600">
            About
          </p>

          <h2
            id="about-heading"
            className="min-w-0 break-words text-4xl font-semibold leading-tight text-slate-900 md:text-5xl"
          >
            Building technology that works for your business—not the other way
            around.
          </h2>
        </motion.div>

        {/* Right: About Card */}
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, x: 40 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="glass-card min-w-0 rounded-[32px] p-10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <p className="min-w-0 break-words text-lg leading-relaxed text-slate-600">
            Technology should simplify operations, support growth,
            and create measurable value—not introduce unnecessary complexity.
            Every project begins with understanding your business, your goals,
            and the challenges standing in the way of sustainable growth.
          </p>

          <p className="mt-6 min-w-0 break-words text-lg leading-relaxed text-slate-600">
            From strategy and planning to websites, intelligent systems, and
            automation, I build digital solutions that are reliable,
            maintainable, and designed to evolve alongside your business. My
            focus isn't just delivering a project—it's creating technology that
            continues to generate value long after launch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
